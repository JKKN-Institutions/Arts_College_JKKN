# AEO Task Decomposition — Namakkal City Landing Page
**Institution:** JKKN College of Arts and Science (cas.jkkn.ac.in)
**Page URL:** https://cas.jkkn.ac.in/namakkal
**Source File:** `src/app/namakkal/page.tsx`
**Spec Reference:** `aeo/namakkal/namakkal-aeo-spec.md`
**Plan Reference:** `aeo/namakkal/namakkal-aeo-plan.md`
**Decompose Version:** 1.0
**Date:** 2026-03-28

---

## CRITICAL IMPLEMENTATION RULE

> **ALL 11 DISTANCE ERROR FIXES (Tasks C-01 through C-11) MUST BE COMPLETED AND DEPLOYED BEFORE ANY OTHER WORK BEGINS.**
>
> The page currently contains 11 instances of a false "5-10 km" or "10 km from Namakkal" claim. The actual distance from campus (Komarapalayam) to Namakkal town is **~66 km via SH94 through Tiruchengode (~1.5 hours)**. Publishing AEO-optimized content on top of a page with 11 live factual errors will result in demotion — not promotion.
>
> **Verified facts:**
> - Campus: Komarapalayam, Namakkal District, PIN 638183
> - Distance to Namakkal town: ~66 km (~1.5 hrs via SH94)
> - Distance to Erode: ~22 km (35-40 min via NH-544) — nearest large city
> - Distance to Tiruchengode: ~15 km (~25-30 min)
> - Legitimate claim: "In Namakkal District" — campus is administratively in Namakkal District (Komarapalayam Taluk)

---

## Section 1 — Atomic Task List

### Group: CONTENT (Phase 1 — P0 Critical Fixes)

> All 11 distance error tasks must complete before any task in other groups begins.

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| C-01 | Fix meta description: remove "just 10 km from Namakkal" | `src/app/namakkal/page.tsx` | 43 | `"JKKN CAS — just 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27."` | `"JKKN College of Arts & Science — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open."` | 5 min | None |
| C-02 | Fix OpenGraph description: remove "10 km from Namakkal" | `src/app/namakkal/page.tsx` | 58 | `"JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27."` | `"JKKN CAS in Komarapalayam — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27."` | 5 min | None |
| C-03 | Fix Twitter description: remove "10 km from Namakkal" | `src/app/namakkal/page.tsx` | 74 | `"JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. Admissions open 2026-27."` | `"JKKN CAS in Namakkal District — 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open."` | 5 min | None |
| C-04 | Fix FAQ Q1 answer: remove "just 5-10 km from Namakkal" | `src/app/namakkal/page.tsx` | 82 | `"...located just 5-10 km from Namakkal on NH-544, is widely regarded..."` | `"...located in Namakkal District, is widely regarded..."` | 10 min | None |
| C-05 | Fix FAQ Q2 answer: replace false distance with accurate 66 km figure | `src/app/namakkal/page.tsx` | 86 | `"JKKN CAS is approximately 5-10 km from Namakkal city centre, which takes about 15-20 minutes by road via NH-544..."` | `"JKKN CAS is approximately 66 km from Namakkal town, but located within Namakkal District at Komarapalayam on NH-544. Erode is the nearest large city at 22 km."` | 10 min | None |
| C-06 | Fix FAQ Q6 answer: remove "campus is just 15-20 minutes away" | `src/app/namakkal/page.tsx` | 102 | `"...students from Namakkal can also opt for daily commute as the campus is just 15-20 minutes away..."` | `"...students from Namakkal District can also opt for daily commute — many students travel from Tiruchengode and nearby towns..."` | 10 min | None |
| C-07 | Fix FAQ Q8 answer: remove "just 5-10 km from Namakkal town" | `src/app/namakkal/page.tsx` | 110 | `"JKKN CAS is just 5-10 km from Namakkal town on NH-544. Auto-rickshaws, local buses, and college transport are easily available. Many students commute daily from Namakkal — the campus is practically in Namakkal district itself."` | `"JKKN CAS is in Namakkal District at Komarapalayam on NH-544. College transport and local buses connect the campus from Tiruchengode and surrounding towns."` | 10 min | None |
| C-08 | Fix FAQ Q9 answer: remove "JKKN CAS is so close to Namakkal" | `src/app/namakkal/page.tsx` | 114 | `"Since JKKN CAS is so close to Namakkal, many students commute daily..."` | `"Since JKKN CAS is in Namakkal District, many students from surrounding taluks commute daily..."` | 10 min | None |
| C-09 | Fix hero stat card: remove "10km — FROM NAMAKKAL" | `src/app/namakkal/page.tsx` | 220 | `{ value: "10km", label: "FROM NAMAKKAL" }` | `{ value: "34", label: "PROGRAMMES" }` (or `{ value: "NAMAKKAL", label: "DISTRICT" }`) | 5 min | None |
| C-10 | Fix distance card section: remove "10km" distance display | `src/app/namakkal/page.tsx` | 283–290 | Entire distance card showing `10km` + `"15-20 minutes via NH-544"` | Replace with "Namakkal District Campus" card (see Before/After section below) | 20 min | None |
| C-11 | Fix transport section route header: remove "5-10 km • 15-20 minutes" | `src/app/namakkal/page.tsx` | 804 | `"5-10 km • 15-20 minutes"` | `"Namakkal District • NH-544 Campus"` | 5 min | None |

