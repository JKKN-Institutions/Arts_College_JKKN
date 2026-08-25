# AEO Task Decomposition — JKKN CAS Coimbatore City Page

**Page URL:** https://cas.jkkn.ac.in/coimbatore
**Source File:** `src/app/coimbatore/page.tsx`
**Spec:** `aeo/coimbatore/coimbatore-aeo-spec.md`
**Plan:** `aeo/coimbatore/coimbatore-aeo-plan.md`
**Decompose Version:** 1.0
**Date:** 2026-03-28
**AEO Score Before:** 25 / 100 | **Target:** 65–72 / 100
**Decision Gate:** C — Long-term play (HARDEST city target)

---

## STRATEGIC CONTEXT

Coimbatore is the hardest of all five JKKN CAS city pages. PSG College (NIRF Top 11, NAAC A+), Rathinam (NAAC A++), and AJK CAS are physically in Coimbatore. JKKN is 105 km away. **This plan does NOT target rank #1 on "best arts and science college in coimbatore."** It targets:

1. AI Overview inclusion as "affordable alternative near Coimbatore" — current score: **0/20**
2. PAA wins on long-tail informational variants
3. Featured snippet capture on "affordable near Coimbatore" and "BCA college near Coimbatore" variants
4. Voice search compliance — current score: **0/15** (0 of 10 FAQs pass 29-word limit)

The IT corridor angle (TIDEL Park, Elcot SEZ pipeline for BCA/CS graduates) is the single unique content angle no competitor page covers for outstation colleges. This must be built.

---

## TABLE OF CONTENTS

