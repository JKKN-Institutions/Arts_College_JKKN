# JKKN College of Arts & Science — Project CLAUDE.md

> **Site:** cas.jkkn.ac.in | **Codebase-specific** technical reference only.
> Global strategy, protocols, and behavioral rules are in `~/.claude/CLAUDE.md`.

---

## 1. Project Overview

- **Institution:** JKKN College of Arts and Science
- **Framework:** Next.js 16.1.4 + App Router + TypeScript + React 19
- **Architecture:** Multi-tenant — same codebase serves all JKKN colleges via `NEXT_PUBLIC_COLLEGE_ID`
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Deployment:** Vercel (per-institution deployment with env-driven config)

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.4 |
| Language | TypeScript | 5.x |
| UI | Tailwind CSS v4 + shadcn/ui (Radix) + Framer Motion | v4 / v12 |
| Rich Text | Tiptap | v3 |
| State | Zustand | v5 |
| DB/Auth | Supabase (@supabase/ssr) | v0.8 |
| Font | Poppins (Google Fonts via next/font) | — |
| Icons | Lucide React | — |
| Notifications | react-hot-toast | — |

---

## 3. Project Structure

```
src/
├── app/                # Pages (App Router)
│   ├── admin/          # CMS admin panel (6 modules)
│   ├── programmes/     # 31+ programme pages (aided + self-finance)
│   ├── departments/    # 28 department pages
│   ├── facilities/     # 10 facility pages
│   ├── blog/           # Blog system
│   ├── events/         # Events
│   └── api/            # API routes
├── components/
│   ├── layout/         # Navigation, Footer, ClientLayoutWrapper
│   ├── home/           # Homepage sections
│   ├── seo/            # JSON-LD schema components
│   ├── templates/      # ProgrammePage reusable template
│   ├── BottomNav/      # Mobile bottom navigation (8 files)
│   └── ui/             # shadcn + custom components
├── data/               # Programme metadata & content
├── hooks/              # Custom hooks (bottom-nav, mobile, navigation)
└── lib/                # Utilities, config, Supabase clients
```

---

## 4. Architecture Patterns

### Layout Hierarchy
- `src/app/layout.tsx` → Root (Poppins font, OrganizationSchema)
- `src/components/layout/ClientLayoutWrapper.tsx` → Navigation + Footer + BottomNavbar (public pages)
- `src/app/admin/layout.tsx` → Admin layout (AdminSidebar, ToastProvider, no public nav)

### Multi-Tenant Design
- `src/lib/site-config.ts` → Single source of truth (env-driven college identity)
- `NEXT_PUBLIC_COLLEGE_ID = 'arts-science'` → filters ALL Supabase queries
- Every database table has a `college_id` column
- Super admin can override via `admin_college_id` cookie

### Data Flow
- **Server Components** → `createServerClient()` from `src/lib/supabase/server.ts`
- **Client Components** → `createBrowserClient()` from `src/lib/supabase/client.ts`
- All queries filter by `siteConfig.id`

### Auth & Middleware
- `middleware.ts` → Protects `/admin/*` routes (edge runtime, reads cookie directly)
- Role system: `super_admin`, `seo`, regular admin
- `src/lib/get-admin-college.ts` → College switching for super_admin/seo roles

---

## 5. Key Files

| File | Purpose |
|------|---------|
| `src/lib/site-config.ts` | College identity config (env-driven, multi-tenant) |
| `src/lib/navigation-config.ts` | All nav links (typed NavigationItem hierarchy) |
| `src/lib/design-tokens.ts` | Design system tokens (spacing, typography, grid, animation) |
| `src/lib/responsive-utils.ts` | Responsive utility helpers |
| `src/lib/utils.ts` | `cn()` helper (clsx + twMerge) |
| `src/components/templates/ProgrammePage.tsx` | Reusable template for ALL 31+ programme pages |
| `src/components/seo/OrganizationSchema.tsx` | CollegeOrUniversity JSON-LD (root layout) |
| `src/components/layout/ClientLayoutWrapper.tsx` | Public site shell (Nav + Footer + BottomNav) |
| `middleware.ts` | Admin route protection (edge runtime) |
| `tailwind.config.ts` | Brand colors, shadcn CSS variables, Poppins font |
| `components.json` | shadcn/ui configuration |

---

## 6. Brand & Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-green (primary) | `#0b6d41` | Buttons, headers, accents |
| brand-yellow (accent) | `#ffde59` | Highlights, CTAs |
| brand-cream (background) | `#fbfbee` | Page backgrounds |
| primaryDark | `#002309` | Dark sections, footer |
| primaryMid | `#004d28` | Hover states, secondary |

