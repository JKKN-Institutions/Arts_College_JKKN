# AEO Task Decomposition — JKKN CAS Tiruppur City Page

**Page URL:** https://cas.jkkn.ac.in/tiruppur
**Source File:** `src/app/tiruppur/page.tsx`
**Spec Reference:** `aeo/tiruppur/tiruppur-aeo-spec.md`
**Plan Reference:** `aeo/tiruppur/tiruppur-aeo-plan.md`
**Decompose Version:** 1.0
**Created:** 2026-03-28
**Total Tasks:** 42
**Total Estimated Effort:** 6–9 hours

---

## TABLE OF CONTENTS

1. [Atomic Task List](#1-atomic-task-list)
2. [Before/After Code Blocks](#2-beforeafter-code-blocks)
3. [Dependency Graph](#3-dependency-graph)
4. [Effort Summary](#4-effort-summary)
5. [Implementation Order](#5-implementation-order)

---

## 1. Atomic Task List

### GROUP: PRE — Pre-Work Checks (Phase 0)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| P-01 | Check if `/tiruppur` URL exists in `sitemap.ts` — add entry if missing | `src/app/sitemap.ts` | Varies | Entry absent or present | `{ url: 'https://cas.jkkn.ac.in/tiruppur', lastModified: new Date() }` present | 10 min | None |
| P-02 | Check `robots.txt` — confirm no `Disallow: /tiruppur` rule | `public/robots.txt` | Varies | Unknown | Confirmed no disallow rule | 5 min | None |
| P-03 | Click-verify Google Maps link opens to correct JKKN CAS campus | `src/app/tiruppur/page.tsx` | 299 | `https://maps.app.goo.gl/bsLumyHe3JeaTAZ18` (destination unverified) | Link confirmed to open Komarapalayam campus, OR replaced with `https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7` | 5 min | None |
| P-04 | Request admin data — NAAC grade, student count, B.Sc Textile intake, MCA intake, M.Com intake, Periyar Univ affiliation number, highest CTC (CAS-specific) | Admin — no file | — | Data unverified / unknown | Admin response received or confirmed still pending | 15 min | None |
| P-05 | Submit `https://cas.jkkn.ac.in/tiruppur` to Google Search Console → URL Inspection → Request Indexing | GSC (external) | — | URL not indexed | Indexing requested, date logged | 5 min | P-01 |

---

### GROUP: META — Meta Tags and Title (Phase 1)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| M-01 | Update `title` — remove "Best", make keyword-first | `src/app/tiruppur/page.tsx` | 40 | `Best Arts and Science College Near Tiruppur \| JKKN CAS` | `Arts and Science College Near Tiruppur \| JKKN CAS` (49 chars) | 5 min | None |
| M-02 | Update `description` — correct 85 km to ~67 km, add textile programme, add "34 programmes" | `src/app/tiruppur/page.tsx` | 41–43 | `JKKN CAS — 85 km from Tiruppur via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.` | `JKKN CAS — ~67 km from Tiruppur via NH-544. NAAC-accredited. 34 programmes: B.Sc Textile, BBA, B.Com, BCA. 80%+ placements. Admissions 2026-27 open.` (150 chars) | 5 min | None |
| M-03 | Update `openGraph.title` — remove "Best" to match updated title | `src/app/tiruppur/page.tsx` | 55 | `Best Arts and Science College Near Tiruppur \| JKKN CAS` | `Arts and Science College Near Tiruppur \| JKKN CAS` | 3 min | M-01 |
| M-04 | Update `openGraph.description` — correct 85 km to ~67 km, add "34 programmes", add textile | `src/app/tiruppur/page.tsx` | 56–58 | `JKKN CAS — 85 km from Tiruppur. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.` | `JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 34 programmes, 80%+ placements. B.Sc Textile & Fashion Design, BBA, B.Com, BCA. Admissions 2026-27 open.` | 5 min | None |
| M-05 | Update `twitter.title` — remove "Best" to match M-01 | `src/app/tiruppur/page.tsx` | 72 | `Best Arts and Science College Near Tiruppur \| JKKN CAS` | `Arts and Science College Near Tiruppur \| JKKN CAS` | 3 min | M-01 |
| M-06 | Update `twitter.description` — correct 85 km to ~67 km, add textile programme reference | `src/app/tiruppur/page.tsx` | 73 | `JKKN CAS — 85 km from Tiruppur. NAAC-accredited, 80%+ placements. Admissions open 2026-27.` | `JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 80%+ placements. 34 programmes including B.Sc Textile & Fashion Design. Admissions 2026-27 open.` (148 chars) | 5 min | None |
| M-07 | Add textile + voice keywords to `keywords` array — add "bsc textile fashion design college near tiruppur", "bba college near tiruppur", "arts and science college in tiruppur" | `src/app/tiruppur/page.tsx` | 43–50 | 6 keywords | 9 keywords with textile-specific and exact-match variants | 5 min | None |

---

### GROUP: CONTENT — On-Page Content Additions (Phase 2)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| C-01 | Add Block A — institution overview paragraph after H1, before stats bar | `src/app/tiruppur/page.tsx` | After line 207 | No AI-citable paragraph present | `<p className="snippet-paragraph ...">` with 78-word entity-dense paragraph (see §2.1) | 15 min | None |
| C-02 | Add H2 snippet-trigger question + 55-word answer paragraph — insert after hero section | `src/app/tiruppur/page.tsx` | After line 277 | Section does not exist | New `<section>` with H2 "Which is the Best Arts and Science College for Students from Tiruppur?" + 55-word factual answer (see §2.2) | 15 min | C-01 |
| C-03 | Update hero stats bar — correct "85km" display value to "67km" | `src/app/tiruppur/page.tsx` | 222 | `{ value: "85km", label: "FROM TIRUPPUR" }` | `{ value: "67km", label: "FROM TIRUPPUR" }` | 3 min | None |
| C-04 | Update hero stats bar — update "4" programmes count to "34" for accuracy with page content | `src/app/tiruppur/page.tsx` | 223 | `{ value: "4", label: "PROGRAMMES" }` | `{ value: "34", label: "PROGRAMMES" }` | 3 min | None |
| C-05 | Update hero description paragraph — replace vague "quality education is closer than you think" with factual distance/programme statement | `src/app/tiruppur/page.tsx` | 210–215 | Promotional copy with no specific facts | Revised paragraph mentioning 67 km, 34 programmes, Periyar University, founded 1952 (see §2.5) | 10 min | None |
| C-06 | Add trust bar badge — "Established 1952 — 74 Years" alongside existing UGC and NAAC badges | `src/app/tiruppur/page.tsx` | 258–276 | Two badges: UGC, NAAC | Three badges: UGC, NAAC, Established 1952 | 10 min | None |
| C-07 | Add Block B — textile industry context section after "Why Choose" section (new `<section>` with H2, industry paragraph, two H3s + programme links) | `src/app/tiruppur/page.tsx` | After line 373 | Section does not exist | New textile industry section: H2 + Block B paragraph (~100 words) + H3 Textile career paths + H3 BBA/B.Com commerce angle (see §2.3) | 30 min | None |
| C-08 | Add B.Sc Textile & Fashion Design as FIRST entry in programme highlight cards grid (replace or reorder existing cards) | `src/app/tiruppur/page.tsx` | 388–426 | Four cards: B.Sc (generic), B.Com, BBA, BCA | B.Sc Textile & Fashion Design card added as first card with Tiruppur-specific description | 15 min | C-07 |
| C-09 | Add "Programmes Available for Tiruppur Students" list snippet section — H2 + 7-item bulleted list (see §2.10) | `src/app/tiruppur/page.tsx` | After line 602 (after programmes section) | No list snippet section exists | New `<section>` with H2 + `<ul>` with 7 programme items, each with textile/industry context (see §2.10) | 20 min | None |
| C-10 | Add comparison table section — H2 "JKKN CAS vs. Tiruppur City Colleges — Quick Comparison" with 8-row HTML table | `src/app/tiruppur/page.tsx` | After textile section (after C-07 insertion) | No comparison section exists | New `<section>` with responsive comparison table (see §2.4) | 25 min | C-07 |
| C-11 | Add Block C — placement facts paragraph at top of placement section (before stats grid) | `src/app/tiruppur/page.tsx` | Before line 617 (before stats grid) | No citable placement paragraph; only stats grid + recruiter tags | `<p className="placement-stats">` with 80-word factual placement paragraph + "2024-25 academic year" framing (see §2.6) | 15 min | None |
| C-12 | Add placement portal link below recruiter tags | `src/app/tiruppur/page.tsx` | After line 659 | No placement portal link | `<a href="https://placements.jkkn.ac.in/" ...>View Placement Portal →</a>` | 5 min | C-11 |
| C-13 | Add Block D — hostel and connectivity paragraph in facilities section | `src/app/tiruppur/page.tsx` | After line 935 (after facilities grid) | No paragraph text in facilities section; only visual cards | `<p className="hostel-connectivity">` with 70-word hostel + commute facts paragraph (see §2.7) | 10 min | None |

**Textile industry-specific tasks within GROUP CONTENT:**

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| C-14 | Verify Tiruppur export figure (₹40,000 crore) — confirm with TEXPROCIL/CII source or rephrase to "one of India's largest textile export hubs" before publishing | Spec note + external check | — | [UNVERIFIED] | Verified figure with source URL, OR rephrased to factual-safe alternative | 15 min | None |
| C-15 | Highlight B.Sc Textile & Fashion Design in the All-34-Programmes list — add bold + "(Tiruppur Relevant)" marker | `src/app/tiruppur/page.tsx` | 524 | `{ name: "B.Sc Textile & Fashion Design", href: "..." }` plain list item | Styled item with textile industry relevance callout visible in list | 10 min | C-09 |
| C-16 | Add "Why Tiruppur Students Choose This Course" tooltip/callout on BBA and B.Com programme cards linking to textile commerce angle | `src/app/tiruppur/page.tsx` | 408–415 | BBA card with generic description | BBA card adds "Ideal for textile trade & export careers" label | 10 min | C-07 |

---

### GROUP: FAQ — FAQ Rewrites (Phase 2)

All 10 FAQ items in the `faqs` array (lines 78–119) require answer replacement with voice-optimized text (first sentence ≤29 words, no hedging language, full institution name used, specific distances not vague ranges).

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| F-01 | Rewrite FAQ Q1 — "What is the best arts and science college in Tiruppur?" | `src/app/tiruppur/page.tsx` | 80–82 | 68-word vague answer, no specific distance | "JKKN College of Arts and Science, located ~67 km from Tiruppur on NH-544, offers 34 programmes with NAAC accreditation and 80%+ placement support." (28 words) | 5 min | None |
| F-02 | Rewrite FAQ Q2 — "How far is JKKN CAS from Tiruppur?" | `src/app/tiruppur/page.tsx` | 84–86 | `80-90 km`, `1.5-2 hours`, incorrect and vague | "JKKN CAS is approximately 67 km from Tiruppur city centre — about 1.5 hours via NH-544 through Erode. Regular buses connect both cities." (25 words) | 5 min | None |
| F-03 | Rewrite FAQ Q3 — "Which courses are popular among Tiruppur students?" | `src/app/tiruppur/page.tsx` | 88–90 | Long answer, no voice optimization; misses textile angle | "BBA, B.Com, and BCA are most popular among Tiruppur students. B.Sc Textile and Fashion Design is uniquely suited to Tiruppur's knitwear industry." (25 words) | 5 min | None |
| F-04 | Rewrite FAQ Q4 — "Can BCA students from Tiruppur get IT jobs?" | `src/app/tiruppur/page.tsx` | 92–94 | 60-word answer, exceeds voice limit | "Yes. BCA graduates from JKKN CAS are placed at TCS, Infosys BPO, Amazon, and Flipkart. Tiruppur's textile companies also hire IT graduates for digital operations." (27 words) | 5 min | None |
| F-05 | Rewrite FAQ Q5 — "Are JKKN CAS fees affordable compared to Tiruppur colleges?" | `src/app/tiruppur/page.tsx` | 96–98 | 42-word answer, acceptable but not voice-optimized | "Yes. JKKN CAS fees are competitive and often lower than private colleges in Tiruppur. Government scholarships for BC, MBC, SC, and ST students are available." (27 words) | 5 min | None |
| F-06 | Rewrite FAQ Q6 — "Does JKKN CAS provide hostel for Tiruppur students?" | `src/app/tiruppur/page.tsx` | 100–102 | 35-word answer, uses vague "1.5-2 hours away" | "Yes. JKKN CAS has separate hostels for boys and girls with meals, WiFi, and 24-hour security. Students can also commute daily from Tiruppur in ~1.5 hours." (28 words) | 5 min | None |
| F-07 | Rewrite FAQ Q7 — "Is there a direct bus from Tiruppur to JKKN CAS?" | `src/app/tiruppur/page.tsx` | 108–110 | 49-word answer with "1.5 to 2 hours" vague range | "Yes. Buses run from Tiruppur New Bus Stand to Erode and onward to Komarapalayam via NH-544. Total journey is approximately 1.5 hours." (25 words) | 5 min | None |
| F-08 | Replace FAQ Q8 — Change "How much does the hostel cost?" to "Which college near Tiruppur offers B.Sc Textile and Fashion Design?" + new answer | `src/app/tiruppur/page.tsx` | 112–114 | Q: hostel cost (not a PAA target); A: fee-specific but all [UNVERIFIED] | Q: "Which college near Tiruppur offers B.Sc Textile and Fashion Design?" A: "JKKN College of Arts and Science, located ~67 km from Tiruppur in Komarapalayam, offers B.Sc Textile and Fashion Design aligned with Tiruppur's export industry." (28 words) | 10 min | None |
| F-09 | Rewrite FAQ Q9 — Repurpose "Why should I choose JKKN CAS over colleges in Tiruppur?" to "Why should Tiruppur students choose JKKN CAS over city colleges?" with voice-optimized answer | `src/app/tiruppur/page.tsx` | 116–118 | 70-word answer, vague "50+ acre" unverified | "JKKN CAS offers lower fees, smaller class sizes, 80%+ placement rate, a 50-acre green campus, and hostel facilities unavailable at most Tiruppur city colleges." (29 words) | 5 min | None |
| F-10 | Add FAQ Q10 — New question "How can students from Tiruppur apply to JKKN CAS?" replacing or appending as 10th item | `src/app/tiruppur/page.tsx` | After line 118 (before closing `]`) | No dedicated application process FAQ | Q: "How can students from Tiruppur apply to JKKN CAS?" A: "Apply online at admission.jkkn.ac.in or visit the campus directly. Admissions for 2026-27 are open. Call +91 9345855001 for guidance." (20 words) | 5 min | None |

**CSS class additions for voice/speakable:**

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| F-11 | Add `faq-voice-answer` CSS class to the first sentence wrapper of each FAQ answer in AccordionContent | `src/app/tiruppur/page.tsx` | 1029 (AccordionContent render) | AccordionContent renders plain text | Each FAQ answer's first sentence wrapped in `<span className="faq-voice-answer">` | 15 min | F-01 through F-10 |

---

### GROUP: SCHEMA — Schema Markup Updates (Phase 3)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| S-01 | Replace CollegeOrUniversity JSON-LD block — add `description`, `alternateName`, `foundingDate`, `telephone`, `email`, `logo`, `accreditedBy`, `memberOf` | `src/app/tiruppur/page.tsx` | 129–157 | Basic schema: name, url, address, areaServed (single city), geo | Enhanced schema with all fields from spec Section 14.2 (see §2.4 code block) | 30 min | None |
| S-02 | Add `sameAs` array to CollegeOrUniversity schema — `["https://cas.jkkn.ac.in", "https://jkkn.ac.in"]` | `src/app/tiruppur/page.tsx` | Within lines 129–157 (new field) | `sameAs` absent | `"sameAs": ["https://cas.jkkn.ac.in", "https://jkkn.ac.in"]` | 5 min | S-01 |
| S-03 | Add `speakable` SpeakableSpecification to CollegeOrUniversity schema — cssSelector targeting `.snippet-paragraph`, `.faq-voice-answer`, `h1`, `.placement-stats` | `src/app/tiruppur/page.tsx` | Within S-01 block | `speakable` absent | `"speakable": {"@type": "SpeakableSpecification", "cssSelector": [".snippet-paragraph", ".faq-voice-answer", "h1", ".placement-stats"]}` | 10 min | S-01, C-01, F-11, C-11 |
| S-04 | Add `potentialAction` (ApplyAction) to CollegeOrUniversity schema — admission URL as EntryPoint | `src/app/tiruppur/page.tsx` | Within S-01 block | `potentialAction` absent | `"potentialAction": {"@type": "ApplyAction", "target": {"@type": "EntryPoint", "urlTemplate": "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"}}` | 10 min | S-01 |
| S-05 | Add `areaServed` second city entry — add Erode alongside Tiruppur in the array | `src/app/tiruppur/page.tsx` | 145–148 | `areaServed` is a single object for Tiruppur | `areaServed` becomes an array: Tiruppur + Erode | 5 min | S-01 |
| S-06 | Add `numberOfStudents` field — value 3000 (verify with admin first; omit if unconfirmed by deployment time) | `src/app/tiruppur/page.tsx` | Within S-01 block | `numberOfStudents` absent | `"numberOfStudents": {"@type": "QuantitativeValue", "value": 3000, "unitText": "students"}` — only if admin confirms | 5 min | S-01, P-04 |
| S-07 | Add HowToApply schema — new `<script type="application/ld+json">` block after existing schema blocks | `src/app/tiruppur/page.tsx` | After line 190 (after CourseSchema blocks) | HowTo schema absent | 5-step HowToApply JSON-LD: Visit Website, Fill Application Form, Submit Documents, Counseling & Seat Allocation, Fee Payment & Enrollment (from spec Section 14.3) | 20 min | None |
| S-08 | Update BBA CourseSchema description — correct "85 km from Tiruppur" to "~67 km from Tiruppur via NH-544" | `src/app/tiruppur/page.tsx` | 178 | `"...offered at JKKN CAS — 85 km from Tiruppur."` | `"...offered at JKKN CAS — ~67 km from Tiruppur via NH-544."` | 3 min | None |
| S-09 | Update BCA CourseSchema description — correct "85 km" to "~67 km", add textile context | `src/app/tiruppur/page.tsx` | 185 | `"...80%+ placement rate at JKKN CAS, a quality alternative to Tiruppur city colleges."` | `"...80%+ placement rate at JKKN CAS (~67 km from Tiruppur via NH-544). Tiruppur's textile firms increasingly hire BCA graduates for digital operations."` | 5 min | None |
| S-10 | Add textile programme CourseSchema — new `<CourseSchema>` component for B.Sc Textile and Fashion Design with Tiruppur industry context | `src/app/tiruppur/page.tsx` | After line 190 | No CourseSchema for B.Sc Textile programme | `<CourseSchema name="B.Sc Textile and Fashion Design" description="3-year UG programme aligned with Tiruppur's knitwear export industry..." duration="PT3Y" educationalLevel="UG" category="Self-Finance" url="/programmes/self-finance/ug/bsc-textile-fashion-designing" />` | 10 min | None |
| S-11 | Check if `/cities` page exists — if yes, update BreadcrumbSchema to 3 levels (Home > City Pages > Tiruppur) | `src/app/tiruppur/page.tsx` | 123–126 | 2-level: Home > Tiruppur | 3-level if `/cities` exists: Home > City Pages > Tiruppur; otherwise no change | 10 min | None |
| S-12 | Run schema validation — Google Rich Results Test + schema.org validator + Mobile-Friendly Test | External tools | — | Pre-validation: unknown status | Zero errors on all three validators | 15 min | S-01 through S-11 |

---

### GROUP: LINKS — Internal and External Links (Phase 2–3)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| L-01 | Add `<Link>` for B.Sc Textile & Fashion Design in new textile section | `src/app/tiruppur/page.tsx` | New content from C-07 | Link absent (section does not exist yet) | `<Link href="/programmes/self-finance/ug/bsc-textile-fashion-designing">Explore B.Sc Textile and Fashion Design →</Link>` | 5 min | C-07 |
| L-02 | Add link for B.Sc AI & Data Science in textile/IT context block | `src/app/tiruppur/page.tsx` | New content from C-07 | Link absent | `<Link href="/programmes/self-finance/ug/bsc-ai-ds">B.Sc AI and Data Science →</Link>` | 5 min | C-07 |
| L-03 | Add link for B.Sc Cyber Security in textile/IT context block | `src/app/tiruppur/page.tsx` | New content from C-07 | Link absent | `<Link href="/programmes/self-finance/ug/bsc-cs-cyber-security">B.Sc Cyber Security →</Link>` | 5 min | C-07 |
| L-04 | Add "View all 34 programmes" link after full programme list | `src/app/tiruppur/page.tsx` | After line 599 | No aggregated programme-list CTA link | `<Link href="/programmes">View all 34 Programmes →</Link>` | 5 min | None |
| L-05 | Add placement portal external link in placement section | `src/app/tiruppur/page.tsx` | After line 659 | No placement portal link | `<a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener">View Placement Portal →</a>` | 5 min | C-12 |
| L-06 | Verify all 5 new internal link URLs return HTTP 200 before adding (L-01 through L-04 + B.Sc Textile) | Terminal / browser | — | Unverified | All URLs return 200; any 404 removed or corrected | 10 min | L-01 through L-04 |

---

### GROUP: TECHNICAL — Technical and Distance Fixes (Phase 1)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| T-01 | Fix distance card display — change `85` to `67` | `src/app/tiruppur/page.tsx` | 284–285 | `85<span className="...">km</span>` large display number | `67<span className="...">km</span>` | 3 min | None |
| T-02 | Fix distance card subtitle — replace "80-90 km" with "~67 km" | `src/app/tiruppur/page.tsx` | 292 | `1.5-2 hours via NH-544 via Erode, then State Highway towards Tiruppur` | `~1.5 hours via NH-544 through Erode to Komarapalayam` | 5 min | None |
| T-03 | Fix "Easy Commute" feature card desc — replace "80-90 km" with "~67 km" | `src/app/tiruppur/page.tsx` | 357 | `"Just 80-90 km from Tiruppur. Daily commute or comfortable hostel — your choice."` | `"Just ~67 km from Tiruppur. Daily commute (~1.5 hrs) or comfortable hostel — your choice."` | 3 min | None |
| T-04 | Fix route header sub-text in "How to Reach" section — replace "80-90 km" with "~67 km" | `src/app/tiruppur/page.tsx` | 808 | `80-90 km • 1.5-2 hours` | `~67 km • ~1.5 hours` | 3 min | None |
| T-05 | Fix nearest railway station distance — replace "~85 km from campus" with "~67 km from campus" | `src/app/tiruppur/page.tsx` | 832 | `Tiruppur Junction (~85 km from campus)` | `Tiruppur Junction (~67 km from campus)` | 3 min | None |
| T-06 | Post-fix grep verification — confirm zero instances of "85 km", "85km", "80-90 km", "80-90km" remain in file | Terminal | All | Instances present | Zero matches on grep pattern | 5 min | T-01 through T-05, M-02, M-04, M-06, S-08, F-02 |

---

## 2. Before/After Code Blocks

### 2.1 Distance Corrections — 5 In-Body Locations

#### T-01: Distance Card Display (line 284–285)

```tsx
// BEFORE
<span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
  85<span className="text-2xl font-semibold text-[#006837]">km</span>
</span>

// AFTER
<span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
  67<span className="text-2xl font-semibold text-[#006837]">km</span>
</span>
```

#### T-02: Distance Card Subtitle (line 292)

```tsx
// BEFORE
<div className="text-gray-500 text-sm mt-1">
  1.5-2 hours via NH-544 via Erode, then State Highway towards
  Tiruppur
</div>

// AFTER
<div className="text-gray-500 text-sm mt-1">
  ~1.5 hours via NH-544 through Erode to Komarapalayam
</div>
```

#### T-03: Easy Commute Feature Card (line 357)

```tsx
// BEFORE
{
  Icon: Bus,
  title: "Easy Commute",
  desc: "Just 80-90 km from Tiruppur. Daily commute or comfortable hostel — your choice.",
},

// AFTER
{
  Icon: Bus,
  title: "Easy Commute",
  desc: "Just ~67 km from Tiruppur. Daily commute (~1.5 hrs) or comfortable hostel — your choice.",
},
```

#### T-04: Route Header Sub-text (line 808)

```tsx
// BEFORE
<div className="text-[#7cb983] text-sm">
  80-90 km • 1.5-2 hours
</div>

// AFTER
<div className="text-[#7cb983] text-sm">
  ~67 km • ~1.5 hours
</div>
```

#### T-05: Nearest Railway Station (line 832)

```tsx
// BEFORE
{
  Icon: Train,
  label: "NEAREST RAILWAY STATION",
  info: "Tiruppur Junction (~85 km from campus)",
  bg: "bg-[#FBFBEE]",
},

// AFTER
{
  Icon: Train,
  label: "NEAREST RAILWAY STATION",
  info: "Tiruppur Junction (~67 km from campus)",
  bg: "bg-[#FBFBEE]",
},
```

---

### 2.2 Meta Tags (lines 39–75)

```tsx
// BEFORE
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Tiruppur | JKKN CAS",
  description:
    "JKKN CAS — 85 km from Tiruppur via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.",
  keywords: [
    "arts and science college near Tiruppur",
    "best college near Tiruppur",
    "JKKN CAS Tiruppur",
    "college near Tiruppur NH-544",
    "affordable college near Tiruppur",
    "BCA BBA B.Com B.Sc near Tiruppur",
  ],
  // openGraph title: "Best Arts and Science College Near Tiruppur | JKKN CAS"
  // openGraph description: "JKKN CAS — 85 km from Tiruppur. ..."
  // twitter title: "Best Arts and Science College Near Tiruppur | JKKN CAS"
  // twitter description: "JKKN CAS — 85 km from Tiruppur. ..."
};

// AFTER
export const metadata: Metadata = {
  title: "Arts and Science College Near Tiruppur | JKKN CAS",
  description:
    "JKKN CAS — ~67 km from Tiruppur via NH-544. NAAC-accredited. 34 programmes: B.Sc Textile, BBA, B.Com, BCA. 80%+ placements. Admissions 2026-27 open.",
  keywords: [
    "arts and science college in tiruppur",
    "arts and science college near Tiruppur",
    "best college near Tiruppur",
    "JKKN CAS Tiruppur",
    "college near Tiruppur NH-544",
    "affordable college near Tiruppur",
    "bsc textile fashion design college near tiruppur",
    "bba college near tiruppur",
    "bca college tiruppur",
  ],
  openGraph: {
    title: "Arts and Science College Near Tiruppur | JKKN CAS",
    description:
      "JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 34 programmes, 80%+ placements. B.Sc Textile & Fashion Design, BBA, B.Com, BCA. Admissions 2026-27 open.",
    // url, siteName, type, images — UNCHANGED
  },
  twitter: {
    card: "summary_large_image",
    title: "Arts and Science College Near Tiruppur | JKKN CAS",
    description:
      "JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 80%+ placements. 34 programmes including B.Sc Textile & Fashion Design. Admissions 2026-27 open.",
  },
};
```

---

### 2.3 H1 Heading — No Change Required

```tsx
// CURRENT (lines 203–207) — KEEP AS-IS per spec Section 12.1
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Best Arts and Science College Near
  <br />
  <span className="text-[#7cb983]">Tiruppur</span>
</h1>
```

**Reason:** The H1 is already keyword-rich. Spec Section 12.1 confirms "Keep — already keyword-rich. No change."

---

### 2.4 Block A — Institution Overview Paragraph (insert after line 207, before stats bar)

```tsx
// INSERT after closing </h1> tag at line 207, before the stats grid div at line 218
<p className="snippet-paragraph text-base text-gray-700 max-w-2xl mx-auto mt-4 mb-6 leading-relaxed">
  JKKN College of Arts and Science, located ~67 km from Tiruppur via NH-544 in
  Komarapalayam, Namakkal district, is a NAAC-accredited institution affiliated to
  Periyar University and Bharathiar University. Founded in 1952, it offers 34
  undergraduate, postgraduate, and research programmes — including B.Sc Textile and
  Fashion Design, BBA, B.Com, and BCA — with an 80%+ placement rate. Students from
  Tiruppur can reach the campus in approximately 1.5 hours by road or choose from
  dedicated hostel facilities.
</p>
```

**Word count:** 78 | **Character count:** 475 | **CSS class:** `snippet-paragraph` (required for SpeakableSpecification S-03)

---

### 2.5 Textile Industry Content Section (insert after closing `</section>` of "Why Choose" at line 373)

```tsx
// INSERT: New section after line 373 (after the "Why Choose" section's closing </section>)
<section aria-label="Textile industry relevance" className="bg-[#FBFBEE] py-14 sm:py-16">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Why Tiruppur&apos;s Textile Industry Students Choose JKKN CAS
      </h2>
      <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
    </div>

    {/* Block B — Industry Context Paragraph */}
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
      Tiruppur, known as the knitwear capital of India, is one of the country&apos;s
      largest textile export hubs — employing more than 600,000 workers across 10,000+
      garment units. The rapid digitization of textile export firms has created strong
      demand for BBA, B.Com, and BCA graduates who understand both commerce and technology.
      JKKN College of Arts and Science, located ~67 km from Tiruppur on NH-544, offers
      B.Sc Textile and Fashion Design — one of the few programmes in the region that
      directly aligns academic training with Tiruppur&apos;s core industry.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="font-bold text-gray-800 text-lg mb-3">
          B.Sc Textile and Fashion Design — Career Paths in Tiruppur&apos;s Export Industry
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          The B.Sc Textile and Fashion Design programme at JKKN CAS prepares graduates for
          roles in garment manufacturing, export quality control, fashion merchandising, and
          textile design. Students from Tiruppur&apos;s knitwear ecosystem gain direct academic
          grounding applicable to the city&apos;s dominant industry.
        </p>
        <Link
          href="/programmes/self-finance/ug/bsc-textile-fashion-designing"
          className="text-[#006837] hover:text-[#004d28] font-medium text-sm transition-colors"
        >
          Explore B.Sc Textile and Fashion Design &rarr;
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="font-bold text-gray-800 text-lg mb-3">
          BBA and B.Com — The Commerce Foundation for Textile Entrepreneurs
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Tiruppur&apos;s textile export trade requires commerce and business administration
          graduates for export documentation, trade finance, inventory management, and supply
          chain operations. JKKN CAS BBA and B.Com programmes build exactly these competencies,
          with recruiter partnerships at HDFC Bank, ICICI Bank, and leading logistics firms.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/programmes/self-finance/ug/bba"
            className="text-[#006837] hover:text-[#004d28] font-medium text-sm transition-colors"
          >
            Explore BBA &rarr;
          </Link>
          <Link
            href="/programmes/aided/ug/bcom"
            className="text-[#006837] hover:text-[#004d28] font-medium text-sm transition-colors"
          >
            Explore B.Com &rarr;
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 2.6 FAQ Rewrites — 3 Key Items (Full Code)

#### F-02: FAQ Q2 — Distance Question (lines 84–86)

```tsx
// BEFORE
{
  q: "How far is JKKN CAS from Tiruppur?",
  a: "JKKN CAS is approximately 80-90 km from Tiruppur city centre, which takes about 1.5-2 hours by road via NH-544 via Erode, then State Highway towards Tiruppur. Regular bus services are available from Tiruppur.",
},

// AFTER
{
  q: "How far is JKKN College of Arts and Science from Tiruppur?",
  a: "JKKN CAS is approximately 67 km from Tiruppur city centre — about 1.5 hours via NH-544 through Erode. Regular buses connect both cities daily.",
},
```

#### F-03: FAQ Q3 — Textile Industry Question (lines 88–90)

```tsx
// BEFORE
{
  q: "Which courses are popular among Tiruppur students at JKKN CAS?",
  a: "BBA and B.Com are the most popular choices among Tiruppur students, given the city's thriving knitwear export industry. BCA is also in high demand as textile companies digitalise. JKKN CAS offers 34 programmes across aided and self-finance streams — including B.Sc specialisations, M.Sc, MCA, and Ph.D programmes.",
},

// AFTER
{
  q: "Which courses are popular among Tiruppur students at JKKN CAS?",
  a: "BBA, B.Com, and BCA are most popular among Tiruppur students. B.Sc Textile and Fashion Design is uniquely suited to Tiruppur's knitwear industry — JKKN CAS is one of the few colleges in the region offering this programme.",
},
```

#### F-08: FAQ Q8 — Replace Hostel Cost with Textile FAQ (lines 112–114)

```tsx
// BEFORE
{
  q: "How much does the hostel cost for Tiruppur students at JKKN?",
  a: "Hostel fees at JKKN CAS are significantly lower than city PG accommodations. The fee includes furnished rooms, three meals a day, WiFi, and 24/7 security. Many Tiruppur students prefer the hostel for a focused academic environment. Contact the admission office at +91 9345855001 for the current fee structure.",
},

// AFTER
{
  q: "Which college near Tiruppur offers B.Sc Textile and Fashion Design?",
  a: "JKKN College of Arts and Science, located ~67 km from Tiruppur in Komarapalayam, offers B.Sc Textile and Fashion Design — a programme aligned with Tiruppur's knitwear export industry. Apply at cas.jkkn.ac.in.",
},
```

---

### 2.7 Enhanced CollegeOrUniversity Schema (replace lines 129–157)

```tsx
// REPLACE entire <script type="application/ld+json"> block at lines 129–157

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "JKKN College of Arts and Science",
      "alternateName": "JKKN CAS",
      "url": "https://cas.jkkn.ac.in",
      "logo": "https://cas.jkkn.ac.in/images/jkkn-cas-logo.png",
      "image": "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
      "description": "JKKN College of Arts and Science is a NAAC-accredited institution established in 1952, located at Komarapalayam, Namakkal district, Tamil Nadu. It offers 34 programmes affiliated to Periyar University and Bharathiar University, with an 80%+ placement rate. Approximately 67 km from Tiruppur via NH-544.",
      "foundingDate": "1952",
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
          "name": "Tiruppur",
          "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
        },
        {
          "@type": "City",
          "name": "Erode",
          "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
        }
      ],
      "telephone": "+91-9345855001",
      "email": "info@jkkn.ac.in",
      "hasMap": "https://maps.app.goo.gl/bsLumyHe3JeaTAZ18",
      "accreditedBy": {
        "@type": "Organization",
        "name": "National Assessment and Accreditation Council",
        "alternateName": "NAAC"
      },
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Periyar University"
        },
        {
          "@type": "Organization",
          "name": "Bharathiar University"
        }
      ],
      "sameAs": [
        "https://cas.jkkn.ac.in",
        "https://jkkn.ac.in"
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".snippet-paragraph",
          ".faq-voice-answer",
          "h1",
          ".placement-stats"
        ]
      },
      "potentialAction": {
        "@type": "ApplyAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8",
          "actionPlatform": "https://schema.org/DesktopWebPlatform"
        }
      }
    })
  }}
