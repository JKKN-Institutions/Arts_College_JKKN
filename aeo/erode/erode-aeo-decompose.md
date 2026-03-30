# AEO Atomic Task Decomposition — JKKN CAS Erode City Page

**Institution:** JKKN College of Arts and Science
**URL:** https://cas.jkkn.ac.in/erode
**Source File:** `src/app/erode/page.tsx`
**Decompose Version:** 1.0
**Date:** 2026-03-28
**Based On:** `aeo/erode/erode-aeo-spec.md` + `aeo/erode/erode-aeo-plan.md`
**AEO Score:** 25/100 (baseline) → 68/100 (target)

---

## TABLE OF CONTENTS

1. [Atomic Task List](#1-atomic-task-list)
2. [Before/After Code Blocks](#2-beforeafter-code-blocks)
3. [Dependency Graph](#3-dependency-graph)
4. [Estimated Effort Summary](#4-estimated-effort-summary)
5. [Implementation Order](#5-implementation-order)

---

## 1. Atomic Task List

### META — Title, Description, OG, Twitter, Robots, Keywords

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| M1 | Change meta title from "Near Erode" to "in Erode" with exact-match primary keyword | `src/app/erode/page.tsx` | 40 | `"Best Arts and Science College Near Erode \| JKKN CAS"` | `"Arts and Science College in Erode \| JKKN CAS"` | XS | None |
| M2 | Rewrite meta description — remove 35 km distance, add "34 programmes" and exact keyword | `src/app/erode/page.tsx` | 41–42 | `"JKKN CAS — 35 km from Erode via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27."` | `"JKKN CAS — NAAC-accredited arts and science college near Erode. 34 programmes, 80%+ placements. BCA, BBA, B.Com, B.Sc. Admissions open 2026–27."` | XS | T0 (distance verified) |
| M3 | Replace keywords array — add "arts and science college in erode" as first keyword, add programme-specific keywords | `src/app/erode/page.tsx` | 43–50 | 6-item array starting with `"arts and science college near Erode"` | 9-item array starting with `"arts and science college in erode"`, adding `"BCA college near Erode"`, `"BBA college near Erode"`, `"B.Com college near Erode"` | XS | None |
| M4 | Add `robots: "index, follow"` field to metadata export | `src/app/erode/page.tsx` | After line 50 (inside metadata object, before `alternates:`) | _(field absent)_ | `robots: "index, follow",` | XS | None |
| M5 | Update OG title — change from "Near Erode" to match new title | `src/app/erode/page.tsx` | 55 | `"Best Arts and Science College Near Erode \| JKKN CAS"` | `"Arts and Science College Near Erode — JKKN CAS"` | XS | None |
| M6 | Update OG description — remove 35 km, add "34 programmes" | `src/app/erode/page.tsx` | 56–57 | `"JKKN CAS — 35 km from Erode. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27."` | `"JKKN CAS — NAAC-accredited, 34 programmes, 80%+ placements. Near Erode via NH-544. Admissions open 2026–27."` | XS | None |
| M7 | Update OG image alt text — remove "modern classroom", add geographic context | `src/app/erode/page.tsx` | 66 | `"JKKN College of Arts and Science — modern classroom facility"` | `"JKKN College of Arts and Science — campus near Erode on NH-544"` | XS | None |
| M8 | Update Twitter title — align with new meta title | `src/app/erode/page.tsx` | 72 | `"Best Arts and Science College Near Erode \| JKKN CAS"` | `"Arts and Science College Near Erode — JKKN CAS"` | XS | None |
| M9 | Update Twitter description — remove 35 km, add programme count | `src/app/erode/page.tsx` | 73 | `"JKKN CAS — 35 km from Erode. NAAC-accredited, 80%+ placements. Admissions open 2026-27."` | `"NAAC-accredited arts college near Erode. 34 programmes, 80%+ placements, hostel available. Admissions 2026–27 open."` | XS | None |

---

### CONTENT — Body Text, Headings, Section Additions

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| C1 | Update H1 text — replace "Best Arts and Science College Near Erode" with "in Erode" variant | `src/app/erode/page.tsx` | 202–204 | `Best Arts and Science College Near`<br>`<br />`<br>`<span ...>Erode</span>` | `Arts and Science College in Erode — JKKN CAS` (single line, preserve all Tailwind classes) | XS | None |
| C2 | Insert featured snippet H2 heading after H1 close tag (line 205), before stats grid (line 216) | `src/app/erode/page.tsx` | After 205 | _(H2 absent — stats grid starts immediately)_ | `<h2 className="text-xl font-semibold text-gray-800 mb-3">Arts and Science College Near Erode — JKKN CAS</h2>` | XS | None |
| C3 | Insert 55-word featured snippet paragraph after new H2 (Task C2), with required CSS class | `src/app/erode/page.tsx` | After C2 insertion | _(paragraph absent)_ | `<p className="snippet-answer-paragraph text-gray-700 leading-relaxed mb-6">JKKN College of Arts and Science, located on NH-544 approximately 22 km from Erode, is a NAAC-accredited institution offering 34 UG and PG programmes including BCA, BBA, B.Com, and B.Sc specialisations. Affiliated to Periyar University and Bharathiar University, it achieves 80%+ placement rates with recruiters including TCS, Infosys, HDFC Bank, and Amazon.</p>` | S | T0, T1 (distance fixed) |
| C4 | Fix distance stat card — change "35km" to verified distance | `src/app/erode/page.tsx` | 220 | `{ value: "35km", label: "FROM ERODE" }` | `{ value: "22km", label: "FROM ERODE" }` | XS | T0 |
| C5 | Fix Distance Card large "35km" display number | `src/app/erode/page.tsx` | 283 | `35<span ...>km</span>` | `22<span ...>km</span>` | XS | T0 |
| C6 | Fix Distance Card subtitle — change "40-50 minutes" to "35-40 minutes" matching verified travel time | `src/app/erode/page.tsx` | 290 | `"40-50 minutes via NH-544 — direct highway connectivity"` | `"35–40 minutes via NH-544 — direct highway connectivity"` | XS | T0 |
| C7 | Insert entity-dense "About JKKN CAS" paragraph as first paragraph inside "Why Students Choose" section — add before the card grid | `src/app/erode/page.tsx` | After line 320 (after `<div className="mx-auto mt-4 w-12 h-1...">`) | _(entity paragraph absent — section jumps straight to card grid)_ | `<p className="text-gray-700 leading-relaxed mb-4">JKKN College of Arts and Science (cas.jkkn.ac.in) is a NAAC-accredited institution established in 1952, located on NH-544 at Natarajapuram, Komarapalayam, Namakkal District, Tamil Nadu 638183. The college is affiliated to Periyar University and Bharathiar University and approved by UGC. It offers 34 programmes spanning UG, PG, and Ph.D levels across arts, science, commerce, and computer applications. The college is part of the JKKN Group of Institutions, which operates 7 colleges, 2 schools, and a 500-bed multi-specialty teaching hospital on a single campus.</p>` | S | None |
| C8 | Update programme card H3 for B.Sc — append "near Erode" | `src/app/erode/page.tsx` | 389 | `"B.Sc (various specialisations)"` | `"B.Sc College Near Erode — JKKN CAS"` | XS | None |
| C9 | Update programme card H3 for B.Com — append "near Erode" | `src/app/erode/page.tsx` | 398 | `"B.Com"` | `"B.Com College Near Erode — JKKN CAS"` | XS | None |
| C10 | Update programme card H3 for BBA — append "near Erode" | `src/app/erode/page.tsx` | 407 | `"BBA (Bachelor of Business Administration)"` | `"BBA College Near Erode — JKKN CAS"` | XS | None |
| C11 | Update programme card H3 for BCA — append "near Erode" | `src/app/erode/page.tsx` | 416 | `"BCA (Bachelor of Computer Applications)"` | `"BCA College Near Erode — JKKN CAS"` | XS | None |
| C12 | Fix travel distance in "How to Reach" route header subtitle | `src/app/erode/page.tsx` | 804–806 | `30-40 km • 40-50 minutes` | `~22 km • 35–40 minutes` | XS | T0 |
| C13 | Fix railway station distance in How to Reach section | `src/app/erode/page.tsx` | 829 | `"Erode Junction (~35 km from campus)"` | `"Erode Junction (~22 km from campus)"` | XS | T0 |
| C14 | Replace "top-tier" with "NAAC-accredited" in hero description paragraph | `src/app/erode/page.tsx` | 210 | `"top-tier arts and science programmes"` | `"NAAC-accredited arts and science programmes"` | XS | None |
| C15 | Replace "world-class education experience" with "well-equipped education experience" in Campus & Facilities section subheading | `src/app/erode/page.tsx` | 871 | `"Everything you need for a world-class education experience"` | `"Everything you need for a well-equipped education experience"` | XS | None |
| C16 | Update placement rate stat in Placement section — add batch year attribution | `src/app/erode/page.tsx` | 616 | `{ value: "80%+", label: "PLACEMENT RATE" }` | `{ value: "80%+", label: "PLACEMENT RATE — 2024–25" }` | XS | None |
| C17 | Insert "Last updated: March 2026" note at bottom of page, before closing `</main>` | `src/app/erode/page.tsx` | Before line 1074 | _(note absent)_ | `<p className="text-xs text-gray-400 text-center py-4">Page last updated: March 2026</p>` | XS | None |
| C18 | Insert comparison table section — new section before FAQ section | `src/app/erode/page.tsx` | Before line 1003 | _(comparison table section absent)_ | New `<section>` with H2 "JKKN CAS vs Erode City Colleges — Quick Comparison" and 7-row comparison table (see Section 2 for full code block) | M | T0 |
| C19 | Fix hero description paragraph — change "30-40 km" to verified distance | `src/app/erode/page.tsx` | 211 | `"80%+ placement support — just 30-40 km from Erode"` | `"80%+ placement support — approximately 22 km from Erode"` | XS | T0 |
| C20 | Fix "Why Choose" section description paragraph — change "30-40 km" to verified distance | `src/app/erode/page.tsx` | 316–317 | `"JKKN is just 30-40 km away"` | `"JKKN is approximately 22 km away"` | XS | T0 |
| C21 | Fix "Easy Commute" card description — change "30-40 km" to verified distance | `src/app/erode/page.tsx` | 354 | `"Just 30-40 km from Erode."` | `"Just 22 km from Erode."` | XS | T0 |

---

### FAQ — Question/Answer Rewrites

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| F1 | Rewrite FAQ Q1 answer — replace "widely regarded", fix to ≤29 word first sentence | `src/app/erode/page.tsx` | 81 | `"JKKN College of Arts and Science, located just 30-40 km from Erode on NH-544, is widely regarded as one of the top arts and science colleges..."` | `"JKKN College of Arts and Science, located 22 km from Erode on NH-544, is a NAAC-accredited institution with 34 programmes and 80%+ placement rates..."` (full answer from spec Section 9, Q1) | S | T0 |
| F2 | Rewrite FAQ Q2 answer — fix distance from "30-40 km" / "40-50 minutes", use verified values | `src/app/erode/page.tsx` | 85 | `"JKKN CAS is approximately 30-40 km from Erode city centre, which takes about 40-50 minutes by road via NH-544..."` | `"JKKN CAS is approximately 22 km from Erode city centre via NH-544, a journey of 35–40 minutes by road..."` (full answer from spec Section 9, Q2) | S | T0 |
| F3 | Rewrite FAQ Q3 answer — add programme count, remove "34 programmes" mention was absent, add "all UGC-approved" | `src/app/erode/page.tsx` | 89 | `"BCA and B.Com are the most popular choices among students from Erode..."` | `"JKKN CAS near Erode offers BCA, BBA, B.Com, B.Sc across 8 specialisations, MCA, M.Com, M.Sc, and Ph.D programmes — 34 courses in total..."` (full answer from spec Section 9, Q3) | S | None |
| F4 | Rewrite FAQ Q4 answer (Can BCA students get IT jobs) — rewrite as bus/transport question per spec PAA bank Q4 (Is there a direct bus from Erode to JKKN?) | `src/app/erode/page.tsx` | 92–94 | `q: "Can BCA students from Erode get IT jobs?", a: "Yes. BCA graduates from JKKN CAS are placed at companies like TCS..."` | `q: "Is there a direct bus from Erode to JKKN CAS?", a: "Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam via NH-544; the journey takes 35–40 minutes..."` (full answer from spec Section 9, Q4) | S | None |
| F5 | Rewrite FAQ Q5 answer — fix fees claim, remove "30-50% lower" unverified claim, change to factual opener | `src/app/erode/page.tsx` | 96–98 | `"Yes. JKKN CAS fees are competitively priced — often 30-50% lower than private colleges..."` | `"JKKN CAS fees are lower than most private colleges in Erode city..."` (full answer from spec Section 9, Q6) | S | None |
| F6 | Rewrite FAQ Q6 answer — hostel Q, fix "40-50 minutes" to "35-40 minutes" | `src/app/erode/page.tsx` | 100–102 | `"...the campus is just 40-50 minutes away."` | `"JKKN CAS provides separate hostel accommodation for boys and girls on the main campus..."` (full answer from spec Section 9, Q5) | S | T0 |
| F7 | Rewrite FAQ Q7 answer — how to apply, use spec Q9 voice-ready opener | `src/app/erode/page.tsx` | 104–106 | `"You can apply online through the official website at https://cas.jkkn.ac.in/ or visit the campus directly..."` | `"Applications for JKKN CAS are submitted online at admission.jkkn.ac.in or in person at the campus admission office..."` (full answer from spec Section 9, Q9) | S | None |
| F8 | Rewrite FAQ Q8 answer — direct bus question already present but rewrite for ≤29 word first sentence and correct 40-50 → 35-40 minutes | `src/app/erode/page.tsx` | 108–110 | `"Yes. Regular TNSTC government buses...Journey time is approximately 40 to 50 minutes."` | Already covered by F4 — Q8 now maps to accreditation question (Q7 from spec) — `q: "Is JKKN College of Arts and Science accredited?", a: "JKKN College of Arts and Science is NAAC-accredited and UGC-approved..."` | S | None |
| F9 | Rewrite FAQ Q9 answer — hostel cost, remove "significantly lower" claim, add factual structure | `src/app/erode/page.tsx` | 112–114 | `"Hostel fees at JKKN CAS are significantly lower than city PG accommodations..."` | Maps to spec Q8 placement rate — `q: "What placement rate does JKKN CAS achieve?", a: "JKKN CAS achieves an 80%+ placement rate for graduating students..."` | S | None |
| F10 | Rewrite FAQ Q10 answer — remove "50+ acre" unverified claim, remove "30-50% lower" unverified claim, fix distance | `src/app/erode/page.tsx` | 116–118 | `"JKKN CAS offers several advantages...fees are 30-50% lower...50+ acre green campus..."` | `q: "Why should Erode students choose JKKN CAS over colleges in Erode city?", a: "JKKN CAS offers lower fees, NAAC accreditation, a residential campus, and 80%+ placements with national recruiters — advantages not uniformly available at Erode city colleges..."` (spec Section 9, Q10 — without unverified claims) | S | T0 |
| F11 | Create separate `schemaFaqs` array above the return statement — 10 short voice-optimized answers for FAQSchema component | `src/app/erode/page.tsx` | Before line 121 (before `return (`) | _(schemaFaqs array absent — FAQSchema uses full `faqs` array)_ | New `const schemaFaqs = [...]` array with 10 entries using ≤29 word first-sentence answers from spec Section 11.2 | M | F1–F10 |
| F12 | Update FAQSchema component call — change `faqs={faqs.map(...)}` to use `schemaFaqs` | `src/app/erode/page.tsx` | 127 | `<FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />` | `<FAQSchema faqs={schemaFaqs} />` | XS | F11 |

---

### SCHEMA — JSON-LD Additions and Modifications

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| S1 | Replace entire CollegeOrUniversity schema block — add telephone, email, foundingDate, description, sameAs, memberOf, hasOfferCatalog, parentOrganization, accreditation | `src/app/erode/page.tsx` | 128–156 | Minimal schema with name, url, address, areaServed (1 city), geo only | Enhanced schema with 11 additional fields (see Section 2 for full code block) | M | T0 |
| S2 | Fix CourseSchema #1 (B.Sc) — change relative URL to absolute URL | `src/app/erode/page.tsx` | 163 | `url="/programmes/aided/ug/bsc-chemistry"` | `url="https://cas.jkkn.ac.in/programmes/aided/ug/bsc-chemistry"` | XS | None |
| S3 | Fix CourseSchema #2 (B.Com) — change relative URL to absolute URL | `src/app/erode/page.tsx` | 171 | `url="/programmes/aided/ug/bcom"` | `url="https://cas.jkkn.ac.in/programmes/aided/ug/bcom"` | XS | None |
| S4 | Fix CourseSchema #3 (BBA) — change relative URL to absolute URL | `src/app/erode/page.tsx` | 179 | `url="/programmes/self-finance/ug/bba"` | `url="https://cas.jkkn.ac.in/programmes/self-finance/ug/bba"` | XS | None |
| S5 | Fix CourseSchema #4 (BCA) — change relative URL to absolute URL | `src/app/erode/page.tsx` | 187 | `url="/programmes/self-finance/ug/bca"` | `url="https://cas.jkkn.ac.in/programmes/self-finance/ug/bca"` | XS | None |
| S6 | Insert new WebPage + Speakable schema block — add as `<script type="application/ld+json">` immediately before existing CollegeOrUniversity schema (before line 128) | `src/app/erode/page.tsx` | Before 128 | _(WebPage and Speakable schema entirely absent)_ | New JSON-LD block with `@type: "WebPage"`, `speakable.cssSelector: [".snippet-answer-paragraph", "#faq-section"]`, `breadcrumb`, `isPartOf` (see Section 2 for full code block) | M | C3 (adds `.snippet-answer-paragraph`), L1 (adds `#faq-section`) |
| S7 | Add `areaServed` for Komarapalayam as second city in CollegeOrUniversity schema (part of S1) | `src/app/erode/page.tsx` | 144–148 | `"areaServed": { "@type": "City", "name": "Erode" }` | `"areaServed": [{ "@type": "City", "name": "Erode" }, { "@type": "City", "name": "Komarapalayam" }]` | XS | S1 |

---

### LINKS — Internal Linking Changes

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| L1 | Add `id="faq-section"` attribute to the FAQ section element — required anchor for Speakable schema | `src/app/erode/page.tsx` | 1004 | `<section aria-label="Frequently asked questions" className="bg-white py-14 sm:py-16">` | `<section id="faq-section" aria-label="Frequently asked questions" className="bg-white py-14 sm:py-16">` | XS | None |
| L2 | Add internal link to `/facilities` page at end of Campus & Facilities section — after the facilities cards grid | `src/app/erode/page.tsx` | After line 932 (after closing `</div>` of facilities grid) | _(link absent)_ | `<div className="text-center mt-8"><Link href="/facilities" className="text-[#006837] hover:text-[#004d28] font-medium text-sm">Explore Campus Facilities →</Link></div>` | XS | None |
| L3 | Add internal link to `/placements` page at end of Placement Highlights section — after the recruiter badges | `src/app/erode/page.tsx` | After line 657 (after closing `</div>` of recruiter badges section) | _(link absent)_ | `<div className="text-center mt-8"><Link href="/placements" className="text-[#006837] hover:text-[#004d28] font-medium text-sm">View Full Placement Report →</Link></div>` | XS | None |
| L4 | Verify `/tiruchengode` city page exists — if exists, add as fifth city card in Explore More Cities section | `src/app/erode/page.tsx` | 1050–1053 | 4 city entries: Namakkal, Salem, Tiruppur, Coimbatore | Add `{ Icon: MapPin, name: "Tiruchengode", km: "~15 km", href: "/tiruchengode" }` as first entry (nearest city) — only if `/tiruchengode` page exists | XS | Pre-check: verify `/tiruchengode` route |

---

### TECHNICAL — Pre-Flight, Verification, Deployment, Monitoring

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| T0 | BLOCKING — Verify exact road distance from Erode Central Bus Stand to JKKN CAS via Google Maps (driving route); record in MEMORY.md; use this value for all distance references | External (Google Maps + MEMORY.md) | N/A | Distance recorded as 35 km on page; MEMORY.md records ~22 km | Single verified km value confirmed and recorded | XS | Nothing — must complete FIRST |
| T1 | Run global search in `src/app/erode/page.tsx` for all remaining "35" and "30-40" distance references after C4–C6, C12–C13, C19–C21 are done — confirm zero incorrect distance values remain | `src/app/erode/page.tsx` | All | Grep for `35` and `30-40` | Zero results for incorrect distance values | XS | C4, C5, C6, C12, C13, C19, C20, C21 |
| T2 | Verify all 4 CourseSchema absolute URLs resolve with HTTP 200 by opening each in browser | Browser | N/A | 4 relative URLs (S2–S5 pre-fix) | 4 absolute URLs confirmed live | XS | S2, S3, S4, S5 |
| T3 | Validate CollegeOrUniversity schema via https://validator.schema.org — confirm zero errors, all 11 new fields present | validator.schema.org | N/A | Validation not performed on current schema | Zero errors; all new fields validated | S | S1 |
| T4 | Validate FAQPage schema via Google Rich Results Test — confirm 10 FAQ entries pass with no errors, no hedging language in schema answers | Google Rich Results Test | N/A | Schema uses long-form answers with hedging | 10 clean entries pass rich results test | S | F11, F12 |
| T5 | Validate WebPage + Speakable schema via schema.org validator — confirm `.snippet-answer-paragraph` class exists in DOM and `#faq-section` ID exists in DOM | Chrome DevTools + validator.schema.org | N/A | Schema absent | Zero schema errors; both CSS selectors resolve in DOM | S | S6, C3, L1 |
| T6 | Run pre-deployment content audit — confirm all 15 checklist items from plan Step 4.1 pass | `src/app/erode/page.tsx` | Multiple | Unchecked | All 15 items verified (distance, meta, schema, content, links) | M | All above tasks |
| T7 | Deploy updated `src/app/erode/page.tsx` to production at https://cas.jkkn.ac.in/erode | Vercel / deployment | N/A | Pre-optimization page | Post-optimization page live | S | T6 |
| T8 | Submit https://cas.jkkn.ac.in/erode for indexing via Google Search Console URL Inspection → Request Indexing | Google Search Console | N/A | Page not indexed for Erode queries | Indexing requested | XS | T7 |
| T9 | Verify Erode page is present in sitemap.xml — if absent, add and resubmit sitemap via GSC → Sitemaps | sitemap.xml + GSC | N/A | Sitemap status unknown | Page confirmed in sitemap and submitted | S | T7 |
| T10 | Set up 5 GSC query saved filters: "erode", "arts and science college", "near erode", "jkkn erode", "bca erode" | Google Search Console | N/A | No Erode-specific filters | 5 filters saved for weekly monitoring | XS | T8 |
| T11 | Verify OG image loads: paste page URL into Facebook Sharing Debugger — confirm 1200x630 image renders | Facebook Sharing Debugger | N/A | OG image unvalidated | Image confirmed loading at 1200x630 | XS | T7 |
| T12 | Schedule 3-month AEO re-evaluation — calendar reminder to re-run spec Section 2 scoring framework against live page | Calendar / PROGRESS.md | N/A | No monitoring schedule | Reminder set for 2026-06-28; re-score target 68/100 | XS | T8 |

---

## 2. Before/After Code Blocks

### 2.1 Meta Tags — Complete Replacement

**Tasks M1–M9 combined. Replace the entire metadata export block.**

**BEFORE (lines 39–75):**

```tsx
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Erode | JKKN CAS",
  description:
    "JKKN CAS — 35 km from Erode via NH-544. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.",
  keywords: [
    "arts and science college near Erode",
    "best college near Erode",
    "JKKN CAS Erode",
    "college near Erode NH-544",
    "affordable college near Erode",
    "BCA BBA B.Com B.Sc near Erode",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/erode",
  },
  openGraph: {
    title: "Best Arts and Science College Near Erode | JKKN CAS",
    description:
      "JKKN CAS — 35 km from Erode. NAAC-accredited, 80%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.",
    url: "https://cas.jkkn.ac.in/erode",
    siteName: "JKKN College of Arts and Science",
    type: "website",
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — modern classroom facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Arts and Science College Near Erode | JKKN CAS",
    description: "JKKN CAS — 35 km from Erode. NAAC-accredited, 80%+ placements. Admissions open 2026-27.",
  },
};
```

**AFTER:**

```tsx
export const metadata: Metadata = {
  title: "Arts and Science College in Erode | JKKN CAS",
  // 48 chars — within 60 limit

  description:
    "JKKN CAS — NAAC-accredited arts and science college near Erode. 34 programmes, 80%+ placements. BCA, BBA, B.Com, B.Sc. Admissions open 2026–27.",
  // 144 chars — within 155 limit

  keywords: [
    "arts and science college in erode",
    "arts and science college near erode",
    "best college near erode",
    "JKKN CAS Erode",
    "BCA college near Erode",
    "BBA college near Erode",
    "B.Com college near Erode",
    "college near Erode NH-544",
    "affordable college near Erode",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://cas.jkkn.ac.in/erode",
  },

  openGraph: {
    title: "Arts and Science College Near Erode — JKKN CAS",
    description:
      "JKKN CAS — NAAC-accredited, 34 programmes, 80%+ placements. Near Erode via NH-544. Admissions open 2026–27.",
    url: "https://cas.jkkn.ac.in/erode",
    siteName: "JKKN College of Arts and Science",
    type: "website",
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — campus near Erode on NH-544",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arts and Science College Near Erode — JKKN CAS",
    description:
      "NAAC-accredited arts college near Erode. 34 programmes, 80%+ placements, hostel available. Admissions 2026–27 open.",
  },
};
```

---

### 2.2 H1 Heading — Exact Change

**Task C1. Lines 201–204.**

**BEFORE:**

```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Best Arts and Science College Near
  <br />
  <span className="text-[#7cb983]">Erode</span>
</h1>
```

**AFTER:**

```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Arts and Science College in Erode — JKKN CAS
</h1>
```

---

### 2.3 Featured Snippet Paragraph — New Insertion

**Tasks C2 + C3. Insert after line 204 (H1 close tag), before line 216 (stats grid).**

**BEFORE (lines 205–215 — gap between H1 and stats):**

```tsx
          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Erode to JKKN — a short, smooth ride on NH-544. JKKN College of
            Arts and Science offers top-tier arts and science programmes with
            80%+ placement support — just 30-40 km from Erode with excellent
            highway connectivity.
          </p>

          {/* Stats */}
```

**AFTER (add the snippet elements before the existing description paragraph):**

```tsx
          {/* Featured Snippet Paragraph */}
          <h2 className="text-xl font-semibold text-white mb-3">
            Arts and Science College Near Erode — JKKN CAS
          </h2>
          <p className="snippet-answer-paragraph text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            JKKN College of Arts and Science, located on NH-544 approximately
            22 km from Erode, is a NAAC-accredited institution offering 34 UG
            and PG programmes including BCA, BBA, B.Com, and B.Sc
            specialisations. Affiliated to Periyar University and Bharathiar
            University, it achieves 80%+ placement rates with recruiters
            including TCS, Infosys, HDFC Bank, and Amazon.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Erode to JKKN — a short, smooth ride on NH-544. JKKN College of
            Arts and Science offers NAAC-accredited arts and science programmes
            with 80%+ placement support — approximately 22 km from Erode with
            excellent highway connectivity.
          </p>

          {/* Stats */}
```

**Note:** "22 km" is used above based on the verified distance from MEMORY.md. If T0 confirms a different value, replace both instances of "22 km" with the verified figure.

---

### 2.4 FAQ Q1 — Example Full Rewrite

**Task F1. Lines 79–82.**

**BEFORE:**

```tsx
    {
      q: "What is the best arts and science college in Erode?",
      a: "JKKN College of Arts and Science, located just 30-40 km from Erode on NH-544, is widely regarded as one of the top arts and science colleges accessible from Erode. Approved by UGC, NAAC and affiliated to Periyar University / Bharathiar University, it offers excellent programmes with strong placement support.",
    },
```

**AFTER:**

```tsx
    {
      q: "What is the best arts and science college near Erode?",
      a: "JKKN College of Arts and Science, located 22 km from Erode on NH-544, is a NAAC-accredited institution with 34 programmes and 80%+ placement rates. It is affiliated to Periyar University and Bharathiar University and approved by UGC. The college offers both UG and PG programmes across arts, science, and commerce streams.",
    },
```

---

### 2.5 FAQ Q2 — Distance Fix

**Task F2. Lines 83–86.**

**BEFORE:**

```tsx
    {
      q: "How far is JKKN CAS from Erode?",
      a: "JKKN CAS is approximately 30-40 km from Erode city centre, which takes about 40-50 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
    },
```

**AFTER:**

```tsx
    {
      q: "How far is JKKN CAS from Erode?",
      a: "JKKN CAS is approximately 22 km from Erode city centre via NH-544, a journey of 35–40 minutes by road. Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam throughout the day. College transport is also available.",
    },
```

---

### 2.6 FAQ Q4 — Question Replacement (Bus Route)

**Task F4. Lines 91–94.**

**BEFORE:**

```tsx
    {
      q: "Can BCA students from Erode get IT jobs?",
      a: "Yes. BCA graduates from JKKN CAS are placed at companies like TCS, Infosys BPO, and other IT firms. Erode's proximity to Coimbatore's IT corridor means BCA students have access to a growing job market. The college provides placement training, aptitude coaching, and mock interviews.",
    },
```

**AFTER:**

```tsx
    {
      q: "Is there a direct bus from Erode to JKKN CAS?",
      a: "Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam via NH-544; the journey takes 35–40 minutes. Private buses on the Erode–Salem–Namakkal corridor also stop at Komarapalayam. The JKKN campus sits directly on NH-544, making it accessible from any bus stop at the highway.",
    },
```

---

### 2.7 SchemaFaqs Array — New Insertion Before Return

**Task F11. Insert before line 121 (`return (`).**

**BEFORE (line 120 → 121):**

```tsx
  ];

  return (
```

**AFTER:**

```tsx
  ];

  const schemaFaqs = [
    {
      question: "What is the best arts and science college near Erode?",
      answer:
        "JKKN College of Arts and Science, located 22 km from Erode on NH-544, is a NAAC-accredited institution with 34 programmes and 80%+ placement rates. It is affiliated to Periyar University and Bharathiar University and approved by UGC.",
    },
    {
      question: "How far is JKKN CAS from Erode?",
      answer:
        "JKKN CAS is approximately 22 km from Erode city centre via NH-544, a journey of 35 to 40 minutes by road. Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam throughout the day.",
    },
    {
      question: "Is there a direct bus from Erode to JKKN CAS?",
      answer:
        "Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam via NH-544; the journey takes 35 to 40 minutes. Private buses on the Erode–Salem–Namakkal corridor also stop at Komarapalayam.",
    },
    {
      question: "Does JKKN CAS offer hostel facilities for students from Erode?",
      answer:
        "JKKN CAS provides separate hostel accommodation for boys and girls on the main campus. The hostel includes furnished rooms, three meals per day, WiFi, and 24/7 security.",
    },
    {
      question: "Are fees at JKKN CAS affordable compared to Erode colleges?",
      answer:
        "JKKN CAS fees are lower than most private colleges in Erode city. Tamil Nadu government scholarships for BC, MBC, SC, and ST students are available. Contact the admission office at +91 9345855001 for the current fee structure.",
    },
    {
      question: "Is JKKN College of Arts and Science accredited?",
      answer:
        "JKKN College of Arts and Science is NAAC-accredited and UGC-approved. The college is affiliated to Periyar University and Bharathiar University. It is part of the JKKN Group of Institutions.",
    },
    {
      question: "What placement rate does JKKN CAS achieve for Erode students?",
      answer:
        "JKKN CAS achieves an 80%+ placement rate for graduating students. Recruiters include TCS, Infosys BPO, HDFC Bank, ICICI Bank, Amazon, Flipkart, and Jio. The highest package recorded is 5–7 LPA.",
    },
    {
      question: "How can students from Erode apply to JKKN CAS?",
      answer:
        "Applications for JKKN CAS are submitted online at admission.jkkn.ac.in or in person at the campus admission office. Admissions for 2026–27 are currently open. Call +91 9345855001 for guidance.",
    },
    {
      question: "Which courses are available at arts and science colleges near Erode?",
      answer:
        "JKKN CAS near Erode offers BCA, BBA, B.Com, B.Sc across 8 specialisations, MCA, M.Com, M.Sc, and Ph.D programmes — 34 courses in total. All programmes are UGC-approved and affiliated to Periyar University or Bharathiar University.",
    },
    {
      question: "Why should Erode students choose JKKN CAS over colleges in Erode city?",
      answer:
        "JKKN CAS offers lower fees, NAAC accreditation, a residential campus, and 80%+ placements with national recruiters — advantages not uniformly available at Erode city colleges. The 22 km NH-544 route makes daily commute viable.",
    },
  ];

  return (
```

---

### 2.8 Enhanced CollegeOrUniversity Schema — Complete Replacement

**Task S1. Replace lines 128–156.**

**BEFORE:**

```tsx
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
              "name": "Erode",
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

**AFTER:**

```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "JKKN College of Arts and Science",
            "alternateName": "JKKN CAS",
            "url": "https://cas.jkkn.ac.in",
            "foundingDate": "1952",
            "description": "JKKN College of Arts and Science is a NAAC-accredited institution on NH-544 near Erode, offering 34 UG, PG, and Ph.D programmes in arts, science, commerce, and computer applications, affiliated to Periyar University and Bharathiar University.",
            "telephone": "+919345855001",
            "email": "info@jkkn.ac.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544, Komarapalayam",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Erode",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              },
              {
                "@type": "City",
                "name": "Komarapalayam",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.44518,
              "longitude": 77.726549
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Programmes at JKKN CAS",
              "numberOfItems": 34
            },
            "accreditation": "NAAC Accredited",
            "memberOf": [
              { "@type": "Organization", "name": "University Grants Commission (UGC)" },
              { "@type": "Organization", "name": "Periyar University" },
              { "@type": "Organization", "name": "Bharathiar University" }
            ],
            "parentOrganization": {
              "@type": "Organization",
              "name": "JKKN Group of Institutions",
              "url": "https://jkkn.ac.in"
            },
            "sameAs": [
              "https://cas.jkkn.ac.in",
              "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
              "https://jkkn.ac.in"
            ]
          })
        }}
      />
```

---

### 2.9 WebPage + Speakable Schema — New Insertion

**Task S6. Insert as new `<script>` block immediately BEFORE the CollegeOrUniversity schema block (before line 128).**

**BEFORE (line 127 → 128):**

```tsx
      <FAQSchema faqs={schemaFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
```

**AFTER:**

```tsx
      <FAQSchema faqs={schemaFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Arts and Science College Near Erode — JKKN CAS",
            "url": "https://cas.jkkn.ac.in/erode",
            "description": "JKKN College of Arts and Science — NAAC-accredited arts and science college accessible from Erode via NH-544. 34 programmes, 80%+ placements, hostel available.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "JKKN College of Arts and Science",
              "url": "https://cas.jkkn.ac.in"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cas.jkkn.ac.in" },
                { "@type": "ListItem", "position": 2, "name": "Erode", "item": "https://cas.jkkn.ac.in/erode" }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".snippet-answer-paragraph", "#faq-section"]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
```

---

### 2.10 Comparison Table Section — New Insertion

**Task C18. Insert as new section immediately before the FAQ section (before line 1003).**

**BEFORE (line 1001 → 1003):**

```tsx
      )}

      {/* FAQ Section */}
      <section aria-label="Frequently asked questions" ...>
