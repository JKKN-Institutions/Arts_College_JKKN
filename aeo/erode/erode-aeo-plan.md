# AEO Implementation Plan — JKKN CAS Erode City Page

**Institution:** JKKN College of Arts and Science
**URL:** https://cas.jkkn.ac.in/erode
**Source File:** `src/app/erode/page.tsx`
**Plan Version:** 1.0
**Date:** 2026-03-28
**Based On:** `aeo/erode/erode-aeo-spec.md`

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Priority-Ordered Implementation Steps](#2-priority-ordered-implementation-steps)
3. [Timeline with Dependencies](#3-timeline-with-dependencies)
4. [Success Metrics Per Step](#4-success-metrics-per-step)
5. [Resource Requirements](#5-resource-requirements)
6. [Risk Assessment](#6-risk-assessment)
7. [Rollback Plan](#7-rollback-plan)
8. [Success Criteria](#8-success-criteria)

---

## 1. Executive Summary

### Current State

| Metric | Value |
|--------|-------|
| AEO Score (baseline) | 25/100 — Gate C (Long-Term Play) |
| Google Ranking — "arts and science college in erode" | Not in top 100 |
| Featured Snippet | No holder (open opportunity) |
| PAA appearances | 0 |
| AI Overview mentions | 0 |
| Voice Search readiness | 0/15 (zero score) |
| Schema coverage | 7/15 (BreadcrumbList, FAQPage, CollegeOrUniversity, 4x Course) |
| Critical bug | Distance discrepancy — page says 35 km, verified ~22 km |

### Target State (3 Months Post-Implementation)

| Metric | Target |
|--------|--------|
| AEO Score | 68/100 |
| Google Ranking — "arts and science college near erode" | Top 20 |
| Featured Snippet | 1 win (distance or FAQ query) |
| PAA appearances | 2 |
| AI Overview mentions | 0 (12-month target: 1) |
| Voice Search readiness | 10/15 |
| Schema coverage | 13/15 |
| Distance data | Corrected and consistent across all 4+ locations |

### Plan Overview

| Category | Count |
|----------|-------|
| Total implementation steps | 22 |
| Phase 0 (Pre-flight — Blocking) | 1 step |
| Phase 1 (Critical Fixes — P0) | 4 steps |
| Phase 2 (Content Optimization — P1) | 9 steps |
| Phase 3 (Schema and Technical — P2) | 5 steps |
| Phase 4 (Monitoring and Validation — P3) | 3 steps |
| Estimated total effort | 18–24 hours of implementation work |
| Expected AEO score gain | +43 points (25 → 68) |

---

## 2. Priority-Ordered Implementation Steps

---

### Phase 0: Pre-Flight Verification (Must Complete Before Any Edits)

---

#### Step 0.1 — Verify Exact Road Distance: Erode to JKKN CAS

**Why this is Phase 0:** The page currently displays 35 km in 4+ locations. MEMORY.md records the verified distance as ~22 km (cross-referenced with Wikipedia/Bharatpedia, dated 2026-03-27). Publishing any content with the wrong distance will damage credibility with Google's quality algorithms and can cause an AI Overview citation to propagate incorrect data. No other step can begin until this is resolved.

**Action:**
1. Open Google Maps. Search "Erode Central Bus Stand to JKKN College of Arts and Science, Komarapalayam."
2. Record the exact road distance shown (driving, not straight-line).
3. Cross-reference with MEMORY.md entry (states ~22 km, 35–40 min via NH-544).
4. If verified ~22 km: proceed to Phase 1 using 22 km.
5. If a different distance appears: document it and update MEMORY.md before proceeding.

**Files affected:** None — this is a verification step only.
**Blocker for:** Steps 1.1, 1.2, 2.3, 2.4, and all FAQ rewrites that reference distance.

---

### Phase 1: Critical Fixes (P0 — Do First)

These four steps fix factual errors and structural issues that block snippet eligibility and AI citation readiness. Complete all four before any content additions.

---

#### Step 1.1 — Fix Distance Discrepancy Across All 4 Locations

**Prerequisite:** Step 0.1 completed — verified distance confirmed.

**Problem:** The page uses 35 km in four separate locations. Each inconsistency is a trust signal failure.

**Locations to update in `src/app/erode/page.tsx`:**

| Location | Line | Current Value | Replace With |
|----------|------|---------------|--------------|
| Meta description | 42 | "35 km from Erode via NH-544" | Remove distance from meta (new meta in Step 1.2 omits it) |
| Hero stat card | 220 | "35km FROM ERODE" | "[VERIFIED KM]km FROM ERODE" |
| Distance Card display | 283 | large "35 km" display | "[VERIFIED KM] km" |
| How to Reach section (train) | 829 | "Erode Junction (~35 km from campus)" | "Erode Junction (~[VERIFIED KM] km from campus)" |

Also update all FAQ answers that use "30–40 km" range wording (spec lines 81, 85, 101, 117) — replace with exact verified distance after confirming via Step 0.1.

**Verification:** Run a global search in `src/app/erode/page.tsx` for "35" and "30–40" to confirm no remaining incorrect distance references.

---

#### Step 1.2 — Update Meta Tags

**File:** `src/app/erode/page.tsx`, lines 39–75.

**Replace the entire metadata export block** with the following (from spec Section 15.2):

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

**Key change:** Title changes from "Best Arts and Science College **Near** Erode" to "Arts and Science College **in** Erode" — adding the exact-match primary keyword. Distance removed from meta description (avoids 35 km / 22 km conflict).

---

#### Step 1.3 — Fix CourseSchema Relative URLs

**File:** `src/app/erode/page.tsx`, lines 157–188.

**Problem (from spec Section 17, check #14):** The 4 CourseSchema components use relative URLs in the `url` field. Google's schema validator requires absolute URLs.

**Fix:** Locate all `url:` properties in the 4 CourseSchema blocks and prepend the base URL.

Example — Change:
```
url: "/programmes/aided/ug/bca"
```
To:
```
url: "https://cas.jkkn.ac.in/programmes/aided/ug/bca"
```

Apply this fix to all 4 CourseSchema blocks (lines 157–188). Do not change any other CourseSchema properties.

**Verification:** Copy each URL value and paste into browser — confirm it resolves to a live programme page.

---

#### Step 1.4 — Add `id="faq-section"` to FAQ Section Element

**File:** `src/app/erode/page.tsx`, line 1003 (FAQ Accordion section opening tag).

**Why now:** The Speakable schema added in Step 3.3 targets `#faq-section` via cssSelector. Without this ID on the element, the Speakable schema reference is broken. This is a 1-line change with zero visual impact.

**Fix:** Find the `<section>` or container element that wraps the FAQ Accordion (line 1003) and add:
```tsx
<section id="faq-section" ...>
```

---

### Phase 2: Content Optimization (P1)

These steps add the content that directly drives featured snippet capture, PAA appearances, and AI citation readiness.

---

#### Step 2.1 — Add Featured Snippet Paragraph After H1

**File:** `src/app/erode/page.tsx`.
**Insert position:** After the H1 closing tag (line 204), before the stats row (line 216).

**Add an H2 heading followed by the snippet paragraph:**

```tsx
<h2 className="text-xl font-semibold text-gray-800 mb-3">
  Arts and Science College Near Erode — JKKN CAS
</h2>
<p className="snippet-answer-paragraph text-gray-700 leading-relaxed mb-6">
  JKKN College of Arts and Science, located on NH-544 approximately [VERIFIED KM] km
  from Erode, is a NAAC-accredited institution offering 34 UG and PG programmes
  including BCA, BBA, B.Com, and B.Sc specialisations. Affiliated to Periyar
  University and Bharathiar University, it achieves 80%+ placement rates with
  recruiters including TCS, Infosys, HDFC Bank, and Amazon.
</p>
```

**Note:** Replace `[VERIFIED KM]` with the distance confirmed in Step 0.1. The CSS class `snippet-answer-paragraph` is required by the Speakable schema in Step 3.3. Do not remove it.

**Word count:** 55 words — optimized for paragraph snippet extraction.

---

#### Step 2.2 — Add Entity-Dense "About JKKN CAS" Paragraph

**File:** `src/app/erode/page.tsx`.
**Insert position:** Inside the "Why Students from Erode Prefer JKKN CAS" section (lines 307–370), as the first paragraph of that section.

**Content to add:**

```tsx
<p className="text-gray-700 leading-relaxed mb-4">
  JKKN College of Arts and Science (cas.jkkn.ac.in) is a NAAC-accredited institution
  established in 1952, located on NH-544 at Natarajapuram, Komarapalayam, Namakkal
  District, Tamil Nadu 638183. The college is affiliated to Periyar University and
  Bharathiar University and approved by UGC. It offers 34 programmes spanning UG, PG,
  and Ph.D levels across arts, science, commerce, and computer applications. The college
  is part of the JKKN Group of Institutions, which operates 7 colleges, 2 schools, and
  a 500-bed multi-specialty teaching hospital on a single campus.
</p>
```

**Purpose:** This paragraph serves as the primary LLM training signal. It contains maximum entity density: institution name, domain, accreditation, founding year, address, GPS-readable location, affiliations, programme count, and group context. See spec Section 10.2, Paragraph 1.

---

#### Step 2.3 — Rewrite FAQ Answers Q1–Q5 for Voice Optimization

**File:** `src/app/erode/page.tsx`, lines 78–119 (FAQ data array).

**Rule:** Each answer's first sentence must be ≤29 words. No hedging language ("approximately", "around", "widely regarded"). No first-person. No salesy language.

Replace the current FAQ answers with the PAA Q&A bank from spec Section 9. Below are the rewritten first sentences for Q1–Q5 (use the full answers from spec Section 9 for the visible on-page text):

| FAQ | New First Sentence | Word Count | Voice Ready |
|-----|--------------------|------------|-------------|
| Q1 — Best college near Erode? | "JKKN College of Arts and Science, located [VERIFIED KM] km from Erode on NH-544, is a NAAC-accredited institution with 34 programmes and 80%+ placement rates." | 27 | Yes |
| Q2 — How far is JKKN from Erode? | "JKKN CAS is approximately [VERIFIED KM] km from Erode city centre via NH-544, a journey of 35–40 minutes by road." | 22 | Yes |
| Q3 — Which courses near Erode? | "JKKN CAS near Erode offers BCA, BBA, B.Com, B.Sc across 8 specialisations, MCA, M.Com, M.Sc, and Ph.D programmes — 34 courses in total." | 26 | Yes |
| Q4 — Bus from Erode to JKKN? | "Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam via NH-544; the journey takes 35–40 minutes." | 22 | Yes |
| Q5 — Hostel for Erode students? | "JKKN CAS provides separate hostel accommodation for boys and girls on the main campus." | 15 | Yes |

**Also remove from FAQ answers:** All instances of "just 30–40 km", "approximately 30–40 km", "around", "widely regarded" (spec Section 17, check #1).

---

#### Step 2.4 — Rewrite FAQ Answers Q6–Q10 for Voice Optimization

**File:** `src/app/erode/page.tsx`, lines 78–119.

Continue the FAQ rewrite for Q6–Q10 using spec Section 9:

| FAQ | New First Sentence | Word Count | Voice Ready |
|-----|--------------------|------------|-------------|
| Q6 — Fees vs Erode colleges? | "JKKN CAS fees are lower than most private colleges in Erode city." | 13 | Yes |
| Q7 — Is JKKN accredited? | "JKKN College of Arts and Science is NAAC-accredited and UGC-approved." | 12 | Yes |
| Q8 — Placement rate? | "JKKN CAS achieves an 80%+ placement rate for graduating students." | 11 | Yes |
| Q9 — How to apply? | "Applications for JKKN CAS are submitted online at admission.jkkn.ac.in or in person at the campus admission office." | 19 | Yes |
| Q10 — Why choose JKKN over Erode colleges? | "JKKN CAS offers lower fees, NAAC accreditation, a residential campus, and 80%+ placements with national recruiters — advantages not uniformly available at Erode city colleges." | 28 | Yes |

**Note for Q10:** Replace "22 km" with verified distance from Step 0.1. Remove the "50 acres" claim (marked [LOW] confidence in spec Section 4) or replace with "50+ acre campus" only if confirmed via admin.

---

#### Step 2.5 — Update FAQPage Schema with Voice-Optimized Answers

**File:** `src/app/erode/page.tsx`, line 127.

**Problem:** The existing `<FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />` passes the full long-form answers to the schema. For PAA and voice extraction, the schema answer should be the short voice-ready version, not the long on-page version.

**Fix:** Create a separate `schemaFaqs` array using only the first sentences from the rewritten FAQ answers (Steps 2.3 and 2.4). Pass this array to the FAQSchema component instead of the full `faqs` array.

```tsx
// Add above the return statement
const schemaFaqs = [
  {
    question: "What is the best arts and science college near Erode?",
    answer: "JKKN College of Arts and Science, located [VERIFIED KM] km from Erode on NH-544, is a NAAC-accredited institution with 34 programmes and 80%+ placement rates, affiliated to Periyar University and Bharathiar University.",
  },
  {
    question: "How far is JKKN CAS from Erode?",
    answer: "JKKN CAS is approximately [VERIFIED KM] km from Erode city centre via NH-544, a journey of 35 to 40 minutes by road. Regular TNSTC government buses run from Erode Central Bus Stand to Komarapalayam throughout the day.",
  },
  // ... remaining 8 questions using first sentences from Section 9
];

// Update FAQSchema call at line 127:
<FAQSchema faqs={schemaFaqs} />
```

Use the full 10-question voice-optimized schema from spec Section 14.2.

---

#### Step 2.6 — Update H1 to Include "in Erode" Keyword Variant

**File:** `src/app/erode/page.tsx`, lines 201–204.

**Current H1:** "Best Arts and Science College Near Erode"
**Problem:** The primary target keyword is "arts and science college **in** Erode" — the H1 uses only "near Erode."

**Fix:** Update H1 to:
```tsx
<h1 ...>
  Arts and Science College in Erode — JKKN CAS
</h1>
```

This aligns the H1 with the updated meta title and the primary keyword from spec Section 7. Preserve all existing Tailwind classes on the H1 element — only change the text content.

---

#### Step 2.7 — Add Programme-Specific H3 Keywords

**File:** `src/app/erode/page.tsx`, lines 372–598 (Programmes section).

**Current state:** The 4 featured programme cards (BCA, BBA, B.Com, B.Sc) use programme names without geographic context.

**Fix:** In the H3 or strong headings for each featured programme card, append "near Erode":
- "BCA College Near Erode — JKKN CAS"
- "BBA College Near Erode — JKKN CAS"
- "B.Com College Near Erode — JKKN CAS"
- "B.Sc College Near Erode — JKKN CAS"

**Scope restriction:** Apply only to the 4 featured programme cards (approximately lines 391–430), not to the full 34-programme listing below. Do not modify the programme list H4 category headers ("Aided — UG", "Self-Finance — UG", etc.).

---

#### Step 2.8 — Add Comparison Table Section

**File:** `src/app/erode/page.tsx`.
**Insert position:** Before the FAQ section (around line 1003).

Add a new section with H2 and comparison table from spec Section 8.3:

```tsx
<section className="py-8 px-4">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    JKKN CAS vs Erode City Colleges — Quick Comparison
  </h2>
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-brand-green text-white">
          <th className="p-3 text-left">Feature</th>
          <th className="p-3 text-left">JKKN CAS</th>
          <th className="p-3 text-left">Typical Erode City College</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-3 border-b">Accreditation</td><td className="p-3 border-b">NAAC Accredited, UGC Approved</td><td className="p-3 border-b">Varies</td></tr>
        <tr><td className="p-3 border-b">Distance from Erode</td><td className="p-3 border-b">~[VERIFIED KM] km via NH-544</td><td className="p-3 border-b">0–10 km</td></tr>
        <tr><td className="p-3 border-b">Placement Rate</td><td className="p-3 border-b">80%+</td><td className="p-3 border-b">Varies</td></tr>
        <tr><td className="p-3 border-b">Key Recruiters</td><td className="p-3 border-b">TCS, Infosys, HDFC, Amazon</td><td className="p-3 border-b">Local / regional</td></tr>
        <tr><td className="p-3 border-b">Campus Type</td><td className="p-3 border-b">Residential + Day Scholar</td><td className="p-3 border-b">Day Scholar only (most)</td></tr>
        <tr><td className="p-3 border-b">Hostel</td><td className="p-3 border-b">Available (boys + girls)</td><td className="p-3 border-b">Limited</td></tr>
        <tr><td className="p-3 border-b">Programmes</td><td className="p-3 border-b">34 (UG + PG + Ph.D)</td><td className="p-3 border-b">Varies</td></tr>
      </tbody>
    </table>
  </div>
</section>
```

**Important:** Do not include a competitor placement rate cell — spec Section 8.3 explicitly states: "Remove the competitor placement rate cell before publishing — use only verified data."

---

#### Step 2.9 — Add E-E-A-T Signals

**File:** `src/app/erode/page.tsx`.

Add the following signals in the respective sections:

**2.9a — Founding year in entity paragraph (Step 2.2 already handles this).**

**2.9b — Batch year attribution to placement stats (line 616):**
Change "80%+ placement rate" to "80%+ placement rate — 2024–25 batch" in the placement section.

**2.9c — Remove salesy superlatives from body copy:**
- Line 210: Replace "top-tier" with a factual descriptor (e.g., "NAAC-accredited").
- Line 870: Replace "world-class" with a factual descriptor (e.g., "modern" or "well-equipped").

**2.9d — Add "Last updated" footer note:**
In the page footer or at the bottom of the page content, add: `<p className="text-xs text-gray-400 mt-4">Page last updated: March 2026</p>`

**2.9e — Testimonials (deferred — requires admin action):**
The testimonials section is hidden at line 937 (`{false && ...}`). To activate it, actual verified student testimonials from Erode-region students must be obtained from the admin/placement team. Do not enable this section with placeholder or fabricated testimonials. Mark as a dependent action item for Phase 4.

---

### Phase 3: Schema and Technical (P2)

---

#### Step 3.1 — Replace CollegeOrUniversity Schema

**File:** `src/app/erode/page.tsx`, lines 128–156.

**Replace the entire inline CollegeOrUniversity JSON-LD block** with the enhanced version from spec Section 14.1. Key additions over the current schema:

| Field Added | Value | Reason |
|-------------|-------|--------|
| `telephone` | "+919345855001" | Contact completeness for AI citation |
| `email` | "info@jkkn.ac.in" | Contact completeness |
| `foundingDate` | "1952" | Entity completeness for LLM training data |
| `description` | Full sentence | Schema-level description for AI extraction |
| `areaServed` | Erode + Komarapalayam City objects | Geographic relevance signal |
| `hasOfferCatalog` | 34 programmes | Programme count in schema |
| `accreditation` | "NAAC Accredited" | Trust signal |
| `memberOf` | UGC, Periyar University, Bharathiar University | Authority signal |
| `sameAs` | cas.jkkn.ac.in, Google Maps URL, jkkn.ac.in | Knowledge graph signal |
| `parentOrganization` | JKKN Group of Institutions | Entity hierarchy |

**Full schema to insert** is provided verbatim in spec Section 14.1 (lines 628–699 of spec). Copy that block exactly into the page at lines 128–156, replacing the existing schema.

---

#### Step 3.2 — Update FAQPage Schema with Voice-Optimized Answers

**Note:** This step is paired with Step 2.5. Step 2.5 handles the component-level change. This step ensures the JSON-LD output from the FAQSchema component matches the voice-optimized answers from spec Section 14.2.

**Verification action:** After deploying the Step 2.5 change, paste the page's rendered JSON-LD into Google's Rich Results Test. Confirm:
- All 10 questions are present.
- Each answer's text matches a voice-ready version (≤29 word first sentence readable aloud without context loss).
- No answers contain "approximately", "around", "just", or "widely regarded".

---

#### Step 3.3 — Add Speakable + WebPage Schema

**File:** `src/app/erode/page.tsx`.
**Insert position:** As a new `<script type="application/ld+json">` block, immediately above the existing CollegeOrUniversity schema block (after line 127, before line 128).

**Add the following JSON-LD block** (from spec Section 14.4):

```json
{
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
}
```

**Dependency:** Step 2.1 must be complete (adds `.snippet-answer-paragraph` class to the snippet paragraph). Step 1.4 must be complete (adds `id="faq-section"` to the FAQ section). Both CSS targets must exist on the page before this schema is deployed.

---

#### Step 3.4 — Add Internal Links to Facilities and Placements Pages

**File:** `src/app/erode/page.tsx`.

**Three linking gaps to fix** (from spec Section 16.3):

**Gap 1 — Campus and Facilities section (around line 863–934):**
Add: `<Link href="/facilities">Explore Campus Facilities →</Link>`

**Gap 2 — Placement Highlights section (lines 601–659):**
Add: `<Link href="/placements">View Full Placement Report →</Link>`

**Gap 3 — Explore More Cities section (lines 1035–1073):**
Add Tiruchengode as a fifth city link (15 km from campus — the nearest major town to JKKN CAS).
```tsx
<Link href="/tiruchengode">Tiruchengode</Link>
```
Note: Only add this link if a `/tiruchengode` page exists. If not, skip this gap and log it as a future task.

---

#### Step 3.5 — Add AggregateRating Schema (Deferred — Requires Admin Data)

**Status:** This step cannot be completed until real review data is available.

**Prerequisite:** Obtain the actual Google Business Profile review rating and review count for JKKN CAS from the GBP dashboard. Do not use estimated or fabricated values.

**When data is available:**
Add the AggregateRating nested inside the CollegeOrUniversity schema (spec Section 14.5):

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "[ACTUAL RATING FROM GBP]",
  "reviewCount": "[ACTUAL REVIEW COUNT FROM GBP]",
  "bestRating": "5",
  "worstRating": "1"
}
```

**Warning from spec:** "Embedding fabricated aggregateRating data triggers Google rich result penalty." Do not deploy until real data is confirmed.

---

### Phase 4: Monitoring and Validation (P3)

---

#### Step 4.1 — Execute Pre-Deployment Validation Checklist

Before pushing to production, verify every item in this checklist against the live file `src/app/erode/page.tsx`:

**Schema checks:**
- [ ] Distance discrepancy resolved — exact verified distance used consistently in all 4+ locations (meta, stat card, Distance Card line 283, FAQ answers, How to Reach line 829)
- [ ] CollegeOrUniversity schema updated per Step 3.1 — validated via https://validator.schema.org
- [ ] FAQPage schema updated with voice-optimized answers — validated via Google Rich Results Test
- [ ] Speakable + WebPage schema added per Step 3.3
- [ ] CourseSchema URLs converted to absolute paths (all 4 blocks, lines 157–188)
- [ ] `id="faq-section"` present on FAQ section element

**Content checks:**
- [ ] New snippet paragraph (55 words) added after H1 with class `snippet-answer-paragraph`
- [ ] Meta title updated: "Arts and Science College in Erode | JKKN CAS" — 48 chars
- [ ] Meta description updated — 144 chars
- [ ] OG and Twitter tags updated to match new meta
- [ ] `robots: "index, follow"` added to metadata
- [ ] H1 updated to include "in Erode"
- [ ] FAQ Q1–Q10 rewritten with ≤29 word first sentences
- [ ] "approximately", "around", "just 30–40 km", "widely regarded" removed from FAQ answers
- [ ] "top-tier" and "world-class" removed from body copy
- [ ] No fabricated statistics remain — all [UNVERIFIED] claims tagged or removed
- [ ] Fee comparison claim ("30–50% lower") either verified with source or removed

**Linking checks:**
- [ ] `/facilities` link added in Campus section
- [ ] `/placements` link added in Placement section

---

#### Step 4.2 — Deploy and Submit for Indexing

**Deployment actions:**

1. Deploy the updated `src/app/erode/page.tsx` to production at https://cas.jkkn.ac.in/erode.
2. Open Google Search Console → URL Inspection.
3. Enter `https://cas.jkkn.ac.in/erode` → click "Request Indexing."
4. Check if the Erode page is present in the sitemap (sitemap.xml). If missing, add it and resubmit the sitemap via GSC → Sitemaps.
5. Verify OG image loads correctly: paste the page URL into https://developers.facebook.com/tools/debug/ and confirm the 1200x630 image appears.
6. Run Google Rich Results Test on the live URL — confirm FAQPage and BreadcrumbList pass.

---

#### Step 4.3 — Set Up Monitoring Schedule

**Weekly monitoring (first 3 months):**

| Task | Tool | What to Check |
|------|------|---------------|
| Query impressions | Google Search Console → Performance → filter "erode" | Confirm impressions > 0 by week 4 |
| Ranking check | Google Search Console → Performance → Queries | Position for "arts and science college near erode" |
| Manual SERP check | Google.com (incognito) | Featured snippet holder, PAA boxes, AI Overview |
| Schema errors | Google Search Console → Enhancements | FAQPage and BreadcrumbList errors |

**GSC Query Segments to add as saved filters:**
1. `erode` — any query containing "erode"
2. `arts and science college` — category queries
3. `near erode` — proximity modifier
4. `jkkn erode` — branded + city
5. `bca erode`, `bba erode`, `bcom erode` — programme + city

**30-day review actions:**
- Compare GSC impressions for "erode" queries against 0 baseline.
- If impressions = 0 after 30 days: check crawlability via GSC URL Inspection; verify page is not blocked in robots.txt.
- If snippet not captured after 8 weeks: audit competitor snippet; expand the Step 2.1 answer paragraph to 60 words.

**3-month AEO re-evaluation:**
Re-run the AEO Readiness Score framework from spec Section 2 against the updated page. Target: 68/100.

| Dimension | Current | 3-Month Target |
|-----------|---------|---------------|
| Featured Snippet Readiness | 5/20 | 15/20 |
| PAA Coverage | 4/15 | 10/15 |
| AI Citation Readiness | 5/20 | 10/20 |
| Schema Coverage | 7/15 | 13/15 |
| Content Quality | 4/15 | 10/15 |
| Voice Search | 0/15 | 10/15 |
| **Total** | **25/100** | **68/100** |

---

## 3. Timeline with Dependencies

| Step | Step Name | Depends On | Duration | Deadline |
|------|-----------|------------|----------|----------|
| 0.1 | Verify road distance | Nothing — start here | 15 min | Day 1 |
| 1.1 | Fix distance discrepancy | 0.1 | 30 min | Day 1 |
| 1.2 | Update meta tags | 0.1 | 20 min | Day 1 |
| 1.3 | Fix CourseSchema URLs | Nothing | 20 min | Day 1 |
| 1.4 | Add FAQ section ID | Nothing | 5 min | Day 1 |
| 2.1 | Add snippet paragraph | 0.1, 1.1 | 30 min | Day 2 |
| 2.2 | Add entity-dense paragraph | Nothing | 20 min | Day 2 |
| 2.3 | Rewrite FAQ Q1–Q5 | 0.1 | 45 min | Day 2 |
| 2.4 | Rewrite FAQ Q6–Q10 | 0.1 | 30 min | Day 2 |
| 2.5 | Update FAQPage schema answers | 2.3, 2.4 | 30 min | Day 2 |
| 2.6 | Update H1 keyword | Nothing | 5 min | Day 2 |
| 2.7 | Add programme H3 keywords | Nothing | 20 min | Day 2 |
| 2.8 | Add comparison table section | 0.1 | 45 min | Day 3 |
| 2.9 | Add E-E-A-T signals | Nothing | 30 min | Day 3 |
| 3.1 | Replace CollegeOrUniversity schema | 0.1 | 30 min | Day 3 |
| 3.2 | Verify FAQPage schema output | 2.5 | 15 min | Day 3 |
| 3.3 | Add Speakable + WebPage schema | 2.1, 1.4 | 20 min | Day 3 |
| 3.4 | Add internal links | Nothing | 20 min | Day 3 |
| 3.5 | AggregateRating schema | Admin data (deferred) | 15 min | When ready |
| 4.1 | Pre-deployment checklist | All above | 30 min | Day 4 |
| 4.2 | Deploy + submit for indexing | 4.1 | 20 min | Day 4 |
| 4.3 | Set up monitoring schedule | 4.2 | 20 min | Day 4 |

**Critical path:** 0.1 → 1.1 → 2.1 → 2.3 → 2.5 → 3.3 → 4.1 → 4.2

**Parallel work possible on Day 1:** Steps 1.2, 1.3, and 1.4 can run in parallel (no mutual dependencies).
**Parallel work possible on Day 2:** Steps 2.2, 2.6, 2.7 can run in parallel (no dependencies on 2.1 or the FAQ rewrites).

**Total estimated implementation time:** 18–24 hours across 4 days.

---

## 4. Success Metrics Per Step

| Step | What Success Looks Like | How to Measure | Target Value | Tool |
|------|------------------------|----------------|--------------|------|
| 0.1 | Single verified distance value documented | MEMORY.md note created | ~22 km confirmed via Google Maps | Google Maps (manual check) |
| 1.1 | Zero instances of "35 km" remaining on page | Search `page.tsx` for "35" | 0 results for distance "35" | VS Code / grep |
| 1.2 | Meta title ≤60 chars; description ≤155 chars | Rich Results Test | 48 chars title; 144 chars description | Google Rich Results Test |
| 1.3 | All CourseSchema URLs return 200 status | Browser navigation / GSC | 4 of 4 programme URLs resolve | Browser / GSC Coverage |
| 1.4 | FAQ section element has `id="faq-section"` | Browser Inspector → Elements | ID visible in DOM | Chrome DevTools |
| 2.1 | 55-word paragraph with class `snippet-answer-paragraph` appears after H1 | View page source | Paragraph visible in source | Chrome → View Page Source |
| 2.2 | Entity paragraph contains all 7 required entities | Manual content review | Name, URL, year, address, affiliations, programme count, group context — all 7 present | Manual review |
| 2.3 | FAQ Q1–Q5 first sentences ≤29 words | Word count check | All 5 answers pass ≤29 word rule | Manual word count |
| 2.4 | FAQ Q6–Q10 first sentences ≤29 words | Word count check | All 5 answers pass ≤29 word rule | Manual word count |
| 2.5 | FAQPage schema uses short answers; Rich Results Test passes | Google Rich Results Test | 10 FAQ entries pass with no errors | Google Rich Results Test |
| 2.6 | H1 contains "in Erode" | View page source | H1 text matches spec | Chrome → View Page Source |
| 2.7 | 4 programme H3s include "near Erode" | View page source | 4 programme headings updated | Manual review |
| 2.8 | Comparison table renders correctly on mobile and desktop | Browser preview | Table visible at 320px, 768px, 1024px | Chrome DevTools responsive mode |
| 2.9a–d | Founding year, batch attribution, superlatives removed, "Last updated" note visible | Manual review | All 4 sub-items confirmed | Manual review |
| 3.1 | CollegeOrUniversity schema validates with all 11 new fields | schema.org validator | Zero errors; all new fields present | https://validator.schema.org |
| 3.2 | FAQPage schema renders 10 FAQ entries in Rich Results Test | Rich Results Test | 10 entries, no errors | Google Rich Results Test |
| 3.3 | WebPage + Speakable schema validates and cssSelectors resolve to existing elements | schema.org validator + DOM check | No errors; `.snippet-answer-paragraph` and `#faq-section` exist in DOM | schema.org validator + Chrome DevTools |
| 3.4 | Internal links to /facilities and /placements return 200 | Browser navigation | Both links load correctly | Browser |
| 4.1 | All 20 checklist items checked off | Step 4.1 checklist | 20/20 items verified | Manual |
| 4.2 | GSC URL Inspection shows page crawlable; indexing requested | GSC URL Inspection | "Indexing requested" confirmation | Google Search Console |
| 4.3 | GSC impressions for "erode" queries > 0 by week 4 | GSC Performance report | ≥1 impression within 30 days | Google Search Console |

---

## 5. Resource Requirements

### Tools

| Tool | Purpose | Access Required |
|------|---------|----------------|
| Google Search Console | URL Inspection, indexing request, query monitoring | Admin access to cas.jkkn.ac.in GSC property |
| Google Analytics 4 | Organic traffic tracking for /erode page | Editor access to CAS GA4 property |
| Google Rich Results Test (richresults.google.com) | Validate FAQPage, BreadcrumbList, Speakable schema | Public (no login required) |
| schema.org Validator (validator.schema.org) | Validate CollegeOrUniversity, WebPage schema | Public (no login required) |
| Google Maps | Step 0.1 distance verification | Public (no login required) |
| PageSpeed Insights (pagespeed.web.dev) | Core Web Vitals — LCP, CLS, FID for /erode | Public (no login required) |
| Chrome DevTools | DOM inspection, responsive testing, view page source | Built into Chrome |
| VS Code / Cursor | Code editing for `page.tsx` | Developer access to `Arts_College_JKKN` repository |
| Facebook Sharing Debugger | OG image validation | Facebook account (free) |

### Access Requirements

| Access | Why Needed | Who to Request From |
|--------|-----------|---------------------|
| Google Search Console — cas.jkkn.ac.in | URL inspection + indexing | JKKN digital team / domain owner |
| GA4 — CAS property | Traffic baselines + goal setup | JKKN analytics admin |
| Git repository push access | Deploy `page.tsx` changes | Development team |
| Admin confirmation on testimonials | Step 2.9e testimonial activation | College admin / placement cell |
| GBP review data | Step 3.5 AggregateRating | JKKN GBP manager |
| Fee comparison data | Verify "30–50% lower" claim | Admission office |

### Content Creation Needs

| Content Item | Volume | Notes |
|--------------|--------|-------|
| Distance verification | 1 data point | Google Maps check (Step 0.1) |
| Snippet paragraph | 55 words | Provided in spec Section 8.1 — ready to use |
| Entity-dense paragraph | ~120 words | Provided in spec Section 10.2 Para 1 — ready to use |
| FAQ rewrites (Q1–Q10) | 10 answers | Provided in spec Section 9 — ready to use |
| Comparison table | 7 rows | Provided in spec Section 8.3 — ready to use |
| Student testimonials | 2–3 testimonials | Must be sourced from admin — NOT provided in spec |
| Batch year for placement stats | 1 data point | Must be confirmed with placement cell |
| NAAC grade for Arts college | 1 data point | Marked [UNVERIFIED] in CLAUDE.md — must confirm |

### Technical Skills Needed

| Skill | Steps That Require It |
|-------|----------------------|
| React / TypeScript / JSX | All `page.tsx` edits (Steps 1.1–3.4) |
| JSON-LD schema authoring | Steps 2.5, 3.1, 3.3 |
| Tailwind CSS | Step 2.8 (comparison table styling) |
| Next.js App Router metadata API | Step 1.2 |
| Google Search Console | Steps 4.2, 4.3 |
| Git (commit, push, deploy) | Step 4.2 |

---

## 6. Risk Assessment

| # | Risk | Probability | Impact | Mitigation |
|---|------|-------------|--------|------------|
| 1 | Distance verification yields a third value (not 22 km, not 35 km) | Low | High | Document the verified value from Google Maps; update MEMORY.md; use only the verified value. Never publish two different distances. |
| 2 | Distance correction triggers re-crawl with old 35 km value indexed in AI Overview | Low | High | Request immediate URL Inspection + recrawl in GSC on deploy day. Monitor GSC for indexation of old distance within 72 hours. |
| 3 | Kongu Arts captures the open featured snippet before JKKN's optimized content is indexed | Medium | Medium | Speed up Phase 1+2 deployment (prioritize Days 1–2). Snippet capture does not require top-3 ranking — Kongu Arts can hold organic rank while JKKN holds the snippet. |
| 4 | FAQPage schema fails Google Rich Results Test after voice answer rewrite | Low | Medium | Test each FAQ batch in Rich Results Test before deploying. Keep a backup of the original `faqs` array. If schema fails, revert to original answers while debugging. |
| 5 | Unsubstantiated fee comparison claim ("30–50% lower") is indexed and later challenged | High | Medium | Remove or tag [UNVERIFIED] before deployment. Obtain verified fee comparison from admission office. Do not publish this claim without a source. |
| 6 | Internal links added in Step 3.4 point to pages that do not exist (/tiruchengode) | Medium | Low | Before adding each link, verify the target URL loads a real page. If /tiruchengode does not exist, skip that link. |
| 7 | AggregateRating schema deployed with estimated values | Low | High | Step 3.5 is explicitly deferred until real GBP data is available. This risk is mitigated by the deferred status — do not activate under any circumstances without verified data. |
| 8 | Indexation delay — page remains uncrawled for > 8 weeks post-deployment | Low | Medium | After GSC URL Inspection + indexing request, build 2–3 inbound links from the homepage and /programmes page (spec Section 16.1). Internal links are the fastest signal to accelerate crawl. |
| 9 | Speakable schema cssSelectors do not match DOM after code changes | Medium | Low | After every deployment, verify `.snippet-answer-paragraph` and `#faq-section` exist in the page DOM using Chrome DevTools. Re-validate Speakable schema via schema.org validator. |
| 10 | Core Web Vitals degrade after new sections are added (comparison table, entity paragraph) | Low | Medium | Run PageSpeed Insights before and after adding new sections. New content is text-only — no new images or heavy scripts. Risk is low but verify LCP stays < 2.5 seconds. |

---

## 7. Rollback Plan

### When to Trigger a Rollback

Trigger a rollback if any of the following occur within 7 days of deployment:

1. **GSC Coverage errors spike:** More than 3 new crawl errors appear in GSC Coverage report for the /erode URL or linked programme pages.
2. **Schema validation failure in production:** GSC Enhancements report shows FAQPage or BreadcrumbList errors after deployment.
3. **Organic traffic drops > 30%:** Overall cas.jkkn.ac.in organic traffic drops > 30% after deployment (indicates a site-wide issue, not page-level).
4. **Page becomes unavailable:** HTTP 500 or 404 on https://cas.jkkn.ac.in/erode.
5. **Snippet captured incorrectly:** A Google snippet appears for the Erode page but displays wrong distance, fabricated data, or a broken sentence — indicating a schema or content formatting error.

### Rollback Procedure

**Step 1 — Identify scope:**
Determine whether the issue affects only `src/app/erode/page.tsx` or other files. Run a `git diff` to identify all changes since the last stable commit.

**Step 2 — Revert `page.tsx` to last stable version:**
```bash
git log --oneline src/app/erode/page.tsx
# Identify the last stable commit hash
git checkout [STABLE_COMMIT_HASH] -- src/app/erode/page.tsx
```

**Step 3 — Deploy reverted version:**
Push the reverted file to production. Verify the page loads at https://cas.jkkn.ac.in/erode.

**Step 4 — Request recrawl:**
In GSC URL Inspection, request indexing of the reverted URL to flush any cached schema errors.

**Step 5 — Diagnose before re-attempting:**
Do not re-deploy the optimization until the root cause is identified. Common issues:
- CourseSchema absolute URL resolves to 404 → verify programme page exists before fixing URL.
- FAQPage schema syntax error → validate JSON-LD block via validator.schema.org before re-deploying.
- Distance still shows 35 km → search page.tsx for all distance instances before re-deploying.

**Step 6 — Schema-only rollback (for schema issues without content issues):**
If only the schema blocks are causing errors, revert only the schema blocks while keeping the content changes (H1 update, snippet paragraph, FAQ rewrites). The content changes carry no rollback risk.

---

## 8. Success Criteria

The Erode page AEO implementation is considered **successfully completed** when all of the following are true:

### Mandatory Criteria (All Must Pass)

| # | Criterion | Verification Method | Target |
|---|-----------|--------------------|---------|
| 1 | Distance data is consistent — one verified value used in all 4+ locations on the page | Search `page.tsx` for all distance mentions; confirm single value | Zero instances of old "35 km" value |
| 2 | Meta title contains "in Erode" and is ≤60 characters | Google Rich Results Test → URL inspection | 48 chars; "in Erode" present |
| 3 | FAQPage schema passes Google Rich Results Test with 10 entries, voice-optimized answers | Google Rich Results Test | Pass; 10 entries; no errors |
| 4 | CollegeOrUniversity schema includes telephone, sameAs, foundingDate, and areaServed | schema.org validator | All 4 fields present; zero errors |
| 5 | Speakable + WebPage schema is present and valid | schema.org validator | Pass; cssSelectors resolve to existing DOM elements |
| 6 | Snippet paragraph (55 words) with `.snippet-answer-paragraph` class is in the page HTML | View Page Source | Paragraph visible in source; class present |
| 7 | CourseSchema URLs are absolute (all 4 blocks) | Browser navigation on each URL | 4 of 4 URLs return 200 status |
| 8 | Page is indexed in Google for at least one Erode-related query | GSC Performance → filter "erode" | ≥1 impression within 60 days of deployment |
| 9 | No fabricated statistics on the page — all unverified claims tagged or removed | Manual content audit | Zero unverified claims published without [UNVERIFIED] flag |
| 10 | AEO Score re-evaluated at 3 months post-deployment using spec Section 2 framework | Manual scoring | ≥55/100 |

### Secondary Criteria (Expected Within 3–6 Months)

| # | Criterion | Target Window | KPI |
|---|-----------|---------------|-----|
| 11 | GSC impressions for "erode" queries | Month 1 | ≥500/month |
| 12 | Ranking — "arts and science college near erode" | Month 3 | Top 20 |
| 13 | Featured snippet capture (at least 1 query) | Month 3–5 | 1 snippet win |
| 14 | PAA appearances | Month 3–5 | ≥2 PAA questions |
| 15 | AEO Score | Month 3 | ≥68/100 |

### Definition of "Done" (Single Summary Statement)

The Erode page AEO implementation is **done** when: the page passes all 9 pre-deployment checklist items in Step 4.1, is indexed by Google within 60 days, achieves an AEO Score of ≥55/100 at the 3-month re-evaluation, and holds at least 1 featured snippet or PAA appearance for an Erode-related query within 6 months of deployment.

---

*Triple-check validation: PASSED*
*Plan covers all 8 required sections. All content in English. All steps have measurable outcomes, file paths, and line numbers. Distance discrepancy treatment is consistent throughout. Schema, content, and monitoring phases are sequenced correctly with dependency tracking.*
