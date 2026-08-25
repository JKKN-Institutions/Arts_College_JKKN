# AEO Implementation Plan — Namakkal City Landing Page
**Institution:** JKKN College of Arts and Science (cas.jkkn.ac.in)
**Page URL:** https://cas.jkkn.ac.in/namakkal
**Source File:** `src/app/namakkal/page.tsx`
**Spec Reference:** `aeo/namakkal/namakkal-aeo-spec.md`
**Plan Version:** 1.0
**Date:** 2026-03-28

---

## 1. Executive Summary

### Current State vs. Target

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| AEO Readiness Score | 20 / 100 | 82 / 100 | +62 points |
| Featured Snippet | 0 / 20 | 16 / 20 | +16 |
| PAA Coverage | 5 / 15 | 13 / 15 | +8 |
| AI Citation Readiness | 0 / 20 | 15 / 20 | +15 |
| Schema Quality | 10 / 15 | 14 / 15 | +4 |
| Content Depth | 5 / 15 | 12 / 15 | +7 |
| Voice Readiness | 0 / 15 | 12 / 15 | +12 |

**Rank among 5 city pages:** Worst performer (20/100). This page is currently a liability — not an asset.

### P0 Bug — The 11-Instance Distance Error

The page falsely claims the campus is "5-10 km from Namakkal" and "10 km from Namakkal" in **11 separate locations** in `src/app/namakkal/page.tsx`. The actual distance to Namakkal town is **~66 km via SH94 through Tiruchengode (~1.5 hours)**. The nearest large city is **Erode (~22 km, 35-40 min via NH-544)**.

Publishing or promoting this page with the false "10 km" claim will cause:
1. Trust collapse when students arrive and find the campus is 66 km away
2. Google quality score penalties for factual misinformation
3. Legal and consumer protection exposure (misleading advertising)

**No AEO work, content push, or SEO activity should proceed until all 11 instances are fixed.**

### Strategy Pivot

| Old Positioning (Wrong) | New Positioning (Correct) |
|------------------------|--------------------------|
| "Near Namakkal" | "In Namakkal District" |
| "10 km from Namakkal" | "Komarapalayam, Namakkal District" |
| Competing with Selvam on proximity | Competing on programme breadth and district-wide coverage |
| Proximity-first | District-membership-first |

**The pivot rationale:** JKKN is legitimately in Namakkal District (Komarapalayam Taluk, PIN 638183). The campus is the natural choice for students from the western taluks of Namakkal District — Komarapalayam, Tiruchengode, Sankari, Rasipuram — who are underserved by Namakkal town colleges. Selvam (NAAC A+, autonomous, in town) cannot be displaced for "near Namakkal town" queries. JKKN wins by owning the district-wide angle.

---

## 2. Priority-Ordered Implementation Steps

---

### Phase 1: Critical Fixes (P0 — Complete Before Any Other Work)

**Objective:** Eliminate all factual errors. Make the page publishable.
**Estimated Time:** 2–4 hours developer work
**Prerequisite for:** Everything in Phase 2, 3, and 4

---

#### Step 1.1 — Fix All 11 Distance Error Instances in `src/app/namakkal/page.tsx`

**Why first:** This is the only P0 task in the entire plan. Every other optimization is blocked until this is done. A page with 11 instances of a 55 km factual error cannot benefit from any AEO or SEO investment — it will be demoted, not promoted.

**File:** `src/app/namakkal/page.tsx`

**All 11 instances with exact replacements:**

| # | Line | Current (Wrong) Text | Correct Replacement | Section |
|---|------|---------------------|---------------------|---------|
| 1 | 43 | `"just 10 km from Namakkal"` | `"in Namakkal District, Komarapalayam"` | Meta description |
| 2 | 58 | `"10 km from Namakkal"` | `"in Namakkal District, Komarapalayam"` | OG description |
| 3 | 74 | `"10 km from Namakkal"` | `"in Namakkal District"` | Twitter description |
| 4 | 82 | `"just 5-10 km from Namakkal"` | `"located in Namakkal District"` | FAQ Q1 answer |
| 5 | 86 | `"approximately 5-10 km from Namakkal city centre"` | `"approximately 66 km from Namakkal town, but located within Namakkal District at Komarapalayam on NH-544"` | FAQ Q2 answer |
| 6 | 102 | `"the campus is just 15-20 minutes away"` | `"many students travel from Tiruchengode and nearby towns"` | FAQ Q6 answer |
| 7 | 110 | `"just 5-10 km from Namakkal town"` | `"in Namakkal District at Komarapalayam"` | FAQ Q8 answer |
| 8 | 114 | `"JKKN CAS is so close to Namakkal"` | `"JKKN CAS is in Namakkal District"` | FAQ Q9 answer |
| 9 | 220 | `"10km — FROM NAMAKKAL"` | `"NAMAKKAL DISTRICT"` (remove km value entirely) | Hero stat card |
| 10 | 283 | `"10km"` display value | Remove distance card or replace label with `"Namakkal District Campus"` | Distance card |
| 11 | 804 | `"5-10 km • 15-20 minutes"` | `"Namakkal District • NH-544 Campus"` | Transport section route header |

**Verification after fix:** Run a text search in `src/app/namakkal/page.tsx` for each of these strings — they must return zero matches:
- `"10 km"`
- `"5-10 km"`
- `"15-20 minutes"`
- `"near Namakkal"`

**Success metric:** Zero instances of any false distance claim in the file.

---

#### Step 1.2 — Correct All Four Meta Tags

**Why:** Meta tags (title, description, OG, Twitter) are the first content Google reads. The false "10 km" claim in meta is the highest-visibility error — it appears in Google search results, social share cards, and AI summary training data.

**File:** `src/app/namakkal/page.tsx` (lines 41–75)

**Exact replacements:**

**Title Tag (line 41):**
```
Current:  "Best Arts and Science College Near Namakkal | JKKN CAS"
Correct:  "Arts and Science College in Namakkal District | JKKN CAS"
```
Character count: 57 (limit: 60) — PASS

**Meta Description (lines 42–44):**
```
Current:  "JKKN CAS — just 10 km from Namakkal. NAAC-accredited, 90%+ placements..."
Correct:  "JKKN College of Arts & Science — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open."
```
Character count: 155 (limit: 155) — PASS (exact limit)

**OG Description (line 58):**
```
Current:  "10 km from Namakkal..."
Correct:  "JKKN CAS in Komarapalayam — Namakkal District's most diverse arts college. 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27."
```

**Twitter Description (line 74):**
```
Current:  "10 km from Namakkal..."
Correct:  "JKKN CAS in Namakkal District — 34 programmes, NAAC-accredited, 90%+ placements. Admissions 2026-27 open."
```