### Group: META (Phase 1 — P0 Critical Fixes, continued)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| M-01 | Fix meta title: "Near Namakkal" → "in Namakkal District" | `src/app/namakkal/page.tsx` | 41 | `"Best Arts and Science College Near Namakkal \| JKKN CAS"` | `"Arts and Science College in Namakkal District \| JKKN CAS"` | 5 min | None (parallel with C-01) |
| M-02 | Fix OG title: "Near Namakkal" → "in Namakkal District" | `src/app/namakkal/page.tsx` | 56 | `"Best Arts and Science College Near Namakkal \| JKKN CAS"` | `"Arts and Science College in Namakkal District \| JKKN CAS"` | 5 min | None (parallel with C-02) |
| M-03 | Fix Twitter title: "Near Namakkal" → "in Namakkal District" | `src/app/namakkal/page.tsx` | 73 | `"Best Arts and Science College Near Namakkal \| JKKN CAS"` | `"Arts and Science College in Namakkal District \| JKKN CAS"` | 5 min | None (parallel with C-03) |
| M-04 | Fix keywords array: replace "near Namakkal" terms with "in Namakkal district" terms | `src/app/namakkal/page.tsx` | 44–51 | `"arts and science college near Namakkal"`, `"affordable college near Namakkal"` | `"arts and science college in Namakkal district"`, `"affordable college in Namakkal district"` | 5 min | None |

### Group: CONTENT (Phase 1 — P0, continued — H1 and Headings)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| C-12 | Fix H1 heading: "Near Namakkal" → "in Namakkal District — JKKN CAS, Komarapalayam" | `src/app/namakkal/page.tsx` | 202–205 | `"Best Arts and Science College Near"` + `"Namakkal"` | `"Arts and Science College in Namakkal District"` + `"JKKN CAS, Komarapalayam"` | 10 min | None |
| C-13 | Fix hero description paragraph: update framing from proximity to district membership | `src/app/namakkal/page.tsx` | 209–213 | `"Namakkal is home — and so are we..."` framing implies proximity | Update to district-identity framing (see Before/After below) | 10 min | C-12 |
| C-14 | Fix CourseSchema BBA description: remove "just 10 km from Namakkal town" | `src/app/namakkal/page.tsx` | 176 | `"...offered at JKKN CAS — just 10 km from Namakkal town."` | `"...offered at JKKN CAS, located in Komarapalayam, Namakkal District."` | 5 min | None |
| C-15 | Fix CourseSchema BCA description: remove "closest quality college to Namakkal" | `src/app/namakkal/page.tsx` | 184 | `"...at JKKN CAS, the closest quality college to Namakkal."` | `"...at JKKN CAS, Namakkal District's most programme-diverse arts and science college."` | 5 min | None |

### Group: CONTENT (Phase 2 — P1 AEO Content Optimization)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| C-16 | Add featured snippet paragraph block (H2 + 55-word paragraph) | `src/app/namakkal/page.tsx` | After hero section (~line 275) | No snippet paragraph exists | Add H2 + static `<p>` block (see Before/After below) | 20 min | ALL C-01 to C-15 complete |
| C-17 | Rewrite all 10 FAQ answers for PAA optimization (≤40 words each) | `src/app/namakkal/page.tsx` | 79–120 (faqs array) | All 10 answers: 70-100+ words, false distance claims | 10 new answers ≤40 words, accurate, voice-ready (see Before/After below) | 45 min | C-04 to C-08 complete |
| C-18 | Add 6 AI citation content blocks across page sections | `src/app/namakkal/page.tsx` | Various sections | No citation-ready structured paragraphs | 6 static `<p>` blocks (authority, placement, geographic, programme, ecosystem, scholarship) | 60 min | C-16 complete |
| C-19 | Rewrite H2 headings for PAA alignment and district keyword framing | `src/app/namakkal/page.tsx` | Various H2 elements | Statement-form headings (e.g., "Why Choose JKKN") | Question-form headings with "Namakkal District" (see plan Step 2.4) | 30 min | C-12 complete |
| C-20 | Update transport section: Erode as primary reference, add accurate distances table | `src/app/namakkal/page.tsx` | ~line 810 onward (route details) | Namakkal-first with false 10 km; no Erode reference | Erode-first (~22 km), Tiruchengode (~15 km), Namakkal town (~66 km) accurate table | 30 min | C-11 complete |
| C-21 | Add E-E-A-T trust signals: founding year, verified contact, accreditation links | `src/app/namakkal/page.tsx` | Trust bar area (~line 260–275) | Basic trust bar (UGC, NAAC) | Add: "Since 1952", tel: href, NAAC link to naac.gov.in, UGC link | 25 min | C-16 complete |
| C-22 | Run post-fix text search verification (zero instances of banned strings) | `src/app/namakkal/page.tsx` | Entire file | N/A — verification step | Confirm zero matches for: "10 km", "5-10 km", "15-20 minutes", "near Namakkal", "closest quality college to Namakkal" | 10 min | C-01 to C-15 complete |

