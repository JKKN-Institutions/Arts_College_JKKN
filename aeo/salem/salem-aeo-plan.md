# AEO Implementation Plan — JKKN CAS Salem City Page

**Institution:** JKKN College of Arts and Science (cas.jkkn.ac.in)
**Page URL:** https://cas.jkkn.ac.in/salem
**Source Spec:** `D:\JKKN Institutions\Arts\Arts_College_JKKN\aeo\salem\salem-aeo-spec.md`
**Plan Version:** 1.0
**Date Generated:** 2026-03-28
**Primary File:** `src/app/salem/page.tsx`

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Phase 1 — Critical Fixes (P0)](#2-phase-1--critical-fixes-p0)
3. [Phase 2 — Content Optimization (P1)](#3-phase-2--content-optimization-p1)
4. [Phase 3 — Schema and Technical (P2)](#4-phase-3--schema-and-technical-p2)
5. [Phase 4 — Monitoring (P3)](#5-phase-4--monitoring-p3)
6. [Timeline with Dependencies](#6-timeline-with-dependencies)
7. [Success Metrics Per Step](#7-success-metrics-per-step)
8. [Resource Requirements](#8-resource-requirements)
9. [Risk Assessment](#9-risk-assessment)
10. [Rollback Plan](#10-rollback-plan)
11. [Success Criteria](#11-success-criteria)

---

## 1. Executive Summary

### AEO Score

| Metric | Value |
|--------|-------|
| **Current AEO Score** | 23 / 100 (Early Stage) |
| **Target Score — 3 months post-indexing** | 45 / 100 |
| **Target Score — 12 months** | 65 / 100 |
| **Decision Gate** | C — Long-Term Play |

### Why the Score Is Low (23/100)

The page has a structural foundation (FAQSchema, BreadcrumbSchema, canonical, 10 FAQs) but fails on 5 of 6 AEO dimensions:

- **Schema (7/20):** CollegeOrUniversity schema is present but missing `@id`, `telephone`, `foundingDate`, and `sameAs`. No LocalBusiness, SpeakableSpecification, or WebPage schema.
- **Content Quality (5/20):** No dedicated snippet-optimised paragraphs. FAQ answers are verbose (40–72 words each; target is ≤29).
- **PAA Readiness (4/15):** 10 FAQs exist but none are structured for voice extraction at ≤29 words.
- **E-E-A-T (3/15):** NAAC badge present but no founding year, no author attribution, no external authority links, testimonials hidden.
- **Page Authority (2/15):** Page is **not indexed**. No backlinks. Old domain still listed on tamilnaducolleges.org.
- **Voice and AI Readiness (2/15):** No SpeakableSpecification schema. FAQ answers too long. No citability signals.

### Critical Blocker

**12 instances of incorrect distance data (45 km) must be corrected to ~58 km before the page is submitted for indexing.** AI systems extract factual data for snippets. Wrong distance = wrong snippet = trust damage that is difficult to reverse.

### Task Summary

| Phase | Priority | Steps | Estimated Effort |
|-------|----------|-------|-----------------|
| Phase 1: Critical Fixes | P0 | 4 steps | 1.5 hours |
| Phase 2: Content Optimization | P1 | 4 steps | 3–4 hours |
| Phase 3: Schema and Technical | P2 | 3 steps | 2 hours |
| Phase 4: Monitoring | P3 | 3 steps | 1 hour |
| **Total** | | **14 steps** | **~8 hours** |

---

## 2. Phase 1 — Critical Fixes (P0)

> These steps are **blockers**. Do not submit the page to Google Search Console for indexing until all P0 steps are complete. Deploying incorrect factual data creates irreversible trust damage with AI citation systems.

---

### Step 1.1 — Distance Correction (45 km → ~58 km)

**Priority:** P0 — Blocker
**Estimated effort:** 15–20 minutes
**File:** `src/app/salem/page.tsx`

#### What to Fix

Replace all 12 instances of incorrect distance data. Each instance is a separate string — do not use global find-replace blindly. Verify each change in context.

| Bug ID | Line | Current Value | Correct Value |
|--------|------|---------------|---------------|
| BUG-01 | 43 | Meta description: `"45 km from Salem"` | `"~58 km from Salem"` |
| BUG-02 | 57–58 | OG description: `"45 km from Salem"` | `"~58 km from Salem"` |
| BUG-03 | 74 | Twitter description: `"45 km from Salem"` | `"~58 km from Salem"` |
| BUG-04 | 221 | Hero stat card: `"45km FROM SALEM"` | `"~58km FROM SALEM"` |
| BUG-05 | 283 | Distance display card: `"45 km"` | `"~58 km"` |
| BUG-06 | 806 | Route header: `"40-50 km • 50-60 minutes"` | `"~58 km • 60-70 minutes"` |
| BUG-07 | 355 | Why choose section: `"40-50 km from Salem"` | `"~58 km from Salem"` |
| BUG-08 | 829 | Railway station: `"~45 km from campus"` | `"~58 km from campus"` |
| BUG-09 | 86 | FAQ Q2 answer: `"approximately 40-50 km...50-60 minutes"` | `"approximately 58 km...60-70 minutes"` |
| BUG-10 | 160 | CourseSchema B.Sc description: `"45 km from Salem"` | `"~58 km from Salem"` |
| BUG-11 | 176 | CourseSchema BBA description: `"45 km from Salem"` | `"~58 km from Salem"` |
| BUG-12 | — | External: tamilnaducolleges.org listing | See Step 1.4 |

#### Verification After Fix

After editing `page.tsx`, run a search within the file for these strings to confirm zero remaining instances:
- `"45 km"` — should return 0 results
- `"45km"` — should return 0 results
- `"40-50 km"` — should return 0 results
- `"50-60 minutes"` in the route header context — should return 0 results

Use `Grep` in the project root:
```
pattern: "45 km|45km|40-50 km"
path: src/app/salem/page.tsx
```

#### Acceptance Criterion
Zero instances of `45 km`, `45km`, or `40-50 km` remain in `src/app/salem/page.tsx`.

---

### Step 1.2 — Meta Description Distance Fix and Enhancement

**Priority:** P0 — Blocker (meta tags directly feed AI extraction and search snippets)
**Estimated effort:** 10 minutes
**File:** `src/app/salem/page.tsx`, lines 41–80

#### Current vs. Recommended Values

| Tag | Current (Buggy) | Recommended (Fixed) | Char Count |
|-----|-----------------|---------------------|-----------|
| Meta description | `"JKKN CAS — 45 km from Salem via NH-544..."` | `"JKKN CAS — top arts and science college accessible from Salem (~58 km via NH-544). NAAC-accredited, BCA, BBA, B.Com, B.Sc. Admissions 2026-27."` | 143 chars ✓ |
| OG description | `"JKKN CAS — 45 km from Salem..."` | `"JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. BCA, BBA, B.Com, B.Sc. Admissions open 2026-27."` | 112 chars ✓ |
| Twitter description | `"JKKN CAS — 45 km from Salem..."` | `"JKKN CAS — ~58 km from Salem. NAAC-accredited, 80%+ placements. Admissions open 2026-27."` | 90 chars ✓ |

**Note on meta title:** Current title `"Best Arts and Science College Near Salem | JKKN CAS"` (55 chars) is correct and does not need changes.

**Note on "near Erode" bug:** Confirmed ABSENT from `src/app/salem/page.tsx`. No fix required in this file. Other city pages should be audited separately.

#### Acceptance Criterion
All three description tags contain `~58 km` and zero instances of `45 km`. Character counts verified within limits (title ≤60, description ≤155).

---

### Step 1.3 — Sitemap and Indexing Verification

**Priority:** P0 — Blocker (page is currently not indexed — zero SERP presence)
**Estimated effort:** 20–30 minutes
**Tools:** Google Search Console, Next.js sitemap config

#### Actions

**Step 1.3a — Verify /salem is in sitemap**
Check `src/app/sitemap.ts` or `public/sitemap.xml` (whichever is used in this Next.js project):
- Confirm `https://cas.jkkn.ac.in/salem` is listed
- If missing, add it with `priority: 0.8` and `changefreq: "monthly"`
- File path to check: `src/app/sitemap.ts` (App Router convention for Next.js 16.x)

**Step 1.3b — Verify robots.txt does not block /salem**
Check `public/robots.txt`:
- Confirm no `Disallow: /salem` or `Disallow: /` rule blocking the page
- File path: `public/robots.txt`

**Step 1.3c — Submit to Google Search Console after Phase 1 is fully deployed**
- Go to GSC → URL Inspection → enter `https://cas.jkkn.ac.in/salem`
- Click "Request Indexing"
- Do this ONLY after Steps 1.1, 1.2, and 1.3a/b are deployed live

**Step 1.3d — Submit to Bing Webmaster Tools**
- Log into Bing Webmaster Tools for cas.jkkn.ac.in
- Submit `/salem` URL for indexing
- Bing AI (Copilot) uses Bing index for citations

#### Acceptance Criterion
Page appears in GSC Coverage report as "Submitted and indexed" within 7–14 days of submission. GSC URL Inspection shows "URL is on Google."

---

### Step 1.4 — Old Domain Redirect Verification and External Directory Fix

**Priority:** P0 (external trust signal — affects authority and domain consistency)
**Estimated effort:** 30 minutes
**Affects:** tamilnaducolleges.org listing, domain authority chain

#### Sub-Step 1.4a — Verify old domain redirect is live

The old domain `www.arts.jkkn.ac.in` must redirect (301) to `cas.jkkn.ac.in`. Without this:
- Link equity from tamilnaducolleges.org and other directories pointing to the old domain is lost
- AI crawlers may cite the old URL or treat it as a separate entity

**How to verify:**
```bash
curl -I http://www.arts.jkkn.ac.in
```
Expected response: `HTTP/1.1 301 Moved Permanently` → `Location: https://cas.jkkn.ac.in/`

If the redirect is not in place, escalate to the hosting team (DigitalOcean) to configure a server-level 301 redirect.

#### Sub-Step 1.4b — Contact tamilnaducolleges.org for domain update

tamilnaducolleges.org currently holds the list snippet for "arts college in Salem" and lists JKKN CAS under the old domain `www.arts.jkkn.ac.in`. This must be corrected to `cas.jkkn.ac.in`.

**Action:** Send a domain update request to tamilnaducolleges.org:
- Find their contact/update form or email on the website
- Request: Update JKKN College of Arts and Science listing URL from `www.arts.jkkn.ac.in` to `https://cas.jkkn.ac.in`
- Include the correct page URL for Salem: `https://cas.jkkn.ac.in/salem`

**Why this matters:** tamilnaducolleges.org currently holds the featured snippet for "arts college in Salem." Fixing the listing ensures any traffic or citation authority flows to the correct domain.

#### Acceptance Criterion
`curl -I http://www.arts.jkkn.ac.in` returns 301 to `cas.jkkn.ac.in`. tamilnaducolleges.org listing updated to `cas.jkkn.ac.in` (verify monthly until confirmed).

---

## 3. Phase 2 — Content Optimization (P1)

> Phase 2 begins after all Phase 1 steps are deployed. These steps improve AEO snippet capture potential, PAA appearances, and AI citation readiness.

---

### Step 2.1 — Featured Snippet Content Blocks

**Priority:** P1 — High
**Estimated effort:** 45 minutes
**File:** `src/app/salem/page.tsx`

Add four new content blocks to the page targeting specific snippet formats. Each block must be inserted at the recommended location with the correct heading tag. Do not alter surrounding sections — these are additive insertions only.

#### Block 1 — Primary Paragraph Snippet

**Insert location:** Below hero section, above the distance stat card (approximately line 210 area)
**Target heading:** `<h2>Arts and Science College Near Salem — JKKN CAS</h2>`
**CSS class to add to the paragraph:** `aeo-snippet-primary` (required for SpeakableSpecification schema in Step 3.1)

Content to insert (52 words — do not shorten):
```
JKKN College of Arts and Science (JKKN CAS) is a NAAC-accredited arts and science
college located approximately 58 km from Salem via NH-544. It offers 34 UG, PG, and
Ph.D programmes including BCA, BBA, B.Com, and B.Sc. Affiliated to Periyar University
and Bharathiar University, the college has 80%+ placement rate with recruiters including
TCS, Infosys BPO, and HDFC Bank.
```

#### Block 2 — Distance Answer Paragraph Snippet

**Insert location:** Distance section, above the route/map card (approximately line 280 area)
**Target heading:** `<h2>Distance from Salem to JKKN CAS</h2>`
**CSS class to add to the paragraph:** `aeo-distance-answer`

Content to insert (40 words):
```
JKKN College of Arts and Science is approximately 58 km from Salem city, which takes
60 to 70 minutes by road via NH-544 (Salem–Coimbatore Highway). TNSTC buses from
Salem New Bus Stand to Komarapalayam run every 15–20 minutes throughout the day.
```

#### Block 3 — List Snippet for Programmes

**Insert location:** Programmes section, above the programme cards grid (approximately line 380 area)
**Target heading:** `<h2>UG Programmes Available Near Salem at JKKN CAS</h2>`

Content to insert (unordered list, 8 items):
```
Popular UG programmes at JKKN CAS accessible from Salem:
- BCA (Bachelor of Computer Applications) — 3 years, 10+2 with Maths
- BBA (Bachelor of Business Administration) — 3 years, any stream
- B.Com (Bachelor of Commerce) — 3 years, Commerce preferred
- B.Sc Computer Science — 3 years, Science stream
- B.Sc AI and Data Science — 3 years, Science stream
- B.Sc Microbiology — 3 years, Biology stream
- B.A. English — 3 years, any stream
- B.A. History — 3 years, any stream
```

#### Block 4 — Comparison Table Snippet

**Insert location:** Why Choose section, below the feature cards (approximately line 340 area)
**Target heading:** `<h2>JKKN CAS vs Salem City Colleges — Key Comparison</h2>`

Content to insert (table format):

| Feature | JKKN CAS (~58 km from Salem) | Typical Salem City College |
|---------|------------------------------|---------------------------|
| Accreditation | NAAC Accredited | Varies |
| Distance from Salem | ~58 km via NH-544 | 0 km (in city) |
| Fee Level | 30–50% lower than city colleges | Higher (metro cost) |
| Campus Type | 50+ acre green campus | Urban / smaller campus |
| Hostel | Available (boys + girls) | Limited / city PG |
| Placement Rate | 80%+ | Varies |
| Programmes | 34 (UG + PG + Ph.D) | Varies |
| Transport | College bus from Salem | Own arrangement |

#### Acceptance Criterion
All 4 blocks are live on the page. Verify with Google Rich Results Test that FAQSchema and the snippet paragraphs render correctly. Confirm CSS classes `aeo-snippet-primary` and `aeo-distance-answer` are applied to the correct elements.

---

### Step 2.2 — PAA Q&A Rewrite (Voice-Optimised, ≤29 Words)

**Priority:** P1 — High
**Estimated effort:** 30 minutes
**File:** `src/app/salem/page.tsx`, FAQ section (lines ~80–128)

Current FAQ answers exceed the ≤29 word target for voice extraction. 7 of 10 answers must be rewritten. 3 FAQs (Q7, Q8, Q10) need minor trimming only.

#### Rewrite Instructions

Replace the answer string for each FAQ in the `faqs` array or FAQ component props. Do not change the question text — only the answer. The FAQSchema component at line 128 reads from these answers, so changes here automatically update the schema output.

| FAQ | Action | New Answer (verified ≤29 words) |
|-----|--------|---------------------------------|
| Q1 — best arts college near Salem | REWRITE | JKKN College of Arts and Science — NAAC-accredited, 58 km from Salem via NH-544 — is a top-rated option with 34 programmes and 80%+ placement rate. |
| Q2 — how far is JKKN CAS from Salem | REWRITE | JKKN CAS is approximately 58 km from Salem via NH-544, taking 60–70 minutes by road. |
| Q3 — popular courses | REWRITE | JKKN CAS offers BCA, BBA, B.Com, B.Sc (multiple specialisations), MCA, M.Com, M.Sc, and Ph.D — 34 programmes total across aided and self-finance streams. |
| Q5 — fees | TRIM | JKKN CAS fees are 30–50% lower than city-based private colleges. Government scholarships (BC, MBC, SC, ST) are available. Contact +91 9345855001 for the current fee structure. |
| Q6 — hostel | REWRITE | Yes. JKKN CAS provides separate hostels for boys and girls with mess, WiFi, and 24/7 security. College buses also connect Salem. |
| Q8 — direct bus | REWRITE | Yes. TNSTC government buses from Salem New Bus Stand to Komarapalayam run every 15–20 minutes via NH-544, reaching the campus in under 70 minutes. |
| Q9 — hostel cost | TRIM | Hostel fees are significantly lower than Salem city PG rates. Mess, WiFi, and security are included. Contact the admissions office for exact annual rates. |
| Q10 — why JKKN | TRIM | JKKN CAS offers NAAC accreditation, 34 programmes, 80%+ placement, lower fees than city colleges, and a 50+ acre green campus with hostel — all ~58 km from Salem. |

**FAQs that pass without changes:**
- Q4 (BCA jobs) — 60 words, trimming optional (target ≤40 words)
- Q7 (apply) — 28 words — PASS
- Q10 partially passes if trimmed as shown above

#### FAQ voice CSS class

Add class `faq-answer-voice` to each FAQ answer element (the `<p>` or `<div>` containing the answer text). This class is referenced in the SpeakableSpecification schema (Step 3.1). If the FAQ component renders answer text via a prop, add `className="faq-answer-voice"` to the answer wrapper.

#### Acceptance Criterion
All rewritten answers are ≤40 words (target ≤29 for Q1, Q2, Q3, Q5, Q6, Q8). FAQSchema in Rich Results Test shows all 10 questions. `faq-answer-voice` class present on all answer elements in browser DOM.

---

### Step 2.3 — AI Citation Paragraphs

**Priority:** P1 — High
**Estimated effort:** 20–30 minutes
**File:** `src/app/salem/page.tsx`

Insert 5 self-contained, factual paragraphs that are optimised for extraction by ChatGPT, Gemini, Perplexity, and Google AI Overview. These blocks must be present in the rendered HTML (not hidden or client-side only). Each paragraph targets a distinct AI query type.

Insert all 5 blocks as a new section titled "About JKKN CAS — Quick Facts" placed between the hero section and the programmes section. Wrap each block in a `<p>` tag with appropriate context heading.

#### Block A — Identity and Location (for AI Overview)

```
JKKN College of Arts and Science (JKKN CAS) is a NAAC-accredited institution located at
Natarajapuram, Komarapalayam, Namakkal District, Tamil Nadu — approximately 58 km from Salem
city via NH-544 (Salem–Coimbatore Highway). Established under the JKKN Group (founded 1952),
the college is affiliated to Periyar University and Bharathiar University and approved by UGC.
```

#### Block B — Programmes (for programme-related AI queries)

```
JKKN CAS offers 34 programmes across aided and self-finance streams, including BCA, BBA, B.Com,
B.A. (English, History), B.Sc (Chemistry, Mathematics, Zoology, Physics, Microbiology, Computer
Science, AI and Data Science, Cyber Security, Visual Communication, Textile and Fashion Design),
MCA, M.Com, M.Sc, M.A., and Ph.D programmes in Chemistry, Tamil, and Zoology.
```

#### Block C — Placements (for placement-related AI queries)

```
JKKN CAS maintains an 80%+ placement rate. Campus recruiters include TCS, Infosys BPO, HDFC
Bank, ICICI Bank, Amazon, Flipkart, and Jio. The college provides placement training, aptitude
coaching, and mock interviews. Graduates are employed across IT, banking, finance, and retail
sectors.
```

#### Block D — Accessibility from Salem (for distance/transport AI queries)

```
Students from Salem can reach JKKN CAS by taking TNSTC government buses from Salem New Bus
Stand towards Komarapalayam via NH-544. Buses run every 15–20 minutes. Journey time is
approximately 60–70 minutes. The college also operates its own transport service for hostellers.
Separate hostel facilities with mess, WiFi, and security are available for boys and girls.
```

#### Block E — Why JKKN Over City Colleges (for comparison AI queries)

```
Compared to arts and science colleges located within Salem city, JKKN CAS offers lower fees
(30–50% less than city-based private colleges), a spacious green campus of 50+ acres, smaller
class sizes with personalised faculty attention, and equivalent placement outcomes. Salem students
have the option to commute daily or use the on-campus hostel at lower cost than city PG
accommodations.
```

#### Acceptance Criterion
All 5 blocks render in the page HTML source (view-source or Inspect). No block is wrapped in `{false && ...}` or hidden via CSS `display: none`. Each paragraph is crawlable by Googlebot.

---

### Step 2.4 — E-E-A-T Signals

**Priority:** P1 — High
**Estimated effort:** 30–45 minutes
**File:** `src/app/salem/page.tsx`

#### Action 2.4a — Add founding year to hero section (HIGH priority)

Locate the hero stat cards section (approximately line 218–230). Add or update a stat card to display:
- Label: `YEARS OF EXCELLENCE`
- Value: `74+`
- Sub-label: `Founded 1952`

If a stat card slot is unavailable, add the founding year as a trust bar line: `"Founded in 1952 — 74 years of excellence"` below the hero headline.

#### Action 2.4b — Add content author attribution (MEDIUM priority)

Add a small attribution line near the top of the page or in the page footer area:
```html
<p class="text-sm text-gray-500 mt-2">
  Page reviewed by JKKN CAS Admissions Office —
  <time datetime="2026-03-28">March 2026</time>
</p>
```

This line provides a citability signal for AI systems. It does not need to be prominent — a subtle footer placement is sufficient.

#### Action 2.4c — Add external authority links (HIGH priority)

In the trust bar or accreditation section (approximately line 265–280 area), convert the plain text "UGC" and "NAAC" badges into anchor links:

```html
<a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer">UGC Approved</a>
<a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer">NAAC Accredited</a>
```

Also add a link to the Periyar University affiliation page in the affiliation mention (approximately line 271–273):
```html
<a href="https://www.periyaruniversity.ac.in/" target="_blank" rel="noopener noreferrer">Periyar University</a>
```

#### Action 2.4d — Add structured address element (MEDIUM priority)

Add an `<address>` element to the page footer area or contact section:
```html
<address>
  JKKN College of Arts and Science,
  Natarajapuram, NH-544, Komarapalayam,
  Namakkal District, Tamil Nadu — 638183
  <a href="tel:+919345855001">+91 9345855001</a>
</address>
```

#### Action 2.4e — Fix programme count stat ambiguity (P0-level content fix)

At line 222, the hero stat card shows `"4 PROGRAMMES"`. This refers to featured programmes, but the page also states `"All 34 Programmes"` at line 477. This is ambiguous to AI crawlers.

Change the hero stat to either:
- `"34 PROGRAMMES"` with sub-label `"UG + PG + Ph.D"` — recommended for clarity
- Or `"4 POPULAR PROGRAMMES"` — if the intent is to highlight only the 4 featured cards

#### Acceptance Criterion
Page shows founding year (1952 / 74+). Author attribution line present in HTML. UGC and NAAC badges are anchor links with correct hrefs. `<address>` element present in footer. Programme count stat is unambiguous.

---

## 4. Phase 3 — Schema and Technical (P2)

> Phase 3 can begin in parallel with Phase 2 but should be deployed after Phase 1 is complete.

---

### Step 3.1 — Enhanced JSON-LD Schema (Full Replacement)

**Priority:** P2 — Medium-High
**Estimated effort:** 45–60 minutes
**File:** `src/app/salem/page.tsx`, lines 131–189 (inline schema blocks)

Replace the existing partial inline schema with the complete versions from the spec. Four schema blocks must be present on this page.

#### Schema Block 1 — CollegeOrUniversity (Replace existing at lines 131–157)

The current schema is missing `@id`, `telephone`, `foundingDate`, and `sameAs`. Replace the entire block with:

```json
{
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
    { "@type": "City", "name": "Salem", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
    { "@type": "City", "name": "Erode", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
    { "@type": "City", "name": "Namakkal", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } }
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
}
```

#### Schema Block 2 — LocalBusiness (New — add after CollegeOrUniversity block)

```json
{
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
  "areaServed": { "@type": "City", "name": "Salem" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "hasMap": "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7"
}
```

#### Schema Block 3 — WebPage with SpeakableSpecification (New — add after LocalBusiness)

```json
{
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
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".aeo-snippet-primary", ".aeo-distance-answer", ".faq-answer-voice"]
  }
}
```

#### Schema Block 4 — Updated CourseSchema (Fix distance in all 4 descriptions)

For each of the 4 CourseSchema components at lines 158–189, make two changes:
1. Replace `"45 km from Salem"` with `"~58 km from Salem"` in the description string
2. Add a `provider` property linking back to the CollegeOrUniversity `@id`:

```json
"provider": {
  "@type": "CollegeOrUniversity",
  "@id": "https://cas.jkkn.ac.in/#organization",
  "name": "JKKN College of Arts and Science"
}
```

Also add `"educationalCredentialAwarded"` to each course:
- B.Sc: `"Bachelor of Science"`
- B.Com: `"Bachelor of Commerce"`
- BBA: `"Bachelor of Business Administration"`
- BCA: `"Bachelor of Computer Applications"`

#### Verification

After deploying schema changes, validate using:
- **Google Rich Results Test:** `https://search.google.com/test/rich-results` → enter `https://cas.jkkn.ac.in/salem`
- **Schema Markup Validator:** `https://validator.schema.org/` → paste each JSON-LD block
- Confirm: FAQPage, BreadcrumbList, CollegeOrUniversity, LocalBusiness, WebPage all show "Valid"
- Confirm: No critical errors, no missing required properties

#### Acceptance Criterion
Rich Results Test shows 0 errors for FAQPage and CollegeOrUniversity schema. All 4 schema types detected. `SpeakableSpecification` cssSelector references valid CSS classes present in rendered DOM.

---

### Step 3.2 — Internal Linking Additions

**Priority:** P2 — Medium
**Estimated effort:** 20 minutes
**File:** `src/app/salem/page.tsx`

#### Outbound links to add from Salem page

Add the following 4 internal links at the specified sections. Do not alter existing links — these are additive only.

| Link Target | Anchor Text | Insert At |
|-------------|-------------|-----------|
| `/facilities` | `"modern labs, digital library, and campus facilities"` | Campus Facilities section (approximately line 868 area) — wrap existing text reference with link |
| `/placements` | `"80%+ placement rate"` | Placement section (approximately line 607 area) — convert existing stat text to link |
| `/admissions` | `"admission process"` | Admission section H2 heading area (approximately line 667) |
| `/departments` | `"28 departments across arts, science, and commerce"` | Programmes section intro paragraph |

#### Inbound links to add from other pages (separate task)

These changes require editing other page files. Treat as a separate implementation task:

| Source File | Anchor Text to Add | Link to |
|-------------|-------------------|---------|
| `src/app/page.tsx` (Homepage) | `"Arts and Science College Near Salem"` | `/salem` |
| `src/app/erode/page.tsx` | `"Salem students — see our Salem city page"` | `/salem` |
| `src/app/programmes/self-finance/ug/bca/page.tsx` | `"BCA accessible from Salem"` | `/salem` |
| `src/app/programmes/self-finance/ug/bba/page.tsx` | `"BBA accessible from Salem"` | `/salem` |

#### Anchor text improvement for existing programme links

Current links in the featured programme cards (lines 395, 404, 413, 422) use generic anchor text `"View Programme Details →"`. If these are linkable components, update to keyword-rich anchor text:

| Programme | Current Anchor | Improved Anchor |
|-----------|----------------|-----------------|
| B.Sc | `"View Programme Details →"` | `"B.Sc Programme Details — Near Salem"` |
| B.Com | `"View Programme Details →"` | `"B.Com Course Details at JKKN CAS"` |
| BBA | `"View Programme Details →"` | `"BBA Admission — JKKN CAS Near Salem"` |
| BCA | `"View Programme Details →"` | `"BCA Course at JKKN CAS — 58 km from Salem"` |

**Note:** Only update anchor text if the link component accepts a custom `aria-label` or text prop. Do not modify the shared `ProgrammePage` template component — override at the Salem page call site only.

#### Acceptance Criterion
4 new outbound links present in rendered HTML. Anchor text matches keyword targets. Inbound links from homepage and /erode page verified in browser navigation.

---

### Step 3.3 — Voice Search Optimization (SpeakableSpecification CSS Classes)

**Priority:** P2 — Medium
**Estimated effort:** 15 minutes
**File:** `src/app/salem/page.tsx`

The SpeakableSpecification schema added in Step 3.1 references three CSS class selectors. These classes must be present in the rendered HTML for the schema to work correctly.

#### Required CSS classes and their target elements

| CSS Class | Apply To | Description |
|-----------|----------|-------------|
| `aeo-snippet-primary` | The paragraph in Block 1 (Step 2.1) — primary identity paragraph | Tells voice assistants this is the primary page summary |
| `aeo-distance-answer` | The paragraph in Block 2 (Step 2.1) — distance answer paragraph | Tells voice assistants this answers "how far" queries |
| `faq-answer-voice` | Every FAQ answer element (the `<p>` or `<div>` containing each answer) | Marks all FAQ answers as speakable |

#### Implementation

These classes are purely semantic — they carry no visual styling. Add them to the `className` prop of the relevant JSX elements:

```tsx
// Block 1 paragraph
<p className="aeo-snippet-primary text-lg text-gray-700 mb-4">
  JKKN College of Arts and Science (JKKN CAS) is a NAAC-accredited...
</p>

// Block 2 paragraph
<p className="aeo-distance-answer text-base text-gray-700 mb-4">
  JKKN College of Arts and Science is approximately 58 km...
</p>

// FAQ answer wrapper (repeat for each FAQ)
<div className="faq-answer-voice prose prose-sm">
  {faqAnswer}
</div>
```

**Note:** Do not add these classes inside the FAQSchema component itself — only add them to the visible rendered HTML elements.

#### Acceptance Criterion
Browser DevTools → Elements panel shows `.aeo-snippet-primary`, `.aeo-distance-answer`, and `.faq-answer-voice` (10 instances) in the DOM. SpeakableSpecification schema references match live DOM selectors.

---

## 5. Phase 4 — Monitoring (P3)

> Phase 4 is ongoing. Set up monitoring immediately after Phase 1 deployment and maintain through the 12-month target window.

---

### Step 4.1 — Validation Checklist (Post-Deployment)

**Priority:** P3 — Monitoring
**Estimated effort:** 30 minutes
**Timing:** Run within 48 hours of each phase deployment

#### Validation checklist — run after Phase 1

- [ ] Zero instances of `"45 km"` or `"40-50 km"` in `src/app/salem/page.tsx` (Grep verification)
- [ ] Meta description contains `"~58 km"` — verify in browser `<head>` source
- [ ] OG and Twitter descriptions contain `"~58 km"` — verify in view-source
- [ ] `https://cas.jkkn.ac.in/salem` appears in sitemap.xml (check `https://cas.jkkn.ac.in/sitemap.xml`)
- [ ] `robots.txt` does not block `/salem` (check `https://cas.jkkn.ac.in/robots.txt`)
- [ ] `curl -I http://www.arts.jkkn.ac.in` returns 301 redirect to cas.jkkn.ac.in
- [ ] GSC URL Inspection submitted for `https://cas.jkkn.ac.in/salem`

#### Validation checklist — run after Phase 2

- [ ] 4 new content blocks visible in page HTML source
- [ ] `aeo-snippet-primary` class present in rendered DOM
- [ ] `aeo-distance-answer` class present in rendered DOM
- [ ] `faq-answer-voice` class present on FAQ answer elements
- [ ] FAQ Q1–Q3, Q5, Q6, Q8 answers are ≤40 words (count manually or via word counter)
- [ ] AI citation paragraphs (Blocks A–E) visible in page source — not hidden
- [ ] Founding year (1952 / 74+) visible in hero or trust bar
- [ ] UGC link → `https://www.ugc.ac.in/` opens correctly
- [ ] NAAC link → `https://www.naac.gov.in/` opens correctly

#### Validation checklist — run after Phase 3

- [ ] Google Rich Results Test: FAQPage — Valid (0 errors)
- [ ] Google Rich Results Test: CollegeOrUniversity — Detected and valid
- [ ] Schema Markup Validator: LocalBusiness schema — Valid
- [ ] Schema Markup Validator: WebPage schema — Valid, SpeakableSpecification present
- [ ] CourseSchema descriptions contain `"58 km"` — verify in Rich Results Test output
- [ ] 4 new outbound internal links present in rendered HTML
- [ ] Homepage links to `/salem` — verify in navigation or body
- [ ] `/erode` page links to `/salem` — verify

---

### Step 4.2 — Monitoring Setup

**Priority:** P3 — Monitoring
**Estimated effort:** 30 minutes (initial setup)
**Ongoing:** Weekly GSC checks, monthly SERP and AI checks

#### KPI Baseline and Targets

| KPI | Baseline (2026-03-28) | 3-Month Target | 12-Month Target |
|-----|----------------------|----------------|-----------------|
| GSC indexing status | Not indexed | Indexed | Indexed |
| SERP rank — "arts and science college near salem" | Not ranked | Top 20 | Top 10 |
| SERP rank — "arts and science college in salem" | Not ranked | Top 30 | Top 15 |
| Featured snippet — "arts college near salem" | Not captured | PAA appearance | Snippet capture |
| PAA appearances | 0 | 2–3 boxes | 5+ boxes |
| Google AI Overview citation | Not cited | 1 citation | 2–3 citations |
| Organic clicks from Salem queries (GSC) | 0 clicks/month | 20–50/month | 100–200/month |
| GBP impressions (Salem area) | Unverified baseline | +20% | +50% |
| AEO Score | 23/100 | 45/100 | 65/100 |
| tamilnaducolleges.org — correct domain listed | No (old domain) | Corrected | Maintained |

#### Monitoring tools and schedule

| Tool | What to Check | Frequency |
|------|---------------|-----------|
| Google Search Console | Impressions, clicks, avg position, indexing status for /salem | Weekly |
| Google Search Console | URL Inspection — confirm indexed status | After each deployment |
| Google Search (incognito) | Live SERP for "arts and science college near salem" | Monthly |
| Google Search (incognito) | Check for AI Overview appearance | Monthly |
| Google Rich Results Test | Re-validate schema after any page edits | After each schema edit |
| tamilnaducolleges.org | Verify cas.jkkn.ac.in listed (not old domain) | Monthly until corrected |
| ChatGPT / Perplexity / Gemini | Manual query: "arts college near Salem Tamil Nadu" | Quarterly |
| Bing Webmaster Tools | Impressions, indexing for /salem | Monthly |

#### GBP actions for Salem coverage

These actions require access to the JKKN CAS Google Business Profile (`maps.app.goo.gl/ya6SAYhWUBQWSvXe7`):

| Action | Notes |
|--------|-------|
| Add Salem as a served area | Update GBP → Service areas → add Salem |
| Set website URL to /salem page | GBP website button → `https://cas.jkkn.ac.in/salem` |
| Create a Salem-focused GBP post | Content: "Students from Salem — 58 km via NH-544, buses every 15 min, NAAC-accredited campus" |
| Add top 5 PAA questions to GBP Q&A | Pre-populate: distance, bus availability, hostel, fees, affiliation |
| Upload NH-544 / campus gate photo | Geo-tagged photo showing the highway approach to campus |

---

### Step 4.3 — 30-Day Review

**Priority:** P3 — Monitoring
**Timing:** 30 days after Phase 1 deployment
**Estimated effort:** 1 hour for first review

#### 30-day review checklist

- [ ] **Indexing confirmed:** GSC shows `https://cas.jkkn.ac.in/salem` as Indexed. If not indexed after 30 days → check for crawl errors in GSC Coverage report → investigate robots.txt, canonical, noindex tags.
- [ ] **First impressions in GSC:** Any data in GSC Performance report for /salem? Even 1–5 impressions is a positive signal.
- [ ] **Old domain redirect working:** Confirm with `curl -I http://www.arts.jkkn.ac.in` — still returning 301.
- [ ] **tamilnaducolleges.org update confirmed:** Check the listing manually. If still showing old domain, follow up with a second correction request.
- [ ] **Schema still valid:** Quick re-run of Rich Results Test. Deployments can sometimes break schema if JSX is refactored.
- [ ] **AI citation paragraphs still live:** Confirm Blocks A–E are in page source — no accidental `{false && ...}` wrapping introduced.
- [ ] **Review triggers check:** Has any competitor (Sona CAS) launched new "near Salem" content? → If yes, escalate to competitive content gap analysis.

#### Review trigger actions

| Trigger | Immediate Action |
|---------|-----------------|
| GSC shows 0 impressions after 4 weeks post-indexing | Check crawl errors; verify canonical; inspect robots.txt; resubmit URL |
| AI Overview pulls incorrect distance (45 km) | Emergency re-grep distance fix; GSC cache invalidation request; resubmit URL |
| Sona CAS launches "near Salem" content targeting JKKN's long-tail | Expand comparison table; add more PAA blocks for programme-specific queries |
| New competitor enters top 5 for "college near Salem" | Run competitive gap analysis; identify missing content angles |

---

## 6. Timeline with Dependencies

| Step | Phase | Action | Depends On | Estimated Duration | Cumulative |
|------|-------|--------|-----------|-------------------|-----------|
| 1.1 | P0 | Distance correction (12 instances in page.tsx) | None — first action | 20 min | 20 min |
| 1.2 | P0 | Meta description fix and enhancement | Step 1.1 (verify 45 km gone) | 10 min | 30 min |
| 1.3a | P0 | Sitemap verification | Step 1.1 complete | 10 min | 40 min |
| 1.3b | P0 | robots.txt verification | Step 1.3a | 5 min | 45 min |
| **DEPLOY Phase 1a** | — | Deploy Step 1.1 + 1.2 to production | Steps 1.1, 1.2 | 10 min | 55 min |
| 1.3c | P0 | GSC indexing request | Phase 1a deployed live | 5 min | 60 min |
| 1.3d | P0 | Bing Webmaster Tools submission | Phase 1a deployed live | 10 min | 70 min |
| 1.4a | P0 | Old domain redirect verification | Independent | 15 min | 85 min |
| 1.4b | P0 | tamilnaducolleges.org domain correction request | Step 1.4a confirmed | 20 min | 105 min |
| 2.1 | P1 | 4 featured snippet content blocks added | Steps 1.1 + 1.2 complete | 45 min | 150 min |
| 2.2 | P1 | FAQ rewrites (7 of 10 answers) + CSS classes | Step 2.1 (CSS class names needed) | 30 min | 180 min |
| 2.3 | P1 | AI citation paragraphs (5 blocks) | Step 2.1 (section structure) | 30 min | 210 min |
| 2.4 | P1 | E-E-A-T signals (founding year, links, address) | Independent | 45 min | 255 min |
| **DEPLOY Phase 2** | — | Deploy all Phase 2 changes | Steps 2.1–2.4 complete | 10 min | 265 min |
| 3.1 | P2 | Full schema replacement (4 schema types) | Step 2.2 (CSS classes must exist first) | 60 min | 325 min |
| 3.2 | P2 | Internal linking additions | Step 2.1 (section headings exist) | 20 min | 345 min |
| 3.3 | P2 | Voice CSS class verification | Steps 2.1 + 2.2 complete | 15 min | 360 min |
| **DEPLOY Phase 3** | — | Deploy all Phase 3 changes | Steps 3.1–3.3 complete | 10 min | 370 min |
| 4.1 | P3 | Post-deployment validation checklist | Phase 3 deployed | 30 min | 400 min |
| 4.2 | P3 | Monitoring setup (GSC, GBP, tracking table) | Page indexed | 30 min | 430 min |
| 4.3 | P3 | 30-day review | 30 days post Phase 1 deployment | 60 min | Ongoing |

**Total implementation time (excluding 30-day review):** ~7–8 hours across phases

**Critical path:** Step 1.1 → Step 1.2 → Deploy → Step 1.3c (GSC submission). Everything else can proceed in parallel after Phase 1 deployment.

---

## 7. Success Metrics Per Step

| Step | Measurable Outcome | Verification Method |
|------|-------------------|---------------------|
| 1.1 | Zero instances of "45 km" or "40-50 km" in page.tsx | Grep `src/app/salem/page.tsx` for pattern |
| 1.2 | Meta description contains "~58 km"; all 3 description tags updated | view-source on live URL |
| 1.3a | `/salem` URL present in sitemap.xml | Open `https://cas.jkkn.ac.in/sitemap.xml` |
| 1.3b | robots.txt shows no Disallow for /salem | Open `https://cas.jkkn.ac.in/robots.txt` |
| 1.3c | GSC URL Inspection shows "Submitted and Indexed" within 14 days | GSC → URL Inspection |
| 1.3d | Bing Webmaster Tools shows /salem submitted | Bing WMT dashboard |
| 1.4a | `curl -I http://www.arts.jkkn.ac.in` returns 301 | Terminal command |
| 1.4b | tamilnaducolleges.org listing shows cas.jkkn.ac.in | Manual check on site |
| 2.1 | 4 content blocks in page HTML source; CSS classes present | browser DevTools → Elements |
| 2.2 | 7 rewritten FAQ answers ≤40 words; `faq-answer-voice` class on all 10 | Word count + DevTools |
| 2.3 | 5 AI citation paragraphs in HTML source; none hidden | view-source on live URL |
| 2.4 | Founding year visible; UGC + NAAC + Periyar links correct; address element present | Visual + DevTools check |
| 3.1 | Rich Results Test: FAQPage + CollegeOrUniversity = Valid; LocalBusiness + WebPage detected | Google Rich Results Test |
| 3.2 | 4 new internal links in rendered HTML | DevTools → Inspector, check hrefs |
| 3.3 | `.aeo-snippet-primary`, `.aeo-distance-answer`, `.faq-answer-voice` present in DOM | DevTools → Elements |
| 4.1 | All post-deployment validation checklist items pass | Manual checklist run |
| 4.2 | GSC Performance report showing data for /salem; GBP served area includes Salem | GSC + GBP dashboard |
| 4.3 | Page indexed; first impressions in GSC; no schema errors; old domain redirect live | GSC + Rich Results Test |

---

## 8. Resource Requirements

### Tools

| Tool | Purpose | Access Required |
|------|---------|----------------|
| Google Search Console | URL Inspection, Coverage, Performance | Admin access to cas.jkkn.ac.in GSC property |
| Google Rich Results Test | Schema validation after Phase 3 | Public tool — no login needed |
| Schema.org Validator | JSON-LD syntax check | Public tool — no login needed |
| Bing Webmaster Tools | Bing indexing submission | Admin access to cas.jkkn.ac.in Bing WMT |
| Google Business Profile | GBP served area and post updates | GBP manager access for JKKN CAS listing |
| Terminal / curl | Old domain redirect verification | Developer access |
| Browser DevTools | DOM and CSS class verification | Any browser |

### Code Access

| File | Access Needed | Purpose |
|------|---------------|---------|
| `src/app/salem/page.tsx` | Read + Write | All Phase 1–3 changes |
| `src/app/sitemap.ts` | Read (+ Write if /salem missing) | Sitemap verification |
| `public/robots.txt` | Read | robots.txt verification |
| `src/app/page.tsx` (Homepage) | Read + Write | Inbound link addition (Step 3.2) |
| `src/app/erode/page.tsx` | Read + Write | Inbound link addition (Step 3.2) |
| `src/app/programmes/self-finance/ug/bca/page.tsx` | Read + Write | Inbound link addition (Step 3.2) |
| `src/app/programmes/self-finance/ug/bba/page.tsx` | Read + Write | Inbound link addition (Step 3.2) |

### Content

| Content Item | Status | Action If Missing |
|--------------|--------|-----------------|
| 5 AI citation paragraphs (Blocks A–E) | Ready — in spec Section 10.2 | Copy directly from spec |
| 10 PAA rewritten answers | Ready — in spec Section 9 | Copy directly from spec |
| 4 snippet content blocks | Ready — in spec Section 8 | Copy directly from spec |
| Complete CollegeOrUniversity schema JSON | Ready — in spec Section 14.2 | Copy directly from spec |
| LocalBusiness schema JSON | Ready — in spec Section 14.3 | Copy directly from spec |
| WebPage + SpeakableSpecification schema JSON | Ready — in spec Section 14.4 | Copy directly from spec |
| Real student testimonials (2–3) | NOT READY — not available | Collect from admissions office before enabling testimonials section |
| NAAC grade confirmation (A or A+) | UNVERIFIED | Get admin confirmation before adding grade to page |

### Admin Confirmations Needed (before publishing)

| Data Point | Why Needed | Who to Ask |
|------------|-----------|------------|
| NAAC grade (A or A+) | Cannot publish specific grade without confirmation | JKKN CAS Principal / Admin office |
| CAS-specific placement rate | Currently using group rate 80%+ | Placement cell |
| CAS-specific highest salary (5–7 LPA) | Currently marked [UNVERIFIED] | Placement cell |
| Campus size in acres (50+ acres) | FAQ answer uses this — needs confirmation | Campus administration |
| Hostel capacity and exact fees | FAQ Q9 mentions hostel cost | Hostel / Student services |

---

## 9. Risk Assessment

### Salem-Specific Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| **Sona CAS dominance** — Sona CAS is physically inside Salem city with exact keyword title match. It will rank above JKKN CAS for "arts and science college in Salem" regardless of AEO improvements. | HIGH | HIGH | Accept this risk. Do not target position 1 for "in Salem." Focus on "near Salem," programme-specific long-tail, and PAA/AI Overview slots where geographic proximity is less deterministic. |
| **58 km distance barrier** — Salem users searching for a college "in Salem" expect a physically local result. ~58 km is a real commute that some users will reject. | HIGH | MEDIUM | Reframe the distance as an advantage: less expensive city PG, quieter campus, lower fees. The comparison table (Step 2.1 Block 4) directly addresses this objection. |
| **Indexing delay** — Google may take 2–6 weeks (or longer) to index a new URL with low domain authority. | MEDIUM | MEDIUM | Submit to both GSC and Bing Webmaster Tools immediately after Phase 1 deployment. Ensure sitemap is clean and no robots.txt blocks exist. Internal links from the homepage (Step 3.2) will accelerate Googlebot discovery. |
| **AI Overview incorrect distance citation** — If Google's AI Overview caches the page before the distance fix is deployed, it may cite "45 km" in AI-generated answers. This is difficult to correct quickly. | MEDIUM | HIGH | This is why Steps 1.1 and 1.2 are P0 blockers. Never submit to GSC before the distance fix is deployed. If AI Overview already shows wrong data, use GSC URL Inspection → Request Re-indexing to force a re-crawl. |
| **tamilnaducolleges.org slow response** — The directory may take weeks or months to update the domain listing. | MEDIUM | MEDIUM | Submit the correction request early (Step 1.4b). Follow up monthly. In the interim, the 301 redirect (Step 1.4a) ensures link equity flows correctly. |
| **Old domain 301 redirect not configured** — If the server-level 301 redirect from `www.arts.jkkn.ac.in` is not in place, link equity from all directories is lost. | MEDIUM | HIGH | Verify the redirect before any other steps (Step 1.4a). If not configured, escalate to the DigitalOcean hosting team immediately. This is not a code change — it is a server/DNS configuration. |
| **Schema CSS class mismatch** — SpeakableSpecification references `.aeo-snippet-primary`, `.aeo-distance-answer`, `.faq-answer-voice`. If these classes are not present in rendered HTML, the schema is non-functional. | LOW-MEDIUM | MEDIUM | Step 3.3 is dedicated to verifying these classes are in the DOM. Run validation after Phase 2 and Phase 3 deployments. |
| **Unverified data published** — Highest salary (5–7 LPA), campus acres (50+), NAAC grade are currently marked [UNVERIFIED]. If published without confirmation, they create a content credibility risk. | MEDIUM | HIGH | Flag each unverified stat in the page code with a comment. Do not add NAAC grade until confirmed. For salary data, use the qualified statement "up to 5–7 LPA" rather than a definitive claim. |

---

## 10. Rollback Plan

If any deployment causes a regression (broken layout, missing content, schema errors), follow this rollback sequence:

### Phase 1 Rollback (Distance fixes + meta tags)

- **What could go wrong:** Incorrect string replacement causes broken JSX or missing content
- **How to detect:** Visual check of live page immediately after deployment
- **Rollback action:** Git revert the commit for `src/app/salem/page.tsx` to the previous version
  ```bash
  git log --oneline src/app/salem/page.tsx   # find last good commit hash
  git revert <commit-hash>                    # create a new revert commit
  ```
- **Priority:** Immediate — Phase 1 includes meta tag changes that affect GSC and AI extraction

### Phase 2 Rollback (Content blocks + FAQ rewrites)

- **What could go wrong:** New content blocks break page layout; FAQ component fails to render rewritten answers
- **How to detect:** Check page visually on mobile (320px) and desktop (1280px); run Rich Results Test
- **Rollback action:** Git revert Phase 2 commit. The content additions are all self-contained JSX blocks — reverting will not affect Phase 1 changes if committed separately.
- **Rule:** One commit per phase (or per step if possible) to enable surgical rollback

### Phase 3 Rollback (Schema replacement)

- **What could go wrong:** Malformed JSON-LD causes Rich Results Test errors; replacing inline schema removes a working schema type
- **How to detect:** Run Rich Results Test immediately after Phase 3 deployment
- **Rollback action:** Git revert Phase 3 commit. The existing FAQSchema and BreadcrumbSchema components are not modified — only the inline schema blocks at lines 131–189 are replaced.
- **Backup action:** Before replacing inline schema in Step 3.1, save the original block to a comment at the bottom of the file: `{/* ORIGINAL SCHEMA BACKUP — remove after validation: ... */}`

### Schema-Specific Rollback

If Rich Results Test shows errors after schema replacement:
1. Do not deploy to production with schema errors
2. Validate each schema block individually at `https://validator.schema.org/`
3. Fix the specific block that fails validation
4. Re-test before redeployment

### Emergency: AI Overview shows incorrect data

If Google AI Overview caches incorrect distance data despite the fix:
1. Run GSC URL Inspection → Request Re-indexing
2. Wait 48–72 hours for re-crawl
3. If still incorrect after 7 days, submit a Google feedback report via the AI Overview feedback button (if available on the SERP)

---

## 11. Success Criteria

Implementation is considered successful when all criteria in the table below are met. Criteria are grouped by phase to allow incremental sign-off.

### Phase 1 Success Criteria (P0 — Blockers)

| Criterion | Target | How to Verify |
|-----------|--------|---------------|
| All 12 distance instances corrected | Zero instances of "45 km" or "40-50 km" in page.tsx | Grep verification |
| Meta/OG/Twitter descriptions updated | All 3 contain "~58 km" | view-source |
| /salem URL in sitemap | Present at cas.jkkn.ac.in/sitemap.xml | Browser check |
| robots.txt clean | No Disallow for /salem | Browser check |
| GSC indexing submitted | URL Inspection shows "Submitted" | GSC dashboard |
| Old domain redirect live | 301 from www.arts.jkkn.ac.in | curl verification |
| tamilnaducolleges.org domain updated | cas.jkkn.ac.in listed (not old domain) | Manual check |

### Phase 2 Success Criteria (P1 — Content)

| Criterion | Target | How to Verify |
|-----------|--------|---------------|
| Primary snippet block present | Block 1 in HTML source with `.aeo-snippet-primary` class | DevTools + view-source |
| Distance answer block present | Block 2 in HTML source with `.aeo-distance-answer` class | DevTools + view-source |
| List snippet present | Programme list (Block 3) in HTML | view-source |
| Comparison table present | Table (Block 4) in rendered HTML | Visual + view-source |
| FAQ voice rewrites complete | 7 of 10 answers ≤40 words; all 10 have `.faq-answer-voice` class | Word count + DevTools |
| AI citation paragraphs live | All 5 blocks (A–E) in page source; none hidden | view-source |
| Founding year visible | "1952" or "74+" in hero or trust bar | Visual check |
| External authority links correct | UGC, NAAC, Periyar University links with correct hrefs | Browser link check |

### Phase 3 Success Criteria (P2 — Schema and Technical)

| Criterion | Target | How to Verify |
|-----------|--------|---------------|
| CollegeOrUniversity schema valid | Rich Results Test: 0 errors, all required fields present | Google Rich Results Test |
| LocalBusiness schema valid | Schema Markup Validator: valid | schema.org validator |
| WebPage schema valid | Detected by Rich Results Test | Google Rich Results Test |
| SpeakableSpecification references match DOM | CSS selectors in schema match live DOM elements | DevTools |
| CourseSchema distance corrected | No "45 km" in CourseSchema descriptions | Rich Results Test output |
| Internal links added | 4 outbound links + 2 inbound links (homepage, /erode) | Browser + DevTools |

### 30-Day Target (after Phase 1 deployment)

| KPI | Target |
|-----|--------|
| GSC indexing status | Indexed |
| GSC impressions for /salem | > 0 impressions |
| Schema validation status | 0 errors across all schema types |
| Old domain redirect status | 301 confirmed live |

### 3-Month Target (post-indexing)

| KPI | Target |
|-----|--------|
| AEO Score | 45 / 100 |
| SERP rank — "arts and science college near salem" | Top 20 |
| PAA appearances | 2–3 PAA boxes |
| Organic clicks (GSC) | 20–50/month |

### 12-Month Target

| KPI | Target |
|-----|--------|
| AEO Score | 65 / 100 |
| SERP rank — "arts and science college near salem" | Top 10 |
| SERP rank — "arts and science college in salem" | Top 15 |
| Featured snippet | Captured for at least 1 long-tail variant |
| PAA appearances | 5+ PAA boxes |
| Google AI Overview citation | 2–3 citations |
| Organic clicks (GSC) | 100–200/month |

---

*Plan generated: 2026-03-28 | Source spec: `D:\JKKN Institutions\Arts\Arts_College_JKKN\aeo\salem\salem-aeo-spec.md` | AEO Score: 23/100 → Target: 45/100 (3 months) → 65/100 (12 months) | Primary file: `src/app/salem/page.tsx`*