### Design Tokens
Use `DESIGN_TOKENS` from `src/lib/design-tokens.ts`:
- **Spacing:** `SPACING.section.default`, `SPACING.container`, `SPACING.card`
- **Typography:** `TYPOGRAPHY.hero`, `TYPOGRAPHY.h1`–`h4`, `TYPOGRAPHY.body`
- **Grid:** `GRID.cards`, `GRID.cardsWide`, `GRID.compact`
- **Touch:** Min 44x44px targets (WCAG compliance)

### Font
Poppins — loaded via `next/font/google` in root layout.

---

## 7. Database Tables (Supabase)

| Table | Key Columns | Used For |
|-------|-------------|----------|
| `events` | id, title, slug, description, event_date, venue, image_url, is_published, college_id | Events CRUD |
| `blogs` | id, title, slug, category, content, is_published, college_id | Blog system |
| `gallery_albums` | id, name, college_id | Gallery albums |
| `gallery_images` | id, image_url, caption, display_order, college_id | Photos per album |
| `notices` | id, title, notice_type, is_active, college_id | Notices |
| `faculty` | id, is_active, college_id | Faculty profiles |
| `staff_profiles` | id, role | Admin roles (super_admin, seo, regular) |
| `colleges` | id, name, is_active | Multi-college config |

---

## 8. Admin Panel (CMS)

6 modules under `/admin/*`, protected by middleware:
- **Events** — CRUD with image upload, slug generation
- **Blogs** — Tiptap rich text editor + categories/tags/comments
- **Gallery** — Albums + image management with display ordering
- **Notices** — Active/inactive notices by type
- **Faculty** — Faculty profile management
- **Colleges** — Multi-college config (super_admin only)

---

## 9. Coding Conventions & Rules

1. **Imports:** Use `@/` path alias (maps to `src/`)
2. **Styling:** Tailwind + `cn()` utility for conditional classes. Use design tokens for consistency
3. **Components:** shadcn/ui components live in `src/components/ui/`. Don't modify shadcn source — extend via wrapper components
4. **Programme pages:** ALL must use `ProgrammePage` template from `src/components/templates/ProgrammePage.tsx` — never create standalone programme pages
5. **Supabase queries:** Always filter by `college_id: siteConfig.id`
6. **Schema/SEO:** Use schema components from `src/components/seo/` for JSON-LD
7. **Mobile-first:** Design mobile-first, use responsive tokens from `design-tokens.ts`
8. **BottomNav:** Complex 8-file system in `src/components/BottomNav/` — modify carefully, test all states
9. **No `globals.css` edits** during bug fixes
10. **No `tailwind.config.ts` edits** during bug fixes

---

## 10. Bug Fix Rules (MANDATORY)

1. **Surgical fixes only** — Change the minimum lines needed to fix the issue. No refactoring, no "improvements", no cleanup of surrounding code
2. **No shared class/component modifications** — If a CSS class or component is used in 3+ places, NEVER modify it directly. Create a new variant or override instead
3. **Before editing any file, grep for all usages** — Run `Grep` to check where the component/class/function is used BEFORE changing it. Understand the blast radius first
4. **No layout changes during bug fixes** — padding, margin, flex, grid changes are HIGH RISK. After any layout edit, verify all breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
5. **One fix = one commit** — Never bundle multiple fixes in a single commit. If fix A breaks something, it must be easy to revert without losing fix B
6. **Test adjacent pages** — After fixing page X, check pages Y and Z that share the same component or layout
7. **No global file edits during fixes** — `globals.css`, `tailwind.config.ts`, `layout.tsx` changes are FORBIDDEN during bug fixes unless the bug is specifically in those files
8. **Show impact before editing** — Before making any change, list: (a) files to be modified, (b) components affected, (c) pages that use those components
9. **Preserve responsive behavior** — Never remove or modify responsive classes (`sm:`, `md:`, `lg:`, `xl:`) without checking all breakpoints
10. **No dependency changes during fixes** — Do not add, remove, or update packages while fixing a bug

### High-Risk Danger Zones

| Risk Area | Why Dangerous | Rule |
|-----------|--------------|------|
| Shared components (Header, Footer, Layout) | Used on EVERY page | Grep all usages first, test all pages after |
| `globals.css` | Affects entire site | Never edit during bug fix |
| `tailwind.config.ts` | Affects all Tailwind classes | Never edit during bug fix |
| `layout.tsx` files | Affects all child routes | Full child page verification required |
| Responsive classes | Breaking one breakpoint breaks mobile/tablet | Check 320px, 640px, 768px, 1024px, 1280px |
| Framer Motion animations | Complex state interactions | Test enter/exit/hover states after changes |
| z-index changes | Can hide/overlap other elements | Check all overlapping sections |

---

## 11. Environment Variables

```
NEXT_PUBLIC_COLLEGE_ID=arts-science
NEXT_PUBLIC_COLLEGE_NAME=JKKN College of Arts and Science
NEXT_PUBLIC_SUPABASE_URL=<supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
```