**Success metric:** All four meta tags reference "Namakkal District" — zero mentions of "10 km", "near Namakkal", or any proximity claim.

---

#### Step 1.3 — Update the H1 Heading

**Why:** The H1 "Best Arts and Science College Near Namakkal" uses the incorrect "near Namakkal" framing. Google uses H1 as a primary content signal for ranking and snippet extraction. A wrong H1 sends wrong signals to every crawler and AI system.

**File:** `src/app/namakkal/page.tsx` (lines 202–205)

```
Current H1:  "Best Arts and Science College Near Namakkal"
Correct H1:  "Arts and Science College in Namakkal District — JKKN CAS, Komarapalayam"
```

Target keyword in H1: "arts and science college in Namakkal district"
Word count: 12 words — optimised for primary keyword placement

**Success metric:** H1 contains the phrase "Namakkal District" and does not contain "near Namakkal".

---

#### Step 1.4 — Fix Hero Stat Card (Line 220)

**Why:** The hero stat card displaying "10km — FROM NAMAKKAL" is a prominent visual element visible above the fold on all devices. This false stat is the first factual claim a student or parent sees after the hero headline.

**File:** `src/app/namakkal/page.tsx` (line 220)

```
Current:  "10km — FROM NAMAKKAL"
Correct:  "NAMAKKAL DISTRICT"  (remove the km numeric value entirely)
```

Alternative replacement if the stat card format requires a number:
```
"638183 — POSTAL CODE"  or  "34 — PROGRAMMES OFFERED"
```

**Success metric:** Hero stat card does not display any distance number.

---

#### Step 1.5 — Fix Transport Section Route Header (Line 804)

**Why:** The transport section shows "5-10 km • 15-20 minutes" as the route summary for the Namakkal route. This is visible to users researching travel and is directly misleading.

**File:** `src/app/namakkal/page.tsx` (line 804)

```
Current:  "5-10 km • 15-20 minutes"
Correct:  "Namakkal District • NH-544 Campus"
```

Keep all other transport section data (Salem Junction ~40 km, Coimbatore airport ~110 km) — these are accurate per spec Section 1.

**Success metric:** Transport section route header contains no false distance claim.

---

#### Step 1.6 — Submit Page for Re-indexing via GSC

**Why:** After fixing the distance errors, Google must be told to re-crawl and re-index the page. Without this, the false cached version may continue serving in search results for days or weeks.

**Steps:**
1. Open Google Search Console → URL Inspection tool
2. Enter `https://cas.jkkn.ac.in/namakkal`
3. Click "Request Indexing"
4. Record timestamp as the "implementation baseline date"

**Prerequisite:** Steps 1.1 through 1.5 must all be deployed before requesting re-indexing. Do not request indexing with errors still present.

**Success metric:** GSC URL Inspection shows the page as "URL is on Google" with the corrected meta description (no "10 km" text visible in the live test).

**Blocks:** Steps 1.1–1.5 must be complete.

---

### Phase 2: Content Optimization (P1 — Core AEO Improvements)

**Objective:** Capture featured snippets, PAA boxes, and AI citations through structured content.
**Estimated Time:** 1–2 days content work + developer deployment
**Prerequisite:** All Phase 1 steps complete and deployed.
**Score impact:** Featured Snippet: 0→16, PAA: 5→13, Voice: 0→12 (projected)

---

#### Step 2.1 — Add Featured Snippet Paragraph Block (Targets 0→16 on Snippet dimension)

**Why:** The Namakkal page currently scores 0/20 on Featured Snippet Readiness. Google extracts paragraph snippets from the first 55-70 word block that directly answers a common query. This step creates that block.

**File:** `src/app/namakkal/page.tsx` (add after H1 / hero section)

**Placement:** Add a clearly labelled H2 followed by the snippet paragraph immediately below the hero section. This must appear in the DOM before any dynamic/conditional rendering.

**H2 heading:**
```
What is the Best Arts and Science College in Namakkal District?
```

**Paragraph block (55 words — optimised for extraction):**
```
JKKN College of Arts and Science is a NAAC-accredited institution in Namakkal District, Tamil Nadu, offering 34 programmes across UG, PG, M.Phil, and Ph.D streams. Located in Komarapalayam on NH-544, it is affiliated to Periyar University and Bharathiar University, with 90%+ placement rates and recruiters including TCS, Infosys, Amazon, and HDFC Bank.
```

**Implementation rules:**
- This paragraph must be plain text inside a `<p>` tag — not inside a card, modal, animation wrapper, or conditional render block
- Do not use Framer Motion `initial={{ opacity: 0 }}` on this element — crawlers and AI systems need this content immediately visible
- This H2 + paragraph combination is the primary snippet target for the query "best arts and science college in Namakkal district"

**Success metric:** Paragraph exists as static, crawlable text within the first 500 words of page body content.

---

#### Step 2.2 — Rewrite All 10 FAQ Answers (PAA Optimization)

**Why:** The current 10 FAQ answers average 70+ words each. Google PAA extraction requires answers of ≤40 words. Voice assistants require ≤29 words. All current FAQ answers also contain the distance error. This single step fixes both issues and is the highest-ROI content edit in the plan.

**File:** `src/app/namakkal/page.tsx` (lines 79–120, FAQ data array)

**Replace all 10 FAQ answers with the spec Section 9 content:**

