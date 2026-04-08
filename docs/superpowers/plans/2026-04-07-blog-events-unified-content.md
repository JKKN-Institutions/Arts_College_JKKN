# Unified Blog + Events Content System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge events into the blog system so admins create all content (blogs + events) from one module, with a multi-select "page visibility" field that controls whether a post appears on `/blog`, `/events`, or both.

**Architecture:** Add `page_visibility TEXT[]` column to `blogs` table and event-specific fields (`event_date`, `event_time`, `venue`, `gallery_album_id`). The blog admin form gets a multi-checkbox for page visibility and conditional event fields. Public `/events` page queries blogs where `page_visibility @> '{events}'`. Public `/blog` page queries blogs where `page_visibility @> '{blog}'`. Remove the `/admin/events` module from sidebar nav.

**Tech Stack:** Next.js 16 (App Router), Supabase (PostgreSQL), TypeScript, Tailwind CSS

---

## File Structure

### New Files
- None — all changes are modifications to existing files

### Modified Files

| File | Change |
|------|--------|
| `src/app/admin/blogs/blog-form-types.ts` | Add event fields to BlogFormProps, add PAGE_VISIBILITY constant |
| `src/app/admin/blogs/BlogForm.tsx` | Add page visibility checkboxes + conditional event fields (date, time, venue, gallery album) |
| `src/app/admin/blogs/BlogsTableClient.tsx` | Add page visibility badges to table rows |
| `src/app/admin/blogs/page.tsx` | Fetch gallery albums for form, update query to include new columns |
| `src/app/admin/AdminSidebar.tsx` | Remove Events link from sidebar content section |
| `src/app/events/page.tsx` | Query `blogs` table instead of `events` table |
| `src/app/events/[slug]/page.tsx` | Query `blogs` table, use blog sections for content |
| `src/app/events/[slug]/EventGallery.tsx` | No change (receives images as props) |
| `src/app/blog/page.tsx` | Add `page_visibility` filter to query |

---

## Task 1: Database Migration — Add columns to blogs table

**Files:**
- No code files — SQL migration in Supabase Dashboard

- [ ] **Step 1: Run SQL in Supabase Dashboard → SQL Editor**

```sql
-- Add page visibility (multi-select: 'blog', 'events')
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS page_visibility TEXT[] DEFAULT ARRAY['blog'];

-- Add event-specific fields
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS event_date DATE;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS event_time TEXT;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS venue TEXT;
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS gallery_album_id UUID REFERENCES gallery_albums(id) ON DELETE SET NULL;

-- Set existing blogs to show on blog page
UPDATE blogs SET page_visibility = ARRAY['blog'] WHERE page_visibility IS NULL;

-- Create index for efficient page_visibility queries
CREATE INDEX IF NOT EXISTS idx_blogs_page_visibility ON blogs USING GIN (page_visibility);
```

- [ ] **Step 2: Verify columns exist**

Run in SQL Editor:
```sql
SELECT column_name, data_type FROM information_schema.columns 
WHERE table_name = 'blogs' AND column_name IN ('page_visibility', 'event_date', 'event_time', 'venue', 'gallery_album_id');
```
Expected: 5 rows returned.

---

## Task 2: Update Blog Form Types

**Files:**
- Modify: `src/app/admin/blogs/blog-form-types.ts`

- [ ] **Step 1: Add page visibility constant and event fields to types**

Add after the existing `CATEGORIES` array at the end of the file:

```typescript
export const PAGE_VISIBILITY_OPTIONS = [
  { value: 'blog', label: 'Blog Page', description: 'Show on /blog' },
  { value: 'events', label: 'Events Page', description: 'Show on /events' },
] as const;

export type PageVisibility = 'blog' | 'events';
```

Update `BlogFormProps` interface — add these fields to the optional `blog` property inside the existing interface:

```typescript
  // Event-specific fields (shown when page_visibility includes 'events')
  page_visibility?: string[];
  event_date?: string | null;
  event_time?: string | null;
  venue?: string | null;
  gallery_album_id?: string | null;
```

- [ ] **Step 2: Commit**

```bash
git add src/app/admin/blogs/blog-form-types.ts
git commit -m "feat: add page visibility types and event fields to blog form types"
```

---

