# AEO Atomic Task Decomposition — JKKN CAS Salem City Page

**Institution:** JKKN College of Arts and Science (cas.jkkn.ac.in)
**Page URL:** https://cas.jkkn.ac.in/salem
**Primary File:** `src/app/salem/page.tsx`
**Source Spec:** `aeo/salem/salem-aeo-spec.md`
**Source Plan:** `aeo/salem/salem-aeo-plan.md`
**Decompose Version:** 1.0
**Date Generated:** 2026-03-28
**AEO Score (Current):** 23/100 → Target: 45/100 (3 months) → 65/100 (12 months)

---

## Table of Contents

1. [Atomic Task List](#1-atomic-task-list)
2. [Before/After Code Blocks](#2-beforeafter-code-blocks)
3. [Dependency Graph](#3-dependency-graph)
4. [Effort Summary](#4-effort-summary)
5. [Implementation Order](#5-implementation-order)

---

## 1. Atomic Task List

> Every row is one discrete, independently completable change. Groups: META, CONTENT, FAQ, SCHEMA, LINKS, TECHNICAL.

### GROUP: META (Lines 40–80)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| M-01 | Fix meta description: "45 km" → "~58 km" + enhance keyword framing | page.tsx | 43 | `"JKKN CAS — 45 km from Salem via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27."` | `"JKKN CAS — top arts and science college accessible from Salem (~58 km via NH-544). NAAC-accredited, BCA, BBA, B.Com, B.Sc. Admissions 2026-27."` | 5 min | None |
| M-02 | Fix OG description: "45 km" → "~58 km" | page.tsx | 57–58 | `"JKKN CAS — 45 km from Salem. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27."` | `"JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. BCA, BBA, B.Com, B.Sc. Admissions open 2026-27."` | 3 min | None |
| M-03 | Fix Twitter description: "45 km" → "~58 km" | page.tsx | 74 | `"JKKN CAS — 45 km from Salem. NAAC-accredited, 80%+ placements. Admissions open 2026-27."` | `"JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. Admissions open 2026-27."` | 3 min | None |
| M-04 | Verify meta title is unchanged (no edit needed) | page.tsx | 41 | `"Best Arts and Science College Near Salem \| JKKN CAS"` (55 chars) | No change — correct | 0 min | None |

---

### GROUP: CONTENT — Hero and Distance Cards

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| C-01 | Fix hero stat card: "45km FROM SALEM" → "~58km FROM SALEM" | page.tsx | 221 | `{ value: "45km", label: "FROM SALEM" }` | `{ value: "~58km", label: "FROM SALEM" }` | 3 min | None |
| C-02 | Fix hero stat card: "4 PROGRAMMES" → "34 PROGRAMMES" to eliminate ambiguity vs line 477 | page.tsx | 222 | `{ value: "4", label: "PROGRAMMES" }` | `{ value: "34", label: "PROGRAMMES" }` | 3 min | None |
| C-03 | Fix large distance display card: "45 km" → "~58 km" | page.tsx | 283 | `45<span...>km</span>` | `~58<span...>km</span>` | 3 min | None |
| C-04 | Fix route header subtitle: "40-50 km • 50-60 minutes" → "~58 km • 60-70 minutes" | page.tsx | 806 | `"40-50 km • 50-60 minutes"` | `"~58 km • 60-70 minutes"` | 3 min | None |
| C-05 | Fix "Easy Commute" feature card description: "40-50 km from Salem" → "~58 km from Salem" | page.tsx | 355 | `"Just 40-50 km from Salem. Daily commute or comfortable hostel — your choice."` | `"Just ~58 km from Salem. Daily commute or comfortable hostel — your choice."` | 3 min | None |
| C-06 | Fix railway station transport row: "~45 km from campus" → "~58 km from campus" | page.tsx | 829 | `"Salem Junction (~45 km from campus)"` | `"Salem Junction (~58 km from campus)"` | 3 min | None |
| C-07 | Add primary paragraph snippet block (52 words, class `aeo-snippet-primary`) — NEW section | page.tsx | After line 214 (below hero <p> description, before Distance Card section at line 277) | (section does not exist) | New `<section>` with H2 "Arts and Science College Near Salem — JKKN CAS" + 52-word paragraph | 20 min | C-01 to C-06 done first |
| C-08 | Add distance answer paragraph block (40 words, class `aeo-distance-answer`) — NEW block | page.tsx | After line 278 (inside Distance Card section, above the white card div) | (block does not exist) | New H2 "Distance from Salem to JKKN CAS" + 40-word paragraph | 15 min | C-03, C-04 done first |
| C-09 | Add programmes list snippet block (8-item unordered list) — NEW block | page.tsx | After line 383 (inside Programmes section, before the programme cards grid at line 386) | (block does not exist) | New H2 "UG Programmes Available Near Salem at JKKN CAS" + intro sentence + `<ul>` with 8 items | 20 min | None |
| C-10 | Add comparison table snippet — NEW block | page.tsx | After line 369 (end of feature cards grid, inside Why Choose section before closing `</div>`) | (block does not exist) | New H2 "JKKN CAS vs Salem City Colleges — Key Comparison" + 8-row HTML table | 25 min | None |
| C-11 | Add AI citation Block A — Identity and Location (58-word paragraph) | page.tsx | New section between hero and programmes (after distance section, approx after line 306) | (block does not exist) | New `<section>` "About JKKN CAS" containing Block A paragraph | 15 min | C-07, C-08 done first (ordering) |
| C-12 | Add AI citation Block B — Programmes paragraph | page.tsx | Same "About JKKN CAS" section as C-11 | (block does not exist) | Block B `<p>` inside the About section | 10 min | C-11 |
| C-13 | Add AI citation Block C — Placements paragraph | page.tsx | Same "About JKKN CAS" section as C-11 | (block does not exist) | Block C `<p>` inside the About section | 10 min | C-11 |
| C-14 | Add AI citation Block D — Accessibility from Salem paragraph | page.tsx | Same "About JKKN CAS" section as C-11 | (block does not exist) | Block D `<p>` inside the About section | 10 min | C-11 |
| C-15 | Add AI citation Block E — Why JKKN over city colleges paragraph | page.tsx | Same "About JKKN CAS" section as C-11 | (block does not exist) | Block E `<p>` inside the About section | 10 min | C-11 |
| C-16 | Add founding year to hero stats: new stat card "74+" / "YEARS OF EXCELLENCE" | page.tsx | 216–234 (stats grid, currently 4 items) | 4-card stats grid: "80%+", "5-7", "45km", "4 PROGRAMMES" | Replace "45km" stat (after C-01) or add 5th card showing `{ value: "74+", label: "YEARS OF EXCELLENCE" }` | 10 min | C-01 done first |
| C-17 | Add content author attribution line with `<time>` element | page.tsx | End of page, before closing `</main>` at line 1075 | (attribution absent) | `<p className="text-xs text-gray-400 text-center py-2">Page reviewed by JKKN CAS Admissions Office — <time dateTime="2026-03-28">March 2026</time></p>` | 8 min | None |

---

### GROUP: FAQ (Lines 79–120)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| F-01 | Rewrite FAQ Q1 answer: "best arts college" — trim 67 words → 28 words | page.tsx | 82–83 | `"JKKN College of Arts and Science, located just 40-50 km from Salem on NH-544, is widely regarded as one of the top arts and science colleges accessible from Salem. Approved by UGC, NAAC and affiliated to Periyar University / Bharathiar University, it offers excellent programmes with strong placement support."` | `"JKKN College of Arts and Science — NAAC-accredited, 58 km from Salem via NH-544 — is a top-rated option with 34 programmes and 80%+ placement rate."` | 8 min | None |
| F-02 | Rewrite FAQ Q2 answer: "how far" — fix distance + trim 61 words → 20 words | page.tsx | 86–87 | `"JKKN CAS is approximately 40-50 km from Salem city centre, which takes about 50-60 minutes by road via NH-544 (Salem-Coimbatore Highway) — direct route. Regular bus services are available from Salem New Bus Stand to Komarapalayam every 15-20 minutes."` | `"JKKN CAS is approximately 58 km from Salem via NH-544, taking 60–70 minutes by road."` | 8 min | None |
| F-03 | Rewrite FAQ Q3 answer: "popular courses" — trim 63 words → 23 words | page.tsx | 90–91 | `"BCA and B.Com are the most popular choices among Salem students, given the city's industrial economy and growing IT sector. BBA is also in demand. JKKN CAS offers 34 programmes across aided and self-finance streams — including B.Sc specialisations, M.Sc, MCA, and Ph.D programmes."` | `"JKKN CAS offers BCA, BBA, B.Com, B.Sc (multiple specialisations), MCA, M.Com, M.Sc, and Ph.D — 34 programmes total across aided and self-finance streams."` | 8 min | None |
| F-04 | Trim FAQ Q5 answer: "fees" — 47 words → 27 words | page.tsx | 98–99 | `"Yes. JKKN CAS fees are competitively priced — often 30-50% lower than private colleges in Salem city. Government scholarships (BC/MBC/SC/ST) and merit-based concessions are available. Contact the admission office at +91 9345855001 for the full fee structure."` | `"JKKN CAS fees are 30–50% lower than city-based private colleges. Government scholarships (BC, MBC, SC, ST) are available. Contact +91 9345855001 for the current fee structure."` | 8 min | None |
| F-05 | Rewrite FAQ Q6 answer: "hostel" — trim 42 words → 22 words | page.tsx | 102–103 | `"Yes, JKKN CAS provides separate hostel facilities for boys and girls. Students from Salem can also opt for daily commute as the campus is just 50-60 minutes away. College transport services are available."` | `"Yes. JKKN CAS provides separate hostels for boys and girls with mess, WiFi, and 24/7 security. College buses also connect Salem."` | 8 min | None |
| F-06 | Rewrite FAQ Q8 answer: "direct bus" — trim 55 words → 27 words | page.tsx | 109–110 | `"Yes. Regular TNSTC government buses and private buses run from Salem New Bus Stand towards Namakkal/Erode via NH-544. Get off at Komarapalayam — the campus is right on the highway. Journey time is approximately 50 to 60 minutes. College transport is also available for hostellers."` | `"Yes. TNSTC government buses from Salem New Bus Stand to Komarapalayam run every 15–20 minutes via NH-544, reaching the campus in under 70 minutes."` | 8 min | None |
| F-07 | Trim FAQ Q9 answer: "hostel cost" — 63 words → ~35 words | page.tsx | 113–115 | `"Hostel fees at JKKN CAS are significantly lower than city PG accommodations. The fee includes furnished rooms, three meals a day, WiFi, and 24/7 security. Many Salem students prefer the hostel for a focused academic environment. Contact the admission office at +91 9345855001 for the current fee structure."` | `"Hostel fees are significantly lower than Salem city PG rates. Mess, WiFi, and security are included. Contact the admissions office for exact annual rates."` | 8 min | None |
| F-08 | Trim FAQ Q10 answer: "why JKKN" — 72 words → ~40 words | page.tsx | 117–119 | `"JKKN CAS offers several advantages over Salem city colleges: fees are 30-50% lower, class sizes are smaller with personalised faculty attention, the 50+ acre green campus provides a distraction-free environment, and placement rates (80%+) are on par with city institutions. The same top recruiters — TCS, Infosys, HDFC, Amazon — visit JKKN CAS."` | `"JKKN CAS offers NAAC accreditation, 34 programmes, 80%+ placement, lower fees than city colleges, and a 50+ acre green campus with hostel — all ~58 km from Salem."` | 8 min | None |
| F-09 | Add CSS class `faq-answer-voice` to each FAQ answer wrapper element in the Accordion | page.tsx | 1027–1029 (AccordionContent) | `<AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">` | `<AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5 faq-answer-voice">` | 5 min | F-01 to F-08 done first |

---

### GROUP: SCHEMA (Lines 129–189)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| S-01 | Replace CollegeOrUniversity inline schema: add `@id`, `alternateName`, `logo`, `telephone`, `email`, `foundingDate`, `description`, `accreditedBy`, `memberOf`, `sameAs`, `parentOrganization`, expand `areaServed` to 3 cities | page.tsx | 131–157 | Partial schema — missing 9 fields (see Before block in Section 2) | Full schema with all required fields (see After block in Section 2) | 25 min | None |
| S-02 | Fix CourseSchema (B.Sc) description: "45 km from Salem" → "~58 km from Salem" | page.tsx | 160 | `"...at JKKN CAS — 45 km from Salem."` | `"...at JKKN CAS — approximately 58 km from Salem."` | 3 min | None |
| S-03 | Fix CourseSchema (BBA) description: "45 km from Salem" → "~58 km from Salem" | page.tsx | 176 | `"...at JKKN CAS — 45 km from Salem on NH-544."` | `"...at JKKN CAS — approximately 58 km from Salem on NH-544."` | 3 min | None |
| S-04 | Add `provider` block to CourseSchema (B.Sc) linking to CollegeOrUniversity `@id` | page.tsx | 158–165 | CourseSchema has no `provider` prop | Add `provider={{ "@type": "CollegeOrUniversity", "@id": "https://cas.jkkn.ac.in/#organization", "name": "JKKN College of Arts and Science" }}` to CourseSchema component | 10 min | S-01 |
| S-05 | Add `provider` block to CourseSchema (B.Com) | page.tsx | 166–173 | CourseSchema has no `provider` prop | Same `provider` object as S-04 | 5 min | S-01 |
| S-06 | Add `provider` block to CourseSchema (BBA) | page.tsx | 174–181 | CourseSchema has no `provider` prop | Same `provider` object as S-04 | 5 min | S-01 |
| S-07 | Add `provider` block to CourseSchema (BCA) | page.tsx | 182–189 | CourseSchema has no `provider` prop | Same `provider` object as S-04 | 5 min | S-01 |
| S-08 | Add new LocalBusiness JSON-LD `<script>` block (new — does not exist) | page.tsx | After line 189 (after last CourseSchema, before Hero section comment at line 191) | (block does not exist) | New `<script type="application/ld+json">` with LocalBusiness schema (see Section 2 S-08 block) | 15 min | None |
| S-09 | Add new WebPage JSON-LD `<script>` block with SpeakableSpecification (new — does not exist) | page.tsx | After S-08 insertion point | (block does not exist) | New `<script type="application/ld+json">` with WebPage + speakable schema (see Section 2 S-09 block) | 15 min | F-09, C-07, C-08 (CSS classes must exist first) |

---

### GROUP: LINKS

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| L-01 | Convert UGC badge text to anchor link: `href="https://www.ugc.ac.in/"` | page.tsx | 261–263 | `<span className="...">✓ UGC</span>` | `<a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="...">✓ UGC</a>` | 5 min | None |
| L-02 | Convert NAAC badge text to anchor link: `href="https://www.naac.gov.in/"` | page.tsx | 264–267 | `<span className="...">✓ NAAC</span>` | `<a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className="...">✓ NAAC</a>` | 5 min | None |
| L-03 | Convert "Periyar University" affiliation text to anchor link | page.tsx | 271–273 | `Affiliated to Periyar University / Bharathiar University` | `Affiliated to <a href="https://www.periyaruniversity.ac.in/" target="_blank" rel="noopener noreferrer">Periyar University</a> / Bharathiar University` | 5 min | None |
| L-04 | Add internal link: "placement cell" → `/placements` in Placement section | page.tsx | 609–611 | `Our placement cell connects you with India's top employers` | `Our <Link href="/placements">placement cell</Link> connects you with India's top employers` | 5 min | None |
| L-05 | Add internal link: "modern labs and digital library" → `/facilities` in Campus section | page.tsx | 871–875 | Plain text describing facilities | Add `<Link href="/facilities">` wrapping relevant text in the Campus section heading or description | 5 min | None |
| L-06 | Add internal link: "admission process" → `/admissions` in Admission section heading | page.tsx | 667–668 | `<h2 ...>How to Apply — Admission Process</h2>` | `<h2 ...>How to Apply — <Link href="/admissions">Admission Process</Link></h2>` | 5 min | None |
| L-07 | Add structured `<address>` element at page footer area (E-E-A-T signal) | page.tsx | Before `</main>` at line 1075 | (structured address absent) | `<address className="not-italic text-xs text-gray-400 text-center py-4">JKKN College of Arts and Science, Natarajapuram, NH-544, Komarapalayam, Namakkal District, Tamil Nadu — 638183 <a href="tel:+919345855001">+91 9345855001</a></address>` | 8 min | None |

---

### GROUP: TECHNICAL

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| T-01 | Verify `/salem` is listed in sitemap | `src/app/sitemap.ts` (or `public/sitemap.xml`) | — | Check if `https://cas.jkkn.ac.in/salem` present with `priority: 0.8` | Add if missing | 10 min | None |
| T-02 | Verify `robots.txt` does not block `/salem` | `public/robots.txt` | — | Check for `Disallow: /salem` or blanket `Disallow: /` | Remove block if present | 5 min | None |
| T-03 | Verify old domain `www.arts.jkkn.ac.in` has 301 redirect to `cas.jkkn.ac.in` | Server/hosting config (DigitalOcean) | — | Uncertain redirect status | `curl -I http://www.arts.jkkn.ac.in` must return 301 → `cas.jkkn.ac.in` | 15 min | None |
| T-04 | Submit GSC URL Inspection + Request Indexing for `/salem` | Google Search Console | — | Page not indexed | Submit URL → "Request Indexing" | 10 min | ALL Phase 1 + Phase 2 + Phase 3 tasks deployed live |
| T-05 | Submit Bing Webmaster Tools URL for `/salem` | Bing Webmaster Tools | — | Unknown Bing index status | Submit for indexing | 10 min | T-04 |
| T-06 | Contact tamilnaducolleges.org to update listing domain from `www.arts.jkkn.ac.in` to `cas.jkkn.ac.in` | External action | — | Old domain listed | Correct domain + link to `/salem` URL | 20 min | T-03 confirmed |
| T-07 | Post-edit grep verification: confirm zero instances of "45 km", "45km", "40-50 km" remain in page.tsx | `src/app/salem/page.tsx` | All | 12+ distance bug instances | 0 instances | 5 min | M-01, M-02, M-03, C-01, C-03, C-04, C-05, C-06, F-02, S-02, S-03 done |
| T-08 | Run Google Rich Results Test on live URL after deployment | External tool | — | Schema partial, FAQ partial | All schema types validated | 10 min | S-01 through S-09 deployed |
| T-09 | Add GBP "area served: Salem" update and create Salem-focused GBP post | Google Business Profile | — | Salem not in served areas | Salem added; post created | 20 min | None (parallel) |

---

## 2. Before/After Code Blocks

> Full code for all critical changes. Line numbers reference the original `src/app/salem/page.tsx`.

---

### BUG-01 to BUG-03: Meta Tags Distance Corrections (Lines 40–80)

**Tasks: M-01, M-02, M-03**

```tsx
// BEFORE — lines 40–76
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Salem | JKKN CAS",
  description:
    "JKKN CAS — 45 km from Salem via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.",
  keywords: [
    "arts and science college near Salem",
    "best college near Salem",
    "JKKN CAS Salem",
    "college near Salem NH-544",
    "affordable college near Salem",
    "BCA BBA B.Com B.Sc near Salem",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/salem",
  },
  openGraph: {
    title: "Best Arts and Science College Near Salem | JKKN CAS",
    description:
      "JKKN CAS — 45 km from Salem. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.",
    // ...
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Arts and Science College Near Salem | JKKN CAS",
    description: "JKKN CAS — 45 km from Salem. NAAC-accredited, 80%+ placements. Admissions open 2026-27.",
  },
};
```

```tsx
// AFTER — M-01, M-02, M-03 applied
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Salem | JKKN CAS",
  description:
    "JKKN CAS — top arts and science college accessible from Salem (~58 km via NH-544). NAAC-accredited, BCA, BBA, B.Com, B.Sc. Admissions 2026-27.",
  keywords: [
    "arts and science college near Salem",
    "best college near Salem",
    "JKKN CAS Salem",
    "college near Salem NH-544",
    "affordable college near Salem",
    "BCA BBA B.Com B.Sc near Salem",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/salem",
  },
  openGraph: {
    title: "Best Arts and Science College Near Salem | JKKN CAS",
    description:
      "JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. BCA, BBA, B.Com, B.Sc. Admissions open 2026-27.",
    // ...
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Arts and Science College Near Salem | JKKN CAS",
    description: "JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. Admissions open 2026-27.",
  },
};
```

---

### BUG-04: Hero Stat Card — Distance and Programme Count (Lines 217–222)

**Tasks: C-01, C-02**

```tsx
// BEFORE — lines 217–222
{[
  { value: "80%+", label: "PLACEMENTS" },
  { value: "5-7", label: "LPA HIGHEST" },
  { value: "45km", label: "FROM SALEM" },
  { value: "4", label: "PROGRAMMES" },
].map((stat) => (
```

```tsx
// AFTER — C-01, C-02 applied
{[
  { value: "80%+", label: "PLACEMENTS" },
  { value: "5-7", label: "LPA HIGHEST" },
  { value: "~58km", label: "FROM SALEM" },
  { value: "34", label: "PROGRAMMES" },
].map((stat) => (
```

---

### BUG-05: Distance Display Card (Lines 282–284)

**Task: C-03**

```tsx
// BEFORE — line 283
<span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
  45<span className="text-2xl font-semibold text-[#006837]">km</span>
</span>
```

```tsx
// AFTER — C-03 applied
<span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
  ~58<span className="text-2xl font-semibold text-[#006837]">km</span>
</span>
```

---

### BUG-06 and BUG-07: Route Header and "Easy Commute" Card (Lines 806, 355)

**Tasks: C-04, C-05**

```tsx
// BEFORE — line 806 (route header)
<div className="text-[#7cb983] text-sm">
  40-50 km • 50-60 minutes
</div>

// BEFORE — line 355 (Easy Commute card description)
desc: "Just 40-50 km from Salem. Daily commute or comfortable hostel — your choice.",
```

```tsx
// AFTER — C-04, C-05 applied
<div className="text-[#7cb983] text-sm">
  ~58 km • 60-70 minutes
</div>

// AFTER
desc: "Just ~58 km from Salem. Daily commute or comfortable hostel — your choice.",
```

---

### BUG-08: Railway Station Distance (Line 829)

**Task: C-06**

```tsx
// BEFORE — line 829
info: "Salem Junction (~45 km from campus)",
```

```tsx
// AFTER — C-06 applied
info: "Salem Junction (~58 km from campus)",
```

---

### FAQ Q1, Q2, Q3 Rewrites (Lines 82–91)

**Tasks: F-01, F-02, F-03**

```tsx
// BEFORE — lines 79–120 (faqs array, Q1, Q2, Q3)
const faqs = [
  {
    q: "What is the best arts and science college in Salem?",
    a: "JKKN College of Arts and Science, located just 40-50 km from Salem on NH-544, is widely regarded as one of the top arts and science colleges accessible from Salem. Approved by UGC, NAAC and affiliated to Periyar University / Bharathiar University, it offers excellent programmes with strong placement support.",
  },
  {
    q: "How far is JKKN CAS from Salem?",
    a: "JKKN CAS is approximately 40-50 km from Salem city centre, which takes about 50-60 minutes by road via NH-544 (Salem-Coimbatore Highway) — direct route. Regular bus services are available from Salem New Bus Stand to Komarapalayam every 15-20 minutes.",
  },
  {
    q: "Which courses are popular among Salem students at JKKN CAS?",
    a: "BCA and B.Com are the most popular choices among Salem students, given the city's industrial economy and growing IT sector. BBA is also in demand. JKKN CAS offers 34 programmes across aided and self-finance streams — including B.Sc specialisations, M.Sc, MCA, and Ph.D programmes.",
  },
  // ... Q4 unchanged ...
```

```tsx
// AFTER — F-01, F-02, F-03 applied
const faqs = [
  {
    q: "What is the best arts and science college in Salem?",
    a: "JKKN College of Arts and Science — NAAC-accredited, 58 km from Salem via NH-544 — is a top-rated option with 34 programmes and 80%+ placement rate.",
  },
  {
    q: "How far is JKKN CAS from Salem?",
    a: "JKKN CAS is approximately 58 km from Salem via NH-544, taking 60–70 minutes by road.",
  },
  {
    q: "Which courses are popular among Salem students at JKKN CAS?",
    a: "JKKN CAS offers BCA, BBA, B.Com, B.Sc (multiple specialisations), MCA, M.Com, M.Sc, and Ph.D — 34 programmes total across aided and self-finance streams.",
  },
  // ... Q4 unchanged ...
```

---

### Enhanced CollegeOrUniversity Schema (Lines 131–157)

**Task: S-01**

```tsx
// BEFORE — lines 131–157 (partial CollegeOrUniversity schema)
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "JKKN College of Arts and Science",
      "url": "https://cas.jkkn.ac.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Salem",
        "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.44518,
        "longitude": 77.726549
      }
    })
  }}
/>
```

```tsx
// AFTER — S-01 applied (full CollegeOrUniversity schema)
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "@id": "https://cas.jkkn.ac.in/#organization",
      "name": "JKKN College of Arts and Science",
      "alternateName": "JKKN CAS",
      "url": "https://cas.jkkn.ac.in",
      "logo": "https://cas.jkkn.ac.in/images/logo/jkkn-cas-logo.png",
      "image": "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
      "telephone": "+919345855001",
      "email": "info@jkkn.ac.in",
      "foundingDate": "1952",
      "description": "JKKN College of Arts and Science is a NAAC-accredited institution offering 34 UG, PG, and Ph.D programmes. Located at Komarapalayam, approximately 58 km from Salem via NH-544. Affiliated to Periyar University and Bharathiar University.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.44518,
        "longitude": 77.726549
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Salem",
          "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
        },
        {
          "@type": "City",
          "name": "Erode",
          "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
        },
        {
          "@type": "City",
          "name": "Namakkal",
          "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
        }
      ],
      "numberOfStudents": {
        "@type": "QuantitativeValue",
        "description": "Large student body across 34 programmes"
      },
      "accreditedBy": {
        "@type": "Organization",
        "name": "National Assessment and Accreditation Council",
        "alternateName": "NAAC",
        "url": "https://www.naac.gov.in"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "University Grants Commission",
        "alternateName": "UGC",
        "url": "https://www.ugc.ac.in"
      },
      "sameAs": [
        "https://www.facebook.com/jkkngroup",
        "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
        "https://jkkn.ac.in"
      ],
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://jkkn.ac.in/#organization",
        "name": "JKKN Institutions",
        "url": "https://jkkn.ac.in"
      }
    })
  }}
/>
```

---

### New LocalBusiness Schema Block (Insert after line 189)

**Task: S-08**

```tsx
// AFTER — S-08: New LocalBusiness schema (insert after last CourseSchema, before Hero section comment)
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cas.jkkn.ac.in/salem#localbusiness",
      "name": "JKKN College of Arts and Science — Salem Region",
      "url": "https://cas.jkkn.ac.in/salem",
      "telephone": "+919345855001",
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.44518,
        "longitude": 77.726549
      },
      "areaServed": {
        "@type": "City",
        "name": "Salem"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "hasMap": "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
    })
  }}
/>
```

---

### New WebPage + SpeakableSpecification Schema Block (Insert after S-08)

**Task: S-09**

```tsx
// AFTER — S-09: New WebPage schema with SpeakableSpecification
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://cas.jkkn.ac.in/salem#webpage",
      "name": "Arts and Science College Near Salem — JKKN CAS",
      "url": "https://cas.jkkn.ac.in/salem",
      "description": "JKKN CAS is a NAAC-accredited arts and science college approximately 58 km from Salem via NH-544. Offers BCA, BBA, B.Com, B.Sc and 30+ more programmes.",
      "datePublished": "2025-01-01",
      "dateModified": "2026-03-28",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://cas.jkkn.ac.in/#website",
        "name": "JKKN College of Arts and Science",
        "url": "https://cas.jkkn.ac.in"
      },
      "about": {
        "@type": "CollegeOrUniversity",
        "@id": "https://cas.jkkn.ac.in/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cas.jkkn.ac.in" },
          { "@type": "ListItem", "position": 2, "name": "Salem", "item": "https://cas.jkkn.ac.in/salem" }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".aeo-snippet-primary", ".aeo-distance-answer", ".faq-answer-voice"]
      }
    })
  }}
/>
```

---

## 3. Dependency Graph

```
START
│
├── [INDEPENDENT — run in parallel]
│   ├── M-01 (meta desc fix)
│   ├── M-02 (OG desc fix)
│   ├── M-03 (Twitter desc fix)
│   ├── C-01 (hero stat distance)
│   ├── C-02 (hero stat programmes count)
│   ├── C-03 (distance card)
│   ├── C-04 (route header)
│   ├── C-05 (commute card)
│   ├── C-06 (railway station)
│   ├── F-01 (FAQ Q1 rewrite)
│   ├── F-02 (FAQ Q2 rewrite) ← fixes distance bug in FAQ
│   ├── F-03 (FAQ Q3 rewrite)
│   ├── F-04 (FAQ Q5 trim)
│   ├── F-05 (FAQ Q6 rewrite)
│   ├── F-06 (FAQ Q8 rewrite)
│   ├── F-07 (FAQ Q9 trim)
│   ├── F-08 (FAQ Q10 trim)
│   ├── S-02 (CourseSchema B.Sc distance fix)
│   ├── S-03 (CourseSchema BBA distance fix)
│   ├── S-08 (LocalBusiness schema — new)
│   ├── T-01 (sitemap verify)
│   ├── T-02 (robots.txt verify)
│   ├── T-03 (301 redirect verify)
│   ├── T-09 (GBP Salem update)
│   ├── L-01 (UGC link)
│   ├── L-02 (NAAC link)
│   ├── L-03 (Periyar Uni link)
│   ├── L-04 (placements internal link)
│   ├── L-05 (facilities internal link)
│   ├── L-06 (admissions internal link)
│   └── L-07 (address element)
│
├── S-01 (CollegeOrUniversity schema enhancement)
│   └── S-04 (CourseSchema B.Sc provider)
│   └── S-05 (CourseSchema B.Com provider)
│   └── S-06 (CourseSchema BBA provider)
│   └── S-07 (CourseSchema BCA provider)
│
├── C-01 → C-16 (founding year stat card — C-01 must exist first)
│
├── F-01 through F-08 → F-09 (CSS class — FAQs must be rewritten first)
│
├── C-07, C-08 (snippet paragraphs) → C-11 (About section ordering)
│   └── C-11 → C-12 → C-13 → C-14 → C-15 (sequential blocks in About section)
│
├── F-09 (faq-answer-voice class) ─────┐
│   C-07 (aeo-snippet-primary class) ──┤→ S-09 (WebPage + Speakable schema — CSS classes must exist)
│   C-08 (aeo-distance-answer class) ──┘
│
└── ALL tasks above deployed live
    └── T-07 (grep verification — zero "45 km" instances)
        └── T-08 (Rich Results Test)
            └── T-04 (GSC submit for indexing)
                └── T-05 (Bing submit)
                    └── T-06 (tamilnaducolleges.org domain update)

── C-17 (author attribution) — independent, add anytime
```

---

## 4. Effort Summary

| Category | Tasks | Total Effort |
|----------|-------|-------------|
| META | M-01, M-02, M-03, M-04 | 11 min |
| CONTENT — Bug Fixes | C-01, C-02, C-03, C-04, C-05, C-06 | 18 min |
| CONTENT — New Blocks | C-07, C-08, C-09, C-10 | 80 min |
| CONTENT — AI Citation | C-11, C-12, C-13, C-14, C-15 | 55 min |
| CONTENT — E-E-A-T | C-16, C-17 | 18 min |
| FAQ — Rewrites | F-01, F-02, F-03, F-04, F-05, F-06, F-07, F-08 | 64 min |
| FAQ — CSS Class | F-09 | 5 min |
| SCHEMA — Enhancement | S-01 | 25 min |
| SCHEMA — Distance Fixes | S-02, S-03 | 6 min |
| SCHEMA — Provider Links | S-04, S-05, S-06, S-07 | 25 min |
| SCHEMA — New Blocks | S-08, S-09 | 30 min |
| LINKS | L-01, L-02, L-03, L-04, L-05, L-06, L-07 | 38 min |
| TECHNICAL | T-01, T-02, T-03, T-04, T-05, T-06, T-07, T-08, T-09 | 105 min |
| **TOTAL** | **42 tasks** | **~480 min (~8 hours)** |

### Breakdown by Phase

| Phase | Tasks Included | Effort | Blocking? |
|-------|---------------|--------|-----------|
| Phase 1 — Critical Fixes (P0) | M-01, M-02, M-03, C-01, C-02, C-03, C-04, C-05, C-06, F-02, S-02, S-03, T-01, T-02, T-03, T-07 | ~90 min | Yes — do not index before complete |
| Phase 2 — Content Optimization (P1) | C-07, C-08, C-09, C-10, C-11–C-15, C-16, C-17, F-01, F-03–F-09, L-01–L-07 | ~250 min | No — deploy when ready |
| Phase 3 — Schema and Technical (P2) | S-01, S-04–S-09, T-08, T-09 | ~100 min | No — deploy after Phase 1 |
| Phase 4 — Monitoring (P3) | T-04, T-05, T-06 | ~40 min | Yes — after Phase 1+2+3 live |

---

## 5. Implementation Order

> Numbered sequence for single-developer execution. Tasks at the same number can be done simultaneously.

```
1.  M-01  Fix meta description distance (line 43)
2.  M-02  Fix OG description distance (lines 57–58)
3.  M-03  Fix Twitter description distance (line 74)
4.  C-01  Fix hero stat card distance (line 221)
5.  C-02  Fix hero stat card programme count (line 222)
6.  C-03  Fix distance display card (line 283)
7.  C-04  Fix route header (line 806)
8.  C-05  Fix "Easy Commute" card (line 355)
9.  C-06  Fix railway station entry (line 829)
10. F-02  Rewrite FAQ Q2 answer — distance fix + voice trim (line 86)
11. S-02  Fix CourseSchema B.Sc description (line 160)
12. S-03  Fix CourseSchema BBA description (line 176)
13. T-07  Grep verify: zero "45 km", "45km", "40-50 km" remain — GATE CHECK
        — If any remain, fix before proceeding
14. T-01  Verify /salem in sitemap
15. T-02  Verify robots.txt not blocking /salem
16. T-03  Verify 301 redirect on old domain
    — [Phase 1 complete — page safe to deploy]

17. F-01  Rewrite FAQ Q1 (line 82)
18. F-03  Rewrite FAQ Q3 (line 90)
19. F-04  Trim FAQ Q5 (line 98)
20. F-05  Rewrite FAQ Q6 (line 102)
21. F-06  Rewrite FAQ Q8 (line 109)
22. F-07  Trim FAQ Q9 (line 113)
23. F-08  Trim FAQ Q10 (line 117)
24. F-09  Add faq-answer-voice CSS class to AccordionContent (line 1027)
25. S-01  Replace CollegeOrUniversity schema — full enhancement (lines 131–157)
26. S-04  Add provider to CourseSchema B.Sc (line 158)
27. S-05  Add provider to CourseSchema B.Com (line 166)
28. S-06  Add provider to CourseSchema BBA (line 174)
29. S-07  Add provider to CourseSchema BCA (line 182)
30. S-08  Add LocalBusiness schema block (after line 189)
31. C-07  Add primary paragraph snippet section (after line 214, class aeo-snippet-primary)
32. C-08  Add distance answer paragraph (inside distance section, class aeo-distance-answer)
33. S-09  Add WebPage + SpeakableSpecification schema (after S-08, CSS classes now exist)
34. C-09  Add programmes list snippet block (after line 383)
35. C-10  Add comparison table snippet (end of Why Choose section, after line 369)
36. C-11  Add AI citation Block A — About JKKN CAS section
37. C-12  Add AI citation Block B — Programmes paragraph
38. C-13  Add AI citation Block C — Placements paragraph
39. C-14  Add AI citation Block D — Accessibility paragraph
40. C-15  Add AI citation Block E — Comparison paragraph
41. C-16  Add founding year stat card (line 216 stats grid)
42. C-17  Add author attribution line (before </main>)
43. L-01  Convert UGC badge to anchor link (line 261)
44. L-02  Convert NAAC badge to anchor link (line 264)
45. L-03  Convert Periyar University to anchor link (line 271)
46. L-04  Add /placements internal link (Placement section)
47. L-05  Add /facilities internal link (Campus section)
48. L-06  Add /admissions internal link (Admission section)
49. L-07  Add structured <address> element (before </main>)
    — [Phase 2 + Phase 3 complete — deploy to production]

50. T-08  Run Google Rich Results Test — validate all schema
51. T-09  Update GBP: add Salem to served areas + create Salem post
52. T-04  GSC: URL Inspection → Request Indexing for /salem
53. T-05  Bing Webmaster Tools: submit /salem
54. T-06  Contact tamilnaducolleges.org: update domain listing
    — [Phase 4 complete — monitoring begins]
```

---

## Verification Checklist (Post-Implementation)

| Check | Method | Pass Condition |
|-------|--------|---------------|
| Zero distance bugs remain | Grep `"45 km\|45km\|40-50 km"` in page.tsx | 0 matches |
| Meta description ≤155 chars | Character count | 143 chars — PASS |
| OG description ≤155 chars | Character count | 112 chars — PASS |
| Twitter description ≤155 chars | Character count | 90 chars — PASS |
| CollegeOrUniversity schema has @id | Rich Results Test | @id present |
| FAQSchema renders all 10 FAQs | Rich Results Test | 10 questions shown |
| LocalBusiness schema valid | Rich Results Test | No errors |
| WebPage + speakable schema valid | Rich Results Test | cssSelector present |
| CSS classes present in DOM | Browser DevTools | `.aeo-snippet-primary`, `.aeo-distance-answer`, `.faq-answer-voice` found |
| /salem in sitemap | View sitemap URL | Entry exists with priority 0.8 |
| robots.txt not blocking /salem | Check public/robots.txt | No Disallow for /salem |
| Page indexed | GSC URL Inspection | "URL is on Google" |

---

*Decompose generated: 2026-03-28 | Source file: `src/app/salem/page.tsx` (1077 lines) | 42 atomic tasks | Total effort: ~8 hours | AEO: 23/100 → 45/100*