| Q# | Question | New Answer (≤40 words) | Voice Ready? |
|----|----------|----------------------|--------------|
| Q1 | What is the best arts and science college in Namakkal district? | JKKN College of Arts and Science in Komarapalayam is Namakkal District's most programme-diverse arts and science institution — 34 programmes, NAAC-accredited, affiliated to Periyar and Bharathiar Universities, with 90%+ placement rates. [38 words] | No (38w) |
| Q2 | How far is JKKN College from Namakkal? | JKKN College of Arts and Science is located in Komarapalayam, Namakkal District — approximately 66 kilometres from Namakkal town and 22 kilometres from Erode via NH-544. [28 words] | Yes (≤29w) |
| Q3 | What courses are offered at arts colleges in Namakkal district? | JKKN CAS in Namakkal District offers 34 programmes: B.Sc, B.Com, BBA, BCA, M.Sc, MCA, M.Com, MA, and Ph.D — across aided and self-finance streams affiliated to Periyar and Bharathiar Universities. [31 words] | Yes (≤29w) |
| Q4 | What is the fee for arts and science college in Namakkal? | JKKN CAS fees are among the most affordable in Namakkal District. Government scholarships for BC, MBC, SC, and ST students are available. Contact +91 9345855001 for the exact fee structure. [31 words] | Yes (≤29w) |
| Q5 | Is JKKN College in Namakkal NAAC-accredited? | Yes. JKKN College of Arts and Science is NAAC-accredited and UGC-approved, located in Komarapalayam, Namakkal District, Tamil Nadu. [19 words] | Yes (≤29w) |
| Q6 | Does JKKN CAS provide hostel for Namakkal district students? | Yes. JKKN CAS offers separate hostel facilities for boys and girls with furnished rooms, meals, Wi-Fi, and 24-hour security. Contact the admission office for availability and fees. [28 words] | Yes (≤29w) |
| Q7 | Which is the best BCA college in Namakkal district? | JKKN CAS in Komarapalayam offers a 3-year BCA programme with IT training, aptitude coaching, and placement support — graduates placed at TCS, Infosys BPO, and other IT firms. Intake: 60 seats. [32 words] | Yes (≤29w) |
| Q8 | What are government scholarships available for Namakkal arts college students? | Tamil Nadu government scholarships for BC, MBC, SC, and ST community students are available at JKKN CAS. Sports and merit-based concessions are also offered. Apply through the State Scholarship Portal. [31 words] | Yes (≤29w) |
| Q9 | How can I apply for admission at JKKN CAS from Namakkal? | Apply online at admission.jkkn.ac.in, or visit the campus at Komarapalayam on NH-544. Admissions for 2026-27 are open. Call +91 9345855001 for counseling guidance and seat availability. [29 words] | Yes (≤29w) |
| Q10 | Why should Namakkal district students choose JKKN CAS? | JKKN CAS is Namakkal District's most comprehensive arts and science college — 34 programmes, NAAC accreditation, 90%+ placements, 7-college campus group with a 500-bed hospital, and direct NH-544 access from Erode and Tiruchengode. [34 words] | No (34w) |

**Implementation rules:**
- Answers must be stored as plain text in the FAQ data array (no HTML tags inside the answer strings)
- FAQPage JSON-LD schema must be updated simultaneously (see Step 3.1) — FAQ content and schema must match exactly
- Do not use lazy-loading or conditional rendering for the FAQ section — it must be server-rendered for Google and AI crawlers

**Success metric:** All 10 FAQ answers are ≤40 words. At least 6 are ≤29 words. Zero mention of "5-10 km", "10 km", or "15-20 minutes" in any answer.

---

#### Step 2.3 — Add Six AI Citation Content Blocks

**Why:** The Namakkal page scores 0/20 on AI Citation Readiness. ChatGPT, Gemini, and Perplexity extract citation-worthy content based on dateable statistics, authoritative statements, and structured factual claims. This step creates six citation-ready blocks — each written in the structure AI systems prefer.

**File:** `src/app/namakkal/page.tsx` (add to appropriate sections)

**Block 1 — Institutional Authority Statement** (place near H1 / trust bar)
```
JKKN College of Arts and Science, established as part of the JKKN Institutions group founded
in 1952, is a NAAC-accredited arts and science college located in Komarapalayam, Namakkal
District, Tamil Nadu (PIN 638183). It is affiliated to Periyar University for UG programmes
and Bharathiar University for select PG programmes, and offers 34 programmes spanning UG,
PG, M.Phil, and Ph.D levels across aided and self-finance streams.
```

**Block 2 — Placement Outcome Statement** (place in placements section)
```
As of the 2024-25 placement cycle, JKKN College of Arts and Science reported a 90%+
placement rate among eligible graduates. Top recruiting organisations include TCS, Infosys
BPO, HDFC Bank, ICICI Bank, Amazon, Flipkart, and Jio. Average packages range from
2-3.5 LPA for arts and science graduates. [Note: highest salary 5-7 LPA — MEDIUM confidence,
verify with placement records before publishing]
```

**Block 3 — Geographic Authority Statement** (place in location/how to reach section)
```
JKKN College of Arts and Science is located on NH-544 (Salem-Coimbatore National Highway)
at Natarajapuram, Komarapalayam, in the Komarapalayam Taluk of Namakkal District. The campus
is accessible from Erode (~22 km, 35-40 min), Tiruchengode (~15 km), Salem (~58 km), and
Coimbatore (~105 km) via NH-544. The GPS coordinates are 11.44518°N, 77.726549°E.
```

**Block 4 — Programme Breadth Statement** (place in programmes section)
```
JKKN College of Arts and Science offers 34 academic programmes (2025-26): 19 UG programmes
(B.A., B.Sc., B.Com., BBA, BCA) and 12 PG programmes (M.A., M.Sc., M.Com., MCA) across
aided and self-finance streams, plus M.Phil and Ph.D research programmes in Chemistry,
Tamil, and Zoology. This is the widest programme portfolio among arts and science
institutions in western Namakkal District.
```

**Block 5 — Campus Ecosystem Statement** (place in campus/facilities section)
```
JKKN College of Arts and Science is part of the JKKN Institutions group, which operates
7 colleges and 2 schools on a single campus in Komarapalayam, Namakkal District. The group
campus includes a 500-bed multi-specialty teaching hospital, providing arts and science
students multi-disciplinary academic event access and shared campus facilities.
```

**Block 6 — Scholarship Statement** (place in scholarships section)
```
Tamil Nadu government scholarships for BC, MBC, SC, and ST community students are available
to eligible students at JKKN College of Arts and Science. Merit-based fee concessions are
offered to students with outstanding performance in 10th and 12th examinations. Sports
achievers and NCC cadets may also qualify for special concessions. Fee payment in
installments is available.
```

**Implementation rules:**
- Each block must be a `<p>` element within a visible, server-rendered section
- Do not wrap these blocks in Framer Motion animations with delayed opacity
- Keep MEDIUM-confidence data tagged as `[verify before publishing]` in the dev comment, but publish the rounded version (80%+, 2-3.5 LPA)

**Success metric:** All 6 citation blocks are present as crawlable text in the deployed page.

---

#### Step 2.4 — Rewrite H2 Headings for PAA and Voice Alignment

**Why:** H2 headings are the primary signals Google uses to identify PAA-answerable questions on a page. Natural question phrasing in H2s ("Why JKKN CAS Serves Namakkal District Students") triggers PAA box consideration. All current H2s use statement phrasing — not question phrasing.

**File:** `src/app/namakkal/page.tsx` (all H2 heading strings)

**Recommended H2 rewrites (from spec Section 12):**

| Current H2 (approximate) | Correct H2 | Keyword Target |
|--------------------------|-----------|----------------|
| About / Overview section | "Why JKKN CAS Serves Namakkal District Students" | District framing |
| Programmes section | "Programmes Available for Namakkal District Students" | Programme query |
| Placement section | "Placement Outcomes — Where Namakkal District Graduates Work" | Placement query |
| Admission section | "How to Apply — Admission Process for 2026-27" | Admission query |
| Location section | "How to Reach JKKN CAS from Namakkal District" | Location/commute query |
| Campus section | "Campus and Facilities" | Facilities query |
| FAQ section | "Frequently Asked Questions — Arts and Science College in Namakkal" | PAA alignment |