## Task 3: Update Blog Admin Form — Add Page Visibility + Event Fields

**Files:**
- Modify: `src/app/admin/blogs/BlogForm.tsx`

- [ ] **Step 1: Add state variables for new fields**

After the existing state declarations (around line 100-130), add:

```typescript
// Page visibility
const [pageVisibility, setPageVisibility] = useState<string[]>(
  existingBlog?.page_visibility ?? ['blog']
);

// Event fields (only relevant when pageVisibility includes 'events')
const [eventDate, setEventDate] = useState(existingBlog?.event_date ?? '');
const [eventTime, setEventTime] = useState(existingBlog?.event_time ?? '');
const [venue, setVenue] = useState(existingBlog?.venue ?? '');
const [galleryAlbumId, setGalleryAlbumId] = useState(existingBlog?.gallery_album_id ?? '');
```

The component needs to receive `galleryAlbums` as a prop. Add to the props interface:

```typescript
galleryAlbums?: { id: string; name: string; imageCount: number }[];
```

- [ ] **Step 2: Add page visibility checkboxes to Card Details section (Step 1 of the form)**

Add this UI block in the Card Details section, before the Category dropdown:

```tsx
{/* Page Visibility — Multi-select */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1.5">
    Show On *
  </label>
  <p className="text-xs text-gray-400 mb-3">Select where this post should appear</p>
  <div className="flex gap-3">
    {PAGE_VISIBILITY_OPTIONS.map(opt => {
      const checked = pageVisibility.includes(opt.value);
      return (
        <button
          key={opt.value}
          type="button"
          onClick={() => {
            setPageVisibility(prev =>
              checked
                ? prev.filter(v => v !== opt.value)
                : [...prev, opt.value]
            );
          }}
          className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
            checked
              ? 'border-[#0b6d41] bg-[#0b6d41]/5'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <span className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
            checked ? 'border-[#0b6d41] bg-[#0b6d41]' : 'border-gray-300'
          }`}>
            {checked && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <div className="text-left">
            <p className={`text-sm font-medium ${checked ? 'text-[#0b6d41]' : 'text-gray-700'}`}>
              {opt.label}
            </p>
            <p className="text-xs text-gray-400">{opt.description}</p>
          </div>
        </button>
      );
    })}
  </div>
</div>
```

- [ ] **Step 3: Add conditional event fields**

Show event-specific fields when `pageVisibility.includes('events')`:

```tsx
{/* Event Details — only when "Events Page" is selected */}
{pageVisibility.includes('events') && (
  <div className="border border-[#0b6d41]/20 rounded-xl p-5 bg-[#0b6d41]/5 space-y-4">
    <p className="text-sm font-semibold text-[#0b6d41]">Event Details</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Event Date</label>
        <input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} className={INPUT_CLASS} />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Event Time</label>
        <input type="text" value={eventTime} onChange={e => setEventTime(e.target.value)} placeholder="e.g. 1:00 PM to 4:00 PM" className={INPUT_CLASS} />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Venue</label>
        <input type="text" value={venue} onChange={e => setVenue(e.target.value)} placeholder="e.g. Vibrant Arangam" className={INPUT_CLASS} />
      </div>
    </div>
    {/* Gallery Album Dropdown */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Gallery Album</label>
      <select value={galleryAlbumId} onChange={e => setGalleryAlbumId(e.target.value)} className={INPUT_CLASS}>
        <option value="">No album selected</option>
        {(galleryAlbums ?? []).map(a => (
          <option key={a.id} value={a.id}>{a.name} ({a.imageCount} photos)</option>
        ))}
      </select>
    </div>
  </div>
)}
```

- [ ] **Step 4: Add new fields to the save payload**

In the `handleSubmit` function, add to the insert/update payload:

```typescript
page_visibility: pageVisibility.length > 0 ? pageVisibility : ['blog'],
event_date: pageVisibility.includes('events') ? (eventDate || null) : null,
event_time: pageVisibility.includes('events') ? (eventTime || null) : null,
venue: pageVisibility.includes('events') ? (venue || null) : null,
gallery_album_id: pageVisibility.includes('events') ? (galleryAlbumId || null) : null,
```

Use the same fallback pattern as the events form (try with new columns, retry without if column doesn't exist).

- [ ] **Step 5: Commit**

```bash
git add src/app/admin/blogs/BlogForm.tsx
git commit -m "feat: add page visibility multi-select and event fields to blog form"
```

---

## Task 4: Update Blog Admin List Page — Pass Gallery Albums + Show Visibility Badges

**Files:**
- Modify: `src/app/admin/blogs/page.tsx`
- Modify: `src/app/admin/blogs/BlogsTableClient.tsx`

- [ ] **Step 1: Fetch gallery albums in the blog list page**

In `src/app/admin/blogs/page.tsx`, add a query for gallery albums alongside existing queries:

```typescript
const { data: albumsRaw } = await supabase
  .from('gallery_albums')
  .select('id, name')
  .eq('college_id', collegeId)
  .order('name');