### Group: FAQ (Phase 2 — detail tasks under C-17)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| F-01 | Rewrite FAQ Q1: "best arts and science college in Namakkal district?" | `src/app/namakkal/page.tsx` | 81–83 | 66-word answer, "5-10 km from Namakkal" error | 38-word answer: district-framed, NAAC, 34 programmes, Periyar + Bharathiar | 10 min | C-04 complete |
| F-02 | Rewrite FAQ Q2: "How far is JKKN from Namakkal?" | `src/app/namakkal/page.tsx` | 85–87 | 40-word answer with "5-10 km" error | 28-word answer: "66 km from Namakkal town, 22 km from Erode via NH-544" | 10 min | C-05 complete |
| F-03 | Rewrite FAQ Q3: "Which courses are popular?" | `src/app/namakkal/page.tsx` | 89–91 | 60-word answer (no distance error, but too long for PAA) | 31-word answer: programme list, 34 total, aided + self-finance | 10 min | C-01 to C-11 complete |
| F-04 | Rewrite FAQ Q4: "Can BCA students get IT jobs?" | `src/app/namakkal/page.tsx` | 93–95 | 68-word answer (no distance error, but too long) | 35-word answer: TCS, Infosys BPO, aptitude coaching, placement training | 10 min | C-01 to C-11 complete |
| F-05 | Rewrite FAQ Q5: "Are JKKN CAS fees affordable?" | `src/app/namakkal/page.tsx` | 97–99 | 49-word answer (no distance error, close to limit) | 31-word answer: most affordable in district, scholarships, +91 9345855001 | 10 min | C-01 to C-11 complete |
| F-06 | Rewrite FAQ Q6: "Does JKKN CAS provide hostel?" | `src/app/namakkal/page.tsx` | 101–103 | 34-word answer with "just 15-20 minutes away" error | 28-word answer: separate hostels, meals, Wi-Fi, 24-hr security | 10 min | C-06 complete |
| F-07 | Rewrite FAQ Q7: "How can I apply?" | `src/app/namakkal/page.tsx` | 105–107 | 30-word answer (within PAA limit, no error — minor update) | 29-word answer: admission.jkkn.ac.in, campus Komarapalayam, 2026-27 open | 5 min | C-01 to C-11 complete |
| F-08 | Rewrite FAQ Q8: "Is there a direct bus from Namakkal?" | `src/app/namakkal/page.tsx` | 109–111 | 40-word answer with "5-10 km from Namakkal" error | 30-word answer: Namakkal District location, buses from Tiruchengode | 10 min | C-07 complete |
| F-09 | Rewrite FAQ Q9: "How much does hostel cost?" | `src/app/namakkal/page.tsx` | 113–115 | 40-word answer with "so close to Namakkal" error | 29-word answer: hostel details, meals, Wi-Fi, contact number | 10 min | C-08 complete |
| F-10 | Rewrite FAQ Q10: "Why should I choose JKKN CAS?" | `src/app/namakkal/page.tsx` | 117–119 | 42-word answer (2 over limit, no explicit distance error) | 34-word answer: 34 programmes, NAAC, 90%+ placements, NH-544, 500-bed hospital angle | 10 min | C-01 to C-11 complete |

### Group: SCHEMA (Phase 3 — P2 Technical)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| S-01 | Replace CollegeOrUniversity schema with enhanced full version | `src/app/namakkal/page.tsx` | 129–157 | Basic schema: address, geo, areaServed (City: Namakkal), no @id, no sameAs, no hasOfferCatalog | Full schema: @id, areaServed (AdministrativeArea: Namakkal District), hasOfferCatalog (5 courses), accreditation, memberOf, sameAs, parentOrganization, foundingDate | 45 min | C-01 to C-15, F-01 to F-10 complete |
| S-02 | Rewrite FAQPage schema with corrected answers (match Step 2.2 content) | `src/app/namakkal/page.tsx` | FAQSchema component call (~line 128) | FAQSchema passes faqs array with false distance answers | FAQSchema receives updated faqs array — same content as F-01 to F-10; 8 questions in schema | 30 min | F-01 to F-10 complete (same time as F tasks) |
| S-03 | Add HowTo schema: "How to Apply from Namakkal District" (5 steps) | `src/app/namakkal/page.tsx` | After BreadcrumbSchema block (~line 128) | No HowTo schema present | New JSON-LD block: 5-step admission process (see Before/After below) | 20 min | S-01 complete |
| S-04 | Fix CourseSchema for BBA: update description (parallel to C-14) | `src/app/namakkal/page.tsx` | 174–181 | BBA description: "just 10 km from Namakkal town" | BBA description: "located in Komarapalayam, Namakkal District" | 5 min | C-14 complete |
| S-05 | Fix CourseSchema for BCA: update description (parallel to C-15) | `src/app/namakkal/page.tsx` | 182–189 | BCA description: "closest quality college to Namakkal" | BCA description: "Namakkal District's most programme-diverse arts and science college" | 5 min | C-15 complete |
| S-06 | Validate all schema via Schema Markup Validator (validator.schema.org) | External tool | N/A | Unvalidated schema | All schema blocks pass with zero errors; areaServed includes "Namakkal District"; @id present | 15 min | S-01 to S-05 complete |
| S-07 | Validate FAQPage via Google Rich Results Test | External tool | N/A | N/A | FAQPage detected, zero errors at search.google.com/test/rich-results | 10 min | S-02 complete |

### Group: LINKS (Phase 3 — P2 Internal Linking)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| L-01 | Add internal link: BCA card → /programmes/self-finance/ug/bca | `src/app/namakkal/page.tsx` | Programme section | No direct programme page link on BCA card | "BCA programme details" → `/programmes/self-finance/ug/bca` | 10 min | Phase 1 complete |
| L-02 | Add internal link: B.Com card → /programmes/aided/ug/bcom | `src/app/namakkal/page.tsx` | Programme section | No direct programme page link on B.Com card | "B.Com programme details" → `/programmes/aided/ug/bcom` | 10 min | Phase 1 complete |
| L-03 | Add internal link: BBA card → /programmes/self-finance/ug/bba | `src/app/namakkal/page.tsx` | Programme section | No direct programme page link on BBA card | "BBA programme details" → `/programmes/self-finance/ug/bba` | 10 min | Phase 1 complete |
| L-04 | Add internal link: B.Sc card → /programmes/aided/ug/bsc-chemistry | `src/app/namakkal/page.tsx` | Programme section | No direct programme page link on B.Sc card | "B.Sc programmes" → `/programmes/aided/ug/bsc-chemistry` | 10 min | Phase 1 complete |
| L-05 | Add "All 34 programmes" CTA link → /programmes | `src/app/namakkal/page.tsx` | Programme section CTA | Generic "View Programmes" button | "All 34 programmes" → `/programmes` | 5 min | Phase 1 complete |
| L-06 | Verify city cross-links (Salem, Erode, Tiruppur, Coimbatore) exist in city nav | `src/app/namakkal/page.tsx` | City navigation section | Unknown state — verify all 4 links present | Confirm: /salem, /erode, /tiruppur, /coimbatore all linked | 10 min | Phase 1 complete |
| L-07 | Add Erode city page cross-reference (closest city callout) | `src/app/namakkal/page.tsx` | Transport/location section | No Erode mention or link | "Erode (~22 km)" text with link → `/erode` | 10 min | C-20 complete |

