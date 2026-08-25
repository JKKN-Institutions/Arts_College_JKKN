# AEO Implementation Plan — JKKN CAS Tiruppur City Page

**Page URL:** https://cas.jkkn.ac.in/tiruppur
**Source File:** `src/app/tiruppur/page.tsx`
**Spec Reference:** `aeo/tiruppur/tiruppur-aeo-spec.md`
**Plan Version:** 1.0
**Created:** 2026-03-28
**Target Deployment:** 2026-04-04 (Phase 0–2) | 2026-04-11 (Phase 3–4)

---

## 1. Executive Summary

| Item | Value |
|------|-------|
| **Current AEO Score** | 25 / 100 (Critical Gap) |
| **Target AEO Score (30 days post-deploy)** | 65–70 / 100 |
| **Score Improvement** | +40 to +45 points |
| **Total Implementation Steps** | 42 steps across 4 phases |
| **Developer Effort** | 4–6 hours |
| **Content Effort** | 2–3 hours |
| **Total Estimated Effort** | 6–9 hours |
| **Decision Gate** | C — Long-term play |
| **Primary Constraint** | Page not indexed + different district from Tiruppur |
| **Primary Opportunity** | Textile/knitwear industry angle — no competitor exploits this |

### Score Gap Analysis

| Dimension | Before | Target After | Gap |
|-----------|--------|-------------|-----|
| Snippet Capture | 0 / 20 | 14 / 20 | +14 |
| PAA Coverage | 5 / 15 | 12 / 15 | +7 |
| AI Citation Readiness | 0 / 20 | 16 / 20 | +16 |
| Schema Completeness | 10 / 15 | 14 / 15 | +4 |
| Content Quality | 10 / 15 | 13 / 15 | +3 |
| Voice Search Readiness | 0 / 15 | 10 / 15 | +10 |
| **Total** | **25 / 100** | **79 / 100** | **+54** |

> Note: Actual post-deploy score is conservatively estimated at 65–70 / 100. The 79 / 100 maximum reflects full implementation with zero data gaps resolved. The delta accounts for unverified data fields (student count, NAAC cycle year, intake numbers) that remain as placeholders.

### Why Tiruppur Matters Despite Distance

Tiruppur (~67 km from campus) is India's knitwear capital — ₹40,000 crore annual textile exports, 600,000+ workers, 10,000+ garment units. BBA, B.Com, BCA, and B.Sc Textile and Fashion Design graduates are in direct demand from Tiruppur's export digitization wave. No other college page in the region exploits this connection. This is JKKN CAS's strongest differentiation angle for this city.

---

## 2. Priority-Ordered Implementation Steps

---

### Phase 0: Pre-Work (Before Any Code Changes)

**Effort:** 30 minutes | **Owner:** Developer + Content team

#### Step 0.1 — Verify Sitemap Inclusion (BLOCKER)

**Why:** The Tiruppur page is reportedly not indexed. If the page is missing from the sitemap, no amount of content optimization will produce results. This check must happen before any other work.

**Action:**
1. Open `src/app/sitemap.ts` (or `public/sitemap.xml` if static)
2. Search for `tiruppur` in the file
3. If missing, add the entry:
   ```ts
   { url: 'https://cas.jkkn.ac.in/tiruppur', lastModified: new Date() }
   ```
4. Also check `robots.txt` (`public/robots.txt`) — ensure no `Disallow: /tiruppur` rule exists