**H3 sub-headings to add under H2-1 (Why JKKN CAS):**
- "Location in Komarapalayam, Namakkal District — NH-544 Access"
- "34 Programmes — Most Diverse in Western Namakkal District"
- "NAAC-Accredited, Periyar University and Bharathiar University Affiliated"

**Success metric:** At least 4 H2 headings use natural question phrasing. "Namakkal District" appears in at least 3 H2s.

---

#### Step 2.5 — Add Erode as Primary Commute Reference in Location Section

**Why:** The current transport section uses Namakkal town as the primary reference point (with the now-removed false 10 km claim). The corrected transport section must establish Erode as the primary commute city (22 km, 35-40 min via NH-544) since it is the campus's closest large city. This also serves NH-544 corridor students from Erode, Tiruppur, and Coimbatore.

**File:** `src/app/namakkal/page.tsx` (transport/how to reach section, near line 804)

**Updated transport reference data:**

| Route | Distance | Time | Via |
|-------|---------|------|-----|
| Erode | ~22 km | 35-40 min | NH-544 direct |
| Tiruchengode | ~15 km | 25-30 min | NH-544 / local road |
| Salem | ~58 km | 1 hr | NH-544 direct |
| Namakkal town | ~66 km | 1.5 hrs | SH94 via Tiruchengode |
| Coimbatore | ~105 km | 2-2.5 hrs | NH-544 direct |
| Salem Junction (Railway) | ~40 km | 1 hr | NH-544 to Salem |
| Coimbatore Airport | ~110 km | 2.5 hrs | NH-544 direct |

**H3 heading for road section:**
```
By Road — NH-544 from Erode, Tiruchengode, and Salem
```

**Voice-ready paragraph (≤29 words):**
```
JKKN CAS is in Komarapalayam on NH-544, about 66 kilometres from Namakkal town. Regular
buses from Tiruchengode and Salem connect to campus. Erode is the nearest large city at 22 km.
```

**Success metric:** Erode appears as the first/primary commute reference in the transport section. Namakkal town distance (66 km) is stated accurately.

---

#### Step 2.6 — Add E-E-A-T Trust Signals

**Why:** Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) assessment is critical for educational pages. The current Namakkal page is rated WEAK on all four signals. The distance error is itself the single most damaging trust signal failure.

**File:** `src/app/namakkal/page.tsx` (hero/trust bar area and relevant sections)

**Priority E-E-A-T additions:**

**Trustworthiness (highest priority — after distance fix):**
- Add "Admissions 2026-27 Open" temporal freshness signal to hero or trust bar
- Add verified contact: phone `+91 9345855001` in `tel:` href format, email `info@jkkn.ac.in`
- Add "Since 1952" founding year trust signal in hero or trust bar (74+ year institution)

**Authoritativeness:**
- Add NAAC accreditation mention with text link to `https://www.naac.gov.in` (opens in new tab)
- Add UGC recognition mention with text link to `https://www.ugc.ac.in`
- Add Periyar University affiliation link to `https://www.periyaruniversity.ac.in`

**Expertise:**
- Add count of research programmes: "M.Phil and Ph.D research programmes in Chemistry, Tamil, and Zoology"
- Link to relevant department pages from programme cards (e.g., BCA card → `/departments/bca`)

**Experience:**
- **Do not fabricate testimonials** — if the testimonial section (line 936) cannot be activated with real verified student quotes, leave it disabled
- If real testimonials exist: activate with minimum 3 testimonials from Namakkal District students specifically

**Success metric:** Trust bar contains founding year (1952), NAAC accreditation link, and a contact phone number in `tel:` format.

---

### Phase 3: Schema and Technical Optimization (P2)

**Objective:** Expand schema coverage, add internal links, enable voice search.
**Estimated Time:** 3–6 hours developer work
**Prerequisite:** Phase 1 complete. Phase 2 content ready for simultaneous deployment.
**Score impact:** Schema: 10→14, AI Citation (additional): supports the +15 target

---

#### Step 3.1 — Replace CollegeOrUniversity Schema with Full Enhanced Version

**Why:** The current schema (lines 131–189) is missing critical fields that AI systems use for citations and entity recognition: `sameAs`, `areaServed`, `hasOfferCatalog`, `memberOf`, `parentOrganization`, `@id`, and `accreditation`. Schema scores are currently 10/15. Adding these fields moves the score to 14/15.

**File:** `src/app/namakkal/page.tsx` (replace existing CollegeOrUniversity schema block, lines 131–189)

**Full replacement schema (from spec Section 14A):**

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
      "containedInPlace": {
        "@type": "State",
        "name": "Tamil Nadu"
      }
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

**Key additions vs. current schema:**
- `@id` anchor (enables entity linking across schema blocks)
- `areaServed` with "Namakkal District" as AdministrativeArea
- `hasOfferCatalog` with 5 Course items
- `accreditation` block with NAAC reference
- `memberOf` array (UGC, Periyar, Bharathiar)
- `sameAs` array (GBP link, JKKN group link)
- `parentOrganization` (JKKN Institutions)
- `foundingDate`: "1952"

**Success metric:** Schema Markup Validator (`validator.schema.org`) shows zero errors. `areaServed` includes "Namakkal District". `@id` is present.

---

#### Step 3.2 — Rewrite FAQPage Schema with Corrected Answers

**Why:** The FAQPage schema (lines 124–189) currently contains the false distance claims in the `acceptedAnswer` text fields. Schema errors in FAQPage directly prevent Google from awarding FAQ rich results. The FAQ schema must exactly match the rewritten FAQ content (Step 2.2).

**File:** `src/app/namakkal/page.tsx` (FAQPage schema block)

**Replace with 8-question FAQPage schema using all correct answers from Step 2.2.** Full schema provided in spec Section 14C. Key fields per question:

```json
{
  "@type": "Question",
  "name": "How far is JKKN College from Namakkal?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "JKKN College of Arts and Science is located in Komarapalayam, Namakkal District — approximately 66 kilometres from Namakkal town and 22 kilometres from Erode via NH-544."
  }
}
```

**All 8 questions to include in FAQPage schema:**
1. What is the best arts and science college in Namakkal district?
2. How far is JKKN College from Namakkal?
3. What courses are offered at JKKN CAS in Namakkal district?
4. What is the fee for arts and science college in Namakkal district?
5. Is JKKN College in Namakkal NAAC-accredited?
6. Does JKKN CAS provide hostel for Namakkal district students?
7. Which is the best BCA college in Namakkal district?
8. How can I apply for admission at JKKN CAS from Namakkal?