const albumsWithCount = await Promise.all(
  (albumsRaw ?? []).map(async (album) => {
    const { count } = await supabase
      .from('gallery_images')
      .select('*', { count: 'exact', head: true })
      .eq('album_id', album.id);
    return { ...album, imageCount: count ?? 0 };
  })
);
```

Pass `galleryAlbums={albumsWithCount}` to the BlogForm in the new/edit pages.

- [ ] **Step 2: Update blog query to include new columns**

Change the select in `page.tsx` to also fetch `page_visibility`:

```typescript
.select('id, title, slug, category, author_name, is_published, created_at, published_at, view_count, read_time, page_visibility')
```

- [ ] **Step 3: Add page_visibility badges to BlogsTableClient**

In the table row, after the category column, add visibility badges:

```tsx
<td className="px-4 py-3 hidden lg:table-cell">
  <div className="flex gap-1">
    {(blog.page_visibility ?? ['blog']).map((v: string) => (
      <span key={v} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
        v === 'events' ? 'bg-[#ffde59]/20 text-amber-700' : 'bg-[#0b6d41]/10 text-[#0b6d41]'
      }`}>
        {v === 'events' ? 'Events' : 'Blog'}
      </span>
    ))}
  </div>
</td>
```

- [ ] **Step 4: Commit**

```bash
git add src/app/admin/blogs/page.tsx src/app/admin/blogs/BlogsTableClient.tsx
git commit -m "feat: show page visibility badges in blog table, pass gallery albums"
```

---

## Task 5: Update Public Events Page — Query Blogs Instead of Events Table

**Files:**
- Modify: `src/app/events/page.tsx`

- [ ] **Step 1: Replace events table query with blogs table query**

Change the query from:
```typescript
const { data: events } = await supabase
  .from("events")
  .select("id, title, slug, description, event_date, venue, image_url")
  .eq("college_id", siteConfig.id)
  .eq("is_published", true)
  .order("event_date", { ascending: false });
```

To:
```typescript
const { data: events } = await supabase
  .from("blogs")
  .select("id, title, slug, excerpt, event_date, venue, cover_image_url, page_visibility")
  .eq("college_id", siteConfig.id)
  .eq("is_published", true)
  .contains("page_visibility", ["events"])
  .order("event_date", { ascending: false });
```

- [ ] **Step 2: Update the Event interface and card rendering**

```typescript
interface Event {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  event_date: string | null;
  venue: string | null;
  cover_image_url: string | null;
}
```

Update card rendering:
- `event.image_url` → `event.cover_image_url`
- `event.description` → `event.excerpt`
- Link href: `/events/${event.slug}` stays same (slug comes from blogs table now)

- [ ] **Step 3: Commit**

```bash
git add src/app/events/page.tsx
git commit -m "feat: public events page now queries blogs with page_visibility='events'"
```

---

## Task 6: Update Public Event Detail Page — Query Blogs Table

**Files:**
- Modify: `src/app/events/[slug]/page.tsx`

- [ ] **Step 1: Replace events query with blogs query**

In both `generateMetadata` and the page component, change:
```typescript
const { data: event } = await supabase
  .from("events")
  .select("*")
  ...
```

To:
```typescript
const { data: event } = await supabase
  .from("blogs")
  .select("*")
  .eq("slug", slug)
  .eq("college_id", collegeId)
  .eq("is_published", true)
  .single();
```

- [ ] **Step 2: Update field mappings in the template**

- `event.image_url` → `event.cover_image_url`
- `event.description` → `event.excerpt` or render `event.sections` content
- Gallery: use `event.gallery_album_id` directly (already implemented)
- Keep the same hero image + about section + gallery + share layout

- [ ] **Step 3: Handle blog sections as event description**

If the blog has structured sections, render them. If not, fall back to excerpt:

```typescript
const descParagraphs = event.excerpt
  ? event.excerpt.split(/\n\n|\n/).filter((p: string) => p.trim())
  : [''];
```

- [ ] **Step 4: Commit**

```bash
git add src/app/events/[slug]/page.tsx
git commit -m "feat: public event detail page now reads from blogs table"
```

---

## Task 7: Update Public Blog Page — Add page_visibility Filter

**Files:**
- Modify: `src/app/blog/page.tsx`

- [ ] **Step 1: Add page_visibility filter to blog query**

Change:
```typescript
const { data: blogs } = await supabase
  .from("blogs")
  .select("...")
  .eq("college_id", collegeId)
  .eq("is_published", true)
  .order("created_at", { ascending: false })
  .limit(9);
```

To:
```typescript
const { data: blogs } = await supabase
  .from("blogs")
  .select("..., page_visibility")
  .eq("college_id", collegeId)
  .eq("is_published", true)
  .contains("page_visibility", ["blog"])
  .order("created_at", { ascending: false })
  .limit(9);
```

This ensures only posts marked for the blog page appear on `/blog`.

- [ ] **Step 2: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: blog page filters by page_visibility containing 'blog'"
```

---

## Task 8: Remove Events Module from Admin Sidebar

**Files:**
- Modify: `src/app/admin/AdminSidebar.tsx`

- [ ] **Step 1: Remove Events from contentLinks**

Change:
```typescript
const contentLinks = [
  { href: '/admin/events', label: 'Events', icon: CalendarDays },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/notices', label: 'Notices', icon: Bell },
];
```

To:
```typescript
const contentLinks = [
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/notices', label: 'Notices', icon: Bell },
];
```

Also remove Events from `staffLinks`:
```typescript
const staffLinks = [
  { href: '/admin/faculty', label: 'Faculty', icon: Users },
];
```

- [ ] **Step 2: Remove CalendarDays import if no longer used**

Check if CalendarDays is used elsewhere in the file. If not, remove from the import.

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/AdminSidebar.tsx
git commit -m "feat: remove Events module from admin sidebar (merged into Blog)"
```

---

## Task 9: Migrate Existing Event Data to Blog Post

- [ ] **Step 1: Run migration SQL in Supabase Dashboard**

```sql
-- Migrate existing events to blogs table
INSERT INTO blogs (college_id, title, slug, excerpt, is_published, page_visibility, event_date, event_time, venue, gallery_album_id, cover_image_url, category, created_at, updated_at)
SELECT 
  college_id, title, slug, description, is_published, 
  ARRAY['events'], event_date, event_time, venue, gallery_album_id,
  image_url, 'Events', created_at, updated_at
FROM events
WHERE NOT EXISTS (
  SELECT 1 FROM blogs b WHERE b.slug = events.slug AND b.college_id = events.college_id
);
```

- [ ] **Step 2: Verify migration**

```sql
SELECT title, slug, page_visibility, event_date FROM blogs WHERE 'events' = ANY(page_visibility);
```

Expected: PULSE 2K26 event should appear.

---

## Task 10: Build Verification + Final Push

- [ ] **Step 1: TypeScript check**
```bash
npx tsc --noEmit
```
Expected: No errors

- [ ] **Step 2: Full build**
```bash
npx next build
```
Expected: All pages compile, no errors

- [ ] **Step 3: Manual testing checklist**
- Visit `/admin/blogs/new` — verify "Show On" checkboxes appear (Blog + Events)
- Select "Events Page" — verify event fields (date, time, venue, album) appear
- Create a test post with both Blog + Events selected
- Visit `/events` — verify the post appears
- Visit `/blog` — verify the post appears
- Visit `/events/[slug]` — verify detail page renders with gallery
- Visit `/admin/blogs` — verify visibility badges show in table

- [ ] **Step 4: Commit and push**
```bash
git add -A
git commit -m "feat: unified blog + events content system with page visibility"
git push origin main
```