### Group: TECHNICAL (Phase 3 + 4 — P2/P3)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|-----------|
| T-01 | Check sitemap.xml for /namakkal entry | `public/sitemap.xml` (or sitemap.ts) | N/A | Unknown — /namakkal may be missing | Add entry: loc, lastmod 2026-03-28, changefreq monthly, priority 0.8 | 10 min | Phase 1 complete |
| T-02 | Verify featured snippet paragraph is server-rendered (not Framer Motion opacity:0) | `src/app/namakkal/page.tsx` | C-16 insertion point | N/A — new content | Confirm paragraph is static SSR, no `initial={{ opacity: 0 }}` wrapper | 10 min | C-16 complete |
| T-03 | Verify FAQ section is server-rendered (not conditionally loaded) | `src/app/namakkal/page.tsx` | 79–120 (FAQ section) | Unknown — check for 'use client' or lazy loading | FAQ must be SSR; if client-side, move data to server component | 15 min | F-01 to F-10 complete |
| T-04 | Verify AI citation blocks are server-rendered (no animation delay) | `src/app/namakkal/page.tsx` | C-18 insertion points | N/A — new content | All 6 citation `<p>` blocks are static SSR, no Framer Motion opacity delay | 10 min | C-18 complete |
| T-05 | Request GSC re-indexing for https://cas.jkkn.ac.in/namakkal | Google Search Console | N/A | Old (wrong) cached version indexed | Request Indexing via URL Inspection tool; record timestamp | 10 min | ALL Phase 1+2+3 deployed and live |
| T-06 | Capture GSC baseline: impression count, CTR, average position for primary keywords | Google Search Console | N/A | No baseline recorded | Screenshot/export: "arts and science college in Namakkal" + 5 variant queries | 15 min | T-05 complete |
| T-07 | Capture GA4 baseline: sessions, bounce rate, avg engagement time for /namakkal | Google Analytics 4 | N/A | No baseline recorded | Export 30-day data for /namakkal page before AEO improvements affect ranking | 15 min | T-05 complete |
| T-08 | Run full 14-point post-implementation validation checklist | Browser + external tools | Entire page | N/A — post-deploy verification | All 14 checks PASS (see plan Step 4.1 table) | 30 min | ALL Phase 1+2+3 complete |

---

## Section 2 — Before/After Code Blocks

### Distance Error Corrections (All 11 Instances)

---

#### Instance 1 — Line 43: Meta Description

```tsx
// BEFORE (line 43)
description:
  "JKKN CAS — just 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.",

// AFTER (line 43) — 155 chars exactly (spec limit)
description:
  "JKKN College of Arts & Science — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open.",
```

---

#### Instance 2 — Line 58: OpenGraph Description

```tsx
// BEFORE (lines 57–58)
description:
  "JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.",

// AFTER
description:
  "JKKN CAS in Komarapalayam — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27.",
```

---

#### Instance 3 — Line 74: Twitter Description

```tsx
// BEFORE (line 74)
description: "JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. Admissions open 2026-27.",

// AFTER
description: "JKKN CAS in Namakkal District — 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open.",
```

---

#### Instance 4 — Line 82: FAQ Q1 Answer ("just 5-10 km from Namakkal")

```tsx
// BEFORE (line 82 — inside faqs array, Q1 answer)
a: "JKKN College of Arts and Science, located just 5-10 km from Namakkal on NH-544, is widely regarded as one of the top arts and science colleges accessible from Namakkal. Approved by UGC, NAAC and affiliated to Periyar University / Bharathiar University, it offers excellent programmes with strong placement support.",

// AFTER (38 words — PAA-ready)
a: "JKKN College of Arts and Science in Komarapalayam is Namakkal District's most programme-diverse arts and science institution — 34 programmes, NAAC-accredited, affiliated to Periyar and Bharathiar Universities, with 90%+ placement rates.",
```

---

#### Instance 5 — Line 86: FAQ Q2 Answer ("approximately 5-10 km from Namakkal city centre")

```tsx
// BEFORE (line 86 — FAQ Q2 answer)
a: "JKKN CAS is approximately 5-10 km from Namakkal city centre, which takes about 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Regular bus services are available from Namakkal.",

// AFTER (28 words — voice-ready ≤29 words)
a: "JKKN College of Arts and Science is located in Komarapalayam, Namakkal District — approximately 66 kilometres from Namakkal town and 22 kilometres from Erode via NH-544.",
```

---

#### Instance 6 — Line 102: FAQ Q6 Answer ("the campus is just 15-20 minutes away")

```tsx
// BEFORE (line 102 — FAQ Q6 answer)
a: "Yes, JKKN CAS provides separate hostel facilities for boys and girls. Students from Namakkal can also opt for daily commute as the campus is just 15-20 minutes away. College transport services are available.",

// AFTER (28 words — voice-ready)
a: "Yes. JKKN CAS offers separate hostel facilities for boys and girls with furnished rooms, meals, Wi-Fi, and 24-hour security. Contact the admission office for availability and fees.",
```

---

#### Instance 7 — Line 110: FAQ Q8 Answer ("just 5-10 km from Namakkal town")

```tsx
// BEFORE (line 110 — FAQ Q8 answer)
a: "Yes. JKKN CAS is just 5-10 km from Namakkal town on NH-544. Auto-rickshaws, local buses, and college transport are easily available. Many students commute daily from Namakkal — the campus is practically in Namakkal district itself.",

// AFTER (30 words)
a: "JKKN CAS is in Namakkal District at Komarapalayam on NH-544. College transport and local buses connect the campus from Tiruchengode, Sankari, and surrounding Namakkal District towns.",
```