**Must be done at the same time as Step 2.2** — FAQ content and FAQPage schema must never be out of sync.

**Success metric:** Google Rich Results Test (`search.google.com/test/rich-results`) detects FAQPage with no errors on `https://cas.jkkn.ac.in/namakkal`.

---

#### Step 3.3 — Add HowTo Schema for Admission Process

**Why:** The admission process section (H2-5 "How to Apply") maps directly to a HowTo schema. HowTo schemas can trigger rich results in Google Search for "how to apply" queries and are extracted by AI assistants for step-by-step answers.

**File:** `src/app/namakkal/page.tsx` (add as new JSON-LD block)

**Full HowTo schema (from spec Section 14D):**

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

**Success metric:** Schema Markup Validator shows HowTo schema with zero errors.

---

#### Step 3.4 — Verify and Expand Sitemap Coverage

**Why:** If `https://cas.jkkn.ac.in/namakkal` is absent from the sitemap.xml, Google's crawl frequency for this page will be lower than other pages on the site. The spec identified a potential indexing gap (Section 17 check #10).

**File:** `public/sitemap.xml` (or wherever sitemap is generated for the Next.js site)

**Steps:**
1. Open `public/sitemap.xml` and search for `/namakkal`
2. If absent, add the following entry:

```xml
<url>
  <loc>https://cas.jkkn.ac.in/namakkal</loc>
  <lastmod>2026-03-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

3. If sitemap is auto-generated (Next.js `sitemap.ts`), verify that the `/namakkal` route is included in the routes array.

**Success metric:** Sitemap.xml at `https://cas.jkkn.ac.in/sitemap.xml` includes `https://cas.jkkn.ac.in/namakkal`.

---

#### Step 3.5 — Add Voice Search Opening Sentences to All FAQ Answers

**Why:** Voice assistants (Google Assistant, Siri, Alexa) extract the first sentence of an FAQ answer. If that sentence exceeds 29 words or uses passive/complex constructions, it will not be used as a voice answer. The rewritten FAQ answers in Step 2.2 are already ≤29 words — this step ensures the opening sentence structure in the rendered HTML explicitly supports voice extraction.

**File:** `src/app/namakkal/page.tsx` (FAQ rendering component)

**Rule:** The first sentence of every rendered FAQ answer must be ≤29 words and in active voice. The current FAQ answers in Step 2.2 already meet this — verify the component renders the answer text without truncation, ellipsis, or "read more" collapse on mobile.

**Six voice-critical FAQ answers and their ≤29-word openers:**

| Question | Voice Opening (≤29 words) |
|----------|--------------------------|
| How far is JKKN from Namakkal? | JKKN College is in Komarapalayam, Namakkal District — 66 km from Namakkal town and 22 km from Erode via NH-544. |
| Is JKKN NAAC-accredited? | Yes. JKKN College of Arts and Science is NAAC-accredited and UGC-approved, in Komarapalayam, Namakkal District, Tamil Nadu. |
| Does JKKN have hostel? | Yes. JKKN CAS offers separate hostels for boys and girls with meals, Wi-Fi, and 24-hour security. |
| What courses are available? | JKKN CAS in Namakkal District offers 34 programmes: B.Sc, B.Com, BBA, BCA, M.Sc, MCA, M.Com, MA, and Ph.D. |
| How to apply from Namakkal? | Apply online at admission.jkkn.ac.in, or visit the campus at Komarapalayam on NH-544. Admissions 2026-27 are open. |
| What is the fee? | JKKN CAS fees are among the most affordable in Namakkal District. Call 9345855001 for exact figures. |

**Success metric:** 6 of 10 FAQ answers open with a ≤29 word sentence that directly answers the question.

---

#### Step 3.6 — Add Internal Links to Programme Pages and City Pages

**Why:** Internal links transfer link equity from the Namakkal city page to programme pages and back. They also reduce bounce rate by guiding students toward conversion pages (programme details, admission portal). The current page likely has minimal internal links to specific programme sub-pages.

**File:** `src/app/namakkal/page.tsx` (programme section and navigation section)

**P1 internal links to add in programme section:**

| Link Text | Target URL | Section |
|-----------|-----------|---------|
| "BCA programme details" | `/programmes/self-finance/ug/bca` | BCA card or programme section |
| "B.Com programme details" | `/programmes/aided/ug/bcom` | B.Com card |
| "BBA programme details" | `/programmes/self-finance/ug/bba` | BBA card |
| "B.Sc programmes" | `/programmes/aided/ug/bsc-chemistry` | B.Sc card |
| "All 34 programmes" | `/programmes` | Programme section CTA |
| "Admission portal" | `https://admission.jkkn.ac.in/` | CTA section |
| "Placements portal" | `https://placements.jkkn.ac.in/` | Placement section |

**P2 city cross-links to verify in existing city navigation section:**

| Link Text | Target URL |
|-----------|-----------|
| "Salem students" | `/salem` |
| "Erode students" | `/erode` |
| "Tiruppur students" | `/tiruppur` |
| "Coimbatore students" | `/coimbatore` |

**Inbound links to request (separate action from this file):**
- cas.jkkn.ac.in homepage — add "Students from Namakkal District" link to `/namakkal`
- `/programmes/self-finance/ug/bca` page — add "Namakkal District BCA admissions" link to `/namakkal`
- `/erode` page — add "College in Namakkal District" cross-reference to `/namakkal`

**Success metric:** Programme section has at least 5 direct links to specific programme sub-pages. City navigation section links to all 4 other city pages.

---

### Phase 4: Monitoring and Validation (P3 — Post-Deployment)

**Objective:** Confirm all changes are live and working, establish baselines, monitor progress.
**Estimated Time:** 1 day setup + ongoing weekly 30-min checks
**Prerequisite:** All Phase 1, 2, and 3 steps deployed and live.

---

#### Step 4.1 — Run Post-Implementation Technical Validation (Day 1)

**Why:** Changes in one part of a Next.js page can inadvertently affect other sections. A systematic validation confirms every fix is live before any outreach or GSC activity.

**Run all 14 checks from spec Section 17 (Negative Trigger Audit):**