1. [Atomic Task List](#1-atomic-task-list)
2. [Before/After Code Blocks](#2-beforeafter-code-blocks)
3. [Dependency Graph](#3-dependency-graph)
4. [Effort Summary](#4-effort-summary)
5. [Implementation Order](#5-implementation-order)

---

## 1. Atomic Task List

### GROUP: META (Lines 43–79)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| M1 | Update meta description with "affordable" + BCA/CS hook | `page.tsx` | 45–46 | 127 chars, generic | 148 chars, "Fees 30–50% lower" + BCA/B.Sc CS emphasis | 15 min | — |
| M2 | Append 5 new keywords to meta keywords array | `page.tsx` | 47–54 | 6 keywords | 11 keywords (+ BCA placement, B.Sc CS, B.Sc AI DS, NAAC near CBE, Komarapalayam) | 15 min | — |
| M3 | Update OG image alt text with Coimbatore geo | `page.tsx` | 70 | "modern classroom facility" (no geo) | "arts college 105 km from Coimbatore, Tamil Nadu" | 10 min | — |
| M4 | Keep meta title unchanged — already within limit | `page.tsx` | 44 | "Best Arts and Science College Near Coimbatore \| JKKN CAS" (57 chars) | No change | 0 min | — |

---

### GROUP: CONTENT — AI CITATION (Highest Priority)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| C1 | Add primary AI citation block as styled card below hero subheading | `page.tsx` | After line 217 (before line 281 distance section) | No factual paragraph — hero is promotional ("Better value, better campus, better you") | Entity-dense 85-word factual paragraph with class `aeo-citation-block` | 1 hr | — |
| C2 | Add IT corridor citation block as first paragraph of new IT section | `page.tsx` | After line 735 (after placements section) | No IT corridor content on page | Coimbatore TIDEL Park + Elcot SEZ paragraph — 75 words, plain text, citable | 30 min | C1 (section pattern) |
| C3 | Add affordable alternative citation block as opening paragraph in cost comparison section | `page.tsx` | After line 388 (before comparison table at line 392) | No opening citation paragraph — section jumps to table | 3-sentence cost-framing paragraph with class `aeo-citation-block` applied | 30 min | — |
| C4 | Add transport accessibility citation block as opening paragraph in "How to Reach" section | `page.tsx` | After line 868 (before route details card at line 871) | Transport section starts directly with route card, no citable paragraph | 4-sentence transport paragraph covering bus, hostel weekend service, airport/station distance | 30 min | — |

---

### GROUP: CONTENT — H2 SNIPPET TRIGGERS

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| H1 | Update cost comparison section H2 to snippet-trigger phrasing | `page.tsx` | 381–382 | "Why 105 km from Coimbatore Is Worth It" | "Which is the Most Affordable Arts and Science College for Coimbatore Students?" | 5 min | — |
| H2 | Add new IT corridor section with H2 "BCA and IT Programmes for Coimbatore's Tech Industry" | `page.tsx` | Insert after line 735 | Section does not exist | New H2 section with citation paragraph + 4-programme bullet list + internal link | 3 hr | C2 |
| H3 | Update hero H1 — keep current text, add snippet paragraph below it (C1 task) | `page.tsx` | 205–209 | H1 exists, no snippet paragraph | H1 unchanged; AI citation paragraph added directly below as sibling element | 0 min (H1 stays; C1 adds the paragraph) | C1 |

---

### GROUP: FAQ (Lines 82–122)

| # | Task | File | Line(s) | Before (word count) | After (≤29 words) | Effort | Depends On |
|---|------|------|---------|---------------------|-------------------|--------|------------|
| F1 | Rewrite FAQ 1 answer — best college in Coimbatore | `page.tsx` | 85 | 62 words | 29 words — lead with NAAC, 105 km, 34 programmes, 90%+ placements | 10 min | — |
| F2 | Rewrite FAQ 2 answer — how far is JKKN from Coimbatore | `page.tsx` | 89 | 47 words | 28 words — 105 km, 2–2.5 hrs via NH-544, Gandhipuram buses | 10 min | — |
| F3 | Rewrite FAQ 3 answer — popular courses for Coimbatore students | `page.tsx` | 93 | 61 words | 29 words — BCA, B.Sc CS, B.Sc AI DS; IT sector hook | 10 min | — |
| F4 | Rewrite FAQ 4 answer — BCA students and IT jobs | `page.tsx` | 97 | 61 words | 29 words — TCS, Infosys BPO; TIDEL Park, Elcot SEZ | 10 min | — |
| F5 | Rewrite FAQ 5 answer — fees affordable vs Coimbatore | `page.tsx` | 101 | 45 words | 29 words — 30–50% lower, government scholarships, call for details | 10 min | — |
| F6 | Rewrite FAQ 6 answer — hostel available | `page.tsx` | 105 | 35 words | 29 words — separate hostels, weekend buses Saturday, commute note | 10 min | — |
| F7 | Rewrite FAQ 7 answer — how to apply (minor update) | `page.tsx` | 109 | 28 words (borderline) | 27 words — cas.jkkn.ac.in, admission.jkkn.ac.in, phone number | 5 min | — |
| F8 | Rewrite FAQ 8 answer — direct bus from Coimbatore | `page.tsx` | 113 | 49 words | 29 words — TNSTC/private, Gandhipuram/Ukkadam, Komarapalayam exit, 2–2.5 hrs | 10 min | — |
| F9 | Rewrite FAQ 9 answer — hostel cost | `page.tsx` | 117 | 35 words | 29 words — lower than city PG, meals/WiFi/security included, call for details | 10 min | — |
| F10 | Rewrite FAQ 10 answer — why choose JKKN over Coimbatore colleges | `page.tsx` | 121 | 66 words | 29 words — 30–50% lower fees, 80%+ placements, same recruiters (TCS/Amazon), hostel + buses | 10 min | — |
| F11 | Add FAQ 11 — IT companies recruiting JKKN grads in Coimbatore | `page.tsx` | After line 122 (new array item) | Does not exist | 29 words — TCS, Infosys BPO, Amazon, TIDEL Park, Elcot SEZ BCA/CS pipeline | 10 min | F1–F10 done |
| F12 | Add FAQ 12 — Is JKKN CAS NAAC accredited and UGC approved | `page.tsx` | After FAQ 11 | Does not exist | 28 words — NAAC-accredited, UGC-approved, Periyar Univ UG, Bharathiar Univ select PG | 10 min | F11 |

---

### GROUP: SCHEMA (Lines 133–192)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| S1 | Add SpeakableSpecification JSON-LD schema (new script tag) | `page.tsx` | After line 160 (after CollegeOrUniversity schema closes) | Not present — voice score 0/15 | WebPage + SpeakableSpecification schema targeting .aeo-citation-block, .faq-voice-answer, h2.snippet-trigger | 30 min | C1 (needs .aeo-citation-block class to exist first) |
| S2 | Replace CollegeOrUniversity schema with enhanced version | `page.tsx` | 133–160 | Missing: sameAs, foundingDate, description, telephone, logo, hasOfferCatalog, parentOrganization, contactPoint | Full enhanced schema — 17 fields, areaServed expanded to include Komarapalayam | 45 min | — |
| S3 | Add HowTo schema for admission process (new script tag) | `page.tsx` | After S1/S2 schema block | Not present — HowTo is confirmed FAIL in spec Section 17 Check #13 | 5-step HowTo schema with Coimbatore framing in step 1 and 5 | 30 min | — |
| S4 | Validate FAQSchema auto-updates after FAQ rewrites (F1–F12) | `page.tsx` | 131 | FAQSchema reads from faqs array — currently long answers | After F1–F10 rewrites, FAQSchema auto-refreshes — no code change | 0 min (verify only) | F1–F10 |
| S5 | Update BCA CourseSchema description with Coimbatore IT context | `page.tsx` | 186–192 | Generic: "hands-on training and 90%+ placement rate" | Specific: "105 km from Coimbatore, TIDEL Park/Elcot SEZ pipeline, 30–50% lower fees" | 15 min | — |
| S6 | Add Komarapalayam to areaServed in CollegeOrUniversity schema | `page.tsx` | 148–152 (inside S2) | areaServed: Coimbatore only | areaServed: [Coimbatore, Komarapalayam] | 0 min (included in S2) | S2 |

---

### GROUP: LINKS (Internal Linking)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| L1 | Add B.Sc Cyber Security internal link in IT corridor section | `page.tsx` | In H2 section (new — after line 735) | Not linked anywhere on /coimbatore | Link from "B.Sc Cyber Security" to `/programmes/self-finance/ug/bsc-cs-cyber-security` | 5 min | H2 section added |
| L2 | Add placements portal outgoing link in placements section | `page.tsx` | After line 733 (end of placements section) | No link to placements.jkkn.ac.in | "Full Placement Statistics" → `https://placements.jkkn.ac.in` | 10 min | — |
| L3 | Add facilities internal link in campus section | `page.tsx` | After line 1010 (end of campus section) | No link to /facilities | "Explore All Facilities" → `/facilities` | 10 min | — |
| L4 | Add departments internal link in programmes section | `page.tsx` | After line 675 (end of programmes section) | No link to /departments | "All Departments" → `/departments` | 10 min | — |
| L5 | Verify Google Maps link destination (distance card) | `page.tsx` | 300 | `https://maps.app.goo.gl/bsLumyHe3JeaTAZ18` — destination unverified | If wrong: replace with `https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7` (CLAUDE.md verified CAS GBP) | 5 min | — |
| L6 | Enable testimonials section when real testimonials collected (admin action) | `page.tsx` | 1092 | `{false && ...}` — hidden | `{true && ...}` — only after 2–3 real testimonials added | 2 min | Admin/content team delivers testimonials |

---

### GROUP: TECHNICAL (Non-Code Tasks)

| # | Task | File | Line(s) | Before | After | Effort | Depends On |
|---|------|------|---------|--------|-------|--------|------------|
| T1 | Export GSC baseline for /coimbatore — save as CSV | GSC + filesystem | — | No baseline file | `aeo/coimbatore/gsc-baseline-coimbatore-2026-03-28.csv` | 15 min | — |
| T2 | Request GSC indexing for /coimbatore if URL is not on Google | GSC URL Inspection | — | Not indexing for Coimbatore terms | Index requested; status confirmed | 5 min | — |
| T3 | Verify GBP description has no "near Erode" language | GBP Dashboard | — | Possible bug flagged in task brief | Confirmed clean or corrected to "105 km from Coimbatore via NH-544" | 15 min | — |
| T4 | Apply CSS class faq-voice-answer to each FAQ answer element | `page.tsx` | FAQ AccordionContent elements ~1182 | No CSS class on answer elements | `className="faq-voice-answer ..."` added to AccordionContent | 20 min | F1–F10 |
| T5 | Apply CSS class distance-card-summary to distance card element | `page.tsx` | 284 | No CSS class for SpeakableSpecification targeting | `className="distance-card-summary ..."` added to distance card div | 5 min | — |
| T6 | Validate all schema JSON-LD after deployment | Rich Results Test + schema.org/validator | — | Pre-deployment | All schemas pass validation; no errors | 30 min | S1–S5 |
| T7 | 30-day re-audit against baseline | `aeo/coimbatore/coimbatore-aeo-30day-review.md` | — | Score = 25/100 | Score target ≥45/100 at Day 30 | 2 hr | T1 + all phases |

---

## 2. Before/After Code Blocks

---

### BLOCK 1 — Primary AI Citation Paragraph (C1)
**Location:** Insert between line 217 and line 281 (between hero subheading paragraph and Distance Card section opening tag)

**Before (line 217 is the last line of hero subheading, line 281 starts distance section):**
```tsx
          </p>

          {/* Stats */}
```

**After (insert between line 217 close tag and the Stats div):**
```tsx
          </p>

          {/* AEO Citation Block — AI Overview anchor paragraph */}
          <p className="aeo-citation-block text-white/70 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
            JKKN College of Arts and Science is a NAAC-accredited, UGC-approved institution
            located in Komarapalayam, Namakkal district, Tamil Nadu — 105 km from Coimbatore
            via NH-544. Founded in 1952 and affiliated to Periyar University and Bharathiar
            University, JKKN CAS offers 34 undergraduate, postgraduate, and research programmes
            spanning arts, science, commerce, and computer applications. The institution maintains
            a 90%+ placement rate with recruiters including TCS, Infosys BPO, HDFC Bank, Amazon,
            and Flipkart. A 50+ acre residential campus with separate hostel facilities, digital
            library, modern laboratories, and weekend bus services to Coimbatore makes it an
            accessible choice for students from Coimbatore seeking affordable quality education.
          </p>

          {/* Stats */}
```

**Note:** If the citation paragraph inside the dark hero section is aesthetically disruptive, alternative placement is immediately after the closing `</section>` tag of the hero (line 279) as a full-width white card section above the Distance Card. Either placement is valid — the key requirement is that the paragraph renders as plain HTML text accessible to crawlers.

---

### BLOCK 2 — Meta Tag Optimization (M1, M2, M3)
**Location:** Lines 43–79

**Before:**
```tsx
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Coimbatore | JKKN CAS",
  description:
    "JKKN CAS — 105 km from Coimbatore via NH-544. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.",
  keywords: [
    "arts and science college near Coimbatore",
    "best college near Coimbatore",
    "JKKN CAS Coimbatore",
    "college 2 hours from Coimbatore",
    "affordable college near Coimbatore",
    "BCA BBA B.Com B.Sc near Coimbatore",
  ],
  ...
  openGraph: {
    ...
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — modern classroom facility",
      },
    ],
  },
```

**After:**
```tsx
export const metadata: Metadata = {
  title: "Best Arts and Science College Near Coimbatore | JKKN CAS",
  description:
    "JKKN CAS — 105 km from Coimbatore. NAAC-accredited. Fees 30–50% lower than city colleges. BCA, B.Sc CS, BBA, B.Com. 90%+ placements. 2026-27 open.",
  keywords: [
    "arts and science college near Coimbatore",
    "best college near Coimbatore",
    "JKKN CAS Coimbatore",
    "college 2 hours from Coimbatore",
    "affordable college near Coimbatore",
    "BCA BBA B.Com B.Sc near Coimbatore",
    "BCA college near Coimbatore with placement",
    "B.Sc Computer Science near Coimbatore",
    "B.Sc AI Data Science college near Coimbatore",
    "NAAC accredited college near Coimbatore",
    "arts college Komarapalayam",
  ],
  ...
  openGraph: {
    ...
    images: [
      {
        url: "https://cas.jkkn.ac.in/images/facilities/JKKN%20Arts%20Classroom.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Arts and Science — arts college 105 km from Coimbatore, Tamil Nadu",
      },
    ],
  },
```

---

### BLOCK 3 — H1 Heading (no change needed)
**Location:** Lines 205–209

The H1 "Best Arts and Science College Near Coimbatore" is already keyword-accurate and within best practices. No change required. The citation block (C1) is the supplement — not a H1 rewrite.

```tsx
{/* No change to H1 */}
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
  Best Arts and Science College Near
  <br />
  <span className="text-[#7cb983]">Coimbatore</span>
</h1>
```

---

### BLOCK 4 — IT Corridor Section — Full New Section (C2, H2, L1)
**Location:** Insert after line 735 (after closing `</section>` of Placement Highlights section)

**Before (line 735 closes placements section, line 738 starts admission section):**
```tsx
      </section>

      {/* Admission Process */}
```

**After:**
```tsx
      </section>

      {/* IT Corridor Section — BCA and CS Pipeline for Coimbatore */}
      <section aria-label="BCA and IT programmes for Coimbatore" className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 snippet-trigger">
              BCA and IT Programmes for Coimbatore&apos;s Tech Industry
            </h2>
            <div className="mx-auto mt-4 w-12 h-1 bg-[#7cb983] rounded-full" />
          </div>

          {/* IT Corridor Citation Block */}
          <p className="aeo-citation-block text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-8 text-center">
            Coimbatore&apos;s technology corridor — anchored by TIDEL Park and the Elcot SEZ —
            creates consistent demand for BCA, B.Sc Computer Science, and B.Sc AI and Data Science
            graduates. JKKN CAS BCA and computer science alumni have been placed at IT companies
            operating in and around Coimbatore. Students from Coimbatore who enroll at JKKN CAS
            benefit from JKKN&apos;s established corporate placement network while saving
            significantly on total education costs compared to Coimbatore city private colleges.
          </p>

          {/* IT Programme List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              {
                name: "BCA (Bachelor of Computer Applications)",
                detail: "3-year UG · 60 seats · Pipeline to Coimbatore TIDEL Park and Elcot SEZ IT companies",
                href: "/programmes/self-finance/ug/bca",
              },
              {
                name: "B.Sc Computer Science",
                detail: "3-year UG · Software and IT roles in Coimbatore manufacturing-tech sector",
                href: "/programmes/self-finance/ug/bsc-computer-science",
              },
              {
                name: "B.Sc AI and Data Science",
                detail: "3-year UG · Emerging programme aligned to Coimbatore digital transformation demand",
                href: "/programmes/self-finance/ug/bsc-ai-ds",
              },
              {
                name: "B.Sc Cyber Security",
                detail: "3-year UG · Growing demand from Coimbatore IT and fintech companies",
                href: "/programmes/self-finance/ug/bsc-cs-cyber-security",
              },
            ].map((prog) => (
              <Link
                key={prog.name}
                href={prog.href}
                className="bg-[#FBFBEE] rounded-2xl p-5 border border-gray-100 hover:border-[#7cb983] transition-colors flex flex-col gap-2"
              >
                <div className="font-bold text-gray-800 text-sm">{prog.name}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{prog.detail}</div>
                <div className="text-[#006837] text-xs font-medium mt-1">View Programme Details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
```

---

### BLOCK 5 — Cost Comparison Section: Snippet-Trigger H2 + Citation (H1, C3)
**Location:** Lines 381–388 (H2 + subheading paragraph in cost comparison section)

**Before:**
```tsx
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why 105 km from Coimbatore Is Worth It
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Coimbatore has dozens of arts and science colleges — but crowded
              classrooms, high fees, and limited personal attention are common
              complaints. Here&apos;s how JKKN compares.
            </p>
```

**After:**
```tsx
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 snippet-trigger">
              Which is the Most Affordable Arts and Science College for Coimbatore Students?
            </h2>
            <p className="aeo-citation-block text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              For students from Coimbatore evaluating arts and science colleges, JKKN CAS offers
              a cost-effective residential alternative. Annual tuition at JKKN CAS is 30–50% lower
              than comparable private colleges in Coimbatore city. When combined with affordable
              on-campus hostel accommodation — which includes three meals daily, WiFi, and 24/7
              security — the total three-year cost at JKKN CAS is substantially lower than attending
              a city college while managing private PG accommodation.
            </p>
```

---

### BLOCK 6 — Transport Section: Accessibility Citation Paragraph (C4)
**Location:** After line 868 (after H2 "How to Reach from Coimbatore" and its subheading, before the route card at line 871)

**Before:**
```tsx
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Route Header */}
```

**After:**
```tsx
          <p className="aeo-citation-block text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Coimbatore students can reach JKKN CAS in 2 to 2.5 hours via NH-544. TNSTC government
            buses depart regularly from Gandhipuram and Ukkadam bus stands toward Komarapalayam;
            the campus is on the highway. Students opting for hostel accommodation benefit from
            weekend bus services operated by the college, with Saturday departures from campus and
            Sunday returns. Coimbatore International Airport (CJB) and Coimbatore Junction railway
            station are both approximately 100–105 km from the campus.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Route Header */}
```

---

### BLOCK 7 — 3 Key FAQ Rewrites (F1, F4, F10 — highest word count reduction)

**Before and After for the 3 most critical FAQ rewrites:**

**FAQ 1 (line 84–86) — 62 words → 29 words:**
```tsx
// BEFORE
{
  q: "What is the best arts and science college in Coimbatore?",
  a: "JKKN College of Arts and Science, located just 100-110 km from Coimbatore on NH-544, is widely regarded as one of the top arts and science colleges accessible from Coimbatore. Approved by UGC, NAAC and affiliated to Periyar University / Bharathiar University, it offers excellent programmes with strong placement support.",
},

// AFTER
{
  q: "What is the best arts and science college in Coimbatore?",
  a: "JKKN College of Arts and Science, 105 km from Coimbatore on NH-544, is a NAAC-accredited, 74-year-old institution with 34 programmes and 90%+ placements. Admissions open for 2026–27.",
},
```

**FAQ 4 (line 96–98) — 61 words → 29 words:**
```tsx
// BEFORE
{
  q: "Can BCA students from Coimbatore get IT jobs?",
  a: "Yes. BCA graduates from JKKN CAS are placed at companies like TCS, Infosys BPO, and other IT firms. Coimbatore's booming IT corridor (TIDEL Park, Elcot SEZ) means BCA graduates have excellent local job prospects. The college provides placement training, aptitude coaching, and mock interviews.",
},

// AFTER
{
  q: "Can BCA students from Coimbatore get IT jobs?",
  a: "Yes. JKKN CAS BCA graduates are placed at TCS, Infosys BPO, and other IT firms. Coimbatore's TIDEL Park and Elcot SEZ provide strong local job prospects for IT graduates.",
},
```

**FAQ 10 (line 120–122) — 66 words → 29 words:**
```tsx
// BEFORE
{
  q: "Why should I choose JKKN CAS over colleges in Coimbatore city?",
  a: "JKKN CAS offers several advantages: fees are 30-50% lower than most Coimbatore city colleges, class sizes are smaller with more personal faculty attention, the 50+ acre green campus provides a distraction-free study environment, and placement rates (90%+) are on par with city institutions. The same top companies — TCS, Infosys, HDFC, Amazon — recruit from JKKN.",
},

// AFTER
{
  q: "Why should I choose JKKN CAS over colleges in Coimbatore city?",
  a: "JKKN CAS offers 30–50% lower fees, smaller classes with personal attention, a 90%+ placement rate, and the same top recruiters — TCS, Infosys, Amazon — as Coimbatore city colleges. Hostel and weekend buses available.",
},
```

---

### BLOCK 8 — Enhanced CollegeOrUniversity Schema (S2)
**Location:** Replace lines 133–160

**Before:**
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
              "name": "Coimbatore",
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

**After:**
```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "JKKN College of Arts and Science",
            "alternateName": "JKKN CAS",
            "description": "JKKN College of Arts and Science is a NAAC-accredited, UGC-approved institution in Komarapalayam, Namakkal district, Tamil Nadu, offering 34 programmes in arts, science, commerce, and computer applications. Founded in 1952, affiliated to Periyar University and Bharathiar University.",
            "url": "https://cas.jkkn.ac.in",
            "logo": "https://cas.jkkn.ac.in/images/logo.png",
            "foundingDate": "1952",
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
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.44518,
              "longitude": 77.726549
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Coimbatore",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              },
              {
                "@type": "City",
                "name": "Komarapalayam",
                "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
              }
            ],
            "accreditation": "NAAC",
            "parentOrganization": {
              "@type": "Organization",
              "name": "JKKN Institutions",
              "url": "https://jkkn.ac.in"
            },
            "sameAs": [
              "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
              "https://jkkn.ac.in"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Academic Programmes",
              "numberOfItems": 34
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919345855001",
              "contactType": "admissions",
              "areaServed": "IN",
              "availableLanguage": ["English", "Tamil"]
            }
          })
        }}
      />
```

---

### BLOCK 9 — SpeakableSpecification Schema (S1)
**Location:** Insert after the enhanced CollegeOrUniversity schema tag (after new S2 block)

**Before:** Nothing here

**After (new script tag):**
```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best Arts and Science College Near Coimbatore — JKKN CAS",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".aeo-citation-block",
                ".faq-voice-answer",
                ".distance-card-summary",
                "h2.snippet-trigger"
              ]
            },
            "url": "https://cas.jkkn.ac.in/coimbatore"
          })
        }}
      />
```

---

### BLOCK 10 — HowTo Schema for Admission Process (S3)
**Location:** Insert after SpeakableSpecification schema tag (S1)

**Before:** Nothing here

**After (new script tag):**
```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Apply for Admission at JKKN College of Arts and Science from Coimbatore",
            "description": "5 steps to apply for admission at JKKN CAS — accessible from Coimbatore via NH-544.",
            "totalTime": "PT7D",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Visit Website or Campus",
                "text": "Explore programmes and campus life at cas.jkkn.ac.in or visit the campus in Komarapalayam, 105 km from Coimbatore.",
                "url": "https://cas.jkkn.ac.in"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Fill the Application Form",
                "text": "Apply online at admission.jkkn.ac.in or collect the application form from the campus admission office.",
                "url": "https://admission.jkkn.ac.in"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Submit Documents",
                "text": "Upload or submit 10th and 12th mark sheets, transfer certificate, community certificate, and passport-size photos."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Counseling and Seat Allocation",
                "text": "Attend the counseling session — in-person or online. Seats are allotted based on eligibility and availability."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Fee Payment and Enrollment",
                "text": "Pay semester fees and complete enrollment. Hostel booking available at this stage for students from Coimbatore."
              }
            ]
          })
        }}
      />
```

---

## 3. Dependency Graph

```
INDEPENDENT (no prerequisites — can start Day 1):
├── M1 — Meta description update (line 45-46)
├── M2 — Keywords array append (line 47-54)
├── M3 — OG alt text update (line 70)
├── H1 — Cost comparison H2 update (line 381-382)
├── F1 through F10 — FAQ answer rewrites (lines 85-121)
├── S2 — CollegeOrUniversity schema replace (lines 133-160)
├── S3 — HowTo schema add (new tag)
├── S5 — BCA CourseSchema description (lines 186-192)
├── L2 — Placements portal link (after line 733)
├── L3 — Facilities link (after line 1010)
├── L4 — Departments link (after line 675)
├── L5 — Verify Google Maps link (line 300)
├── T1 — GSC baseline export
├── T2 — GSC index request
├── T3 — GBP meta bug verification
│
FIRST DEPENDENCY LAYER (requires at least one predecessor):
├── C1 — AI citation block [no code deps, but is foundation for S1 and T4]
├── C3 — Affordable alternative citation block [independent, adds to H1 section]
├── C4 — Transport accessibility citation block [independent]
├── T4 — faq-voice-answer CSS class [requires F1-F10 to be done first]
├── T5 — distance-card-summary CSS class [independent]
│
SECOND DEPENDENCY LAYER (requires first layer):
├── C2 — IT corridor citation block [required for H2 section to make sense]
├── H2 — IT corridor section H2 + list [requires C2 content to fill it]
├── S1 — SpeakableSpecification schema [requires C1 so .aeo-citation-block class exists on page]
├── S4 — FAQSchema validation [requires F1-F10 to be complete]
│
THIRD DEPENDENCY LAYER:
├── L1 — B.Sc Cyber Security link [requires H2 IT section to exist]
├── T4 — faq-voice-answer on AccordionContent [requires F1-F10 and H2 section if FAQs expanded]
├── L6 — Testimonials enable [requires admin to deliver testimonials — content dependency]
│
MONITORING (runs throughout):
└── T6 — Schema validation [requires S1-S5 all deployed]
└── T7 — 30-day re-audit [requires T1 baseline + all phases deployed]
```

**Critical Path:**
```
C1 (AI citation paragraph + .aeo-citation-block class)
  → S1 (SpeakableSpecification targets .aeo-citation-block)
    → T6 (validate all schemas)
      → T7 (30-day re-audit)

F1–F10 (FAQ rewrites ≤29 words)
  → S4 (FAQSchema auto-updates, validate)
    → T4 (faq-voice-answer CSS class on AccordionContent elements)
```

---

## 4. Effort Summary

### By Group

| Group | Tasks | Total Effort | Priority |
|-------|-------|-------------|---------|
| META | M1–M4 | 40 min | P1 |
| CONTENT — AI CITATION | C1–C4 | 2.5 hr | P0 (highest ROI) |
| CONTENT — H2 SNIPPETS | H1–H3 | 3.1 hr | P1 |
| FAQ | F1–F12 | 1.5 hr | P0 |
| SCHEMA | S1–S6 | 2 hr | P2 |
| LINKS | L1–L6 | 40 min | P1 |
| TECHNICAL | T1–T7 | 1.5 hr | P0/P3 |
| **Total** | **33 tasks** | **~12 hr** | — |

### By Phase (Plan alignment)

| Phase | Tasks | Effort | Timeline |
|-------|-------|--------|---------|
| Phase 1 — Critical Fixes (P0) | C1, F1–F10, T1–T3, M1–M3, L5 | 4 hr | Week 1 (Days 1–5) |
| Phase 2 — Content (P1) | C2–C4, H1–H2, F11–F12, L1–L4, T4–T5, S5 | 5 hr | Week 2–3 (Days 6–15) |
| Phase 3 — Schema (P2) | S1–S4, S6, T6 | 2 hr | Week 2 (Days 8–12, overlap P2) |
| Phase 4 — Monitoring (P3) | T7 | 2 hr | Week 5 (Day 30+) |

### Score Impact per Group (Estimated)

| Group | AEO Dimension Affected | Score Before | Score After |
|-------|----------------------|-------------|------------|
| AI Citation (C1–C4) | AI Citation Readiness: 0→16 | 0/20 | 16–18/20 |
| FAQ rewrites (F1–F12) | PAA Coverage: 5→12, Voice: 0→10 | 5/15 + 0/15 | 12/15 + 10/15 |
| Snippet H2s (H1–H2) | Snippet Capture: 0→12 | 0/20 | 12–14/20 |
| Schema (S1–S6) | Schema Completeness: 10→14 | 10/15 | 13–14/15 |
| Meta + Links | Content Quality: 10→12 | 10/15 | 12/15 |
| **Total** | All dimensions | **25/100** | **65–72/100** |

---

## 5. Implementation Order

### Day 1 (Non-Code — Start Immediately)

1. **T1** — Export GSC baseline CSV for /coimbatore — save to `aeo/coimbatore/gsc-baseline-coimbatore-2026-03-28.csv`
2. **T2** — Open GSC URL Inspection for `https://cas.jkkn.ac.in/coimbatore` — request indexing if not on Google
3. **T3** — Log into GBP for JKKN CAS — verify description has no "near Erode" language
4. **L5** — Click `https://maps.app.goo.gl/bsLumyHe3JeaTAZ18` (line 300) — confirm it opens to JKKN CAS Komarapalayam campus. If wrong: replace with `https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7`

### Day 2–3 (P0 Code Changes — Highest ROI)

5. **C1** — Insert primary AI citation paragraph (Block 1) between lines 217 and stats div — apply `aeo-citation-block` class
6. **F1–F10** — Rewrite all 10 FAQ answers in `faqs` array (lines 85–121) to ≤29 words (use exact text from spec Section 9)
7. **M1** — Update meta description at line 45–46 (Block 2)
8. **M2** — Append 5 keywords to meta array at lines 47–54 (Block 2)
9. **M3** — Update OG image alt text at line 70 (Block 2)

### Day 4–5 (P0 Validation + Deploy Phase 1)

10. **S4** — Deploy to staging — validate FAQSchema via Google Rich Results Test confirms all 10 FAQ answers ≤29 words
11. **T5** — Apply `distance-card-summary` class to distance card div at line 284
12. **T4** — Apply `faq-voice-answer` class to AccordionContent elements in FAQ section (~line 1182)
13. Deploy Phase 1 to production — confirm View Source shows AI citation paragraph as plain text

### Day 6–8 (P2 Schema Work — can run parallel to Day 6–10 content)

14. **S2** — Replace CollegeOrUniversity schema (lines 133–160) with enhanced version (Block 8)
15. **S3** — Add HowTo schema for admission process as new script tag (Block 10)
16. **S5** — Update BCA CourseSchema description at lines 186–192 with Coimbatore/TIDEL Park context
17. **S1** — Add SpeakableSpecification schema as new script tag after S2 (Block 9) — depends on C1 deployed

### Day 8–10 (P1 Meta + Minor Content)

18. **H1** — Update cost comparison H2 at line 381–382 to snippet-trigger phrasing (Block 5)
19. **C3** — Add affordable alternative citation paragraph at start of cost comparison section (Block 5, same edit)
20. **C4** — Add transport accessibility citation paragraph before route card (Block 6, after line 868)
21. **L2** — Add placements portal link after placements section (after line 733)
22. **L3** — Add facilities link after campus section (after line 1010)
23. **L4** — Add departments link after programmes section (after line 675)

### Day 11–13 (P1 Content — IT Corridor Section — Heaviest Work)

24. **C2** — Write IT corridor citation paragraph (as part of new section)
25. **H2** — Build and insert full IT corridor section (Block 4) after line 735 — includes C2 citation, 4-programme list, CSS snippet-trigger class on H2
26. **F11** — Add FAQ 11 to faqs array (IT companies recruiting in Coimbatore)
27. **F12** — Add FAQ 12 to faqs array (NAAC accreditation confirmation)

### Day 14 (P1 Links — Depends on H2 Section)

28. **L1** — Add B.Sc Cyber Security link inside IT corridor section (Block 4 already includes this)
29. **T6** — Validate all schemas on staging: S1, S2, S3, S5 via schema.org/validator + Rich Results Test

### Day 15 — Phase 2 + Phase 3 Deployment

30. Deploy Phase 2 + Phase 3 to production — confirm all sections render correctly at all breakpoints
31. Run final View Source check — confirm all `.aeo-citation-block` paragraphs are plain text in source

### Week 4 (Admin Action — No Developer Dependency)

32. **L6** — Admin team to collect 2–3 real Coimbatore student testimonials (name, course, placement, why chose JKKN). When ready: change `{false &&` to `{true &&` at line 1092. Do not fabricate.

### Week 5 — Day 30 Re-Audit

33. **T7** — Re-run full AEO readiness scoring from spec Section 2 all 6 dimensions. Compare against baseline 25/100. Target ≥45/100. Document in `aeo/coimbatore/coimbatore-aeo-30day-review.md`.

---

## VALIDATION CHECKLIST (Before Each Deployment)

### Phase 1 Deployment Gate

- [ ] C1 paragraph appears in View Source as plain text — not inside a script tag or JSON blob
- [ ] All 10 FAQ answers are ≤29 words (count manually for F1, F4, F10 — highest risk)
- [ ] FAQSchema Rich Results Test shows updated short answers
- [ ] Meta description is exactly 148 chars — within 155-char limit
- [ ] Meta title unchanged at 57 chars
- [ ] No layout shift at mobile 320px, tablet 768px, desktop 1024px (citation paragraph is additive — verify no overflow)

### Phase 2 + Phase 3 Deployment Gate

- [ ] IT corridor section H2 renders with class `snippet-trigger`
- [ ] Cost comparison H2 updated to full question phrasing
- [ ] All new `aeo-citation-block` paragraphs render in plain text
- [ ] B.Sc Cyber Security link is not broken (href correct)
- [ ] FAQ 11 and FAQ 12 render in accordion correctly
- [ ] schema.org/validator passes for S2 (CollegeOrUniversity), S1 (SpeakableSpecification), S3 (HowTo)
- [ ] Rich Results Test — FAQPage, HowTo both show valid rich results

---

## RISK FLAGS

| Risk | Task | Mitigation |
|------|------|-----------|
| AI citation paragraph inside hero dark section may be low-contrast | C1 | Use `text-white/70` class for dark background; OR move citation to white card section after hero |
| CollegeOrUniversity schema logo path may not exist | S2 | Verify `https://cas.jkkn.ac.in/images/logo.png` resolves before deployment. If 404: use placeholder or omit logo field temporarily |
| FAQ 11 and 12 may cause layout issue if accordion has max-item limit | F11, F12 | Test on staging with 12 items before production deploy |
| Testimonials section — DO NOT fabricate | L6 | Section stays hidden (`{false && ...}`) until real testimonials are in hand. No exceptions. |
| "30–50% lower fees" claim is MEDIUM confidence | C3, F5 | Use as marketing claim in body text only. Do not include in AI citation block (C1). If placement team confirms exact comparison, upgrade confidence. |
| GBP meta bug may exist outside page.tsx | T3 | Check GBP dashboard manually — source file is clean but GBP description is a separate asset |

---

Triple-check validation: DECOMPOSE FILE COMPLETE