---

#### Instance 8 — Line 114: FAQ Q9 Answer ("JKKN CAS is so close to Namakkal")

```tsx
// BEFORE (line 114 — FAQ Q9 answer)
a: "Since JKKN CAS is so close to Namakkal, many students commute daily. However, hostel facilities are available for those who prefer campus living. Fees include furnished rooms, three meals a day, WiFi, and 24/7 security. Contact the admission office at +91 9345855001 for details.",

// AFTER (29 words — voice-ready)
a: "Since JKKN CAS is in Namakkal District, many students from surrounding taluks commute daily. Hostel facilities with meals, Wi-Fi, and security are available. Call +91 9345855001 for fees.",
```

---

#### Instance 9 — Line 220: Hero Stat Card ("10km — FROM NAMAKKAL")

```tsx
// BEFORE (lines 217–221 — stats array inside hero section)
{[
  { value: "90%+", label: "PLACEMENTS" },
  { value: "5-7", label: "LPA HIGHEST" },
  { value: "10km", label: "FROM NAMAKKAL" },  // ← LINE 220 — REMOVE THIS
  { value: "4", label: "PROGRAMMES" },
]}

// AFTER — replace the false stat with programme count
{[
  { value: "90%+", label: "PLACEMENTS" },
  { value: "5-7", label: "LPA HIGHEST" },
  { value: "34", label: "PROGRAMMES" },        // ← accurate and useful
  { value: "74+", label: "YEARS LEGACY" },
]}
```

---

#### Instance 10 — Lines 282–290: Distance Card ("10km" + "15-20 minutes")

```tsx
// BEFORE (lines 277–305 — Distance Card section)
<section aria-label="Distance from Namakkal" className="bg-[#FBFBEE] py-10 sm:py-12">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4 p-6">
      <div className="flex items-center gap-4">
        <span className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none">
          10<span className="text-2xl font-semibold text-[#006837]">km</span>    {/* LINE 283 */}
        </span>
        <div>
          <div className="font-bold text-gray-800 text-base sm:text-lg">
            From Namakkal to JKKN CAS
          </div>
          <div className="text-gray-500 text-sm mt-1">
            15-20 minutes via NH-544 (Salem-Coimbatore Highway)   {/* LINE 290 */}
          </div>
        </div>
      </div>
      ...
    </div>
  </div>
</section>

// AFTER — replace entire distance card with district campus identity card
<section aria-label="Campus Location — Namakkal District" className="bg-[#FBFBEE] py-10 sm:py-12">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4 p-6">
      <div className="flex items-center gap-4">
        <MapPin className="w-12 h-12 text-[#006837] flex-shrink-0" />
        <div>
          <div className="font-bold text-gray-800 text-base sm:text-lg">
            Namakkal District Campus
          </div>
          <div className="text-gray-500 text-sm mt-1">
            Komarapalayam, NH-544 — 22 km from Erode • 15 km from Tiruchengode
          </div>
        </div>
      </div>
      <a
        href="https://maps.app.goo.gl/bsLumyHe3JeaTAZ18"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#006837] hover:bg-[#002309] text-white text-center px-4 py-4 rounded-xl text-sm font-medium transition-colors flex-shrink-0 flex flex-col items-center gap-1 min-w-[90px]"
      >
        <MapPin className="w-5 h-5" />
        <span>View on Map</span>
      </a>
    </div>
  </div>
</section>
```

---

#### Instance 11 — Line 804: Transport Section Route Header ("5-10 km • 15-20 minutes")

```tsx
// BEFORE (line 804 — transport section route header subtitle)
<div className="text-[#7cb983] text-sm">
  5-10 km • 15-20 minutes           {/* LINE 804 */}
</div>

// AFTER
<div className="text-[#7cb983] text-sm">
  Namakkal District • NH-544 Campus
</div>
```

---

### Meta Tags (Complete Block — Lines 40–75)

```tsx
// BEFORE (lines 40–75)
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Namakkal | JKKN CAS",
  description:
    "JKKN CAS — just 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.",
  keywords: [
    "arts and science college near Namakkal",
    "best college in Namakkal",
    "JKKN CAS Namakkal",
    "college Namakkal district",
    "affordable college near Namakkal",
    "BCA BBA B.Com B.Sc Namakkal",
  ],
  ...
  openGraph: {
    title: "Best Arts and Science College Near Namakkal | JKKN CAS",
    description:
      "JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.",
    ...
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Arts and Science College Near Namakkal | JKKN CAS",
    description: "JKKN CAS — 10 km from Namakkal. NAAC-accredited, 90%+ placements. Admissions open 2026-27.",
  },
};

// AFTER (lines 40–75 — all four meta surfaces corrected)
export const metadata: Metadata = {
  title: "Arts and Science College in Namakkal District | JKKN CAS",
  description:
    "JKKN College of Arts & Science — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open.",
  keywords: [
    "arts and science college in Namakkal district",
    "best college in Namakkal district",
    "JKKN CAS Namakkal",
    "college Namakkal district",
    "affordable college in Namakkal district",
    "BCA BBA B.Com B.Sc Namakkal district",
  ],
  ...
  openGraph: {
    title: "Arts and Science College in Namakkal District | JKKN CAS",
    description:
      "JKKN CAS in Komarapalayam — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27.",
    ...
  },
  twitter: {
    card: "summary_large_image",
    title: "Arts and Science College in Namakkal District | JKKN CAS",
    description: "JKKN CAS in Namakkal District — 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open.",
  },
};
```

---

### H1 Heading (Lines 202–205)

```tsx
// BEFORE (lines 202–205)
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Best Arts and Science College Near
  <br />
  <span className="text-[#7cb983]">Namakkal</span>
</h1>

// AFTER
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Arts and Science College in Namakkal District
  <br />
  <span className="text-[#7cb983]">JKKN CAS, Komarapalayam</span>
</h1>
```