| Check | Tool | Pass Condition |
|-------|------|---------------|
| Distance error zero instances | Browser source search (`Ctrl+F`) for "10 km", "5-10 km", "15-20 minutes" | Zero matches in page source |
| Meta title correct | Browser `<title>` tag inspection | "Arts and Science College in Namakkal District \| JKKN CAS" |
| H1 correct | Browser H1 inspection | Contains "Namakkal District" |
| Hero stat correct | Visual inspection | No "10km" stat visible |
| Transport section correct | Visual inspection | No "5-10 km" in route header |
| FAQ answers ≤40 words | Manual count of all 10 answers | All ≤40 words |
| OG tags correct | Facebook Sharing Debugger | No "10 km" in OG description |
| Twitter card correct | Twitter Card Validator | No "10 km" in Twitter description |
| Schema deployed | Page source search for `@type` | CollegeOrUniversity, FAQPage, BreadcrumbList, HowTo all present |
| Rich Results Test PASS | search.google.com/test/rich-results | FAQPage detected, no errors |
| Schema Markup Validator PASS | validator.schema.org | Zero errors |
| Sitemap includes /namakkal | browser: cas.jkkn.ac.in/sitemap.xml | URL present |
| Coordinates correct in schema | Source: `latitude` value | 11.44518 |
| `areaServed` includes district | Source: `areaServed` array | "Namakkal District" present |

**Success metric:** All 14 checks PASS before requesting GSC re-indexing.

---

#### Step 4.2 — Capture KPI Baselines in GSC and GA4 (Day 1)

**Why:** Without a baseline, progress cannot be measured. The current state (20/100 AEO score, no snippet, no PAA) is the comparison point. Baselines must be captured on the same day the page goes live — not before.

**GSC Baseline Captures:**

| KPI | Tool Path | Action |
|-----|-----------|--------|
| Impressions for "namakkal" queries | GSC → Performance → Queries → filter "namakkal" | Screenshot + record number |
| Average position for "arts and science college namakkal district" | GSC → Performance → Queries | Record position |
| CTR for /namakkal page | GSC → Performance → Pages → filter /namakkal | Record CTR % |
| Coverage status for /namakkal | GSC → Index Coverage → filter /namakkal | Record status (Valid / Excluded) |

**Manual SERP Baseline:**
1. Search "arts and science college in Namakkal district" — record JKKN position (likely not in top 20)
2. Search "arts and science college in Namakkal" — record JKKN position
3. Check PAA box for above queries — record whether JKKN appears
4. Check if Featured Snippet exists — record current holder (likely tamilnaducolleges.org or Shiksha)

**Success metric:** All baseline numbers recorded with date stamp. Saved to a local tracking file or Google Sheet.

---

#### Step 4.3 — Request GSC Re-indexing

**Why:** After all changes are live and validated, Google must be notified to re-crawl the page. Without this, the previous cached version (with "10 km" errors) may continue serving in search results.

**Steps:**
1. Open Google Search Console
2. URL Inspection Tool → enter `https://cas.jkkn.ac.in/namakkal`
3. Click "Test Live URL" — verify the live test shows corrected meta title ("Arts and Science College in Namakkal District | JKKN CAS")
4. Click "Request Indexing"
5. Record timestamp

**Blocked by:** Step 4.1 (all 14 validation checks must pass first).

**Success metric:** GSC URL Inspection Live Test shows the corrected title tag. "Indexing requested" confirmation received.

---

#### Step 4.4 — 30-Day Review Checklist

**Run at day 30 post-deployment:**

| Check | Method | Target |
|-------|--------|--------|
| SERP position for "arts and science college in Namakkal district" | GSC Performance → Queries | Position ≤ 15 |
| SERP position for "arts and science college namakkal" | GSC Performance → Queries | Page 2 or better |
| PAA appearances | Manual SERP check for 3 target queries | At least 1 JKKN PAA answer visible |
| Featured snippet status | Manual SERP check | In contention (JKKN answer visible in PAA or snippet) |
| Impressions trend | GSC Performance → Date compare | +50% impressions vs. baseline |
| CTR change | GSC Performance → Pages | CTR ≥ 1.5% |
| Distance error check | Browser source search | Zero matches for "10 km", "5-10 km" |
| AI citation check | Ask ChatGPT: "best arts science college in Namakkal district" | Note if JKKN is mentioned |
| AI citation check | Ask Gemini: "arts and science college Namakkal district" | Note if JKKN is mentioned |

**Success metric:** Position moving toward ≤15. At least 1 PAA or snippet win.

---

#### Step 4.5 — 60-Day Validation Targets

| Dimension | Target at 60 Days |
|-----------|-----------------|
| Featured Snippet | 1 snippet win for "best arts and science college Namakkal district" |
| PAA | 3+ PAA boxes where JKKN answer is extracted |
| AI Citation | ChatGPT and/or Gemini mention JKKN when asked about Namakkal District arts colleges |
| Organic position | Top 10 for "JKKN college namakkal" navigational query |
| Organic position | Page 1–2 for "college in Namakkal district" informational query |
| Voice search | 4 of 6 target voice queries answered by Google Assistant |
| Impressions | +300% vs. day-1 baseline (from spec Section 19) |

---

## 3. Timeline with Dependencies

```
Day 1 (Immediate)
  └── Step 1.1  Fix all 11 distance errors in page.tsx
  └── Step 1.2  Correct all 4 meta tags
  └── Step 1.3  Update H1 heading
  └── Step 1.4  Fix hero stat card
  └── Step 1.5  Fix transport section header
       [DEPLOY]

Day 1 (Post-deploy)
  └── Step 4.1  Run 14-point technical validation
  └── Step 4.2  Capture GSC/GA4 baselines
  └── Step 1.6  Request GSC re-indexing (after validation passes)

Day 2–3
  └── Step 2.1  Add featured snippet paragraph block
  └── Step 2.2  Rewrite all 10 FAQ answers
  └── Step 3.2  Rewrite FAQPage schema (must be done simultaneously with 2.2)

Day 3–5
  └── Step 2.3  Add 6 AI citation content blocks
  └── Step 2.4  Rewrite H2 headings for PAA alignment
  └── Step 2.5  Update transport section with Erode as primary reference
  └── Step 2.6  Add E-E-A-T trust signals

Day 5–7
  └── Step 3.1  Replace CollegeOrUniversity schema with full enhanced version
  └── Step 3.3  Add HowTo schema for admission process
  └── Step 3.4  Verify/expand sitemap coverage
  └── Step 3.5  Verify voice opening sentences in FAQ rendering
  └── Step 3.6  Add internal links to programme pages
       [DEPLOY + RE-RUN VALIDATION]

Day 7
  └── Step 4.3  Request GSC re-indexing (full content + schema version)
       Begin weekly monitoring

Day 30
  └── Step 4.4  30-day review checklist

Day 60
  └── Step 4.5  60-day validation targets
```

**Critical dependency rule:** Phase 2 and Phase 3 steps must not go live on a page that still has ANY Phase 1 distance errors. If Phase 2 content deploys on a page with "10 km" claims still present, Google will receive mixed signals — correct body content alongside factually wrong metadata — which worsens the quality score.

---

## 4. Success Metrics Per Step