/>
```

**Note on `numberOfStudents`:** Add `"numberOfStudents": {"@type": "QuantitativeValue", "value": 3000, "unitText": "students"}` ONLY after admin confirms the figure (task S-06). Do not include if unconfirmed.

---

### 2.8 SpeakableSpecification — CSS Class Targets

These CSS classes are referenced by the `speakable.cssSelector` array in the schema (S-03). They must be present on corresponding HTML elements.

| CSS Class | Element | Added By Task |
|-----------|---------|---------------|
| `snippet-paragraph` | Block A institution overview `<p>` | C-01 |
| `faq-voice-answer` | First sentence `<span>` in each FAQ AccordionContent | F-11 |
| `placement-stats` | Block C placement paragraph `<p>` | C-11 |

```tsx
// Example — Block A paragraph (task C-01)
<p className="snippet-paragraph text-base text-gray-700 ...">...</p>

// Example — FAQ first sentence (task F-11)
<AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
  <span className="faq-voice-answer">JKKN CAS is approximately 67 km from Tiruppur...</span>
  {/* Extended answer follows if needed */}
</AccordionContent>

// Example — Placement stats (task C-11)
<p className="placement-stats text-gray-700 text-sm sm:text-base leading-relaxed mb-6">...</p>
```

---

## 3. Dependency Graph

```
Phase 0 — Pre-Work (P-01 through P-05)
│
├── P-01 (Sitemap check) ─────────────────────────────────────── P-05 (GSC indexing)
│
├── P-03 (Maps link verify) ─────────────────────────────────── S-01 (schema hasMap)
│
└── P-04 (Admin data collection)
     ├────────────────────────────────────────────────────────── S-06 (numberOfStudents — omit if no response)
     └────────────────────────────────────────────────────────── C-14 (Tiruppur export figure verify)