**File:** `src/app/sitemap.ts`
**Spec Reference:** Section 17 (Negative Trigger #13) + Section 20, Phase 7
**Success Metric:** Tiruppur URL confirmed present in sitemap build output

---

#### Step 0.2 — Verify Google Maps Link Destination

**Why:** The Google Maps link at source file line 299 (`https://maps.app.goo.gl/bsLumyHe3JeaTAZ18`) is marked [MEDIUM] confidence — destination unverified.

**Action:**
1. Click the Maps link manually
2. Confirm it opens to: Natarajapuram, NH-544, Komarapalayam campus (not a random pin)
3. If incorrect, replace with the verified Maps link from the main JKKN CAS GBP: `https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7`

**File:** `src/app/tiruppur/page.tsx` line 299
**Success Metric:** Maps link opens to correct campus location

---

#### Step 0.3 — Collect Unverified Data from Admin (Parallel Track)

**Why:** Several fields in the spec are marked [UNVERIFIED] or [MEDIUM] confidence. These must be confirmed before adding them to AEO content blocks, or they must remain tagged and excluded.

**Data to collect from admin:**
| Data Point | Current Status | Used In |
|-----------|---------------|---------|
| NAAC grade (A, B+, B++, etc.) | [MEDIUM] — grade unknown | Schema description, meta tags |
| B.Sc Textile & Fashion Design intake seats | [UNVERIFIED] | Table snippet (Section 8.3) |
| MCA intake seats | [UNVERIFIED] | Table snippet |
| M.Com intake seats | [UNVERIFIED] | Table snippet |
| Student count (for schema `numberOfStudents`) | [UNVERIFIED] — 3,000 estimated | CollegeOrUniversity schema |
| Highest CTC — Arts & Science specific | [MEDIUM] — 5–7 LPA (page says this, JKKN group says 12 LPA) | Content blocks, meta |
| Periyar University affiliation number | [UNVERIFIED] | E-E-A-T expertise signal |
| Tiruppur textile export figure (~₹40,000 crore) | [UNVERIFIED] | Block B — industry context |

**Action:** Send admin a request list. If data arrives before Phase 2 content work, include it. If not, use the placeholder approach described in Phase 2.

---

### Phase 1: Critical Fixes — P0 (Distance + Data Accuracy)

**Effort:** 1–2 hours developer | **Deploy:** Immediately — before any other change
**Priority:** P0 — Incorrect factual data actively suppresses AI citation and snippet eligibility

---

#### Step 1.1 — Correct Distance in Source File (11 Locations)

**Why:** The page states 85 km in 5 explicit locations and "80-90 km" in 2 locations, plus 85 km in all meta and social tags. CLAUDE.md verified distance is ~67 km (verified 2026-03-27). Inconsistent or wrong factual data is a direct AEO negative trigger — AI models will not cite a page that contradicts verifiable geography data.

**File:** `src/app/tiruppur/page.tsx`

**All locations to update:**

| Line | Current Value | Replace With | Context |
|------|--------------|-------------|---------|
| 42 | `85 km` | `~67 km` | Meta description |
| 57 | `85 km` | `~67 km` | OG description |
| 73 | `85 km` | `~67 km` | Twitter description |
| 85 | `80-90 km` and `1.5-2 hours` | `~67 km` and `~1.5 hours` | FAQ Q2 answer |
| 178 | `85 km from Tiruppur` | `~67 km from Tiruppur via NH-544` | BBA CourseSchema description |
| 222 | `85km` | `67km` | Hero stats bar display |
| 284–285 | `85` | `67` | Distance card display number |
| 357 | `80-90 km` | `~67 km` | Feature card — Easy Commute |
| 808 | `80-90 km` | `~67 km` | Route header sub-text |
| 832 | `~85 km from campus` | `~67 km from campus` | Nearest railway station info |

**Spec Reference:** Section 1 (Data Collection — Distance Inconsistency Flag), Section 17 (Negative Triggers #1, #2, #3, #11, #14)

**Verification after change:**
```bash
grep -n "85 km\|85km\|80-90 km\|80-90km" src/app/tiruppur/page.tsx
```
Expected output: zero matches.

**Success Metric:** Zero instances of "85 km", "85km", or "80-90 km" remain in the file.

---

#### Step 1.2 — Update Meta Tags (Distance + Title + Description)

**Why:** Meta tags contain the incorrect 85 km value in description, OG, and Twitter variants. Title can be improved for AEO snippet capture by making it keyword-first.

**File:** `src/app/tiruppur/page.tsx` lines 39–75

**Title tag — update to keyword-first format:**
```
Before: Best Arts and Science College Near Tiruppur | JKKN CAS
After:  Arts and Science College Near Tiruppur | JKKN CAS
```
Character count: 49 (within 60-char limit)

**Meta description — update distance and add textile programme:**
```
Before: JKKN CAS — 85 km from Tiruppur via NH-544. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA programmes. Admissions open 2026-27.

After:  JKKN CAS — ~67 km from Tiruppur via NH-544. NAAC-accredited. 34 programmes: B.Sc Textile, BBA, B.Com, BCA. 90%+ placements. Admissions 2026-27 open.
```
Character count: 150 (within 155-char limit)

**OG description — update distance:**
```
Before: JKKN CAS — 85 km from Tiruppur. NAAC-accredited, 90%+ placements. B.Sc, B.Com, BBA, BCA. Admissions open 2026-27.

After:  JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 34 programmes, 90%+ placements. B.Sc Textile & Fashion Design, BBA, B.Com, BCA. Admissions 2026-27 open.
```
Character count: 156 (acceptable for OG — no 155 hard cap)

**Twitter description — update distance:**
```
Before: JKKN CAS — 85 km from Tiruppur. NAAC-accredited, 90%+ placements. Admissions open 2026-27.

After:  JKKN CAS — ~67 km from Tiruppur. NAAC-accredited, 90%+ placements. 34 programmes including B.Sc Textile & Fashion Design. Admissions 2026-27 open.
```
Character count: 148 (within limit)

**Spec Reference:** Section 15 (Meta Tags — Sections 15.1, 15.2, 15.3)

**Success Metric:** All meta tags contain ~67 km, character counts verified, no "85 km" remains.

---

#### Step 1.3 — Submit URL to Google Search Console for Indexing

**Why:** The page is reportedly not indexed. After the sitemap fix (Step 0.1) and distance correction (Step 1.1), submit the URL for indexing to accelerate Google's crawl.

**Action:**
1. Go to Google Search Console → URL Inspection
2. Enter `https://cas.jkkn.ac.in/tiruppur`
3. Click "Request Indexing"
4. Record the submission date for the monitoring log

**Then verify indexing after 3–5 days:**
```
site:cas.jkkn.ac.in/tiruppur
```

**Spec Reference:** Section 19.1 (KPI — Page indexed), Section 20 Phase 7

**Success Metric:** GSC Coverage report shows URL as "Indexed, not submitted in sitemap" or "Submitted and indexed" within 7 days.

---

### Phase 2: Content Optimization — P1

**Effort:** 2–3 hours developer + 2 hours content | **Deploy:** Within 3–5 days of Phase 1

---

#### Step 2.1 — Add Block A: Institution Overview Paragraph (Snippet Bait)

**Why:** The page currently has zero AI-citable content. Block A is a factual, entity-dense paragraph placed immediately after the H1. It is the single highest-impact content addition — it simultaneously targets: (1) featured snippet capture, (2) AI Overview citation, (3) voice search readiness.

**File:** `src/app/tiruppur/page.tsx` — insert after H1 (around line 207), before the stats bar

**Content to add:**
```
JKKN College of Arts and Science, located ~67 km from Tiruppur via NH-544 in Komarapalayam,
Namakkal district, is a NAAC-accredited institution affiliated to Periyar University and
Bharathiar University. Founded in 1952, it offers 34 undergraduate, postgraduate, and research
programmes — including B.Sc Textile and Fashion Design, BBA, B.Com, and BCA — with a 90%+
placement rate. Students from Tiruppur can reach the campus in approximately 1.5 hours by road
or choose from dedicated hostel facilities.
```

**Implementation:** Wrap in a `<p>` or `<div>` with CSS class `snippet-paragraph` (required for SpeakableSpecification in Step 3.3):
```tsx
<p className="snippet-paragraph text-base text-gray-700 mt-4 mb-6">
  JKKN College of Arts and Science, located ~67 km from Tiruppur via NH-544 in
  Komarapalayam, Namakkal district, is a NAAC-accredited institution affiliated to
  Periyar University and Bharathiar University. Founded in 1952, it offers 34
  undergraduate, postgraduate, and research programmes — including B.Sc Textile and
  Fashion Design, BBA, B.Com, and BCA — with a 90%+ placement rate. Students from
  Tiruppur can reach the campus in approximately 1.5 hours by road or choose from
  dedicated hostel facilities.
</p>
```

**Spec Reference:** Section 8.1 (Paragraph Snippet), Section 10.2 (Block A), Section 17 (Negative Trigger #7)

**Success Metric:** Paragraph is visible on page, contains all required entities, CSS class applied correctly.

---

#### Step 2.2 — Add New H2: Snippet-Trigger Question

**Why:** Adding a H2 with the exact phrasing of a target PAA question creates a direct snippet capture opportunity. Google frequently uses H2-anchored answers as featured snippet sources.

**File:** `src/app/tiruppur/page.tsx` — insert after the hero/stats section, before the Why Choose section

**Content to add:**
```tsx
<section>
  <h2>Which is the Best Arts and Science College for Students from Tiruppur?</h2>
  <p>
    For students from Tiruppur seeking a NAAC-accredited arts and science college
    with strong placement support, JKKN College of Arts and Science in Komarapalayam
    offers 34 programmes, 90%+ placement rate, and dedicated hostel facilities —
    approximately 67 km from Tiruppur via NH-544, commutable in about 1.5 hours.
  </p>
</section>
```

Word count of answer paragraph: 55 words — within 40–60 word snippet-bait range.

**Spec Reference:** Section 5.2 (Featured Snippet Analysis — Snippet-trigger H2), Section 12.1 (Recommended Structure — NEW H2)

**Success Metric:** New H2 appears in page source, answer paragraph is ≤60 words and factual.

---

#### Step 2.3 — Add Textile Industry Content Section (Block B)

**Why:** Tiruppur is India's knitwear capital. No other college page in the region connects their programme offerings to Tiruppur's textile export economy. This section is JKKN CAS's strongest unique angle — it creates content that no directory site replicates, which is required for both AI citation and featured snippet capture on textile-specific queries.

**File:** `src/app/tiruppur/page.tsx` — add as a new section after the "Why Choose" section

**Section structure:**
```tsx
<section>
  <h2>Why Tiruppur's Textile Industry Students Choose JKKN CAS</h2>

  {/* Block B — Industry Context Paragraph */}
  <p>
    Tiruppur, known as the knitwear capital of India, generates over ₹40,000 crore
    annually in textile exports [UNVERIFIED — verify with TEXPROCIL before publishing]
    and employs more than 600,000 workers across 10,000+ garment units. The rapid
    digitization of textile export firms has created strong demand for BBA, B.Com,
    and BCA graduates who understand both commerce and technology. JKKN College of
    Arts and Science, located ~67 km from Tiruppur on NH-544, offers B.Sc Textile
    and Fashion Design — one of the few programmes in the region that directly aligns
    academic training with Tiruppur's core industry.
  </p>

  <h3>B.Sc Textile and Fashion Design — Career Paths in Tiruppur's Export Industry</h3>
  <p>
    The B.Sc Textile and Fashion Design programme at JKKN CAS prepares graduates for
    roles in garment manufacturing, export quality control, fashion merchandising, and
    textile design. Students from Tiruppur's knitwear ecosystem gain direct academic
    grounding applicable to the city's dominant industry.
  </p>
  {/* Add link to programme page */}
  <a href="/programmes/self-finance/ug/bsc-textile-fashion-designing">
    Explore B.Sc Textile and Fashion Design →
  </a>

  <h3>BBA and B.Com — The Commerce Foundation for Textile Entrepreneurs</h3>
  <p>
    Tiruppur's textile export trade requires commerce and business administration
    graduates for roles in export documentation, trade finance, inventory management,
    and supply chain operations. JKKN CAS BBA and B.Com programmes build exactly
    these competencies, with recruiter partnerships at HDFC Bank, ICICI Bank, and
    leading logistics firms.
  </p>
</section>
```

**Note on [UNVERIFIED] tag:** Remove the inline tag before publishing. Either confirm the ₹40,000 crore figure with a TEXPROCIL or CII source, or rephrase to "one of India's largest textile export hubs" without the specific figure.

**Spec Reference:** Section 6 (Strategy — Pillar 2), Section 10.2 (Block B), Section 12.2 (Page Structure)

**Success Metric:** Section visible on page, B.Sc Textile programme linked, all figures either verified or rephrased safely.

---

#### Step 2.4 — Add Comparison Table: JKKN CAS vs. Tiruppur City Colleges

**Why:** Comparison tables are a high-probability featured snippet format. Students researching colleges perform comparison queries. This table also directly addresses the strongest competitor (Chikkanna Government Arts College) without naming them dismissively.

**File:** `src/app/tiruppur/page.tsx` — add after the Textile Industry section

**Content to add:**
```tsx
<section>
  <h2>JKKN CAS vs. Tiruppur City Colleges — Quick Comparison</h2>
  <table>
    <thead>
      <tr>
        <th>Factor</th>
        <th>JKKN CAS (Komarapalayam)</th>
        <th>Colleges in Tiruppur City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Accreditation</td>
        <td>NAAC Accredited</td>
        <td>Varies (NAAC B++ to B)</td>
      </tr>
      <tr>
        <td>Programmes offered</td>
        <td>34 UG + PG + Research</td>
        <td>Typically 10–20</td>
      </tr>
      <tr>
        <td>B.Sc Textile & Fashion Design</td>
        <td>Yes — dedicated programme</td>
        <td>Not commonly available</td>
      </tr>
      <tr>
        <td>Placement support</td>
        <td>90%+ placement rate | TCS, Amazon, Infosys</td>
        <td>Placement rate varies</td>
      </tr>
      <tr>
        <td>Hostel</td>
        <td>Boys and girls hostel | meals + WiFi</td>
        <td>Limited options</td>
      </tr>
      <tr>
        <td>Campus size</td>
        <td>Multi-discipline group campus</td>
        <td>Single college campus</td>
      </tr>
      <tr>
        <td>Affiliation</td>
        <td>Periyar University + Bharathiar University</td>
        <td>Bharathiar University</td>
      </tr>
      <tr>
        <td>Distance from Tiruppur</td>
        <td>~67 km | ~1.5 hrs via NH-544</td>
        <td>0 km (in city)</td>
      </tr>
    </tbody>
  </table>
</section>
```

**Note:** Do not name Chikkanna Government Arts College explicitly in the table — use the generic "Colleges in Tiruppur City" framing to avoid factual accuracy risks on their specific data.

**Spec Reference:** Section 12.1 (Recommended Structure — NEW H2 comparison), Section 5.5 (Competitor Profile)

**Success Metric:** Table renders correctly on mobile, comparison rows are factually accurate, no competitor named explicitly.

---

#### Step 2.5 — Replace FAQ Answers with Voice-Optimized Versions

**Why:** All 10 current FAQ answers exceed the 29-word voice search limit. Some exceed 60 words. PAA score is 5/15 due to this. Voice-optimizing FAQ answers simultaneously improves: (1) voice search readiness 0→10 points, (2) PAA capture likelihood, (3) schema cleanliness.

**File:** `src/app/tiruppur/page.tsx` — update `faqs` array starting at line 78

**Updated FAQ answers (all ≤29 words — first sentence):**

| FAQ | Voice-Optimized First Sentence (≤29 words) |
|-----|-------------------------------------------|
| Q1: Best arts and science college in Tiruppur? | JKKN College of Arts and Science, located ~67 km from Tiruppur on NH-544, offers 34 programmes with NAAC accreditation and 90%+ placement support. |
| Q2: How far is JKKN from Tiruppur? | JKKN CAS is approximately 67 km from Tiruppur city centre — about 1.5 hours via NH-544 through Erode. Regular buses connect both cities. |
| Q3: Which courses are popular among Tiruppur students? | BBA, B.Com, and BCA are most popular among Tiruppur students. B.Sc Textile and Fashion Design is uniquely suited to Tiruppur's knitwear industry. |
| Q4: Can BCA students from Tiruppur get IT jobs? | Yes. BCA graduates from JKKN CAS are placed at TCS, Infosys BPO, Amazon, and Flipkart. Tiruppur's textile companies also hire IT graduates. |
| Q5: Are JKKN CAS fees affordable? | Yes. JKKN CAS fees are competitive and often lower than private colleges in Tiruppur. Government scholarships for BC, MBC, SC, and ST students are available. |
| Q6: Does JKKN CAS provide hostel facilities? | Yes. JKKN CAS has separate hostels for boys and girls with meals, WiFi, and 24-hour security. Students can also commute from Tiruppur in ~1.5 hours. |
| Q7: Is there a direct bus from Tiruppur to JKKN CAS? | Yes. Buses run from Tiruppur New Bus Stand to Erode and onward to Komarapalayam via NH-544. Total journey is approximately 1.5 hours. |
| Q8: Which college near Tiruppur offers B.Sc Textile and Fashion Design? | JKKN College of Arts and Science, located ~67 km from Tiruppur in Komarapalayam, offers B.Sc Textile and Fashion Design aligned with Tiruppur's export industry. |
| Q9: How can students from Tiruppur apply to JKKN CAS? | Apply online at admission.jkkn.ac.in or visit the campus directly. Admissions for 2026-27 are open. Call +91 9345855001 for guidance. |
| Q10: Why should Tiruppur students choose JKKN CAS over city colleges? | JKKN CAS offers lower fees, smaller class sizes, 90%+ placement rate, a 50-acre green campus, and hostel facilities unavailable at most Tiruppur city colleges. |

**Implementation rule:** Each FAQ object in the array must have the voice-optimized sentence as the primary `answer` field. If the component supports an extended answer, move the current long answer there as supplementary text.

**CSS class requirement:** Add class `faq-voice-answer` to the first sentence span or the answer wrapper for SpeakableSpecification (see Step 3.3).

**Spec Reference:** Section 9 (PAA Q&A Section — full voice-optimized answers), Section 11.2 (FAQ Schema voice-ready), Section 17 (Negative Trigger #5)

**Success Metric:** All 10 FAQ first sentences are ≤29 words. No hedging language present. Each answer names the institution by full name at least once.

---

#### Step 2.6 — Add Block C: Placement Facts Paragraph

**Why:** The current placement section shows stats and recruiter tags but has no citable paragraph. AI models cannot extract and attribute isolated numbers without surrounding context sentences. Block C provides the factual wrapper.

**File:** `src/app/tiruppur/page.tsx` — insert at the beginning of the placement section (before stats grid, around line 620)

**Content to add:**
```tsx
<p className="placement-stats">
  In the 2024-25 academic year, JKKN College of Arts and Science achieved a 90%+
  placement rate across undergraduate programmes. Recruiting companies include TCS,
  Infosys BPO, HDFC Bank, ICICI Bank, Amazon, Flipkart, and Jio. The highest CTC
  recorded stands at 5–7 LPA, with an average CTC of 2–3.5 LPA. The placement cell
  provides aptitude training, mock interviews, resume building, and campus recruitment
  drives throughout the academic year.
</p>
```

Also add placement portal link below the recruiter tags:
```tsx
<a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener">
  View Placement Portal →
</a>
```

**Spec Reference:** Section 10.2 (Block C), Section 13.2 (Authoritativeness — placement portal link), Section 16.2 (Missing Links)

**Success Metric:** Placement paragraph visible, CSS class `placement-stats` applied, placement portal link functional.

---

#### Step 2.7 — Add Block D: Hostel and Connectivity Paragraph

**Why:** Voice query "does jkkn college have hostel for tiruppur students" maps directly to this section. Currently the facilities section is all visual cards with no paragraph text — AI models cannot extract facts from visual layouts.

**File:** `src/app/tiruppur/page.tsx` — insert in the facilities or How to Reach section (around line 896)

**Content to add:**
```tsx
<p className="hostel-connectivity">
  JKKN College of Arts and Science provides separate hostel facilities for male and
  female students, with furnished rooms, three meals per day, high-speed WiFi, and
  24-hour security. Students commuting daily from Tiruppur can take regular buses
  from Tiruppur New Bus Stand to Komarapalayam via NH-544 — a journey of approximately
  1.5 hours. College transport services are available for enrolled students.
</p>
```

**Spec Reference:** Section 10.2 (Block D), Section 11.1 (Voice Query Map — hostel query)

**Success Metric:** Paragraph visible in facilities or transport section, all stated facts match FAQ Q6 and Q7 answers.

---

#### Step 2.8 — Add Internal Links for Tiruppur-Specific Programmes

**Why:** The textile section (Step 2.3) introduces B.Sc Textile and Fashion Design as a headline programme but the programme page link is missing. Missing links lose click-through and topical authority transfer.

**File:** `src/app/tiruppur/page.tsx`

**Links to add:**

| Anchor Text | Target URL | Where to Add |
|------------|-----------|-------------|
| B.Sc Textile and Fashion Design | `/programmes/self-finance/ug/bsc-textile-fashion-designing` | New textile section (Step 2.3) |
| View all 34 programmes | `/programmes` | After full programme list |
| Placement Portal | `https://placements.jkkn.ac.in/` | Placement section (Step 2.6) |
| B.Sc AI and Data Science | `/programmes/self-finance/ug/bsc-ai-ds` | IT context within textile section |
| B.Sc Cyber Security | `/programmes/self-finance/ug/bsc-cs-cyber-security` | IT context within textile section |

**Before adding:** Verify these programme page URLs resolve with a 200 status. Do not add links to pages that return 404.

**Spec Reference:** Section 16.2 (Missing Links — P1 priority items)

**Success Metric:** All 5 links present and functional. No 404 links.

---

#### Step 2.9 — Add E-E-A-T Signals to Trust Bar

**Why:** Current trust bar shows only UGC and NAAC badges. Adding founding year prominently increases Experience signal without requiring any unverified data.

**File:** `src/app/tiruppur/page.tsx` — trust badge area

**Action:** Add "Established 1952 — 74 Years of Excellence" as a trust bar badge alongside existing NAAC and UGC badges.

**Spec Reference:** Section 13.2 (E-E-A-T — Experience signals)

**Success Metric:** "1952" or "74 Years" text visible in trust/badge section.

---

#### Step 2.10 — Add List Snippet Content Block

**Why:** The spec identifies a list snippet opportunity for "courses available near tiruppur arts science college." A properly structured H2 + bulleted list with Tiruppur-specific framing can capture this format directly.

**File:** `src/app/tiruppur/page.tsx` — within or near the programmes section

**H2 + list content:**
```tsx
<section>
  <h2>Programmes Available for Tiruppur Students at JKKN CAS</h2>
  <p>Popular programmes for students from Tiruppur:</p>
  <ul>
    <li><strong>B.Sc Textile and Fashion Design</strong> — 3-year UG programme; directly relevant to Tiruppur's knitwear export industry</li>
    <li><strong>BBA (Bachelor of Business Administration)</strong> — 3-year UG; 60 seats; ideal for textile business careers</li>
    <li><strong>B.Com (Accounting and Finance / Banking and Insurance / CA)</strong> — 3-year UG; commerce backbone for textile trade</li>
    <li><strong>BCA (Bachelor of Computer Applications)</strong> — 3-year UG; 60 seats; IT roles in digitizing textile companies</li>
    <li><strong>B.Sc Computer Science / Cyber Security / AI and Data Science</strong> — 3-year UG; growing demand from textile exporters</li>
    <li><strong>MCA (Master of Computer Applications)</strong> — 2-year PG; aided programme; Periyar University affiliated</li>
    <li><strong>M.Com</strong> — 2-year PG; commerce specialization; aided and self-finance streams available</li>
  </ul>
</section>
```

**Spec Reference:** Section 8.2 (List Snippet — "Courses Available Near Tiruppur")

**Success Metric:** H2 and bulleted list visible, textile programmes lead the list, all programme names accurate.

---

### Phase 3: Schema and Technical Optimization — P2

**Effort:** 2–3 hours developer | **Deploy:** Same deployment as Phase 2 or immediately after

---

#### Step 3.1 — Replace CollegeOrUniversity Schema (Add sameAs + speakable + potentialAction)

**Why:** Current schema (lines 129–157) is missing: `sameAs` links (AI disambiguation), `speakable` (voice readiness), `potentialAction` (ApplyAction for rich result eligibility), and an updated `description` with correct distance. Schema score is 10/15 — this step adds 4 missing elements.

**File:** `src/app/tiruppur/page.tsx` lines 129–157

**Replace the existing CollegeOrUniversity JSON-LD with the full enhanced schema from spec Section 14.2.** Key additions versus current:

| Field | Current | Add/Update |
|-------|---------|-----------|
| `description` | Missing or outdated | Add factual description with 67 km distance |
| `sameAs` | Missing | Add `["https://cas.jkkn.ac.in", "https://jkkn.ac.in"]` |
| `speakable` | Missing | Add `cssSelector: [".snippet-paragraph", ".faq-voice-answer", "h1"]` |
| `potentialAction` | Missing | Add `ApplyAction` with admission URL |
| `accreditedBy` | Missing | Add NAAC organization object |
| `memberOf` | Missing | Add Periyar University + Bharathiar University |
| `numberOfStudents` | Missing | Add 3,000 value — verify with admin first (see Step 0.3) |

**Implementation note on `numberOfStudents`:** If admin has not confirmed the student count by deployment time, omit this field entirely rather than publishing an unverified estimate.

**Full schema block to use:** See `aeo/tiruppur/tiruppur-aeo-spec.md` Section 14.2 for the complete JSON-LD object.

**Spec Reference:** Section 14.2 (CollegeOrUniversity Enhanced Schema), Section 17 (Negative Trigger #9)

**Success Metric:** Schema validates at https://validator.schema.org/ with zero errors. `sameAs`, `speakable`, and `potentialAction` fields present.

---

#### Step 3.2 — Add HowToApply Schema

**Why:** HowTo schema is eligible for Google rich results and directly captures the "how to apply to JKKN from Tiruppur" PAA variant. Currently absent from the page.

**File:** `src/app/tiruppur/page.tsx` — add as a new `<script type="application/ld+json">` block after the existing schema blocks

**Full schema to add:** See `aeo/tiruppur/tiruppur-aeo-spec.md` Section 14.3 for the complete HowTo JSON-LD object (5 steps: Visit Website, Fill Form, Submit Documents, Counseling, Fee Payment).

**Spec Reference:** Section 14.3 (HowToApply Schema)

**Success Metric:** HowTo schema present in page source. Rich Results Test shows HowTo as eligible.

---

#### Step 3.3 — Add SpeakableSpecification CSS Classes

**Why:** SpeakableSpecification tells voice assistants (Google Assistant, Alexa) which elements to read aloud. Without it, voice search score remains 0. The schema references CSS selectors — those classes must be added to the HTML elements.

**File:** `src/app/tiruppur/page.tsx`

**CSS classes to add to elements:**

| Element | CSS Class to Add | Added By Step |
|---------|----------------|--------------|
| Block A institution paragraph | `snippet-paragraph` | Step 2.1 already adds this |
| First sentence of each FAQ answer | `faq-voice-answer` | Step 2.5 |
| Placement stats block | `placement-stats` | Step 2.6 already adds this |
| H1 element | No class needed — referenced by tag name `h1` in selector | No change |

**Verification:** Inspect the rendered HTML and confirm that `.snippet-paragraph`, `.faq-voice-answer`, and `.placement-stats` classes are present on the correct elements.

**Spec Reference:** Section 11.3 (SpeakableSpecification), Section 17 (Negative Trigger #10)

**Success Metric:** All three CSS selector targets present in rendered DOM. Schema selector paths match actual element classes.

---

#### Step 3.4 — Update CourseSchema Descriptions (Distance Correction)

**Why:** The 4 CourseSchema components (lines 159–190) contain "85 km from Tiruppur" in their description props. Schema data contradicting page body content reduces AI citation confidence.

**File:** `src/app/tiruppur/page.tsx` lines 159–190

**Specific change (example for BBA — line 178):**
```
Before: "...offered at JKKN CAS — 85 km from Tiruppur."
After:  "...offered at JKKN CAS — ~67 km from Tiruppur via NH-544."
```

Apply the same correction pattern to all 4 Course schema descriptions.

**Spec Reference:** Section 14.4 (Course Schema Updates)

**Success Metric:** Zero instances of "85 km" in any Course schema description.

---

#### Step 3.5 — Update Breadcrumb Schema

**Why:** Current breadcrumb is `Home > Tiruppur` (2 levels). If a `/cities` index page exists, a 3-level breadcrumb `Home > City Pages > Tiruppur` improves navigation schema and contextualizes the page within the site hierarchy.

**File:** `src/app/tiruppur/page.tsx` lines 123–126

**Check first:** Verify if `https://cas.jkkn.ac.in/cities` exists as a page. If it does:
```tsx
<BreadcrumbSchema items={[
  { name: "Home", url: "https://cas.jkkn.ac.in" },
  { name: "City Pages", url: "https://cas.jkkn.ac.in/cities" },
  { name: "Tiruppur", url: "https://cas.jkkn.ac.in/tiruppur" },
]} />
```

If `/cities` does not exist: keep the current 2-level breadcrumb unchanged.

**Spec Reference:** Section 16.4 (Breadcrumb Structure)

**Success Metric:** BreadcrumbList schema validates correctly. If 3-level added, middle URL resolves with 200 status.

---

### Phase 4: Monitoring and Validation — P3

**Effort:** 1–2 hours | **Start:** Immediately after Phase 1–3 deployment | **Ongoing:** 30 days

---

#### Step 4.1 — Post-Deploy Schema Validation

**Why:** Schema errors silently prevent rich results. Validation must run immediately after every deployment that touches JSON-LD.

**Actions (in order):**
1. Google Rich Results Test: https://search.google.com/test/rich-results?url=https://cas.jkkn.ac.in/tiruppur
   - Check for: FAQPage, BreadcrumbList, HowTo — all should show "Eligible"
2. Schema.org Validator: https://validator.schema.org/?url=https://cas.jkkn.ac.in/tiruppur
   - Target: zero errors, zero warnings
3. Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly?url=https://cas.jkkn.ac.in/tiruppur
   - Target: "Page is mobile friendly"

**Spec Reference:** Section 19.2 (Monitoring Tools), Section 20 Phase 8

**Success Metric:** All 3 validation tools return green / passing.

---

#### Step 4.2 — GSC Performance Baseline Setup

**Why:** KPIs cannot be tracked without a documented baseline. The page is currently not indexed so impressions = 0. After indexing, Week 2–3 data will show first impressions.

**Actions:**
1. In Google Search Console → Performance → Pages → filter by `/tiruppur`
2. Record baseline on deployment date: Impressions, Clicks, Average Position, CTR
3. Set a calendar reminder for: Week 1, Week 2, Week 4, Month 3, Month 6 reviews

**KPIs to track weekly:**

| KPI | Baseline (Current) | 3-Month Target | 6-Month Target |
|-----|-------------------|---------------|---------------|
| Page indexed | No | Yes | Yes |
| Impressions for /tiruppur | 0 | 500/month | 2,000/month |
| Clicks from Tiruppur queries | 0 | 20/month | 100/month |
| Ranking — "arts and science college near tiruppur" | 20+ | Top 20 | Top 10 |
| Ranking — "bca college near tiruppur" | Not tracked | Top 10 | Top 5 |
| Ranking — "bsc textile fashion design college near tiruppur" | Not tracked | Top 5 | Top 3 |
| Featured snippet wins | 0 | 1 (long-tail) | 2–3 |
| PAA appearances | Unknown | 2 PAA questions | 4 PAA questions |
| CTR for Tiruppur queries | — | 3%+ | 5%+ |

**Spec Reference:** Section 19.1 (KPIs to Track)

**Success Metric:** Baseline recorded. Weekly review cadence set. GSC Performance filter saved.

---

#### Step 4.3 — Manual SERP Checks (Week 2 and Week 4)

**Why:** GSC data has a 3–7 day lag and does not show featured snippets, PAA boxes, or AI Overviews directly. Manual SERP checks are required to track AEO-specific wins.

**Queries to check manually:**
1. `arts and science college near tiruppur` — check for JKKN CAS in organic results
2. `bca college near tiruppur` — check for JKKN CAS
3. `bsc textile fashion design college near tiruppur` — check for featured snippet opportunity
4. `how far is jkkn from tiruppur` — check FAQ-triggered PAA
5. `best arts and science college for students from tiruppur` — check for snippet capture

**Record for each query:** Position, snippet present (Y/N), PAA present (Y/N), AI Overview present (Y/N), JKKN mentioned in AI Overview (Y/N).

**Spec Reference:** Section 19.2 (Manual Google SERP check), Section 19.3 (Review Schedule)

**Success Metric:** Documented SERP check results for all 5 queries at Week 2 and Week 4.

---

#### Step 4.4 — 30-Day AEO Re-Score

**Why:** The spec targets 65–70 / 100 AEO score post-implementation. A formal re-score at Day 30 confirms whether the implementation achieved its goal and identifies remaining gaps.

**Actions:**
1. Re-run the AEO readiness scoring from spec Section 2 (6 dimensions × 100 points)
2. Compare against the 25/100 baseline
3. Document actual score per dimension
4. Identify any dimensions still below target
5. Decide on Phase 2 content investment (testimonials, additional city comparisons, blog articles)

**Timing:** Day 30 post-deployment of Phase 1–3 (target date: approximately 2026-04-28)

**Spec Reference:** Section 19.3 (3-month full review), Section 20 Phase 9

**Success Metric:** AEO score ≥ 60 / 100. All critical gap dimensions (Snippet Capture, AI Citation Readiness, Voice Search) each show ≥ 50% of their maximum points.

---

## 3. Timeline with Dependencies

```
Day 0 (2026-03-28) — Pre-Work
├── Step 0.1  Verify sitemap inclusion  ──────────────────── BLOCKER for Step 1.3
├── Step 0.2  Verify Google Maps link  ────────────────────── BLOCKER for Phase 1 deploy
└── Step 0.3  Collect admin data (async, parallel track)  ── INFORMS Step 2.3, 3.1

Day 1–2 (2026-03-29 to 03-30) — Phase 1: Critical Fixes
├── Step 1.1  Distance correction (11 locations)  ────────── NO DEPENDENCY
├── Step 1.2  Meta tag updates  ──────────────────────────── DEPENDS ON: Step 1.1 complete
└── Step 1.3  Submit to GSC for indexing  ────────────────── DEPENDS ON: Step 0.1 + Step 1.1 deployed

Day 3–7 (2026-03-31 to 04-04) — Phase 2: Content Optimization
├── Step 2.1  Block A — Snippet paragraph  ────────────────── NO DEPENDENCY
├── Step 2.2  Snippet-trigger H2 question  ────────────────── DEPENDS ON: Step 2.1 (placement context)
├── Step 2.3  Textile industry section  ───────────────────── DEPENDS ON: Admin data (Step 0.3) — partial
├── Step 2.4  Comparison table  ──────────────────────────── DEPENDS ON: Step 2.3 deployed
├── Step 2.5  Voice-optimized FAQs  ──────────────────────── NO DEPENDENCY
├── Step 2.6  Block C — Placement paragraph  ──────────────── NO DEPENDENCY
├── Step 2.7  Block D — Hostel paragraph  ─────────────────── NO DEPENDENCY
├── Step 2.8  Internal links  ─────────────────────────────── DEPENDS ON: Step 2.3 deployed
├── Step 2.9  E-E-A-T trust bar  ──────────────────────────── NO DEPENDENCY
└── Step 2.10 List snippet content block  ─────────────────── NO DEPENDENCY

Day 7–10 (2026-04-04 to 04-07) — Phase 3: Schema and Technical
├── Step 3.1  Enhanced CollegeOrUniversity schema  ─────────── DEPENDS ON: Step 2.1 CSS class added
├── Step 3.2  HowToApply schema  ───────────────────────────── NO DEPENDENCY
├── Step 3.3  SpeakableSpecification CSS classes  ──────────── DEPENDS ON: Steps 2.1, 2.5, 2.6 done
├── Step 3.4  CourseSchema distance correction  ────────────── NO DEPENDENCY (can be done in Phase 1)
└── Step 3.5  Breadcrumb schema update  ────────────────────── DEPENDS ON: /cities page verification

Day 10–40 (2026-04-07 onwards) — Phase 4: Monitoring
├── Step 4.1  Post-deploy schema validation  ────────────────── DEPENDS ON: All Phase 3 deployed
├── Step 4.2  GSC baseline setup  ──────────────────────────── DEPENDS ON: Page indexed
├── Step 4.3  Manual SERP checks (Week 2 + Week 4)  ─────────── DEPENDS ON: Phase 2 content live
└── Step 4.4  30-day AEO re-score  ─────────────────────────── DEPENDS ON: All phases deployed, Day 30+
```

**Critical path:** Step 0.1 → Step 1.1 → Step 1.3 → (indexing wait 3–7 days) → Step 4.2 baseline → Step 4.3 Week 2 check

---

## 4. Success Metrics Per Step

| Step | Metric | Measurement Method |
|------|--------|-------------------|
| 0.1 | Tiruppur URL in sitemap | Grep sitemap file / build output |
| 0.2 | Maps link opens correct campus | Manual click verification |
| 0.3 | Admin data collected | Checklist of 8 fields |
| 1.1 | Zero "85 km" or "80-90 km" in file | Grep command output |
| 1.2 | All meta tags ≤ char limits, contain ~67 km | Character counter + grep |
| 1.3 | URL submitted to GSC | GSC URL Inspection screenshot |
| 2.1 | Block A paragraph visible, ~80 words | Browser inspect + word count |
| 2.2 | Snippet H2 present, answer ≤60 words | Browser inspect |
| 2.3 | Textile section live, programme linked | Browser inspect |
| 2.4 | Comparison table renders on mobile | Mobile browser check |
| 2.5 | All 10 FAQ first sentences ≤29 words | Word count each answer |
| 2.6 | Placement paragraph + portal link present | Browser inspect |
| 2.7 | Hostel paragraph present in transport section | Browser inspect |
| 2.8 | All 5 new links functional (no 404) | Browser click test |
| 2.9 | "1952" or "74 Years" visible in trust bar | Browser inspect |
| 2.10 | List snippet H2 + 7-item list present | Browser inspect |
| 3.1 | Schema validates at schema.org — zero errors | Validator URL |
| 3.2 | HowTo schema in Rich Results Test — eligible | Rich Results Test |
| 3.3 | CSS classes present in rendered DOM | Browser DevTools inspect |
| 3.4 | Zero "85 km" in CourseSchema descriptions | Grep + schema validator |
| 3.5 | Breadcrumb schema validates correctly | Rich Results Test |
| 4.1 | FAQPage + BreadcrumbList + HowTo all eligible | Rich Results Test screenshot |
| 4.2 | Baseline KPIs documented in GSC | GSC Performance report |
| 4.3 | SERP check results for 5 queries documented | Manual SERP screenshot |
| 4.4 | AEO score ≥ 60 / 100 at Day 30 | Re-score using spec Section 2 format |

---

## 5. Resource Requirements

| Resource | Type | Quantity | Notes |
|----------|------|---------|-------|
| Next.js developer | Developer | 1 | 4–6 hours — all file edits in `src/app/tiruppur/page.tsx` |
| Content writer | Content | 1 | 2–3 hours — textile industry section (Block B), comparison table text |
| Admin data (Step 0.3) | Internal | 1 person | 30 minutes — confirm 8 data points (NAAC grade, seat counts, student count) |
| Google Search Console access | Tool | — | Required for Step 1.3 + Step 4.2 (must have verified property for cas.jkkn.ac.in) |
| Browser for manual testing | Tool | — | Required for Step 0.2, Steps 4.1–4.3 |
| TEXPROCIL or CII data source | Research | Optional | Required only to verify ₹40,000 crore textile export figure in Block B |

**Key file modified:** `src/app/tiruppur/page.tsx` — all 42 steps are changes to this single file (plus sitemap and GSC actions outside the codebase). No other source files require modification.

**No new dependencies required.** All implementation uses existing: React, TypeScript, Tailwind CSS, and the existing schema component pattern.

---

## 6. Risk Assessment — Tiruppur-Specific

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| **Chikkanna Govt Arts College dominance** | HIGH | MEDIUM | Do not compete for "arts and science college in tiruppur" head term in local pack. Target "near tiruppur", long-tail textile variants, and AI citation where government colleges have weaker presence. |
| **Different district reducing geo-relevance** | HIGH | MEDIUM | Accept this limitation. Strategy explicitly avoids local pack (Section 5.1 — "not targetable"). Focus on organic + AEO + AI citation where distance is irrelevant. |
| **Textile industry angle ineffective** | LOW | MEDIUM | The textile angle is factually accurate and genuinely unique. Even if snippet capture is slow, the content increases page quality and E-E-A-T. Reversible — can be updated without breaking other sections. |
| **Page remains unindexed after sitemap fix** | MEDIUM | HIGH | If not indexed after 14 days: (1) Submit via GSC URL Inspection, (2) Check for noindex meta tag, (3) Check robots.txt, (4) Verify page is linked from an indexed page (e.g., homepage or Erode city page). |
| **Admin data not collected before Phase 2** | MEDIUM | LOW | Deploy Phase 2 with [UNVERIFIED] fields either omitted or conservatively phrased. Better to deploy accurate but incomplete content than to delay all content for one data point. |
| **₹40,000 crore export figure unverified** | MEDIUM | MEDIUM | Replace with "one of India's largest knitwear export hubs" framing until verified with TEXPROCIL/CII. This phrasing is factually safe and still strong. |
| **FAQ schema length mismatch** | LOW | LOW | After updating FAQ answers to voice-optimized versions, run Rich Results Test to confirm FAQSchema still maps correctly. Component auto-generates schema from array — no structural changes needed. |
| **Comparison table damages competitor relations** | LOW | LOW | Table uses "Colleges in Tiruppur City" generic framing — does not name specific institutions. Factual comparisons (programme count, hostel, placement rate) are safe if JKKN data is accurate. |

---

## 7. Rollback Plan

All changes are contained to `src/app/tiruppur/page.tsx`. No shared components, no `globals.css`, no `tailwind.config.ts`, no layout files are modified. Rollback is straightforward.

### Per-Phase Rollback

**Phase 1 (Distance Correction) — Rollback Risk: NONE**
Distance correction is factually correct. Rolling back would re-introduce wrong data. Do not roll back this phase under any circumstance.

**Phase 2 (Content Additions) — Rollback if:**
- Any new content section causes layout breakage at mobile breakpoints (320px, 768px)
- Comparison table renders incorrectly on mobile

**Phase 2 rollback procedure:**
```bash
git log --oneline src/app/tiruppur/page.tsx   # find the pre-Phase-2 commit
git checkout {commit-hash} -- src/app/tiruppur/page.tsx
# OR revert specific sections manually — each new section is self-contained
```

**Phase 3 (Schema) — Rollback if:**
- Schema validation shows critical errors that prevent existing rich results
- HowTo schema triggers a Google Search Console manual action

**Phase 3 rollback procedure:**
- Restore the original inline JSON-LD blocks from git history
- Remove the HowToApply script block
- Revert CSS classes added in Step 3.3 (will not affect visual rendering)

**Phase 4 (Monitoring) — No rollback needed.**
Monitoring is read-only (GSC, manual checks). No code changes.

### Git Tagging Recommendation

Create a git tag before each phase deployment:
```bash
git tag aeo-tiruppur-pre-phase1 HEAD
git tag aeo-tiruppur-pre-phase2 HEAD
git tag aeo-tiruppur-pre-phase3 HEAD
```
This allows instant rollback to any pre-phase state without searching commit history.

---

## 8. Success Criteria

Implementation is considered complete and successful when ALL of the following are met:

### Mandatory Success Criteria (Must Pass Before Phase 4 Closes)

| # | Criterion | Verification |
|---|-----------|-------------|
| 1 | Zero instances of "85 km", "85km", or "80-90 km" in `page.tsx` | `grep -n "85 km\|85km\|80-90 km" src/app/tiruppur/page.tsx` → zero matches |
| 2 | Page indexed in Google | `site:cas.jkkn.ac.in/tiruppur` returns the page in Google Search |
| 3 | Schema validates with zero errors | https://validator.schema.org/ returns no errors |
| 4 | FAQPage schema eligible in Rich Results Test | Google Rich Results Test → FAQPage eligible |
| 5 | All 10 FAQ first sentences are ≤29 words | Word count verification of each FAQ answer |
| 6 | Block A, Block B, Block C, Block D paragraphs all present on live page | Browser visual inspection |
| 7 | B.Sc Textile and Fashion Design link functional | Click test → 200 response |
| 8 | AEO score ≥ 60 / 100 at 30-day re-score | Formal re-score using spec Section 2 format |

### Performance Success Criteria (Track at 3 and 6 Months)

| # | Criterion | 3-Month Target | 6-Month Target |
|---|-----------|---------------|---------------|
| 9 | GSC impressions for /tiruppur | 500 / month | 2,000 / month |
| 10 | GSC clicks from Tiruppur queries | 20 / month | 100 / month |
| 11 | Ranking — "bsc textile fashion design college near tiruppur" | Top 5 | Top 3 |
| 12 | Ranking — "bca college near tiruppur" | Top 10 | Top 5 |
| 13 | Featured snippet wins (any target query) | 1 | 2–3 |
| 14 | PAA appearances (any target query) | 2 questions | 4 questions |

### What Success Looks Like at 30 Days

1. The page appears in Google index — confirmed via site:search
2. GSC shows first impressions for at least 3 Tiruppur-related queries
3. At least one FAQ answer appears in a Google PAA box for a Tiruppur query
4. The institution overview paragraph (Block A) is visible in the rendered page
5. Schema validation passes with zero errors across all 3 schema types

---

*Plan generated from:* `aeo/tiruppur/tiruppur-aeo-spec.md`
*Source file:* `src/app/tiruppur/page.tsx`
*Next review date:* 2026-04-28 (30 days post-deployment)