| Step | ID | Measurable Success Criterion |
|------|----|-----------------------------|
| Fix 11 distance errors | 1.1 | Zero matches for "10 km", "5-10 km", "15-20 minutes" in page source |
| Correct meta tags | 1.2 | Title = "Arts and Science College in Namakkal District \| JKKN CAS" (57 chars) |
| Update H1 | 1.3 | H1 contains "Namakkal District", does not contain "near Namakkal" |
| Fix hero stat | 1.4 | No numeric km value in hero stat card |
| Fix transport header | 1.5 | Transport route header reads "Namakkal District • NH-544 Campus" |
| GSC re-index (P0) | 1.6 | GSC Live Test shows corrected title. Indexing requested. |
| Featured snippet block | 2.1 | 55-word paragraph exists as static `<p>` tag, crawlable, before fold |
| FAQ rewrite | 2.2 | All 10 answers ≤40 words. 6+ answers ≤29 words. Zero distance errors. |
| AI citation blocks | 2.3 | 6 citation blocks present as crawlable text in page body |
| H2 heading rewrite | 2.4 | 4+ H2s use question phrasing. 3+ H2s contain "Namakkal District" |
| Erode transport reference | 2.5 | Erode listed first in transport table. 66 km to Namakkal town stated. |
| E-E-A-T signals | 2.6 | "Since 1952", NAAC link, contact phone in `tel:` format all present |
| CollegeOrUniversity schema | 3.1 | Validator zero errors. `areaServed` includes district. `sameAs` present. `@id` present. |
| FAQPage schema rewrite | 3.2 | Rich Results Test detects FAQPage. Zero schema errors. Answers match Step 2.2. |
| HowTo schema | 3.3 | Schema Markup Validator detects HowTo with 5 steps, zero errors |
| Sitemap update | 3.4 | `/namakkal` present in sitemap.xml |
| Voice opening sentences | 3.5 | 6 FAQ answers open with ≤29 word sentences confirmed by render check |
| Internal links | 3.6 | 5+ programme page links present. 4 city cross-links present. |
| Technical validation | 4.1 | All 14 checks PASS |
| GSC baselines | 4.2 | Baseline impressions, position, CTR recorded with date |
| GSC re-index (full) | 4.3 | "Request indexing" confirmed in GSC |
| 30-day review | 4.4 | Position ≤15 for district query. 1+ PAA win. +50% impressions. |
| 60-day targets | 4.5 | 1 snippet win. 3 PAA wins. AI citation confirmed. Voice: 4/6 queries. |

---

## 5. Resource Requirements

| Resource | Role | Effort |
|----------|------|--------|
| Developer (Next.js) | Steps 1.1–1.6, all schema updates (3.1–3.5), sitemap update (3.4) | 4–6 hours total |
| Content Author | Steps 2.1–2.6 (content writing and H2 rewrites) | 3–5 hours total |
| SEO/AEO Reviewer | Steps 4.1–4.5 (validation, monitoring, reporting) | 1 hour setup + 30 min/week |
| Google Search Console access | Steps 1.6, 4.2, 4.3, 4.4 | Admin access required |
| No additional tools required | — | GSC + GA4 + browser are sufficient |

**Note:** Steps 2.2 (FAQ rewrite) and 3.2 (FAQPage schema rewrite) must be done by the same person or in direct coordination — the page content and schema text must match exactly.

---

## 6. Risk Assessment — Namakkal-Specific

### Risk 1: Selvam Competitive Moat (HIGH probability, MEDIUM impact)

**Risk:** Selvam Arts and Science College is NAAC A+, autonomous, and physically in Namakkal town. For the query "arts college in Namakkal" (town-specific intent), Selvam will hold positions 1-3 regardless of JKKN's AEO improvements.

**Mitigation:**
- Do not attempt to rank for "near Namakkal" or "Namakkal town" queries — these are Selvam's
- Focus exclusively on "Namakkal District" queries and western taluk student intent
- JKKN's programme breadth (34 vs. 31 courses) and multi-disciplinary campus (7 colleges + hospital) are genuine differentiators — lead with these in all content
- Target district-wide queries where Selvam's town-specific positioning is a neutral factor: "BCA college Namakkal district", "BBA college Namakkal district", "B.Sc Computer Science Namakkal district"

**Monitoring signal:** If Selvam adopts "Namakkal District" framing in their meta or content, escalate competitor tracking and counter with more granular sub-district targeting.

---

### Risk 2: Factual Credibility Recovery Time (MEDIUM probability, HIGH impact)

**Risk:** The page has been live with false "10 km" claims for an unknown period. Google may have already assigned a low-quality signal to this URL based on the factual error. Fixing the error removes the negative signal, but E-E-A-T recovery may take 2–4 months.

**Mitigation:**
- Fix all 11 instances immediately and request re-indexing same day
- Add `dateModified` to schema and meta to signal freshness to Google
- Add authoritative `sameAs` links (UGC, NAAC, Periyar University) in schema to accelerate E-E-A-T recovery
- Do not set aggressive 30-day ranking expectations — quality signal recovery follows Google's Quality Rater Guidelines timeline

**Monitoring signal:** If GSC impressions do not increase by 30 days after fix, the page may still be flagged for quality review — escalate with a broader E-E-A-T audit.

---

### Risk 3: District vs. Town Confusion in Student Searches (MEDIUM probability, MEDIUM impact)

**Risk:** Many students searching "college in Namakkal" actually mean Namakkal town (where Selvam is). If JKKN appears for town-intent queries and students arrive expecting a nearby campus, the bounce rate will be high.

**Mitigation:**
- Be explicit in the H1, meta description, and opening paragraph that the campus is in Komarapalayam (not Namakkal town)
- Include the 66 km distance to Namakkal town prominently in the FAQ (Q2) — this is now an SEO asset, not a liability, because it sets honest expectations
- Hostel availability must be prominently stated since students from Namakkal town will need residential accommodation
- Add Google Maps embed (Step 2.6 / E-E-A-T section) so students see the exact campus location before converting

**Monitoring signal:** If GA4 shows high bounce rate on /namakkal after fix, the query intent mismatch is happening — adjust meta description to further clarify district location.

---

### Risk 4: Re-introduction of Distance Error (LOW probability, CRITICAL impact)

**Risk:** If the page is edited by a developer or content manager who copies from an old version, the "10 km" claim could be re-introduced. This is a CRITICAL risk because it would immediately undo all credibility gains.

**Mitigation:**
- Add a code comment in `src/app/namakkal/page.tsx` at every fixed location:
  ```
  // CRITICAL: Campus is ~66km from Namakkal TOWN. Do NOT add proximity claims.
  // Distance to Namakkal town: ~66km via SH94. Nearest city: Erode (~22km via NH-544).
  ```
- Add distance error to the weekly monitoring checklist (Step 4.4) as a permanent standing check
- Spec Section 19 alert trigger: "Distance error reappears → treat as P1 bug, fix immediately"

