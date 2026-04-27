# JKKN College of Arts & Science — Website Data Request Sheet

**Prepared by:** Developer  
**Date:** 24 April 2026  
**Action needed from:** Content / SEO / Admissions Team  
**Site:** cas.jkkn.ac.in

---

> **How to use this document:** Fill in the **Your Answer** column for each row. The **Dev Reference** column is for the developer only. Items marked **⚪ HIDDEN** are switched off on the website right now — they still need real data before they can go live.

---

## Priority Legend

| Symbol | Meaning |
|--------|---------|
| 🔴 URGENT | Wrong or placeholder content is visible to visitors **right now** |
| 🟠 IMPORTANT | Affects SEO, credibility, or trust — needs verification |
| 🟡 NEEDED | Element exists on the site but is broken or non-functional |
| 🟢 LATER | Minor issue, low-impact item |
| ⚪ HIDDEN | Section is switched off — not visible yet — data still needed before activation |

---

## Summary

| Priority | Count |
|----------|-------|
| 🔴 URGENT | 32 |
| 🟠 IMPORTANT | 3 |
| 🟡 NEEDED | 24 |
| 🟢 LATER | 5 |
| ⚪ HIDDEN | 9 |
| **Total** | **73** |

---

## Section A — Programme Pages: Department Facilities & Labs (Placeholder Images Visible to Visitors)

