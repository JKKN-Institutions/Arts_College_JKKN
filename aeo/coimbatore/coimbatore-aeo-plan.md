# AEO Implementation Plan — JKKN CAS Coimbatore City Page

**Page URL:** https://cas.jkkn.ac.in/coimbatore
**Source File:** `src/app/coimbatore/page.tsx`
**Spec Reference:** `aeo/coimbatore/coimbatore-aeo-spec.md`
**Plan Version:** 1.0
**Date:** 2026-03-28
**Decision Gate:** C — Long-term play (HARDEST city target)

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Priority-Ordered Implementation Steps](#2-priority-ordered-implementation-steps)
   - [Phase 1: Critical Fixes (P0)](#phase-1-critical-fixes-p0)
   - [Phase 2: Content Optimization (P1)](#phase-2-content-optimization-p1)
   - [Phase 3: Schema and Technical (P2)](#phase-3-schema-and-technical-p2)
   - [Phase 4: Monitoring (P3)](#phase-4-monitoring-p3)
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
| AEO Readiness Score (Before) | **25 / 100 — Critical Gap** |
| Target Score (After Phase 1–3) | **60–70 / 100** |
| Google Ranking — Head Term | Not in top 10 for "best arts and science college in coimbatore" |
| AI Overview Presence | 0 — not cited by any AI model |
| Featured Snippet Wins | 0 |
| PAA Appearances | 0 |
| FAQ Voice Compliance | 0 of 10 FAQs within 29-word limit |
| Distance Accuracy | PASS — 105 km confirmed accurate (verified 2026-03-27) |
| Meta "near Erode" Bug | NOT PRESENT in current source file — pre-fixed or never existed |

### Competitive Reality

Coimbatore is the hardest city target across all five JKKN CAS city pages. PSG College of Arts and Science (NIRF Top 11, NAAC A+, physically in Coimbatore) and Rathinam College of Arts and Science (NAAC A++, physically in Coimbatore) dominate the head query. National directories (CollegeDunia, Shiksha, Careers360) and local directories (123coimbatore.com) own the featured snippet and list positions. JKKN CAS at 105 km from Coimbatore cannot compete on the head term "best arts and science college in coimbatore" in the short or medium term.

**This plan does not target head-term position 1. This plan targets:**
1. AI Overview inclusion as "affordable alternative near Coimbatore"
2. PAA wins on informational long-tail variants
3. Featured snippet capture on low-competition "near Coimbatore affordable" and "BCA college near Coimbatore" queries
4. Answer engine positioning as the best-value alternative for Coimbatore students who cannot afford or gain admission to PSG and Rathinam

### Core Positioning Strategy

> "Affordable alternative near Coimbatore — 105 km via NH-544 — with hostel, weekend buses, and a direct pipeline into Coimbatore's IT corridor."

This positioning wins where PSG and Rathinam are weakest: price and accessibility for lower-income students. The IT corridor angle (TIDEL Park, Elcot SEZ BCA and CS placement pipeline) makes JKKN CAS relevant to Coimbatore's economy even from a distance.

### Score Breakdown (Before vs. After)

| Dimension | Score Before | Score After (Target) | Max |
|-----------|-------------|---------------------|-----|
| Snippet Capture | 0 | 12–14 | 20 |
| PAA Coverage | 5 | 12 | 15 |
| AI Citation Readiness | 0 | 16–18 | 20 |
| Schema Completeness | 10 | 13–14 | 15 |
| Content Quality | 10 | 12 | 15 |
| Voice Search Readiness | 0 | 10–12 | 15 |
| **Total** | **25** | **65–72** | **100** |

---

## 2. Priority-Ordered Implementation Steps

---

### Phase 1: Critical Fixes (P0)

**Rationale:** These fixes address the four confirmed FAIL items from the Negative Trigger Audit (spec Section 17) that block AI Overview inclusion and voice search eligibility entirely. No other optimization delivers value until these are in place.

**Owner:** Developer
**Timeline:** Week 1 (Days 1–5)

---

#### Step 1.1 — Add Primary AI Citation Block

**Priority:** P0 — Highest single-item ROI of all changes on this page
**Spec Reference:** Section 10.1 (AI Overview Citation-Optimized Content)
**Source File:** `src/app/coimbatore/page.tsx`

**Problem:** AI citation score is 0/20. No factual, entity-dense paragraph exists that Gemini, ChatGPT, or Perplexity can extract as a citation. Without this, AI Overview inclusion is impossible regardless of all other changes made.

**Action:** Insert the following paragraph as a styled "About JKKN CAS" card immediately below the H1 hero section (after line 217 in current source file), before the distance card. The paragraph must render as plain HTML — not inside a JavaScript string template or conditional block.

**Content to add:**

```
JKKN College of Arts and Science is a NAAC-accredited, UGC-approved institution located
in Komarapalayam, Namakkal district, Tamil Nadu — 105 km from Coimbatore via NH-544.
Founded in 1952 and affiliated to Periyar University and Bharathiar University, JKKN CAS
offers 34 undergraduate, postgraduate, and research programmes spanning arts, science,
commerce, and computer applications. The institution maintains a 90%+ placement rate
with recruiters including TCS, Infosys BPO, HDFC Bank, Amazon, and Flipkart. A 50+ acre
residential campus with separate hostel facilities, digital library, modern laboratories,
and weekend bus services to Coimbatore makes it an accessible choice for students from
Coimbatore seeking affordable quality education.
```

**Apply CSS class:** `aeo-citation-block` to this paragraph element (required for SpeakableSpecification schema in Step 3.1 to function).

**Validation:** After deployment, check rendered HTML source (View Source in browser, not DevTools) and confirm the paragraph text appears as plain text, not inside a script tag or JSON blob.

---

#### Step 1.2 — Rewrite All 10 FAQ Answers (Voice Optimization)

**Priority:** P0 — Blocks both PAA inclusion and voice search
**Spec Reference:** Section 9 (PAA Q&A Section) — all 10 voice-optimized rewrites are written in full
**Source File:** `src/app/coimbatore/page.tsx` lines 82–122

**Problem:** All 10 FAQ answers exceed the 29-word limit required for Google PAA extraction and voice search responses. FAQ 1 is 62 words, FAQ 3 is 61 words, FAQ 4 is 61 words, FAQ 10 is 66 words. These are too long for Google to lift and surface as a PAA answer or voice response.

**Action:** Replace each FAQ answer in the `faqs` array (source file lines 82–122) with the voice-optimized version from spec Section 9. Do not change FAQ question text — only the answer text.

| FAQ | Current Word Count | Target Word Count | Spec Location |
|-----|-------------------|------------------|---------------|
| FAQ 1 — Best arts college in Coimbatore? | 62 words | 29 words | Spec Section 9, FAQ 1 |
| FAQ 2 — How far is JKKN from Coimbatore? | 47 words | 28 words | Spec Section 9, FAQ 2 |
| FAQ 3 — Which courses are popular? | 61 words | 29 words | Spec Section 9, FAQ 3 |
| FAQ 4 — Can BCA students get IT jobs? | 61 words | 29 words | Spec Section 9, FAQ 4 |
| FAQ 5 — Are fees affordable? | 45 words | 29 words | Spec Section 9, FAQ 5 |
| FAQ 6 — Is hostel available? | 35 words | 29 words | Spec Section 9, FAQ 6 |
| FAQ 7 — How to apply? | 28 words | 27 words | Spec Section 9, FAQ 7 (already compliant — minor update only) |
| FAQ 8 — Is there a direct bus? | 49 words | 29 words | Spec Section 9, FAQ 8 |
| FAQ 9 — How much does hostel cost? | 35 words | 29 words | Spec Section 9, FAQ 9 |
| FAQ 10 — Why choose JKKN over Coimbatore colleges? | 66 words | 29 words | Spec Section 9, FAQ 10 |

**Blast radius check:** The `faqs` array feeds both the rendered FAQ section on the page AND the `FAQSchema` component at source file line 131. Rewriting answers updates both automatically — confirm FAQSchema output after deployment using Google Rich Results Test (https://search.google.com/test/rich-results).

**Additional FAQs (optional — expand to 12):** Spec Section 9 provides two additional FAQs (FAQ 11 — IT companies recruiting in Coimbatore; FAQ 12 — NAAC accreditation status). Add these if the FAQ component supports more than 10 items with no layout impact.

---

#### Step 1.3 — Meta Bug Verification (GBP + External Assets)

**Priority:** P0 — Block check before all other changes
**Spec Reference:** Section 1 (Phase 0 Data Collection), Section 17 Check #1

**Finding:** The task brief flagged "some areas say near Erode." Full review of `src/app/coimbatore/page.tsx` lines 44–79, 206–209, 282–310, and 378–388 found NO "near Erode" language. The source file correctly references Coimbatore throughout. The bug either was pre-fixed in the source file or exists in an external asset not reviewed during the spec audit.

**Action:** Manually verify the following external assets before proceeding:

| Asset | Check For | How to Verify |
|-------|-----------|--------------|
| Google Business Profile description | Any "near Erode" text | Log in to GBP dashboard for JKKN CAS |
| GBP category tags or service areas | Erode vs Coimbatore | GBP dashboard |
| OG image alt text | Current alt = "JKKN College of Arts and Science — modern classroom facility" — no Erode reference | Source file line 70 (confirmed safe) |
| Sitemap.xml | /coimbatore page included | Check public sitemap URL |
| Any external crawl cache | Old meta tag cached by Google | GSC URL Inspection → "Test Live URL" |

**If GBP bug found:** Update GBP description to remove "near Erode" and replace with "105 km from Coimbatore via NH-544."

**If no bug found anywhere:** Mark this step complete and proceed — no code change required.

---

#### Step 1.4 — GSC Index Status and Baseline Export

**Priority:** P0 — Required before any optimization can be measured
**Spec Reference:** Section 19.1 (Monitoring Plan), Section 19.3 Milestone M13

**Problem:** Current Google index status shows the page is not appearing in search results for Coimbatore-related terms. Without a confirmed GSC baseline, no improvement can be measured.

**Action:**

1. Open Google Search Console → URL Inspection
2. Enter `https://cas.jkkn.ac.in/coimbatore`
3. If "URL is not on Google" → click "Request Indexing"
4. Export current performance data: GSC → Performance → Filter by "coimbatore" in queries → Export to CSV (this is the Day 0 baseline)
5. Save the exported CSV to `aeo/coimbatore/gsc-baseline-coimbatore-YYYY-MM-DD.csv`
6. Note the exact date of the baseline export in the monitoring log

**Dependency:** Must complete before Step 4.1 (Monitoring Setup), which compares against this baseline.

---

### Phase 2: Content Optimization (P1)

**Rationale:** With the critical AEO foundation in place (citation block, voice FAQs), Phase 2 builds the content that converts AI citation presence into actual traffic. The IT corridor angle and cost comparison content target the specific Coimbatore student segment — those researching affordable alternatives who cannot afford or gain entry to PSG or Rathinam.

**Owner:** Developer + Content
**Timeline:** Week 2–3 (Days 6–15)

---

#### Step 2.1 — Add IT Corridor Content Section

**Priority:** P1 — Coimbatore-specific differentiator with no equivalent on any competitor page
**Spec Reference:** Sections 6 (Strategy, Pillar 2), 8.2 (List Snippet), 10.2 (IT Corridor Citation Block)
**Source File:** `src/app/coimbatore/page.tsx` — insert after placements section (around line 731)

**Problem:** No content currently connects JKKN CAS to Coimbatore's IT economy. PSG and Rathinam are geographically in Coimbatore but neither specifically addresses the IT corridor pipeline angle for outstation students. This is a content gap JKKN can own.

**Action:** Add a new H2 section with the following structure:

**H2 heading:** "BCA and IT Programmes for Coimbatore's Tech Industry"

**Section body — Citation Block (from spec Section 10.2):**

```
Coimbatore's technology corridor — anchored by TIDEL Park and the Elcot SEZ — creates
consistent demand for BCA, B.Sc Computer Science, and B.Sc AI and Data Science graduates.
JKKN CAS BCA and computer science alumni have been placed at IT companies operating in
and around Coimbatore. Students from Coimbatore who enroll at JKKN CAS benefit from
JKKN's established corporate placement network while saving significantly on total
education costs compared to Coimbatore city private colleges.
```

**Programme list (from spec Section 8.2):**

Add a bullet list immediately following the citation paragraph:
- BCA (Bachelor of Computer Applications) — 3-year UG; 60 seats; direct pipeline to Coimbatore's TIDEL Park and Elcot SEZ IT companies
- B.Sc Computer Science — 3-year UG; ideal for software and IT roles in Coimbatore's manufacturing-tech sector
- B.Sc AI and Data Science — 3-year UG; emerging programme aligned to Coimbatore's digital transformation demand
- B.Sc Cyber Security — 3-year UG; growing demand from Coimbatore IT and fintech companies

**Link:** Add internal link from "B.Sc Cyber Security" to `/programmes/self-finance/ug/bsc-cs-cyber-security` (currently not linked on this page — spec Section 16.3 recommended addition).

**Snippet trigger:** The H2 text "BCA and IT Programmes for Coimbatore's Tech Industry" is designed to capture programme-specific "near Coimbatore" snippet variants (spec Section 5.2).

---

#### Step 2.2 — Add Affordable Alternative Snippet-Trigger H2 and Citation Block

**Priority:** P1 — Featured snippet trigger for the primary "affordable near Coimbatore" angle
**Spec Reference:** Sections 5.2 (Featured Snippet Analysis), 8.1 (Paragraph Snippet), 8.3 (Table Snippet), 10.3 (Affordable Alternative Citation Block)
**Source File:** `src/app/coimbatore/page.tsx` — cost comparison section (around lines 393–445)

**Problem:** The cost comparison section (lines 393–445) exists and contains the right data, but it lacks a snippet-trigger H2 heading and the opening citation paragraph that makes it extractable by Google.

**Action — Step A:** Update the H2 heading of the cost comparison section to:

> "Which is the Most Affordable Arts and Science College for Coimbatore Students?"

This exact phrasing matches the high-probability PAA question structure and acts as the featured snippet trigger for "affordable arts college near Coimbatore" queries.

**Action — Step B:** Add the affordable alternative citation paragraph (spec Section 10.3) as the first paragraph of the cost comparison section, before the table:

```
For students from Coimbatore evaluating arts and science colleges, JKKN CAS offers a
cost-effective residential alternative. Annual tuition at JKKN CAS is 30–50% lower than
comparable private colleges in Coimbatore city. When combined with affordable on-campus
hostel accommodation — which includes three meals daily, WiFi, and 24/7 security — the
total three-year cost at JKKN CAS is substantially lower than attending a city college
while managing private PG accommodation.
```

**Action — Step C:** Verify the comparison table (spec Section 8.3) is already present. If the table currently uses the H2 heading "JKKN CAS vs Coimbatore City Colleges" or similar, ensure it is updated to the snippet-trigger heading specified in Step A above.

**Note on fee claim:** The "30–50% lower" figure is marked [MEDIUM] confidence in the spec (not independently verified). Use it as a marketing claim in body content, but do not promote it in the AI citation block (Section 10.1) where it already omits this claim. If the placement team confirms exact fee comparison data, update the stat accordingly.

---

#### Step 2.3 — Add Transport Accessibility Citation Block

**Priority:** P1 — Coimbatore-specific trust signal; hostel + weekend bus is the strongest unique asset
**Spec Reference:** Section 10.4 (Transport Accessibility Citation Block), Section 12 (Page Structure — Hostel section noted as EXCELLENT AEO asset)
**Source File:** `src/app/coimbatore/page.tsx` — hostel or "How to Reach" section (around lines 858–938 and 1013–1088)

**Problem:** The hostel section (lines 1013–1088) contains the weekend bus detail but it is not structured as a citable paragraph. The "How to Reach" section has transport details but lacks the Coimbatore-specific framing for AI extraction.

**Action:** Add the transport accessibility citation paragraph (spec Section 10.4) as the opening paragraph of the "How to Reach from Coimbatore" section:

```
Coimbatore students can reach JKKN CAS in 2 to 2.5 hours via NH-544. TNSTC government
buses depart regularly from Gandhipuram and Ukkadam bus stands toward Komarapalayam;
the campus is on the highway. Students opting for hostel accommodation benefit from
weekend bus services operated by the college, with Saturday departures from campus and
Sunday returns. Coimbatore International Airport (CJB) and Coimbatore Junction railway
station are both approximately 100–105 km from the campus.
```

This paragraph answers FAQ 8 (Is there a direct bus from Coimbatore to JKKN CAS?) and maps to the voice query "How do I get from Coimbatore to JKKN CAS?" — the voice-optimized FAQ 8 answer (spec Section 9) and this citation block work in tandem.

---

#### Step 2.4 — Update Meta Description

**Priority:** P1 — Direct impact on click-through rate from SERP
**Spec Reference:** Section 15.2 (Recommended Meta Tag Updates)
**Source File:** `src/app/coimbatore/page.tsx` lines 45–46

**Current description (127 chars):**
> JKKN CAS — 105 km from Coimbatore via NH-544. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.

**Recommended description (148 chars):**
> JKKN CAS — 105 km from Coimbatore. NAAC-accredited. Fees 30–50% lower than city colleges. BCA, B.Sc CS, BBA, B.Com. 90%+ placements. 2026-27 open.

**Why this change:** The word "Fees" and the "30–50% lower" hook directly address the Coimbatore student's primary concern (cost). Adds BCA and B.Sc CS prominence for the IT audience. 148 characters — within the 155-character limit.

**Meta title:** Keep current title unchanged. "Best Arts and Science College Near Coimbatore | JKKN CAS" at 57 characters is accurate and within limit.

---

#### Step 2.5 — Add New Keywords to Meta Keywords Array

**Priority:** P1 — Supports indexing signals for IT-specific and programme-specific queries
**Spec Reference:** Section 15.2 (Keywords array recommendations)
**Source File:** `src/app/coimbatore/page.tsx` lines 47–54

**Current keywords array (6 items):**
- arts and science college near Coimbatore
- best college near Coimbatore
- JKKN CAS Coimbatore
- college 2 hours from Coimbatore
- affordable college near Coimbatore
- BCA BBA B.Com B.Sc near Coimbatore

**Add these 5 keywords:**
- BCA college near Coimbatore with placement
- B.Sc Computer Science near Coimbatore
- B.Sc AI Data Science college near Coimbatore
- NAAC accredited college near Coimbatore
- arts college Komarapalayam

**Total after update:** 11 keywords. This does not replace existing keywords — append to the array.

---

#### Step 2.6 — E-E-A-T Signals: Update OG Image Alt Text

**Priority:** P1 — Minor but confirmed advisory from spec
**Spec Reference:** Section 17 Check #14 (OG image alt text)
**Source File:** `src/app/coimbatore/page.tsx` line 70

**Current alt text:**
> "JKKN College of Arts and Science — modern classroom facility"

**Updated alt text:**
> "JKKN College of Arts and Science — arts college 105 km from Coimbatore, Tamil Nadu"

**Why:** No Coimbatore keyword reference in the OG image alt is a minor missed signal. This single line change adds geo context to the social share image.

---

#### Step 2.7 — Verify and Add Internal Links

**Priority:** P1 — Internal linking passes authority and ensures new content sections are crawled
**Spec Reference:** Section 16 (Internal Linking Plan)

**Outgoing links to add from /coimbatore:**

| Destination | Anchor Text | Placement on Page | Current Status |
|------------|-------------|-----------------|---------------|
| `/programmes/self-finance/ug/bsc-cs-cyber-security` | "B.Sc Cyber Security" | IT corridor section (Step 2.1) | Not currently linked |
| `https://placements.jkkn.ac.in` | "Full Placement Statistics" | Placements section | Not currently linked |
| `/facilities` | "Explore All Facilities" | Campus and Facilities section | Not currently linked |
| `/departments` | "All Departments" | Programmes section | Not currently linked |

**Incoming links to verify (not code changes — coordination with other pages):**

| Source Page | Required Action |
|------------|----------------|
| Homepage (cas.jkkn.ac.in) | Confirm homepage city section links to /coimbatore |
| `/programmes/self-finance/ug/bca` | Add "BCA college near Coimbatore" contextual link |
| `/programmes/self-finance/ug/bsc-computer-science` | Add "B.Sc CS near Coimbatore" contextual link |
| `/programmes/self-finance/ug/bsc-ai-ds` | Add "B.Sc AI Data Science near Coimbatore" contextual link |

**Note:** The city cross-links to /namakkal, /salem, /erode, and /tiruppur at lines 1205–1209 are already present. Ensure corresponding pages link back to /coimbatore (bidirectional cross-linking).

---

#### Step 2.8 — Testimonials Section (Conditional)

**Priority:** P1 — Important for E-E-A-T but blocked on content availability
**Spec Reference:** Section 13 (E-E-A-T Signals — Experience), Section 17 Check #9
**Source File:** `src/app/coimbatore/page.tsx` line 1092 — `{false && ...}` hidden section

**Current state:** The testimonials section is coded but hidden via `{false && ...}` at line 1092. No testimonials exist yet.

**This step requires admin action, not developer action:**

Request from admin/placement team: Collect 2–3 real student testimonials from students who are from Coimbatore or who joined JKKN CAS specifically because it was affordable compared to Coimbatore city options. Each testimonial must include:
- Student full name (or first name if they prefer partial)
- Programme and graduation year
- Placement outcome (company + role if willing to share)
- One sentence about why they chose JKKN over Coimbatore colleges

**Do not fabricate.** The spec explicitly flags this — fabricated testimonials trigger Google's YMYL quality penalties and violate E-E-A-T guidelines.

**When testimonials are ready:** Change `{false &&` to `{true &&` at line 1092 to render the section.

**If testimonials cannot be collected in Week 3:** Keep section hidden. It is acceptable as-is. Do not rush this step by inventing content.

---

### Phase 3: Schema and Technical (P2)

**Rationale:** Schema changes are technical SEO signals — they tell Google and AI models what the page is about and which sections are speakable. Phase 3 upgrades the existing schema (already partially implemented) and adds the two missing schemas that directly impact voice search and AI Overview eligibility.

**Owner:** Developer
**Timeline:** Week 2 (Days 8–12, can overlap with Phase 2)

---

#### Step 3.1 — Add SpeakableSpecification Schema

**Priority:** P2 — Required for Google Assistant voice response eligibility
**Spec Reference:** Section 11.2 (Voice Search Optimization — SpeakableSpecification Schema)
**Source File:** `src/app/coimbatore/page.tsx` — JSON-LD schema section (around lines 133–160)

**Problem:** No SpeakableSpecification exists on the page. Voice search score is 0/15.

**Action:** Add the following JSON-LD block to the page's schema section. This must be added as a separate script tag (not merged into the CollegeOrUniversity schema):

```json
{
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
}
```

**CSS class assignment dependencies:**
- `aeo-citation-block` — Apply to the AI citation paragraph added in Step 1.1
- `faq-voice-answer` — Apply to each FAQ answer `<p>` tag (not the question) in the FAQ section
- `distance-card-summary` — Apply to the distance card element (source file lines 287–295)
- `snippet-trigger` — Apply to the two featured snippet H2 headings (added in Step 2.2 and Step 2.1)

**Validation:** After deployment, use Google Rich Results Test. SpeakableSpecification does not produce a rich result preview — validate JSON-LD syntax at https://validator.schema.org instead.

---

#### Step 3.2 — Enhance CollegeOrUniversity Schema

**Priority:** P2 — Adds entity signals critical for AI model knowledge graphs
**Spec Reference:** Section 14.1 (CollegeOrUniversity Schema)
**Source File:** `src/app/coimbatore/page.tsx` lines 133–160

**Problem:** Current schema is missing: `sameAs`, `foundingDate`, `description`, `telephone`, `logo`, `hasOfferCatalog`, `parentOrganization`, and `contactPoint`.

**Action:** Replace the existing inline CollegeOrUniversity JSON-LD (lines 133–160) with the enhanced version from spec Section 14.1. The key additions are:

| Field | Value | Why Important |
|-------|-------|--------------|
| `description` | Full entity sentence about JKKN CAS | Primary AI citation surface |
| `foundingDate` | "1952" | Establishes 74-year authority signal |
| `telephone` | "+919345855001" | E-E-A-T trustworthiness |
| `sameAs` | GBP URL + jkkn.ac.in parent | Knowledge graph entity linking |
| `hasOfferCatalog` | numberOfItems: 34 | Programme count signal |
| `parentOrganization` | JKKN Institutions | Group authority pass-through |
| `contactPoint` | Admissions contact type | Structured contact entity |

**Important:** Do not remove existing fields from the current schema. Only add the missing fields listed above. Verify `areaServed` includes Coimbatore (source line 150 — already present, confirm it remains).

**Validation:** Use Google Rich Results Test → search for "Educational Organization" rich result type. JSON-LD validator at https://validator.schema.org for full syntax check.

---

#### Step 3.3 — Add HowTo Schema for Admission Process

**Priority:** P2 — Captures "how to apply at JKKN from Coimbatore" informational queries
**Spec Reference:** Section 14.4 (HowTo Schema)
**Source File:** `src/app/coimbatore/page.tsx` — admission process section (around lines 751–791)

**Problem:** The admission process section exists with 5 steps but is not marked up with HowTo schema. Spec Section 17 Check #13 flags this as a confirmed FAIL.

**Action:** Add the HowTo schema JSON-LD from spec Section 14.4 as a new script tag in the schema section. The 5 steps are:
1. Visit Website or Campus
2. Fill the Application Form
3. Submit Documents
4. Counseling and Seat Allocation
5. Fee Payment and Enrollment (with hostel booking note for Coimbatore students)

Full JSON-LD is provided in spec Section 14.4 — copy as-is, no modifications needed.

**Validation:** Google Rich Results Test → "How-to" rich result type. Confirm 5 steps appear in the preview.

---

#### Step 3.4 — Update FAQPage Schema with Voice-Optimized Answers

**Priority:** P2 — Auto-follows from Step 1.2 (FAQ rewrite)
**Spec Reference:** Section 14.2 (FAQPage Schema Verification)
**Source File:** `src/app/coimbatore/page.tsx` — FAQSchema component at line 131

**Problem:** The FAQSchema component at line 131 reads from the same `faqs` array that contains the long answers. After Step 1.2 rewrites the answer text, the FAQPage schema will automatically update — this step is a verification step, not a separate change.

**Action:**
1. After completing Step 1.2, deploy the page
2. Fetch the deployed page in Google Rich Results Test (https://search.google.com/test/rich-results)
3. Confirm the FAQPage rich result shows the new voice-optimized answers (≤29 words each)
4. Confirm all 10 FAQ items appear in the structured data output
5. If any FAQ answer is truncated or erroring → check the `FAQSchema` component logic at line 131 for character limits or filters

**No code change expected** — this is a validation-only step following Step 1.2.

---

#### Step 3.5 — Update BCA CourseSchema Description (Coimbatore Context)

**Priority:** P2 — Minor enhancement with good entity density improvement
**Spec Reference:** Section 14.5 (Course Schema Updates)
**Source File:** `src/app/coimbatore/page.tsx` lines 161–192

**Problem:** 4 CourseSchema components are generic with no Coimbatore-specific context. Google and AI models reading course schema for Coimbatore queries get no geographic signal from these schema items.

**Action:** Update the BCA CourseSchema description (the highest-priority programme for the Coimbatore IT audience) to include Coimbatore context:

**Current description (generic):** [Check current text at source file line ~164]

**Updated description:**
> "3-year undergraduate IT programme at JKKN CAS — 105 km from Coimbatore. Hands-on training, 90%+ placement rate, pipeline to Coimbatore's TIDEL Park and Elcot SEZ IT sector. Fees 30–50% lower than Coimbatore city BCA colleges."

**For the other 3 CourseSchemas (B.Sc CS, BBA, B.Com):** Add "located 105 km from Coimbatore via NH-544, Tamil Nadu" to the provider address or description. This is lower priority — complete BCA first.

**Blast radius:** CourseSchema components feed structured data only. No impact on visible page content. Safe to modify individually.

---

#### Step 3.6 — Verify Google Maps Link Destination

**Priority:** P2 — Broken or wrong-destination Maps link is a trust signal failure
**Spec Reference:** Section 1 (Phase 0 Data Collection, Google Maps link — MEDIUM confidence)
**Source File:** `src/app/coimbatore/page.tsx` line 300 — `https://maps.app.goo.gl/bsLumyHe3JeaTAZ18`

**Action:** Click the Google Maps link (source file line 300) and confirm it opens to the JKKN CAS campus in Komarapalayam, not a different JKKN institution (dental, pharmacy, etc.) or an incorrect pin.

**If wrong destination:** Replace with the verified JKKN CAS GBP map URL: `https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7` (from CLAUDE.md institution table).

**If correct destination:** No change needed — mark verified.

---

### Phase 4: Monitoring (P3)

**Rationale:** Without monitoring, improvements are invisible. Phase 4 establishes the measurement framework and the 30-day re-audit that determines whether the 60+ score target has been reached.

**Owner:** SEO
**Timeline:** Week 1 (baseline) + Week 5 (re-audit)

---

#### Step 4.1 — Set Up Monitoring Dashboard

**Priority:** P3
**Spec Reference:** Sections 19.1 and 19.2 (Monitoring Plan)

**Weekly checks (start Week 1, every week after):**

| Check | Tool | Query to Monitor |
|-------|------|----------------|
| Google organic ranking | GSC + manual incognito search | "arts and science college near coimbatore" |
| Google organic ranking | GSC + manual incognito search | "affordable arts college near coimbatore" |
| Google organic ranking | GSC + manual incognito search | "bca college near coimbatore" |
| Index status | GSC → URL Inspection | https://cas.jkkn.ac.in/coimbatore |
| Organic sessions | GA4 → /coimbatore page | All organic source |
| Phone click events | GA4 → Events | tel: +91 9345855001 |
| Form submissions from page | GA4 → Events | Admission form starts |

**Bi-weekly checks:**

| Check | Tool | Query |
|-------|------|-------|
| AI Overview presence | Google Search (incognito) | "best arts and science college near coimbatore" |
| AI Overview JKKN citation | Google Search (incognito) | "affordable arts college near coimbatore" |
| PAA box appearance | Google Search (incognito) | "how far is jkkn from coimbatore" |

**Monthly checks:**

| Check | Tool | Query |
|-------|------|-------|
| ChatGPT citation check | ChatGPT (free) | "Best arts and science colleges near Coimbatore Tamil Nadu" |
| Perplexity citation check | Perplexity.ai | "Which arts college near Coimbatore is affordable?" |
| Bing performance | Bing Webmaster Tools | Coimbatore keyword performance |

---

#### Step 4.2 — 30-Day Re-Audit

**Priority:** P3
**Spec Reference:** Section 19.3 Milestone M14

**At the 30-day mark after Phase 1 deployment (Week 5):**

1. Re-run the full AEO readiness scoring from spec Section 2 (all 6 dimensions)
2. Compare against baseline of 25/100
3. Target: 45/100 minimum at 30 days (spec Section 19.1 target)
4. If score is below 40/100 — escalate to investigate whether indexing issues are blocking progress
5. Export updated GSC performance data and compare against Day 0 baseline (saved in Step 1.4)
6. Document findings in `aeo/coimbatore/coimbatore-aeo-30day-review.md`

---

## 3. Timeline with Dependencies

```
Week 1 (Days 1–5) — Phase 1: Critical Fixes
│
├── Day 1: Step 1.4 — Export GSC baseline (no dependencies)
├── Day 1: Step 1.3 — GBP + external asset meta bug check (no dependencies)
├── Day 2–3: Step 1.1 — Add AI citation block (no dependencies — first priority code change)
├── Day 3–4: Step 1.2 — Rewrite all 10 FAQ answers (depends on Step 1.1 deployment for testing)
│
│   ► Phase 1 deployment target: End of Week 1
│
Week 2 (Days 6–10) — Phase 2 + Phase 3 (can overlap)
│
├── Day 6–7: Step 2.4 — Update meta description (independent, 1 line change)
├── Day 6–7: Step 2.5 — Add keywords to meta array (independent, 1 line change)
├── Day 6–7: Step 2.6 — Update OG alt text (independent, 1 line change)
├── Day 7–8: Step 3.2 — Enhance CollegeOrUniversity schema (independent)
├── Day 8–9: Step 3.3 — Add HowTo schema (independent)
├── Day 8–9: Step 3.1 — Add SpeakableSpecification schema (depends on Step 1.1 — needs
│                         .aeo-citation-block class on citation paragraph from Step 1.1)
├── Day 9: Step 3.4 — FAQSchema validation (depends on Step 1.2 deployment)
├── Day 9: Step 3.6 — Verify Google Maps link (independent — can do Day 1 if convenient)
│
Week 3 (Days 11–15) — Phase 2 Content (heavier content additions)
│
├── Day 11–12: Step 2.1 — IT corridor content section (depends on no other step)
├── Day 12–13: Step 2.2 — Affordable alternative H2 + citation block (independent)
├── Day 13–14: Step 2.3 — Transport accessibility citation block (independent)
├── Day 14: Step 2.7 — Verify and add internal links (depends on Step 2.1 for IT section link)
├── Day 14–15: Step 3.5 — Update BCA CourseSchema (independent)
│
│   ► Phase 2 + Phase 3 deployment target: End of Week 3
│
Week 4 (Days 16–20)
│
├── Step 2.8 — Testimonials collection begins (admin action — no developer dependency)
├── Phase 4 Step 4.1 — Monitoring dashboard active from Week 1, continue weekly checks
│
Week 5 (Day 29–35)
│
└── Step 4.2 — 30-day re-audit and score comparison
```

**Critical path:** Step 1.1 (AI citation block) → Step 3.1 (SpeakableSpecification, needs .aeo-citation-block CSS class from Step 1.1) → Step 3.4 (FAQ schema validation, needs Step 1.2).

All other steps are independent and can be reordered within their phase without breaking dependencies.

---

## 4. Success Metrics Per Step

| Step | Deliverable | Measurable Outcome | Tool to Verify |
|------|-------------|-------------------|---------------|
| 1.1 AI Citation Block | Paragraph live on page | Appears in rendered HTML source (View Source); Google crawler can extract text | Browser View Source + GSC URL Inspection |
| 1.2 FAQ Voice Rewrites | All 10 answers ≤29 words | Google Rich Results Test shows updated FAQ answers; word count ≤29 per answer | Rich Results Test + manual word count |
| 1.3 Meta Bug Check | GBP description verified | No "near Erode" in GBP description | GBP dashboard manual check |
| 1.4 GSC Baseline | CSV exported and saved | File exists at aeo/coimbatore/gsc-baseline-*.csv | File system check |
| 2.1 IT Corridor Section | New H2 + citation + list live | Section visible in rendered page; BCA programme link functional | Browser + link checker |
| 2.2 Snippet Trigger H2 | H2 updated + citation paragraph added | New H2 text visible in source; paragraph rendered | Browser View Source |
| 2.3 Transport Citation | Paragraph added to How to Reach section | Text rendered in section; matches spec Section 10.4 | Browser check |
| 2.4 Meta Description | Updated description live | 148-char version visible in page source head | View Source |
| 2.5 Keywords Array | 5 new keywords added | 11 keywords total in source | View Source |
| 2.6 OG Alt Text | Updated alt text live | New alt text in og:image tag | View Source |
| 2.7 Internal Links | 4 new outgoing links added | Links functional; no 404 errors | Browser + link checker |
| 2.8 Testimonials | Section enabled or remains hidden | If enabled: 2–3 real testimonials visible; no fabricated content | Browser + manual review |
| 3.1 SpeakableSpecification | New schema JSON-LD added | Valid JSON-LD; schema.org validator passes | https://validator.schema.org |
| 3.2 CollegeOrUniversity Schema | Enhanced schema replaces current | sameAs, foundingDate, description, contactPoint all present | Rich Results Test + validator |
| 3.3 HowTo Schema | New schema JSON-LD added | Rich Results Test shows HowTo with 5 steps | Rich Results Test |
| 3.4 FAQPage Schema Validation | Existing schema verified post-rewrite | 10 FAQ questions with ≤29-word answers in rich result | Rich Results Test |
| 3.5 BCA CourseSchema | Description updated with Coimbatore context | Updated description in JSON-LD | View Source + validator |
| 3.6 Maps Link Verification | Link destination confirmed | Opens to JKKN CAS campus in Komarapalayam | Manual browser check |
| 4.1 Monitoring Setup | Weekly check schedule active | First weekly GSC export completed | GSC export CSV |
| 4.2 30-Day Re-Audit | AEO score recalculated | Score ≥45/100; comparison table documented | Re-audit document |

---

## 5. Resource Requirements

### Developer Time Estimates

| Phase | Step | Estimated Time |
|-------|------|---------------|
| Phase 1 | Step 1.1 — Add AI citation block (HTML/JSX edit) | 1 hour |
| Phase 1 | Step 1.2 — Rewrite 10 FAQ answers (data edit) | 2 hours |
| Phase 1 | Step 1.3 — Meta bug check (verification only) | 30 minutes |
| Phase 1 | Step 1.4 — GSC export (non-developer — SEO) | 15 minutes |
| Phase 2 | Step 2.1 — IT corridor section (new content + component) | 3 hours |
| Phase 2 | Step 2.2 — Snippet H2 + citation paragraph | 1 hour |
| Phase 2 | Step 2.3 — Transport citation paragraph | 30 minutes |
| Phase 2 | Step 2.4 — Meta description update (1 line) | 15 minutes |
| Phase 2 | Step 2.5 — Keywords array (1 line edit) | 15 minutes |
| Phase 2 | Step 2.6 — OG alt text (1 line edit) | 15 minutes |
| Phase 2 | Step 2.7 — Internal links (4 links across multiple locations) | 1 hour |
| Phase 2 | Step 2.8 — Testimonials (admin collection — not developer) | Admin effort |
| Phase 3 | Step 3.1 — SpeakableSpecification JSON-LD + CSS classes | 1.5 hours |
| Phase 3 | Step 3.2 — Enhanced CollegeOrUniversity schema | 1 hour |
| Phase 3 | Step 3.3 — HowTo schema JSON-LD | 1 hour |
| Phase 3 | Step 3.4 — FAQSchema validation (verification only) | 30 minutes |
| Phase 3 | Step 3.5 — BCA CourseSchema update | 30 minutes |
| Phase 3 | Step 3.6 — Maps link verification | 15 minutes |
| **Total Developer** | | **~15 hours across 3 weeks** |

### SEO / Content Time Estimates

| Task | Estimated Time |
|------|---------------|
| GSC baseline export (Step 1.4) | 15 minutes |
| Weekly monitoring checks (Step 4.1) | 30 minutes/week |
| 30-day re-audit (Step 4.2) | 3 hours |
| Admin: Testimonial collection coordination (Step 2.8) | 1 week of admin follow-up |

### External Tools Required

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Baseline export, index monitoring | Free |
| Google Analytics 4 | Organic sessions, event tracking | Free |
| Google Rich Results Test | Schema validation | Free |
| https://validator.schema.org | JSON-LD syntax validation | Free |
| ChatGPT (free tier) | Monthly AI citation check | Free |
| Perplexity.ai (free tier) | Monthly AI citation check | Free |
| Bing Webmaster Tools | Bing index and ranking data | Free |

**No paid tools are required for this implementation plan.**

---

## 6. Risk Assessment — Coimbatore-Specific

### Risk 1 — PSG and Rathinam SERP Dominance

**Risk:** PSG (NIRF Top 11, NAAC A+) and Rathinam (NAAC A++) are physically in Coimbatore with decades of domain authority. Even perfect AEO implementation will not displace them on "best arts and science college in coimbatore" for months to years.

**Probability:** Certain — this is not a risk, it is a confirmed reality.

**Mitigation:** This plan explicitly does NOT target head-term position 1. All steps target the "near Coimbatore affordable" and "BCA near Coimbatore" keyword families where PSG and Rathinam have weaker presence. Manage stakeholder expectations accordingly — do not promise head-term ranking improvements.

**Acceptable outcome:** Top 15 on head term at 180 days. Top 5 on "affordable near Coimbatore" at 90 days.

---

### Risk 2 — "Near Coimbatore" Keyword Skepticism from Google

**Risk:** Google may assess that a college 105 km from Coimbatore is not truly "near Coimbatore" and deprioritize the page for all "near Coimbatore" queries, regardless of content quality.

**Probability:** Medium. 105 km is at the outer edge of what Google typically considers "near" for local searches. The local 3-pack is definitively unwinnable.

**Mitigation:**
- The page already correctly positions the distance as 105 km — no deceptive framing
- Organic and answer-engine queries (not local pack queries) are the targets
- "Within 2 hours of Coimbatore" and "accessible from Coimbatore" framing is more defensible than "near Coimbatore" for the 105 km distance
- The meta description (Step 2.4) and H1 already use "near Coimbatore" — do not change this as it is the natural student search language
- Monitor impression volume in GSC for "near Coimbatore" queries — if impressions are minimal even after indexing, pivot keyword strategy toward "accessible from Coimbatore" and programme-specific queries

---

### Risk 3 — Indexing Issue Blocking All Progress

**Risk:** The spec notes the page is "not appearing in Google site:search for Coimbatore-related terms." If the page has a crawling or indexing issue, no content improvement delivers ranking results until the indexing issue is resolved.

**Probability:** Medium. The GSC check in Step 1.4 will reveal the exact status.

**Mitigation:**
- Step 1.4 is the first monitoring action — complete it on Day 1
- If GSC shows "URL not on Google" → Request Indexing immediately
- If GSC shows "Crawled — not indexed" → investigate duplicate content, thin content, or crawl budget issues before proceeding
- If GSC shows "Indexed" → no issue, proceed with all steps

**This is the single most important blocker to check in Week 1.**

---

### Risk 4 — AI Citation Block Not Extracted by AI Models

**Risk:** Even after adding the citation paragraph (Step 1.1), AI models may not include JKKN CAS in AI Overviews for Coimbatore queries because the page's overall authority signal is too low compared to PSG and Rathinam.

**Probability:** Medium-High for head term. Low for "affordable near Coimbatore" family.

**Mitigation:**
- The citation block primarily targets "affordable alternative" AI Overview queries, not "best in Coimbatore" queries
- AI model inclusion is not binary — JKKN may appear in the "alternatives" or "near Coimbatore" section of AI Overviews even if not in the primary "top colleges in Coimbatore" section
- Build external entity signals over time: citations from education directory sites, GBP reviews, and Google Knowledge Panel establishment all improve AI model confidence
- Monthly Perplexity and ChatGPT checks (Step 4.1) will detect if and when JKKN is first cited

---

### Risk 5 — Fee Comparison Claim Verification

**Risk:** The "30–50% lower fees" claim is marked [MEDIUM] confidence in the spec. If this figure is significantly inaccurate and a student or parent verifies it against actual fee structures, it damages trust and E-E-A-T.

**Probability:** Low — the claim appears on the current page and has not been contested to date.

**Mitigation:**
- The claim is used in marketing body content, not in the primary AI citation block (Step 1.1 — the citation block omits this claim)
- Add a clarification phrase: "fees approximately 30–50% lower" where this claim appears
- Request verification from the placement or admin team before the 30-day re-audit
- If actual fee comparison data is available and the range is different, apply the Data Update Comparison Report protocol before changing the figure

---

### Risk 6 — Competitor Content Improvement

**Risk:** PSG or Rathinam may improve their own digital content in response to increased competition, further widening the authority gap.

**Probability:** Low in the short term — established institutions rarely move fast on digital optimization.

**Mitigation:** This plan focuses on content angles (affordable alternative, IT pipeline) that PSG and Rathinam cannot easily adopt — they cannot claim to be "affordable alternatives to themselves." JKKN's differentiation strategy is structurally defensible.

---

## 7. Rollback Plan

### What Can Go Wrong and How to Revert

| Change | Risk of Breaking | Rollback Action |
|--------|-----------------|----------------|
| Step 1.1 — AI citation paragraph added | Low — additive HTML change | Remove the citation paragraph JSX block; redeploy |
| Step 1.2 — FAQ answers rewritten | Low — text edit in data array | Restore original FAQ answer text from git history; redeploy |
| Step 2.2 — H2 heading changed in cost section | Medium — changes visible heading on page | Revert H2 to original text from git history |
| Step 3.1 — SpeakableSpecification schema added | Very Low — JSON-LD only, invisible to users | Remove the schema script tag; redeploy |
| Step 3.2 — CollegeOrUniversity schema enhanced | Low — schema only | Restore previous JSON-LD from git history |
| Step 3.3 — HowTo schema added | Very Low — additive schema | Remove HowTo script tag; redeploy |
| Step 3.5 — CourseSchema description updated | Low — schema only | Restore previous description from git history |
| Step 2.4 — Meta description updated | Very Low — meta tag only | Restore original meta description text |
| Step 2.1 — IT corridor section added | Low — additive new section | Remove the new JSX section block; redeploy |
| Step 2.7 — Internal links added | Low — additive links | Remove added link elements; redeploy |

### General Rollback Protocol

1. All changes to `src/app/coimbatore/page.tsx` are tracked in git. Run `git log src/app/coimbatore/page.tsx` to see change history.
2. For any step that causes unexpected visual breakage, run `git diff HEAD~1 src/app/coimbatore/page.tsx` to see exactly what changed.
3. Run `git revert [commit-hash]` for the specific commit to undo a single step without losing other steps.
4. Do not use `git reset --hard` — this risks losing all changes including steps that are working correctly.
5. After any revert, re-run Google Rich Results Test and visual check on desktop and mobile (320px, 768px, 1024px) to confirm restoration.

### One Fix, One Commit Rule

Per the project Bug Fix Rules (CLAUDE.md Section 10, Rule 5): each step should be a separate git commit. This ensures any single step can be reverted without affecting others. Do not bundle multiple steps into a single commit.

---

## 8. Success Criteria

### 30-Day Targets (Minimum Acceptable)

| Metric | Baseline | 30-Day Minimum | Status Check |
|--------|---------|---------------|-------------|
| AEO score | 25/100 | 45/100 | Re-audit per Step 4.2 |
| Page indexed in Google | Unknown | Yes — confirmed in GSC | GSC URL Inspection |
| AI citation block live on page | No | Yes | Browser View Source |
| FAQ answers ≤29 words | 0/10 compliant | 10/10 compliant | Manual word count |
| SpeakableSpecification schema | No | Yes | schema.org validator |
| CollegeOrUniversity schema: sameAs present | No | Yes | Rich Results Test |
| HowTo schema | No | Yes | Rich Results Test |
| IT corridor section live | No | Yes | Browser check |
| Meta description updated | No | Yes | View Source |
| GSC Coimbatore impressions | Baseline TBD | Any positive impressions | GSC export |

### 90-Day Targets

| Metric | 90-Day Target |
|--------|--------------|
| Google ranking — "affordable arts college near coimbatore" | Top 10 |
| Google ranking — "bca college near coimbatore" | Top 10 |
| Featured snippet wins | 1 (long-tail "near Coimbatore" variant) |
| PAA appearances | 3–4 for target questions |
| AI Overview mentions (manual check) | 1 — for "affordable near Coimbatore" query |
| AEO score | 60/100 |
| Organic sessions to /coimbatore | +40% vs Day 0 baseline |

### 180-Day Targets

| Metric | 180-Day Target |
|--------|---------------|
| Google ranking — head term | Top 15 (realistic long-term) |
| Google ranking — "affordable arts college near coimbatore" | Top 5 |
| Featured snippet wins | 2–3 low-competition variants |
| PAA appearances | 5–6 for target questions |
| AI Overview mentions | 2–3 across affordable + IT pipeline angles |
| AEO score | 70/100 |
| Organic sessions to /coimbatore | +80% vs Day 0 baseline |

### Failure Threshold — Escalate to Review

If at the 30-day re-audit (Step 4.2) ANY of the following are true, escalate to a full technical review before continuing:

- Page is still not indexed in Google despite "Request Indexing" in Week 1
- GSC shows zero impressions for any Coimbatore-related query after 30 days
- AEO score is below 40/100 after all Phase 1 steps are deployed
- AI citation block is not appearing in rendered HTML (View Source check)

### What This Plan Does Not Promise

- Position 1 on "best arts and science college in coimbatore" — this is not achievable in the short or medium term against PSG and Rathinam with their physical presence and institutional authority
- Google Local Pack (3-pack) inclusion — JKKN CAS at 105 km cannot appear in the Coimbatore local 3-pack
- Immediate traffic spike — Coimbatore AEO gains will be gradual, 60–90 days minimum for measurable organic change

---

*Spec Reference: `aeo/coimbatore/coimbatore-aeo-spec.md` (Version 1.0, 2026-03-28)*
*Plan File: `aeo/coimbatore/coimbatore-aeo-plan.md`*
*Source File: `src/app/coimbatore/page.tsx`*