---

### Hero Description Paragraph Reframe (Lines 209–213)

```tsx
// BEFORE (lines 209–213)
<p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
  Namakkal is home — and so are we. JKKN College of Arts and Science
  offers top-tier arts and science programmes with 90%+ placement
  support — located right in your home district.
</p>

// AFTER
<p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
  JKKN College of Arts and Science is Namakkal District's most
  programme-diverse institution — 34 UG, PG, M.Phil, and Ph.D
  programmes, NAAC-accredited, on NH-544 at Komarapalayam with 90%+
  placement support.
</p>
```

---

### Featured Snippet Paragraph Block (New Addition — C-16)

```tsx
// AFTER H1 / hero section, before or immediately after trust bar
// Add as a new section — must be static SSR, no Framer Motion opacity delay

<section aria-label="About JKKN CAS — Namakkal District" className="bg-white py-10 sm:py-12">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#002309] mb-4">
      What is the Best Arts and Science College in Namakkal District?
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      JKKN College of Arts and Science is a NAAC-accredited institution in Namakkal District,
      Tamil Nadu, offering 34 programmes across UG, PG, M.Phil, and Ph.D streams. Located in
      Komarapalayam on NH-544, it is affiliated to Periyar University and Bharathiar University,
      with 90%+ placement rates and recruiters including TCS, Infosys, Amazon, and HDFC Bank.
    </p>
  </div>
</section>
```

---

### 3 Key FAQ Rewrites (Highest-Impact Answers)

```tsx
// FAQ Q2 — How far is JKKN from Namakkal? (voice-ready, 28 words)
{
  q: "How far is JKKN College from Namakkal?",
  a: "JKKN College of Arts and Science is located in Komarapalayam, Namakkal District — approximately 66 kilometres from Namakkal town and 22 kilometres from Erode via NH-544.",
},

// FAQ Q1 — Best arts and science college in Namakkal district? (38 words)
{
  q: "What is the best arts and science college in Namakkal district?",
  a: "JKKN College of Arts and Science in Komarapalayam is Namakkal District's most programme-diverse arts and science institution — 34 programmes, NAAC-accredited, affiliated to Periyar and Bharathiar Universities, with 90%+ placement rates.",
},

// FAQ Q10 — Why choose JKKN CAS? (34 words)
{
  q: "Why should Namakkal district students choose JKKN CAS?",
  a: "JKKN CAS is Namakkal District's most comprehensive arts and science college — 34 programmes, NAAC accreditation, 90%+ placements, 7-college campus group with a 500-bed hospital, and direct NH-544 access from Erode and Tiruchengode.",
},
```

---

### Enhanced CollegeOrUniversity Schema (Full Replacement — S-01)

```json
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://cas.jkkn.ac.in/#organization",
  "name": "JKKN College of Arts and Science",
  "alternateName": ["JKKN CAS", "JKK Nataraja College of Arts and Science"],
  "url": "https://cas.jkkn.ac.in",
  "logo": "https://cas.jkkn.ac.in/images/logo.png",
  "image": "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
  "description": "JKKN College of Arts and Science is a NAAC-accredited institution in Komarapalayam, Namakkal District, Tamil Nadu, offering 34 UG, PG, M.Phil, and Ph.D programmes affiliated to Periyar University and Bharathiar University.",
  "foundingDate": "1952",
  "telephone": "+919345855001",
  "email": "info@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
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
      "@type": "AdministrativeArea",
      "name": "Namakkal District",
      "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
    },
    { "@type": "City", "name": "Komarapalayam" },
    { "@type": "City", "name": "Tiruchengode" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Academic Programmes — JKKN College of Arts and Science",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "BCA — Bachelor of Computer Applications",
        "url": "https://cas.jkkn.ac.in/programmes/self-finance/ug/bca",
        "provider": { "@id": "https://cas.jkkn.ac.in/#organization" },
        "educationalLevel": "UG",
        "timeToComplete": "PT3Y"
      },
      {
        "@type": "Course",
        "name": "B.Com — Bachelor of Commerce",
        "url": "https://cas.jkkn.ac.in/programmes/aided/ug/bcom",
        "provider": { "@id": "https://cas.jkkn.ac.in/#organization" },
        "educationalLevel": "UG",
        "timeToComplete": "PT3Y"
      },
      {
        "@type": "Course",
        "name": "BBA — Bachelor of Business Administration",
        "url": "https://cas.jkkn.ac.in/programmes/self-finance/ug/bba",
        "provider": { "@id": "https://cas.jkkn.ac.in/#organization" },
        "educationalLevel": "UG",
        "timeToComplete": "PT3Y"
      },
      {
        "@type": "Course",
        "name": "B.Sc — Multiple Specialisations",
        "url": "https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry",
        "provider": { "@id": "https://cas.jkkn.ac.in/#organization" },
        "educationalLevel": "UG",
        "timeToComplete": "PT3Y"
      },
      {
        "@type": "Course",
        "name": "MCA — Master of Computer Applications",
        "url": "https://cas.jkkn.ac.in/programmes/aided/pg/mca",
        "provider": { "@id": "https://cas.jkkn.ac.in/#organization" },
        "educationalLevel": "PG",
        "timeToComplete": "PT2Y"
      }
    ]
  },
  "accreditation": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "name": "NAAC Accreditation",
    "recognizedBy": {
      "@type": "Organization",
      "name": "National Assessment and Accreditation Council",
      "url": "https://www.naac.gov.in"
    }
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "University Grants Commission",
      "url": "https://www.ugc.ac.in"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Periyar University",
      "url": "https://www.periyaruniversity.ac.in"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Bharathiar University",
      "url": "https://b-u.ac.in"
    }
  ],
  "sameAs": [
    "https://jkkn.ac.in",
    "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "JKKN Institutions",
    "url": "https://jkkn.ac.in"
  }
}
```