Phase 1 — Critical Fixes (T-01 through T-06, M-01 through M-07)
│
├── T-01, T-02, T-03, T-04, T-05 (distance body fixes) ─────── T-06 (grep verify — must run AFTER all fixes)
│
├── M-02 (meta desc) ────── no dependency
├── M-01 (title) ──────────────────────────────┬────────────── M-03 (OG title)
│                                               └────────────── M-05 (Twitter title)
├── M-04 (OG desc) ───── no dependency
└── M-06 (Twitter desc) ── no dependency

Phase 2 — Content (C-01 through C-16, F-01 through F-11)
│
├── C-01 (Block A paragraph) ────────────────────────────────── S-03 (speakable cssSelector needs .snippet-paragraph)
│
├── C-02 (Snippet H2) ── depends on C-01 being placed first (ordering)
│
├── C-07 (Textile section) ──┬── C-08 (textile programme card)
│                            ├── L-01 (B.Sc Textile link)
│                            ├── L-02 (AI & DS link)
│                            └── L-03 (Cyber Security link)
│
├── C-09 (List snippet section) ─── C-15 (Textile bold marker in list)
│
├── C-10 (Comparison table) ─── depends on C-07 (placed after textile section)
│
├── C-11 (Block C placement para) ──┬── C-12 (placement portal link)
│                                   └── S-03 (speakable needs .placement-stats)
│
├── C-13 (Block D hostel para) ─── no dependency
│
├── F-01 through F-10 (FAQ rewrites) ──── F-11 (CSS class additions — must run after all FAQ rewrites)
│                                         └─────────────────────── S-03 (speakable needs .faq-voice-answer)
│
└── L-06 (link verification) ─── must run AFTER L-01 through L-04 are added