> 🔴 All 27 programme pages below show **green colour-block placeholder images** in their Facilities section instead of real department photos. These are visible to every visitor right now.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 1 | 🔴 URGENT | B.Com (Aided) → Facilities & Infrastructure | Real photos missing for: Commerce Library, Computer Lab with Tally, Finance Lab, Seminar Hall, Research Centre. Green placeholder blocks are showing instead. | | `src/app/programmes/aided/ug/bcom/page.tsx` — lines ~599–603, search `placehold.co` |
| 2 | 🔴 URGENT | B.A. English (Aided) → Facilities & Infrastructure | Real photos missing for: English Library, Seminar Hall. Green placeholders showing instead. | | `src/app/programmes/aided/ug/ba-english/page.tsx` — lines ~516–519, search `placehold.co` |
| 3 | 🔴 URGENT | B.Sc Zoology (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/ug/bsc-zoology/page.tsx` — search `placehold.co` |
| 4 | 🔴 URGENT | B.Sc Mathematics (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/ug/bsc-maths/page.tsx` — search `placehold.co` |
| 5 | 🔴 URGENT | B.Sc Chemistry (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/ug/bsc-chemistry/page.tsx` — search `placehold.co` |
| 6 | 🔴 URGENT | B.A. History (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/ug/ba-history/page.tsx` — search `placehold.co` |
| 7 | 🔴 URGENT | M.Sc Zoology (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/msc-zoology/page.tsx` — search `placehold.co` |
| 8 | 🔴 URGENT | M.Sc Physics (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/msc-physics/page.tsx` — search `placehold.co` |
| 9 | 🔴 URGENT | M.Sc Computer Science (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/msc-computer-science/page.tsx` — search `placehold.co` |
| 10 | 🔴 URGENT | M.Sc Chemistry (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/msc-chemistry/page.tsx` — search `placehold.co` |
| 11 | 🔴 URGENT | M.Com (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/mcom/page.tsx` — search `placehold.co` |
| 12 | 🔴 URGENT | MCA (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/mca/page.tsx` — search `placehold.co` |
| 13 | 🔴 URGENT | M.A. History (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/pg/ma-history/page.tsx` — search `placehold.co` |
| 14 | 🔴 URGENT | Ph.D. Zoology (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/phd/zoology/page.tsx` — search `placehold.co` |
| 15 | 🔴 URGENT | Ph.D. Tamil (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/phd/tamil/page.tsx` — search `placehold.co` |
| 16 | 🔴 URGENT | Ph.D. Chemistry (Aided) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/aided/phd/chemistry/page.tsx` — search `placehold.co` |
| 17 | 🔴 URGENT | B.Sc Visual Communication (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bsc-visual-communication/page.tsx` — search `placehold.co` |
| 18 | 🔴 URGENT | B.Sc Microbiology (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bsc-microbiology/page.tsx` — search `placehold.co` |
| 19 | 🔴 URGENT | B.Sc CS with Cyber Security (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bsc-cs-cyber-security/page.tsx` — search `placehold.co` |
| 20 | 🔴 URGENT | B.Sc Computer Science (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bsc-computer-science/page.tsx` — search `placehold.co` |
| 21 | 🔴 URGENT | B.Sc AI & Data Science (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bsc-ai-ds/page.tsx` — search `placehold.co` |
| 22 | 🔴 URGENT | B.A. English (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/ba-english/page.tsx` — search `placehold.co` |
| 23 | 🔴 URGENT | B.Com Banking & Insurance (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/ug/bcom-banking-insurance/page.tsx` — search `placehold.co` |
| 24 | 🔴 URGENT | M.Sc Computer Science (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/pg/msc-computer-science/page.tsx` — search `placehold.co` |
| 25 | 🔴 URGENT | M.Sc Mathematics (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/pg/msc-mathematics/page.tsx` — lines ~756–758, search `placehold.co` |
| 26 | 🔴 URGENT | M.Sc CS Data Analytics (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/pg/msc-cs-data-analytics/page.tsx` — search `placehold.co` |
| 27 | 🔴 URGENT | M.A. English (Self-Finance) → Facilities & Infrastructure | Real photos missing for department facilities. Green placeholders showing. | | `src/app/programmes/self-finance/pg/ma-english/page.tsx` — search `placehold.co` |

---

## Section B — City Landing Pages: Contact Forms (Placeholder Phone Number Visible to Visitors)

> 🔴 All five city pages display "+91-XXXXXXXXXX" as the clickable "Call us directly" phone number. This placeholder text is visible to every visitor on those pages.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 28 | 🔴 URGENT | Erode city page → Contact form → "Call us directly" phone link | The phone number shown to visitors reads "+91-XXXXXXXXXX" — a placeholder. What is the real phone number for Erode-area enquiries? | | `src/app/erode/ErodeContactForm.tsx:116` |
| 29 | 🔴 URGENT | Coimbatore city page → Contact form → "Call us directly" phone link | Same issue — "+91-XXXXXXXXXX" is displayed. What is the real Coimbatore enquiry number? | | `src/app/coimbatore/CoimbatoreContactForm.tsx:116` |
| 30 | 🔴 URGENT | Tiruppur city page → Contact form → "Call us directly" phone link | "+91-XXXXXXXXXX" is displayed. What is the real Tiruppur enquiry number? | | `src/app/tiruppur/TiruppurContactForm.tsx:116` |
| 31 | 🔴 URGENT | Salem city page → Contact form → "Call us directly" phone link | "+91-XXXXXXXXXX" is displayed. What is the real Salem enquiry number? | | `src/app/salem/SalemContactForm.tsx:116` |
| 32 | 🔴 URGENT | Namakkal city page → Contact form → "Call us directly" phone link | "+91-XXXXXXXXXX" is displayed. What is the real Namakkal enquiry number? | | `src/app/namakkal/NamakkalContactForm.tsx:116` |

---

## Section C — Homepage: About Image & Key Statistics

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 33 | 🟠 IMPORTANT | Homepage → "About JKKN" section → Feature image | A generic stock photo from Unsplash is used — not a real JKKN campus photo. This can reduce visitor trust. A real JKKN campus or campus-life photo should replace it. | | `src/app/page.tsx:297` — replace Unsplash URL |
| 34 | 🟠 IMPORTANT | Homepage → Hero section → Statistics → "95% Placement" | This figure is prominently displayed to all visitors. Please confirm: (a) Is 95% the correct current figure? (b) Which batch year does it cover? (c) How was it calculated (placed vs. total eligible)? | | `src/components/home/HeroSection.tsx:52` |
| 35 | 🟠 IMPORTANT | Homepage → Hero section → Statistics → "1300+ Students" | This enrolment figure is displayed on the homepage. Please confirm this is the current correct count. If the number has changed, it should be updated. | | `src/components/home/HeroSection.tsx:57` |

---

## Section D — Programme Pages: "Explore Similar Programmes" (Non-Functional Links)

> 🟡 On all 19 pages below, the programme cards at the bottom of the page link to `href="#"` — clicking them does nothing. These are broken links visible on the live site.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 36 | 🟡 NEEDED | B.Com (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom of this page do nothing when clicked. The links are broken. | | `src/app/programmes/aided/ug/bcom/page.tsx:840` — `href="#"` needs real path |
| 37 | 🟡 NEEDED | B.A. English (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/ug/ba-english/page.tsx:759` — `href="#"` needs real path |
| 38 | 🟡 NEEDED | B.Sc Mathematics (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/ug/bsc-maths/page.tsx:805` — `href="#"` |
| 39 | 🟡 NEEDED | B.Sc Chemistry (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/ug/bsc-chemistry/page.tsx:833` — `href="#"` |
| 40 | 🟡 NEEDED | B.A. History (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/ug/ba-history/page.tsx:806` — `href="#"` |
| 41 | 🟡 NEEDED | M.Sc Zoology (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/pg/msc-zoology/page.tsx:767` — `href="#"` |
| 42 | 🟡 NEEDED | M.Sc Physics (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/pg/msc-physics/page.tsx:715` — `href="#"` |
| 43 | 🟡 NEEDED | M.Sc Computer Science (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/pg/msc-computer-science/page.tsx:714` — `href="#"` |
| 44 | 🟡 NEEDED | M.Sc Chemistry (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/pg/msc-chemistry/page.tsx:754` — `href="#"` |
| 45 | 🟡 NEEDED | M.Com (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/pg/mcom/page.tsx:847` — `href="#"` |
| 46 | 🟡 NEEDED | Ph.D. Zoology (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/phd/zoology/page.tsx:837` — `href="#"` |
| 47 | 🟡 NEEDED | Ph.D. Tamil (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/phd/tamil/page.tsx:733` — `href="#"` |
| 48 | 🟡 NEEDED | Ph.D. Chemistry (Aided) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/aided/phd/chemistry/page.tsx:616` — `href="#"` |
| 49 | 🟡 NEEDED | B.Sc Microbiology (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/ug/bsc-microbiology/page.tsx:797` — `href="#"` |
| 50 | 🟡 NEEDED | B.Sc CS with Cyber Security (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/ug/bsc-cs-cyber-security/page.tsx:826` — `href="#"` |
| 51 | 🟡 NEEDED | M.Sc Computer Science (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/pg/msc-computer-science/page.tsx:751` — `href="#"` |
| 52 | 🟡 NEEDED | M.Sc Mathematics (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/pg/msc-mathematics/page.tsx:761` — `href="#"` |
| 53 | 🟡 NEEDED | M.Sc CS Data Analytics (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/pg/msc-cs-data-analytics/page.tsx:749` — `href="#"` |
| 54 | 🟡 NEEDED | M.A. English (Self-Finance) → "Explore Similar Programmes" section | One or more programme cards at the bottom do nothing when clicked. | | `src/app/programmes/self-finance/pg/ma-english/page.tsx:711` — `href="#"` |

---

## Section E — City Landing Pages: Contact Form Field Labels

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 55 | 🟡 NEEDED | Erode city page → Contact form → City field label | The label reads "Your City" — slightly informal and placeholder-like. Suggest renaming to "City" or "Current City" for a more professional look. | | `src/app/erode/ErodeContactForm.tsx:62` |
| 56 | 🟡 NEEDED | Coimbatore city page → Contact form → City field label | Same as above — label reads "Your City". | | `src/app/coimbatore/CoimbatoreContactForm.tsx:62` |
| 57 | 🟡 NEEDED | Tiruppur city page → Contact form → City field label | Same as above — label reads "Your City". | | `src/app/tiruppur/TiruppurContactForm.tsx:62` |
| 58 | 🟡 NEEDED | Salem city page → Contact form → City field label | Same as above — label reads "Your City". | | `src/app/salem/SalemContactForm.tsx:62` |
| 59 | 🟡 NEEDED | Namakkal city page → Contact form → City field label | Same as above — label reads "Your City". | | `src/app/namakkal/NamakkalContactForm.tsx:62` |

---

## Section F — City Landing Pages: Contact Form Phone Input Hint

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 60 | 🟢 LATER | Erode city page → Contact form → Mobile number input (greyed hint text) | The hint inside the phone input box (visible before user types) shows "+91 XXXXX XXXXX". Using X's looks unpolished. A realistic example like "+91 98765 43210" would be cleaner. Disappears when user types — low priority. | | `src/app/erode/ErodeContactForm.tsx:53` — `placeholder` attribute |
| 61 | 🟢 LATER | Coimbatore city page → Contact form → Mobile number input (greyed hint text) | Same — shows "+91 XXXXX XXXXX" before user types. | | `src/app/coimbatore/CoimbatoreContactForm.tsx:53` |
| 62 | 🟢 LATER | Tiruppur city page → Contact form → Mobile number input (greyed hint text) | Same — shows "+91 XXXXX XXXXX" before user types. | | `src/app/tiruppur/TiruppurContactForm.tsx:53` |
| 63 | 🟢 LATER | Salem city page → Contact form → Mobile number input (greyed hint text) | Same — shows "+91 XXXXX XXXXX" before user types. | | `src/app/salem/SalemContactForm.tsx:53` |
| 64 | 🟢 LATER | Namakkal city page → Contact form → Mobile number input (greyed hint text) | Same — shows "+91 XXXXX XXXXX" before user types. | | `src/app/namakkal/NamakkalContactForm.tsx:53` |

---

## Section G — City Landing Pages: Student Testimonials ⚪ HIDDEN

> ⚪ The student testimonials section on all five city pages is **currently switched off** — it does not appear to any visitors. Real student stories are needed before this section can be turned on. For each student provide: (1) full name, (2) course, (3) batch/graduation year, (4) current employer or next step, (5) a quote in their own words.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 65 | ⚪ HIDDEN | Coimbatore city page → Student Testimonials section (switched off) | 2 real student testimonials from students who came from or near Coimbatore — name, course, batch year, employer/outcome, and a quote. | | `src/app/coimbatore/page.tsx:1315` — wrapped in `{false && (…)}` — remove `false` to activate |
| 66 | ⚪ HIDDEN | Erode city page → Student Testimonials section (switched off) | 2 real student testimonials from students from or near Erode — name, course, batch year, employer/outcome, and a quote. | | `src/app/erode/page.tsx:1084` — wrapped in `{false && (…)}` |
| 67 | ⚪ HIDDEN | Tiruppur city page → Student Testimonials section (switched off) | 2 real student testimonials from students from or near Tiruppur — name, course, batch year, employer/outcome, and a quote. | | `src/app/tiruppur/page.tsx:952` — wrapped in `{false && (…)}` |
| 68 | ⚪ HIDDEN | Salem city page → Student Testimonials section (switched off) | 2 real student testimonials from students from or near Salem — name, course, batch year, employer/outcome, and a quote. | | `src/app/salem/page.tsx:1065` — wrapped in `{false && (…)}` |
| 69 | ⚪ HIDDEN | Namakkal city page → Student Testimonials section (switched off) | 2 real student testimonials from students from or near Namakkal — name, course, batch year, employer/outcome, and a quote. | | `src/app/namakkal/page.tsx:935` — wrapped in `{false && (…)}` |

---

## Section H — Homepage: Hero Section Commented-Out Code ⚪ HIDDEN

> ⚪ These items are commented out — they do **not appear to any visitors**. No content team action is needed unless you want to activate a specific element. The developer decides whether to activate or permanently delete each one.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|-------------------------|-------------|---------------|
| 70 | ⚪ HIDDEN | Homepage → Hero → Alternative college name heading (commented out) | An alternative two-line heading ("JKKN College / of Arts & Science (Autonomous)") is commented out. Not visible. Developer decides whether to restore or delete. | | `src/components/home/HeroSection.tsx:34–38` |
| 71 | ⚪ HIDDEN | Homepage → Hero → Top Company Placements callout (commented out) | A "Top Company Placements" box listing TCS, Infosys, Wipro, Cognizant, HCL, Accenture is commented out. **If activating:** confirm all listed companies are actual JKKN CAS recruiters first. | Are all six companies confirmed JKKN CAS recruiters? | `src/components/home/HeroSection.tsx:73–84` |
| 72 | ⚪ HIDDEN | Homepage → Hero → NAAC A+ and Autonomous badges (commented out) | Two credibility badges are built but hidden. **If activating:** confirm NAAC A+ accreditation is currently valid and state the grade/year. | Is NAAC A+ current? Grade & year: | `src/components/home/HeroSection.tsx:136–163` |
| 73 | ⚪ HIDDEN | Homepage → Hero → Scroll-down arrow indicator (commented out) | A decorative animated "Scroll ↓" arrow is commented out. Purely cosmetic — no content needed. Developer decision. | | `src/components/home/HeroSection.tsx:165–174` |

---

## Information to Collect — Grouped by Department

### 📸 From the Media / Photography Team

- [ ] Real photographs of each department's facilities (labs, libraries, computer rooms, seminar halls) — needed for **27 programme pages**. Landscape format preferred (minimum 400×200 px, higher is better).
- [ ] A genuine JKKN CAS campus or campus-life photo to replace the stock image on the **Homepage → About JKKN section**.
- [ ] Name photos by facility (e.g., `chemistry-lab.jpg`, `english-library.jpg`) to make it easier to match them to the correct programme page.

### 📞 From the Admissions / Enquiry Team

- [ ] Real phone number to display for **Erode**-area student enquiries (row 28)
- [ ] Real phone number to display for **Coimbatore**-area enquiries (row 29)
- [ ] Real phone number to display for **Tiruppur**-area enquiries (row 30)
- [ ] Real phone number to display for **Salem**-area enquiries (row 31)
- [ ] Real phone number to display for **Namakkal**-area enquiries (row 32)

### 📊 From the Administration / IQAC Team

- [ ] Confirm the **placement rate** shown on the homepage: is "95%" correct, which batch year, how calculated? (row 34)
- [ ] Confirm the **student enrolment count** shown on the homepage: is "1300+" correct? (row 35)
- [ ] Confirm whether **NAAC A+ accreditation** is currently active and provide the grade/year (row 72 — badge is ready but hidden)
- [ ] Confirm whether **TCS, Infosys, Wipro, Cognizant, HCL, Accenture** are current/recent JKKN CAS campus recruiters (row 71 — recruiter callout is hidden)

### 🎓 From Alumni Relations / Student Affairs (for hidden testimonial sections — rows 65–69)

- [ ] 2 real testimonials from students from **Coimbatore** or nearby — full name, course, batch year, current employer/outcome, and a quote in their own words
- [ ] 2 real testimonials from students from **Erode** or nearby
- [ ] 2 real testimonials from students from **Tiruppur** or nearby
- [ ] 2 real testimonials from students from **Salem** or nearby
- [ ] 2 real testimonials from students from **Namakkal** or nearby

### 🔗 Developer Tasks (no content input needed — internal fixes)

- [ ] Fix **19 broken `href="#"` links** in the "Explore Similar Programmes" section across 19 programme pages — replace with real internal page URLs (rows 36–54)
- [ ] Update **"Your City" field label** to "City" or "Current City" on all 5 city contact forms (rows 55–59)
- [ ] Decide whether to keep or permanently remove the **4 commented-out blocks** in `HeroSection.tsx` (rows 70–73)

---

*Prepared by Developer — 24 April 2026 | No code was modified during this audit | Site: cas.jkkn.ac.in*