---

### HowTo Schema (New Addition — S-03)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply to JKKN College of Arts and Science from Namakkal District",
  "description": "5-step admission process for students from Namakkal District applying to JKKN CAS for 2026-27.",
  "totalTime": "P7D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Visit Website or Campus",
      "text": "Explore programmes at cas.jkkn.ac.in or visit the campus in Komarapalayam on NH-544."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Fill the Application Form",
      "text": "Apply online at admission.jkkn.ac.in or collect the form from the campus admission office."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Submit Documents",
      "text": "Submit 10th and 12th mark sheets, transfer certificate, community certificate, and passport-size photos."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Counseling and Seat Allocation",
      "text": "Attend counseling in-person or online. Seats are allocated based on eligibility and availability."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Fee Payment and Enrollment",
      "text": "Pay semester fees, collect your ID card, and complete enrollment. Hostel booking is available at this stage."
    }
  ]
}
```

---

## Section 3 — Dependency Graph

```
PHASE 0 — UNBLOCKING (No dependencies — all 11 distance fixes + meta + H1 are parallel)
├── C-01  Meta description fix (line 43)          ─┐
├── C-02  OG description fix (line 58)             │
├── C-03  Twitter description fix (line 74)        │
├── C-04  FAQ Q1 fix (line 82)                     │
├── C-05  FAQ Q2 fix (line 86)                     │  All 11 distance error
├── C-06  FAQ Q6 fix (line 102)                    │  fixes + meta + H1
├── C-07  FAQ Q8 fix (line 110)                    │  are independent of
├── C-08  FAQ Q9 fix (line 114)                    │  each other — can run
├── C-09  Hero stat fix (line 220)                 │  in parallel.
├── C-10  Distance card fix (lines 283–290)        │
├── C-11  Transport header fix (line 804)          │
├── M-01  Meta title fix (line 41)                 │
├── M-02  OG title fix (line 56)                   │
├── M-03  Twitter title fix (line 73)              │
├── M-04  Keywords array fix (lines 44–51)         │
├── C-12  H1 heading fix (lines 202–205)           │
├── C-14  CourseSchema BBA fix (line 176)          │
└── C-15  CourseSchema BCA fix (line 184)         ─┘

PHASE 1 GATE — C-22 (Verification)
└── C-22 Text search verification (zero banned strings)
    └── DEPENDS ON: C-01 through C-15, M-01 through M-04 ALL complete

PHASE 2 — AEO CONTENT (depends on Phase 0 + C-22)
├── C-13  Hero description reframe
│   └── DEPENDS ON: C-12
├── C-16  Featured snippet paragraph block
│   └── DEPENDS ON: ALL Phase 0 tasks complete
├── C-17  Full FAQ rewrite (all 10 answers)
│   ├── F-01 through F-10 (detail sub-tasks)
│   └── DEPENDS ON: C-04, C-05, C-06, C-07, C-08 complete
├── C-18  6 AI citation content blocks
│   └── DEPENDS ON: C-16 complete
├── C-19  H2 headings rewrite
│   └── DEPENDS ON: C-12 complete
├── C-20  Transport section update (Erode-first, accurate distances)
│   └── DEPENDS ON: C-11 complete
└── C-21  E-E-A-T trust signals
    └── DEPENDS ON: C-16 complete

PHASE 3 — SCHEMA + LINKS + TECHNICAL
├── S-01  Enhanced CollegeOrUniversity schema
│   └── DEPENDS ON: ALL Phase 0 + Phase 2 content tasks complete
├── S-02  FAQPage schema rewrite
│   └── DEPENDS ON: F-01 through F-10 complete (same time as FAQ tasks)
├── S-03  HowTo schema addition
│   └── DEPENDS ON: S-01 complete
├── S-04  CourseSchema BBA fix
│   └── DEPENDS ON: C-14 complete
├── S-05  CourseSchema BCA fix
│   └── DEPENDS ON: C-15 complete
├── S-06  Schema Markup Validator check
│   └── DEPENDS ON: S-01, S-02, S-03, S-04, S-05 complete
├── S-07  Rich Results Test check
│   └── DEPENDS ON: S-02 complete
├── L-01 through L-07  Internal links
│   └── DEPENDS ON: Phase 0 complete
├── T-01  Sitemap check and update
│   └── DEPENDS ON: Phase 0 complete
├── T-02  Server-render verification (snippet paragraph)
│   └── DEPENDS ON: C-16 complete
├── T-03  Server-render verification (FAQ section)
│   └── DEPENDS ON: F-01 through F-10 complete
└── T-04  Server-render verification (citation blocks)
    └── DEPENDS ON: C-18 complete

PHASE 4 — DEPLOY AND MONITOR (depends on all phases above)
├── T-08  Full 14-point validation checklist
│   └── DEPENDS ON: ALL Phase 1+2+3 tasks complete and DEPLOYED
├── T-05  GSC re-indexing request
│   └── DEPENDS ON: T-08 PASS
├── T-06  GSC baseline capture
│   └── DEPENDS ON: T-05 complete
└── T-07  GA4 baseline capture
    └── DEPENDS ON: T-05 complete