```

**AFTER:**

```tsx
      )}

      {/* Comparison Table */}
      <section aria-label="Comparison with Erode colleges" className="bg-[#FBFBEE] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              JKKN CAS vs Erode City Colleges — Quick Comparison
            </h2>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 text-left font-semibold">JKKN CAS</th>
                  <th className="p-3 text-left font-semibold">Typical Erode City College</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Accreditation</td>
                  <td className="p-3 text-gray-800 font-medium">NAAC Accredited, UGC Approved</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Distance from Erode</td>
                  <td className="p-3 text-gray-800 font-medium">~22 km via NH-544</td>
                  <td className="p-3 text-gray-500">0–10 km</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Placement Rate</td>
                  <td className="p-3 text-gray-800 font-medium">80%+</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Key Recruiters</td>
                  <td className="p-3 text-gray-800 font-medium">TCS, Infosys, HDFC, Amazon</td>
                  <td className="p-3 text-gray-500">Local / regional</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Campus Type</td>
                  <td className="p-3 text-gray-800 font-medium">Residential + Day Scholar</td>
                  <td className="p-3 text-gray-500">Day Scholar only (most)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[#FBFBEE]">
                  <td className="p-3 text-gray-600">Hostel</td>
                  <td className="p-3 text-gray-800 font-medium">Available (boys + girls)</td>
                  <td className="p-3 text-gray-500">Limited</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">Programmes</td>
                  <td className="p-3 text-gray-800 font-medium">34 (UG + PG + Ph.D)</td>
                  <td className="p-3 text-gray-500">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" aria-label="Frequently asked questions" ...>
```

**Note:** The `id="faq-section"` is added to the FAQ section opening tag here as part of task L1. "22 km" in the table must match the T0-verified distance.

---

## 3. Dependency Graph

```
T0 (Verify Distance) ─────────────────────────────────────────────────────────┐
    │                                                                          │
    ├──► C4 (stat card distance)                                               │
    ├──► C5 (Distance Card large number)                                       │
    ├──► C6 (Distance Card subtitle)                                           │
    ├──► C12 (How to Reach route header)                                       │
    ├──► C13 (railway station distance)                                        │
    ├──► C19 (hero description paragraph)                                      │
    ├──► C20 (Why Choose section paragraph)                                    │
    ├──► C21 (Easy Commute card)                                               │
    ├──► M2 (meta description)                                                 │
    ├──► C3 (snippet paragraph)                                                │
    ├──► F1 (FAQ Q1 rewrite)                                                   │
    ├──► F2 (FAQ Q2 rewrite)                                                   │
    ├──► F6 (FAQ Q6 rewrite)                                                   │
    ├──► F10 (FAQ Q10 rewrite)                                                 │
    ├──► C18 (comparison table — distance row)                                 │
    └──► S1 (CollegeOrUniversity schema)                                       │
                                                                               │
ALL 9 distance fixes (C4–C6, C12–C13, C19–C21) ──► T1 (grep verify zero "35") ┘

Independent (no dependencies — can run Day 1 in parallel):
    M1 (title)
    M3 (keywords)
    M4 (robots)
    M5 (OG title)
    M6 (OG description)
    M7 (OG image alt)
    M8 (Twitter title)
    M9 (Twitter description)
    C1 (H1 text)
    C7 (entity-dense paragraph)
    C8–C11 (programme H3 keywords)
    C14 (remove "top-tier")
    C15 (remove "world-class")
    C16 (placement batch year)
    C17 (last updated note)
    F3 (FAQ Q3 rewrite)
    F5 (FAQ Q5 rewrite)
    F7 (FAQ Q7 rewrite)
    F8 (FAQ Q8 rewrite)
    F9 (FAQ Q9 rewrite)
    S2–S5 (CourseSchema absolute URLs)
    L1 (add id="faq-section") ──────────────────► S6 (depends on L1 + C3)
    L2 (facilities link)
    L3 (placements link)
    L4 (Tiruchengode link — after pre-check)

Sequential chains:
    F1–F10 (FAQ rewrites) ──► F11 (schemaFaqs array) ──► F12 (FAQSchema call update)
    C2 + C3 (snippet H2 + paragraph) ──► S6 (Speakable schema needs .snippet-answer-paragraph)
    L1 (faq-section ID) ──► S6 (Speakable schema needs #faq-section)
    S1 (CollegeOrUniversity schema) ──► T3 (validate schema)
    F11 + F12 (schemaFaqs) ──► T4 (validate FAQPage Rich Results)
    C3 + L1 ──► S6 ──► T5 (validate Speakable)
    ALL tasks ──► T6 (pre-deployment checklist) ──► T7 (deploy) ──► T8 (indexing) ──► T10 (GSC filters)
    T7 ──► T9 (sitemap check)
    T7 ──► T11 (OG image verify)
    T8 ──► T12 (monitoring schedule)
```

**Critical Path (minimum blocking chain):**

```
T0 → C3 → S6 → T5 → T6 → T7 → T8
         ↑
         L1
```

---

## 4. Estimated Effort Summary

| Category | Tasks | Task IDs | Total Effort |
|----------|-------|----------|--------------|
| META | 9 | M1–M9 | ~30 min (all XS) |
| CONTENT | 21 | C1–C21 | ~90 min (mostly XS, 2× M for snippet + table) |
| FAQ | 12 | F1–F12 | ~90 min (10× S rewrites + 1× M array + 1× XS swap) |
| SCHEMA | 7 | S1–S7 | ~60 min (2× M replacements + 5× XS URL fixes) |
| LINKS | 4 | L1–L4 | ~15 min (all XS) |
| TECHNICAL | 13 | T0–T12 | ~90 min (mix of XS verification + S validation steps) |
| **TOTAL** | **66** | | **~6–7 hours** |

**Effort breakdown by size:**

| Size | Count | Estimate Each | Total |
|------|-------|---------------|-------|
| XS (< 2 min) | 46 | ~1.5 min avg | ~70 min |
| S (2–10 min) | 15 | ~6 min avg | ~90 min |
| M (10–30 min) | 5 | ~20 min avg | ~100 min |
| **Total** | **66** | | **~260 min (~4.5 hr code + 1.5 hr validation)** |

---

## 5. Implementation Order

Execute tasks in this exact order, respecting all dependencies. Items on the same numbered line can be run in parallel.

```
Day 1 — Pre-Flight and Critical Fixes
======================================

1.  T0   ← BLOCKING. Verify distance before anything else.

2.  (Parallel — all independent of each other)
    M1, M3, M4, M5, M6, M7, M8, M9
    S2, S3, S4, S5
    L1, L2, L3
    C1, C7, C8, C9, C10, C11, C14, C15, C16, C17

3.  (After T0 confirmed) — Parallel batch:
    M2
    C4, C5, C6, C12, C13, C19, C20, C21

4.  T1   ← Run grep after step 3 to confirm zero "35" / "30-40" distance refs remain.

Day 2 — Content Optimization
==============================

5.  C2, C3   ← Insert snippet H2 and paragraph (requires T0 distance value).

6.  (After C2/C3 complete — parallel):
    F1, F2, F3, F4, F5, F6, F7, F8, F9, F10   ← All FAQ rewrites.

7.  F11   ← Build schemaFaqs array (requires F1–F10 complete).

8.  F12   ← Swap FAQSchema component reference to schemaFaqs (requires F11).

Day 3 — Schema and Technical
==============================

9.  S1   ← Replace CollegeOrUniversity schema (requires T0).

10. C18   ← Insert comparison table section (requires T0).

11. S6   ← Add WebPage + Speakable schema (requires C3 for .snippet-answer-paragraph
           and L1 for #faq-section — both should be done by now).

12. L4   ← Add Tiruchengode city link (check if /tiruchengode page exists first).

Day 4 — Validation and Deployment
===================================

13. T2   ← Verify 4 CourseSchema URLs return HTTP 200 (after S2–S5 done).

14. T3   ← Validate CollegeOrUniversity schema via schema.org validator (after S1).

15. T4   ← Validate FAQPage via Google Rich Results Test (after F11, F12).

16. T5   ← Validate WebPage + Speakable schema (after S6).

17. T6   ← Run full pre-deployment checklist (all above tasks must pass).

18. T7   ← Deploy to production.

19. (After T7 — parallel):
    T8, T9, T11

20. T10   ← Set up GSC query filters (after T8 indexing request submitted).

21. T12   ← Set monitoring calendar reminder.
```

**Summary counts by day:**

| Day | Tasks | Notes |
|-----|-------|-------|
| Day 1 | T0, M1–M9, S2–S5, L1–L3, C1, C4–C17 (distance fixes), C7–C11, C19–C21, T1 | Pre-flight + all parallel work |
| Day 2 | C2, C3, F1–F12 | Snippet paragraph + all FAQ rewrites + schemaFaqs |
| Day 3 | S1, S6, C18, L4 | Schema replacements + comparison table |
| Day 4 | T2–T12 | Validation + deployment + monitoring setup |

---

## Deferred Tasks (Requires Admin Action — Do Not Block Deployment)

| Task | Reason Deferred | Who Handles | When |
|------|----------------|-------------|------|
| S8 — AggregateRating schema | Requires real GBP review count and rating — do NOT fabricate | Admin / GBP dashboard | When real data available from GBP |
| Testimonials section activation (line 937) | `{false && ...}` hidden — requires real verified testimonials from Erode-region students | Admin / placement team | When 2–3 verified student testimonials collected |
| Fee comparison verification | "30–50% lower" claim needs verified fee comparison table | Admin / accounts team | Before reintroducing the claim |
| Campus acres confirmation | "50+ acres" used in spec Q10 — CLAUDE.md flags as `[UPDATE]` | Admin | Before using 50-acre claim anywhere |
| NAAC grade confirmation | CLAUDE.md marks CAS as "Accredited" (not A or A+) — grade must be confirmed | Admin / NAAC certificate | Before using a specific grade |

---

*End of Decompose File*
*Spec Reference: `aeo/erode/erode-aeo-spec.md`*
*Plan Reference: `aeo/erode/erode-aeo-plan.md`*
*Source File: `src/app/erode/page.tsx`*