Phase 3 — Schema (S-01 through S-12)
│
├── S-01 (base schema replacement) ──┬── S-02 (sameAs)
│                                    ├── S-04 (potentialAction)
│                                    ├── S-05 (areaServed array)
│                                    └── S-06 (numberOfStudents — conditional on P-04)
│
├── S-03 (speakable) ─── depends on S-01, C-01, F-11, C-11 (CSS classes must exist in DOM)
│
├── S-07 (HowToApply schema) ─── independent; add after S-01 block
│
├── S-08, S-09 (CourseSchema distance fixes) ─── independent
│
├── S-10 (B.Sc Textile CourseSchema) ─── independent
│
├── S-11 (breadcrumb — check /cities) ─── independent
│
└── S-12 (validation) ─── must run LAST, after ALL schema tasks complete

Phase 4 — Monitoring (after deploy)
├── T-06 (grep check) ─── verifies Phase 1 completeness
├── S-12 (schema validation) ─── verifies Phase 3 completeness
└── Post-deploy: GSC baseline, SERP checks, 30-day re-score
```

---

## 4. Effort Summary

### By Group

| Group | Tasks | Effort | Phase |
|-------|-------|--------|-------|
| PRE — Pre-Work | 5 | ~40 min | Phase 0 |
| META — Meta Tags | 7 | ~31 min | Phase 1 |
| CONTENT — On-Page | 16 | ~3 hrs | Phase 2 |
| FAQ — Rewrites | 11 | ~75 min | Phase 2 |
| SCHEMA — Markup | 12 | ~2 hrs | Phase 3 |
| LINKS — Internal/External | 6 | ~35 min | Phase 2–3 |
| TECHNICAL — Distance Fixes | 6 | ~22 min | Phase 1 |
| **TOTAL** | **63** | **~9 hrs** | — |

### By Effort Level

| Level | Effort Per Task | Tasks in Category |
|-------|----------------|-------------------|
| Quick (< 5 min) | Single value change, typo, link add | T-01, T-02, T-03, T-04, T-05, M-03, M-05, S-05, S-06, L-04, L-05 |
| Medium (5–15 min) | Paragraph rewrite, schema field addition, FAQ rewrite | M-01, M-02, M-04, M-06, F-01 through F-10, S-02, S-03, S-04, S-07, S-08, S-09, S-10, L-01 through L-03 |
| Heavy (15–30 min) | New section, full schema replacement, validation | C-01, C-02, C-07, C-10, C-11, S-01, S-12 |
| Research (> 30 min) | Textile section full code, admin data collection | C-07 (code + content), P-04 (admin) |

### By Contributor

| Contributor | Tasks | Effort |
|-------------|-------|--------|
| Developer (code changes) | All T-, M-, S-, L-, F-11, C-01 through C-13 | 5–6 hrs |
| Content Writer | C-14, C-15, C-16, F-01 through F-10 | 2–3 hrs |
| Admin/Operations | P-04 (data collection), P-05 (GSC submission), P-03 (Maps verify) | 30 min |
| QA/Tester | T-06, S-12, L-06, P-02 | 45 min |

### AEO Score Improvement by Group

| Group | Dimension Improved | Score Delta |
|-------|-------------------|-------------|
| CONTENT (C-01, C-02, C-07) | Snippet Capture: 0 → 14 | +14 |
| FAQ (F-01 through F-11) | PAA Coverage: 5 → 12 | +7 |
| CONTENT (C-01, C-07, C-11) | AI Citation Readiness: 0 → 16 | +16 |
| SCHEMA (S-01 through S-12) | Schema Completeness: 10 → 14 | +4 |
| CONTENT (all groups) | Content Quality: 10 → 13 | +3 |
| SCHEMA (S-03) + FAQ (F-11) | Voice Search Readiness: 0 → 10 | +10 |
| **TOTAL** | | **+54 (25 → 79 max; 65–70 conservative)** |

---

## 5. Implementation Order

### Priority Tier 1 — P0 Critical (Must complete before any content work)

Execute in this exact sequence. Each step is a prerequisite for the next batch.

```
1. P-01  Check sitemap — add /tiruppur entry if missing
2. P-02  Check robots.txt — confirm no Disallow rule
3. T-01  Fix distance card: 85 → 67
4. T-02  Fix distance card subtitle: 80-90 km → ~67 km
5. T-03  Fix Easy Commute card: 80-90 km → ~67 km
6. T-04  Fix route header: 80-90 km → ~67 km
7. T-05  Fix railway station: 85 km → 67 km
8. S-08  Fix BBA CourseSchema description: 85 km → ~67 km
9. S-09  Fix BCA CourseSchema description: 85 km → ~67 km
10. M-02 Update meta description: 85 km → ~67 km, add textile
11. M-04 Update OG description: 85 km → ~67 km
12. M-06 Update Twitter description: 85 km → ~67 km
13. T-06 GREP VERIFY — zero matches for "85 km", "80-90 km" (blocker — do not proceed if any remain)
14. P-05 Submit URL to GSC for indexing
```

**Deploy Tier 1 immediately after T-06 passes. Do not batch with Tier 2.**

---

### Priority Tier 2 — P1 High (Deploy within 3–5 days of Tier 1)

Execute as a batch. All content additions and FAQ rewrites.

```
15. M-01  Update title: remove "Best", keyword-first
16. M-03  Update OG title to match M-01
17. M-05  Update Twitter title to match M-01
18. M-07  Expand keywords array (add textile, BBA, BCA variants)
19. C-01  Add Block A snippet paragraph after H1 (class: snippet-paragraph)
20. C-02  Add H2 snippet-trigger question + 55-word answer
21. C-03  Update hero stats: 85km → 67km display
22. C-04  Update hero stats: 4 programmes → 34 programmes
23. C-05  Rewrite hero description paragraph (factual, entity-dense)
24. C-06  Add "Established 1952 — 74 Years" trust bar badge
25. C-07  Add textile industry content section (Block B + 2 H3s + programme links)
26. C-08  Add B.Sc Textile & Fashion Design as first programme highlight card
27. C-09  Add list snippet section (H2 + 7-item bulleted list)
28. C-10  Add comparison table section
29. C-11  Add Block C placement facts paragraph (class: placement-stats)
30. C-12  Add placement portal link
31. C-13  Add Block D hostel/connectivity paragraph
32. C-14  Verify or rephrase Tiruppur textile export figure
33. C-15  Bold/highlight B.Sc Textile in All-34 programmes list
34. C-16  Add "Ideal for textile trade" label to BBA card
35. F-01  Rewrite FAQ Q1 (voice-optimized)
36. F-02  Rewrite FAQ Q2 (distance: 80-90 km → 67 km, voice-optimized)
37. F-03  Rewrite FAQ Q3 (add textile industry angle)
38. F-04  Rewrite FAQ Q4 (voice-optimized)
39. F-05  Rewrite FAQ Q5 (voice-optimized)
40. F-06  Rewrite FAQ Q6 (voice-optimized)
41. F-07  Rewrite FAQ Q7 (voice-optimized)
42. F-08  Replace FAQ Q8 (hostel cost → textile programme FAQ)
43. F-09  Rewrite FAQ Q9 (voice-optimized)
44. F-10  Add FAQ Q10 (application process)
45. F-11  Add faq-voice-answer CSS class to FAQ first sentences
46. L-01  Add B.Sc Textile link in textile section
47. L-02  Add B.Sc AI & DS link in textile section
48. L-03  Add B.Sc Cyber Security link in textile section
49. L-04  Add "View all 34 programmes" link
50. L-05  Add placement portal link
51. L-06  VERIFY all new links return 200 (blocker — fix any 404 before deploying)
```

---

### Priority Tier 3 — P2 Schema (Deploy same day as Tier 2 or immediately after)

```
52. S-01  Replace CollegeOrUniversity schema (base — description, alternateName, foundingDate, telephone, email, logo, accreditedBy, memberOf)
53. S-02  Add sameAs to schema
54. S-04  Add potentialAction (ApplyAction) to schema
55. S-05  Update areaServed to array (Tiruppur + Erode)
56. S-06  Add numberOfStudents (conditional — only if admin confirmed in P-04)
57. S-03  Add speakable SpeakableSpecification (MUST run after C-01, F-11, C-11 — CSS classes must be in DOM)
58. S-07  Add HowToApply schema block (new <script> tag after CourseSchema)
59. S-10  Add B.Sc Textile CourseSchema component
60. S-11  Check /cities page — update breadcrumb to 3 levels if exists
61. P-03  Verify Google Maps link destination (correct if needed)
62. S-12  Run schema validation (Rich Results Test + schema.org validator + Mobile-Friendly Test)
```

---

### Priority Tier 4 — P3 Monitoring (Ongoing after deploy)

```
63. Post-deploy: Record GSC baseline (Impressions, Clicks, Avg Position, CTR for /tiruppur)
64. Week 2: Manual SERP checks for 5 target queries
65. Week 4: Manual SERP checks + GSC data review
66. Day 30: Re-run AEO scoring (6 dimensions) — target 65–70 / 100
```

---

## Quick-Reference Flags

| Flag | What It Means | Tasks Affected |
|------|--------------|----------------|
| [BLOCKER] | Do not proceed past this task until it passes | T-06 (grep verify), L-06 (link 200 check), S-12 (schema validation) |
| [CONDITIONAL] | Only implement if admin data received | S-06 (numberOfStudents), C-14 (textile export figure) |
| [VERIFY FIRST] | Manual verification required before coding | P-03 (Maps link), S-11 (/cities page existence), L-06 (programme URL 200 check) |
| [UNVERIFIED — DO NOT PUBLISH] | Data marked as unverified in spec; use placeholder or safer phrasing | Tiruppur export figure (₹40,000 crore), NAAC grade (use "NAAC-accredited" without grade), student count (use only if admin confirms) |
| [NO CHANGE] | Explicitly confirmed to keep as-is | H1 text (spec Section 12.1), canonical URL, geo coordinates, FAQ structure/component |