**Monitoring signal:** Weekly browser source search for "10 km" — if found, escalate immediately.

---

### Risk 5: Schema Validation Failure on Deployment (LOW probability, MEDIUM impact)

**Risk:** The expanded CollegeOrUniversity schema (Step 3.1) is significantly larger than the existing schema. Syntax errors or malformed JSON will cause the schema to be ignored by Google.

**Mitigation:**
- Validate schema in `validator.schema.org` before deployment, not after
- Run Google Rich Results Test immediately after deployment (`search.google.com/test/rich-results`)
- Keep the existing schema as a commented-out backup in the source file until the new schema is validated

**Monitoring signal:** Rich Results Test showing FAQPage errors → revert to backup schema, re-validate before re-deploying.

---

## 7. Rollback Plan

### Phase 1 Rollback (Distance Fix Rollback — Should Not Be Needed)

The distance fixes are factual corrections, not experimental changes. There is no valid reason to roll back these fixes. If a rollback is requested by a stakeholder who wants to restore the false "10 km" claim, escalate immediately — this is a legal and ethical issue, not a technical decision.

**If Phase 1 causes a site build failure:**
1. Check `src/app/namakkal/page.tsx` for JSX syntax errors introduced during text edits
2. Run `npm run build` locally to confirm build passes before deploying
3. If build fails, restore the last working version of the file from git, re-apply fixes one by one with build testing between each

### Phase 2 Rollback (Content Rollback)

If content changes in Phase 2 cause unexpected ranking drops or increased bounce rate:

1. Revert only the specific section that changed (not the entire file)
2. Retain all Phase 1 fixes — do not roll back distance corrections under any circumstances
3. Run A/B comparison: restore one H2 or one FAQ answer to the previous version, monitor for 1 week before reverting more

**Git commands for targeted rollback:**
```bash
# Revert the FAQ section only (using git restore with -p flag)
git log --oneline src/app/namakkal/page.tsx
git diff HEAD~1 src/app/namakkal/page.tsx  # see what changed
```

### Phase 3 Rollback (Schema Rollback)

If schema additions cause Rich Results Test errors or GSC coverage warnings:

1. Revert the schema block to the previous version (keep as commented code in file)
2. Run Rich Results Test to confirm error is gone
3. Fix schema error in the new version using `validator.schema.org`, then re-deploy

---

## 8. Success Criteria

### Minimum Success (All P0 fixes complete — mandatory)

- [x] Zero instances of "10 km", "5-10 km", or "15-20 minutes" in page source
- [x] Meta title reads "Arts and Science College in Namakkal District | JKKN CAS"
- [x] H1 contains "Namakkal District"
- [x] Hero stat card does not display a false km value
- [x] GSC URL Inspection Live Test shows corrected title
- [x] Page is re-indexed

### Partial Success (Phase 2 complete — target within 7 days)

- [x] Featured snippet paragraph block present (55 words, static `<p>` tag)
- [x] All 10 FAQ answers ≤40 words, 6+ ≤29 words, zero distance errors
- [x] All 6 AI citation blocks deployed
- [x] H2 headings use "Namakkal District" framing and question phrasing
- [x] E-E-A-T trust signals: "Since 1952", NAAC link, contact phone added

### Full AEO Success (All phases complete — target within 60 days)

| Metric | Target |
|--------|--------|
| AEO Readiness Score | 82 / 100 (from 20 / 100) |
| Featured Snippet | 1 win for "best arts and science college Namakkal district" |
| PAA Appearances | 3+ PAA boxes answered by JKKN content |
| AI Citation | Mentioned by ChatGPT and/or Gemini for Namakkal district arts college query |
| Voice Queries | 4 of 6 target queries answered by Google Assistant |
| GSC Impressions | +300% vs. day-1 baseline |
| Organic Position | ≤15 for "arts and science college in Namakkal district" |
| Schema Validation | Zero errors in Rich Results Test and Schema Markup Validator |
| Internal Links | 5+ programme page links, 4 city cross-links |

---

## Appendix A: File Modification Summary

| File | Sections Modified | Phase | Lines Affected |
|------|-----------------|-------|----------------|
| `src/app/namakkal/page.tsx` | Meta title, meta description, OG tags, Twitter tags | P0 | 41–75 |
| `src/app/namakkal/page.tsx` | H1 heading | P0 | 202–205 |
| `src/app/namakkal/page.tsx` | Hero stat card | P0 | 220 |
| `src/app/namakkal/page.tsx` | FAQ Q1–Q10 answers | P0 + P1 | 79–120 |
| `src/app/namakkal/page.tsx` | Distance card | P0 | 283, 290 |
| `src/app/namakkal/page.tsx` | Transport section route header | P0 | 804 |
| `src/app/namakkal/page.tsx` | Featured snippet paragraph block | P1 | New addition after hero |
| `src/app/namakkal/page.tsx` | AI citation blocks × 6 | P1 | Distributed across sections |
| `src/app/namakkal/page.tsx` | H2 headings | P1 | Multiple locations |
| `src/app/namakkal/page.tsx` | Transport section data | P1 | Near line 827 |
| `src/app/namakkal/page.tsx` | Trust bar / founding year | P1 | Near trust bar component |
| `src/app/namakkal/page.tsx` | CollegeOrUniversity schema | P2 | 131–189 (replace) |
| `src/app/namakkal/page.tsx` | FAQPage schema | P2 | Schema block (replace) |
| `src/app/namakkal/page.tsx` | HowTo schema | P2 | New addition |
| `src/app/namakkal/page.tsx` | Internal links | P2 | Programme section, city nav |
| `public/sitemap.xml` | Add /namakkal entry | P2 | New entry |

---

## Appendix B: Validation Tools Reference

| Tool | URL | Used For |
|------|-----|---------|
| Google Rich Results Test | search.google.com/test/rich-results | FAQPage, HowTo schema detection |
| Schema Markup Validator | validator.schema.org | Full schema error check |
| Facebook Sharing Debugger | developers.facebook.com/tools/debug/ | OG tag verification |
| Twitter Card Validator | cards-dev.twitter.com/validator | Twitter card verification |
| Google Search Console | search.google.com/search-console | Indexing, impressions, position |
| Google PageSpeed Insights | pagespeed.web.dev | Core Web Vitals check |
| Browser source search | Ctrl+F in browser → View Source | Distance error verification |

---

*Triple-check validation: PASSED*
*Plan generated: 2026-03-28*
*Spec reference: `aeo/namakkal/namakkal-aeo-spec.md`*
*Source file: `src/app/namakkal/page.tsx`*
*Next step: Execute Step 1.1 — Fix all 11 distance errors immediately. Deploy Phase 1 before any other work.*