```

---

## Section 4 — Effort Summary

### By Phase

| Phase | Tasks | Total Effort | Gate Condition |
|-------|-------|-------------|----------------|
| Phase 0 — Distance Error Fixes (P0 Critical) | C-01 to C-11 (11 distance), M-01 to M-04 (meta), C-12, C-14, C-15, C-22 | ~2.5 hrs | NOTHING else can start until all Phase 0 tasks pass C-22 |
| Phase 2 — AEO Content Optimization (P1) | C-13, C-16, C-17/F-01–F-10, C-18, C-19, C-20, C-21 | ~4.5 hrs | Phase 0 complete |
| Phase 3 — Schema, Links, Technical (P2) | S-01 to S-07, L-01 to L-07, T-01 to T-04 | ~3.5 hrs | Phase 0 complete; Phase 2 for schema |
| Phase 4 — Validation and Monitoring (P3) | T-05 to T-08 | ~1 hr | All phases deployed |
| **TOTAL** | **52 atomic tasks** | **~11.5 hrs** | Sequential gating enforced |

### By Group

| Group | Task IDs | Count | Effort |
|-------|----------|-------|--------|
| CONTENT (Phase 0 distance errors — the 11 critical instances) | C-01 to C-11 | 11 | ~1.5 hrs |
| CONTENT (Phase 0 H1/hero/CourseSchema) | C-12 to C-15 | 4 | ~30 min |
| CONTENT (verification) | C-22 | 1 | 10 min |
| CONTENT (Phase 2 AEO) | C-13, C-16, C-17, C-18, C-19, C-20, C-21 | 7 | ~3.5 hrs |
| META | M-01 to M-04 | 4 | 20 min |
| FAQ (Phase 2 detail) | F-01 to F-10 | 10 | ~1.5 hrs |
| SCHEMA | S-01 to S-07 | 7 | ~2 hrs |
| LINKS | L-01 to L-07 | 7 | ~1 hr |
| TECHNICAL | T-01 to T-08 | 8 | ~1.5 hrs |

### AEO Score Impact by Phase

| Phase Completed | Projected AEO Score | Points Gained |
|----------------|--------------------|-|
| Before any work | 20 / 100 | — |
| After Phase 0 (fixes only) | 25 / 100 | +5 (removes penalties) |
| After Phase 2 (content) | 60 / 100 | +35 (snippet, PAA, voice) |
| After Phase 3 (schema + links) | 75 / 100 | +15 (schema, AI citation) |
| After Phase 4 (indexed and live) | 82 / 100 | +7 (indexing + GSC signals) |

---

## Section 5 — Implementation Order

### Day 1 — Morning: All Phase 0 Tasks (Parallel, ~2.5 hrs)

Run all Phase 0 tasks in a single developer session. They are independent and can be done in any order within this group.

1. Open `src/app/namakkal/page.tsx`
2. Fix meta block in one pass: C-01 (line 43), C-02 (line 58), C-03 (line 74), M-01 (line 41), M-02 (line 56), M-03 (line 73), M-04 (lines 44–51)
3. Fix FAQ array in one pass: C-04 (line 82), C-05 (line 86), C-06 (line 102), C-07 (line 110), C-08 (line 114)
4. Fix hero stat card: C-09 (line 220)
5. Replace distance card section: C-10 (lines 282–290)
6. Fix transport header: C-11 (line 804)
7. Fix H1 heading: C-12 (lines 202–205)
8. Fix CourseSchema BBA: C-14 (line 176)
9. Fix CourseSchema BCA: C-15 (line 184)
10. Run C-22 text search verification: search for "10 km", "5-10 km", "15-20 minutes", "near Namakkal", "closest quality college" — confirm zero matches
11. Deploy to staging/preview — visual inspection of hero, distance card, transport section

### Day 1 — Afternoon: Phase 2 Content (~4.5 hrs)

12. Fix hero description paragraph: C-13 (lines 209–213)
13. Add featured snippet paragraph block: C-16 (new section after hero)
14. Rewrite all 10 FAQ answers: F-01 to F-10 (lines 79–120, faqs array)
15. Add 6 AI citation blocks: C-18 (multiple section insertion points)
16. Rewrite H2 headings: C-19
17. Update transport section with Erode-first references: C-20
18. Add E-E-A-T trust signals: C-21

### Day 2 — Morning: Phase 3 Schema (~2 hrs)

19. Replace CollegeOrUniversity schema: S-01 (lines 129–157)
20. Rewrite FAQPage schema with corrected answers: S-02 (must match F-01 to F-10)
21. Add HowTo schema: S-03 (new JSON-LD block)
22. Fix CourseSchema BBA description: S-04 (parallel with C-14, if not already done)
23. Fix CourseSchema BCA description: S-05 (parallel with C-15, if not already done)
24. Validate all schema at validator.schema.org: S-06
25. Validate FAQPage at search.google.com/test/rich-results: S-07

### Day 2 — Afternoon: Phase 3 Links + Technical (~2.5 hrs)

26. Add programme internal links: L-01 to L-05
27. Verify and add city cross-links: L-06, L-07
28. Check and update sitemap: T-01
29. Verify server-render for snippet paragraph: T-02
30. Verify server-render for FAQ section: T-03
31. Verify server-render for citation blocks: T-04
32. Deploy to production

### Day 3 — Morning: Phase 4 Validation + GSC (~1 hr)

33. Run full 14-point validation checklist: T-08
34. If all 14 checks PASS → request GSC re-indexing: T-05
35. Capture GSC baselines: T-06
36. Capture GA4 baselines: T-07

---

## Verification Strings (Post-Fix Banned — Must Return Zero Matches)

After completing all Phase 0 tasks, run a text search in `src/app/namakkal/page.tsx` for each string below. Every string must return **zero matches**.

| Banned String | Reason |
|--------------|--------|
| `10 km` | False distance claim |
| `5-10 km` | False distance claim |
| `15-20 minutes` | False commute time claim derived from false distance |
| `near Namakkal` | Misleading proximity framing |
| `Close to Namakkal` | Misleading proximity framing |
| `closest quality college to Namakkal` | False proximity superlative |
| `just 10 km` | False distance with emphasis |
| `just 5-10 km` | False distance with emphasis |
| `FROM NAMAKKAL` (as stat label) | False distance stat card label |

---

*Decompose file generated: 2026-03-28 | Source: namakkal-aeo-spec.md v1.0 + namakkal-aeo-plan.md v1.0 + src/app/namakkal/page.tsx*
