// User's choice 2026-11-24: the Arts website shows no placement numbers and no salary amounts; job roles and
// recruiter names stay. The course blogs come from MyJKKN (BLOG_SOURCE=myjkkn), so their figures are taken out
// at render time, the same contract as the engineering site's blog override: nothing in MyJKKN is edited, a
// post edited at the source no longer matches and passes through, and one git revert undoes it.
//   1. tables: a column whose header names salary / package / LPA / CTC is dropped (cells + <col>)
//   2. sentences: exact before -> after, read from the MyJKKN public API on 2026-11-24 (amounts out, roles kept)
//   3. the "What our own claim says" section of the placement-questions post (it only quoted a 95% claim)

/** The 38 posts read on 2026-11-24 that carried a salary figure. Other posts pass through untouched. */
export const PLACEMENT_FIGURE_SLUGS: ReadonlySet<string> = new Set([
  "ba-english-aided-course-fees-scope-careers-2026",
  "ba-english-self-finance-course-fees-careers-scope-2026",
  "ba-history-course-details-fees-scope-careers-2026",
  "bachelor-of-commerce-accounting-finance-course-fees-careers-ca-pathway-2026",
  "bachelor-of-commerce-aided-course-fees-scope-career-guide-2026",
  "bachelor-of-commerce-artificial-intelligence-course-fees-careers-future-scope-2026",
  "bachelor-of-commerce-banking-insurance-course-fees-jobs-ibps-pathway-2026",
  "bachelor-of-commerce-computer-applications-course-fees-jobs-scope-2026",
  "bachelor-of-science-ai-data-science-course-fees-careers-scope-2026",
  "bachelor-of-science-chemistry-course-fees-scope-careers-2026",
  "bachelor-of-science-computer-science-course-details-fees-scope-jobs-2026",
  "bachelor-of-science-cyber-security-course-details-fees-jobs-salary-2026",
  "bachelor-of-science-mathematics-course-details-fees-careers-scope-2026",
  "bachelor-of-science-microbiology-course-details-fees-careers-scope-2026",
  "bachelor-of-science-physics-course-details-fees-careers-scope-2026",
  "bachelor-of-science-textile-fashion-designing-course-fees-jobs-scope-2026",
  "bachelor-of-science-visual-communication-ai-future-course-fees-careers-2026",
  "bachelor-of-science-visual-communication-course-fees-jobs-scope-2026",
  "bachelor-of-science-zoology-course-details-fees-scope-careers-2026",
  "bba-course-details-fees-salary-career-scope-2026-a-practical-guide",
  "bca-course-details-fees-jobs-scope-2026-a-complete-guide",
  "career-paths-after-bsc-computer-science",
  "ma-english-course-fees-careers-scope-2026",
  "ma-history-course-fees-careers-scope-2026",
  "master-of-computer-applications-mca-course-details-fees-jobs-scope-2026",
  "master-of-science-chemistry-course-fees-research-careers-2026",
  "master-of-science-computer-science-aided-course-fees-careers-scope-2026",
  "master-of-science-computer-science-self-finance-course-fees-careers-2026",
  "master-of-science-cs-data-analytics-course-fees-careers-scope-2026",
  "master-of-science-mathematics-course-fees-careers-scope-2026",
  "master-of-science-physics-course-fees-research-careers-2026",
  "master-of-science-zoology-course-fees-research-careers-2026",
  "mcom-aided-course-fees-careers-scope-2026",
  "mcom-self-finance-course-fees-careers-2026",
  "phd-chemistry-research-eligibility-careers-2026",
  "phd-tamil-research-eligibility-careers-2026",
  "phd-zoology-research-eligibility-careers-2026",
  "placements-at-an-arts-and-science-college-what-to-ask",
])

type Rule = readonly [old: string, next: string]

export const SENTENCE_RULES: Readonly<Record<string, readonly Rule[]>> = {
  "ba-english-aided-course-fees-scope-careers-2026": [
    [
      "<p>Higher studies (M.A. + NET / SET + Ph.D.) lead to lecturer / professor careers at <strong>₹7–15 LPA+</strong>. Senior editors, journalists, and authors can earn far more depending on platform and reputation. UPSC officers reach <strong>₹15–30 LPA+</strong> at senior grades.</p>",
      "<p>Higher studies (M.A. + NET / SET + Ph.D.) lead to lecturer / professor careers. Senior editors, journalists, and authors grow depending on platform and reputation, and UPSC officers move up through senior grades.</p>",
    ],
  ],
  "bachelor-of-commerce-accounting-finance-course-fees-careers-ca-pathway-2026": [
    [
      "<p>The biggest salary upside comes from professional qualifications — <strong>CA Final + Bachelor of Commerce A&amp;F</strong> graduates start at <strong>₹8–14 LPA</strong> with Big-4, and reach <strong>₹25 LPA+</strong> within 4–5 years. CMA, CFA, ACCA add similar premiums. Even without pursuing CA, Bachelor of Commerce A&amp;F + 2–3 years of work experience in a captive can put you at <strong>₹6–10 LPA</strong>.</p>",
      "<p>The biggest salary upside comes from professional qualifications — <strong>CA Final + Bachelor of Commerce A&amp;F</strong> graduates can start with Big-4 firms and grow quickly within 4–5 years. CMA, CFA, ACCA add similar premiums. Even without pursuing CA, Bachelor of Commerce A&amp;F + 2–3 years of work experience in a captive can lift your pay.</p>",
    ],
  ],
  "bachelor-of-commerce-artificial-intelligence-course-fees-careers-future-scope-2026": [
    [
      "<p>The combination of commerce fluency + AI fluency commands a premium. After 2–4 years of experience plus an Master of Business Administration (MBA) Analytics or Master of Science Data Science, Bachelor of Commerce AI graduates can comfortably reach <strong>₹12–22 LPA</strong>. Top FinTech firms and quant funds pay even higher to AI-savvy commerce graduates.</p>",
      "<p>The combination of commerce fluency + AI fluency commands a premium. After 2–4 years of experience plus an Master of Business Administration (MBA) Analytics or Master of Science Data Science, Bachelor of Commerce AI graduates can move into senior analytics roles. Top FinTech firms and quant funds value AI-savvy commerce graduates.</p>",
    ],
  ],
  "bachelor-of-commerce-banking-insurance-course-fees-jobs-ibps-pathway-2026": [
    [
      "<p>Government banking jobs have job security, pension, predictable career progression, and pay <strong>₹3.5–7 LPA</strong> at PO entry level — increasing to <strong>₹10–18 LPA</strong> at Scale 3 / 4 within 8–10 years. Private banks pay similarly at entry, with faster growth for top performers.</p>",
      "<p>Government banking jobs have job security, pension, predictable career progression, and pay that rises from PO entry level to Scale 3 / 4 within 8–10 years. Private banks pay similarly at entry, with faster growth for top performers.</p>",
    ],
    [
      "<p>The PSU banking track is the most predictable — clear IBPS / State Bank of India (SBI) exams, get a 5.5–7.5 LPA starting package, and grow with pension and senior management responsibilities over 30+ years. The private + FinTech track offers faster but more volatile growth — top performers can reach <strong>₹15–25 LPA</strong> in 5–7 years.</p>",
      "<p>The PSU banking track is the most predictable — clear IBPS / State Bank of India (SBI) exams, join at the entry scale, and grow with pension and senior management responsibilities over 30+ years. The private + FinTech track offers faster but more volatile growth — top performers can move up quickly in 5–7 years.</p>",
    ],
  ],
  "bachelor-of-commerce-computer-applications-course-fees-jobs-scope-2026": [
    [
      "<p>Higher studies pathway is equally strong. Bachelor of Commerce CA students routinely move into <strong>Master of Commerce, Master of Business Administration (MBA) (Finance / Analytics), CA, CMA, CS, CFA, ACCA, Master of Science Data Science</strong>. With a professional qualification on top of Bachelor of Commerce CA, your 5-year salary trajectory can comfortably reach <strong>₹10–18 LPA</strong>. Even without further study, a Bachelor of Commerce CA + 3-year experience in an MNC captive (Bengaluru, Chennai, Coimbatore, Hyderabad) can put you at <strong>₹6–10 LPA</strong>.</p>",
      "<p>Higher studies pathway is equally strong. Bachelor of Commerce CA students routinely move into <strong>Master of Commerce, Master of Business Administration (MBA) (Finance / Analytics), CA, CMA, CS, CFA, ACCA, Master of Science Data Science</strong>. A professional qualification on top of Bachelor of Commerce CA lifts your 5-year salary trajectory. Even without further study, a Bachelor of Commerce CA + 3-year experience in an MNC captive (Bengaluru, Chennai, Coimbatore, Hyderabad) can lift your pay.</p>",
    ],
  ],
  "bachelor-of-science-ai-data-science-course-fees-careers-scope-2026": [
    [
      "<p>After 2–4 years of experience plus an MS Data Science or Master of Technology AI, Bachelor of Science AI &amp; DS graduates routinely reach <strong>₹12–25 LPA</strong> at product companies and GICs. International opportunities — US, Canada, Singapore, Germany — open up through MS programmes.</p>",
      "<p>After 2–4 years of experience plus an MS Data Science or Master of Technology AI, Bachelor of Science AI &amp; DS graduates can move into senior roles at product companies and GICs. International opportunities — US, Canada, Singapore, Germany — open up through MS programmes.</p>",
    ],
  ],
  "bachelor-of-science-chemistry-course-fees-scope-careers-2026": [
    [
      "<p>The big upside comes from higher studies: <strong>Master of Science Chemistry + Ph.D.</strong> leads to scientist / faculty careers at <strong>₹8–15 LPA+</strong>. <strong>Master of Science + M.B.A.</strong> opens corporate roles in pharma/chemical companies. <strong>M.Pharm</strong> after Bachelor of Science Chemistry leads to drug regulatory affairs, formulation R&amp;D, clinical research at <strong>₹6–12 LPA</strong>.</p>",
      "<p>The big upside comes from higher studies: <strong>Master of Science Chemistry + Ph.D.</strong> leads to scientist / faculty careers. <strong>Master of Science + M.B.A.</strong> opens corporate roles in pharma/chemical companies. <strong>M.Pharm</strong> after Bachelor of Science Chemistry leads to drug regulatory affairs, formulation R&amp;D and clinical research.</p>",
    ],
  ],
  "bachelor-of-science-computer-science-course-details-fees-scope-jobs-2026": [
    [
      "<p>After Master of Science CS / Master of Computer Applications (MCA) / M.Tech, salaries scale to <strong>₹8–15 LPA</strong>. Top product-company / GIC packages for Bachelor of Science CS + Master of Science Data Science combinations can reach <strong>₹15–25 LPA</strong> within 2–4 years of experience.</p>",
      "<p>After Master of Science CS / Master of Computer Applications (MCA) / M.Tech, salaries grow further. Top product-company / GIC roles open up for Bachelor of Science CS + Master of Science Data Science combinations within 2–4 years of experience.</p>",
    ],
  ],
  "bachelor-of-science-cyber-security-course-details-fees-jobs-salary-2026": [
    [
      "<p>Cyber security salaries grow faster than generic IT roles. With 2–4 years experience and a certification stack (CEH, OSCP, CISSP-track, Amazon Web Services (AWS) Security Specialty), Bachelor of Science Cyber Security graduates routinely reach <strong>₹10–18 LPA</strong>. Senior security architects and incident response leads command <strong>₹25–45 LPA+</strong> in MNCs and BFSI.</p>",
      "<p>Cyber security salaries grow faster than generic IT roles. With 2–4 years experience and a certification stack (CEH, OSCP, CISSP-track, Amazon Web Services (AWS) Security Specialty), Bachelor of Science Cyber Security graduates can move into senior security roles. Senior security architects and incident response leads are in demand in MNCs and BFSI.</p>",
    ],
  ],
  "bachelor-of-science-mathematics-course-details-fees-careers-scope-2026": [
    [
      "<li><p><strong>FinTech, banking, and actuarial growth</strong> — Quant analysts, risk modellers, actuaries, and credit risk specialists all need deep maths. Indian Institute of Actuaries (IAI) actuaries earn ₹15–50 LPA after qualification.</p></li>",
      "<li><p><strong>FinTech, banking, and actuarial growth</strong> — Quant analysts, risk modellers, actuaries, and credit risk specialists all need deep maths. Indian Institute of Actuaries (IAI) qualifications open actuarial careers.</p></li>",
    ],
    [
      "<p>With Master of Science Mathematics / Master of Science Data Science / Master of Science Statistics, salaries scale to <strong>₹8–15 LPA</strong>. Senior actuaries with FIAI qualification reach <strong>₹30–50 LPA+</strong>. Faculty roles after PhD start at <strong>₹6–10 LPA</strong> and grow steadily.</p>",
      "<p>With Master of Science Mathematics / Master of Science Data Science / Master of Science Statistics, salaries grow further. Actuaries who complete the FIAI qualification move into senior roles. Faculty roles after PhD grow steadily.</p>",
    ],
  ],
  "bachelor-of-science-microbiology-course-details-fees-careers-scope-2026": [
    [
      "<p>With <strong>Master of Science Microbiology / Master of Science Biotech / M.Pharm</strong>, salaries reach <strong>₹6–12 LPA</strong>. PhD scientists in pharma R&amp;D and academia earn <strong>₹10–25 LPA+</strong>. Microbiologists working in vaccine R&amp;D at top firms (Serum, Bharat Biotech) command premium compensation.</p>",
      "<p>With <strong>Master of Science Microbiology / Master of Science Biotech / M.Pharm</strong>, salaries grow further. PhD scientists work in pharma R&amp;D and academia. Microbiologists working in vaccine R&amp;D at top firms (Serum, Bharat Biotech) command premium compensation.</p>",
    ],
  ],
  "bachelor-of-science-physics-course-details-fees-careers-scope-2026": [
    [
      "<p>Higher studies — <strong>Master of Science Physics, Master of Science Data Science, M.Tech (Electronics / Photonics)</strong> — open <strong>₹8–18 LPA</strong> roles. Physics PhD scientists at Indian Space Research Organisation (ISRO)/CSIR/IITs earn <strong>₹12–20 LPA+</strong> with strong job security and research freedom.</p>",
      "<p>Higher studies — <strong>Master of Science Physics, Master of Science Data Science, M.Tech (Electronics / Photonics)</strong> — open better-paid roles. Physics PhD scientists at Indian Space Research Organisation (ISRO)/CSIR/IITs have strong job security and research freedom.</p>",
    ],
  ],
  "bachelor-of-science-textile-fashion-designing-course-fees-jobs-scope-2026": [
    [
      "<p>Top fashion designers in India (post 5–10 years experience) earn <strong>₹12–35 LPA+</strong> at premium fashion houses, retail brands, and as creative directors. Entrepreneurial success in fashion is uncapped — many TN-based D2C brands have crossed ₹50 crore revenue.</p>",
      "<p>Top fashion designers in India (post 5–10 years experience) build careers at premium fashion houses, retail brands, and as creative directors. Entrepreneurial success in fashion is uncapped — many TN-based D2C brands have crossed ₹50 crore revenue.</p>",
    ],
  ],
  "bachelor-of-science-visual-communication-ai-future-course-fees-careers-2026": [
    [
      "<p>Salary outlook: AI-fluent designers earn <strong>20–40% more</strong> than traditional designers at entry level (industry surveys, 2025). Specialist prompt engineers and AI motion designers command <strong>₹6–12 LPA</strong> entry packages, scaling fast.</p>",
      "<p>Career outlook: AI-fluent designers are in demand, and specialist roles such as prompt engineers and AI motion designers are growing fast.</p>",
    ],
  ],
  "bachelor-of-science-visual-communication-course-fees-jobs-scope-2026": [
    [
      "<p>Top creative leads in agencies, top film editors, and seasoned art directors reach <strong>₹15–35 LPA+</strong> after 5–10 years. Independent designers and successful content creators can earn far more, depending on niche and brand-building.</p>",
      "<p>Top creative leads in agencies, top film editors, and seasoned art directors grow into senior roles after 5–10 years. Independent designers and successful content creators build their careers depending on niche and brand-building.</p>",
    ],
  ],
  "bachelor-of-science-zoology-course-details-fees-scope-careers-2026": [
    [
      "<p>Higher studies in Master of Science Zoology, Master of Science Wildlife, Master of Science Biotech, or PhD lead to <strong>₹6–15 LPA+</strong> research, faculty, and senior government wildlife roles. UPSC IFS officers reach ₹12–25 LPA grade pay with significant authority and impact.</p>",
      "<p>Higher studies in Master of Science Zoology, Master of Science Wildlife, Master of Science Biotech, or PhD lead to research, faculty, and senior government wildlife roles. UPSC IFS officers carry significant authority and impact.</p>",
    ],
  ],
  "bba-course-details-fees-salary-career-scope-2026-a-practical-guide": [
    [
      "<p>BBA salaries scale fast with experience and an Master of Business Administration (MBA). Within 5 years, BBA + Master of Business Administration (MBA) graduates from tier-2 colleges routinely reach <strong>₹8–15 LPA</strong>. From tier-1 Master of Business Administration (MBA) colleges (IIM / XLRI / FMS), packages climb to <strong>₹18–30 LPA</strong>. Entrepreneurs who use BBA to formalise and scale family businesses see even larger long-term wealth creation.</p>",
      "<p>BBA salaries scale with experience and an Master of Business Administration (MBA). Within 5 years, BBA + Master of Business Administration (MBA) graduates move into management roles, and graduates of tier-1 Master of Business Administration (MBA) colleges (IIM / XLRI / FMS) move faster. Entrepreneurs who use BBA to formalise and scale family businesses see larger long-term wealth creation.</p>",
    ],
  ],
  "bca-course-details-fees-jobs-scope-2026-a-complete-guide": [
    [
      "<p>With 2–4 years of experience plus a relevant certification (Amazon Web Services Solutions Architect, Microsoft Azure, Cisco Certified Network Associate (CCNA), Salesforce Admin, or specialisations in React / Node / Python), BCA graduates routinely move into <strong>₹8–14 LPA</strong> roles. Those who pursue Master of Computer Applications (MCA), Master of Business Administration (MBA) in Analytics, or Master of Science in Data Science right after BCA can target <strong>₹10–20 LPA</strong> starting packages from product companies.</p>",
      "<p>With 2–4 years of experience plus a relevant certification (Amazon Web Services Solutions Architect, Microsoft Azure, Cisco Certified Network Associate (CCNA), Salesforce Admin, or specialisations in React / Node / Python), BCA graduates can move into senior roles. Those who pursue Master of Computer Applications (MCA), Master of Business Administration (MBA) in Analytics, or Master of Science in Data Science right after BCA can target product companies.</p>",
    ],
    [
      "<p>Picking the right BCA college matters more than people realise — the same degree from a campus with weak placement support and outdated labs vs. one with strong industry tie-ups can mean a 3–5 LPA salary difference at graduation. Here is what makes JKKN a strong choice for BCA in Tamil Nadu:</p>",
      "<p>Picking the right BCA college matters more than people realise — the same degree from a campus with weak placement support and outdated labs vs. one with strong industry tie-ups can make a real difference at graduation. Here is what makes JKKN a strong choice for BCA in Tamil Nadu:</p>",
    ],
  ],
  "career-paths-after-bsc-computer-science": [
    [
      "Industry partnerships with NASSCOM, CII, TCS, Infosys, Wipro, and 50+ recruiters support student placements and internships.",
      "Industry partnerships with NASSCOM, CII, TCS, Infosys and Wipro support student placements and internships.",
    ],
  ],
  "master-of-computer-applications-mca-course-details-fees-jobs-scope-2026": [
    [
      "<li><p><strong>Higher entry salaries</strong> than BCA-only — typically <strong>₹1–2 LPA more</strong> at the same companies.</p></li>",
      "<li><p><strong>Higher entry salaries</strong> than BCA-only at the same companies.</p></li>",
    ],
    [
      "<p>With 3-5 years experience and a strong skill stack, Master of Computer Applications (MCA) graduates routinely reach <strong>₹10–18 LPA</strong>. Senior software architects, engineering managers, and AI engineers can reach <strong>₹25 LPA+</strong>.</p>",
      "<p>With 3-5 years experience and a strong skill stack, Master of Computer Applications (MCA) graduates can move into senior roles such as software architect, engineering manager and AI engineer.</p>",
    ],
  ],
  "master-of-science-cs-data-analytics-course-fees-careers-scope-2026": [
    [
      "<p>With 3–5 years of experience, data professionals routinely reach <strong>₹12–22 LPA</strong>. Senior data scientists and analytics leads at product companies command <strong>₹25–40 LPA+</strong>.</p>",
      "<p>With 3–5 years of experience, data professionals can move into senior data scientist and analytics lead roles at product companies.</p>",
    ],
  ],
  "master-of-science-mathematics-course-fees-careers-scope-2026": [
    [
      "<li><p><strong>Actuarial career</strong> — Indian Institute of Actuaries (IAI) qualifications combined with Master of Science Maths lead to ₹15–50 LPA careers</p></li>",
      "<li><p><strong>Actuarial career</strong> — Indian Institute of Actuaries (IAI) qualifications combined with Master of Science Maths lead to actuarial careers</p></li>",
    ],
  ],
}

const CLAIM_POST = 'placements-at-an-arts-and-science-college-what-to-ask'
const CLAIM_HEADING = '<h2>What our own claim says, and what is wrong with it</h2>'

const PAY_HEADER = /salar|package|\bLPA\b|\bCTC\b/i
const TABLE = /<table\b[\s\S]*?<\/table>/g
const ROW = /<tr\b[^>]*>[\s\S]*?<\/tr>/g
const CELL = /<t([hd])\b[^>]*>[\s\S]*?<\/t\1>/g
const COLGROUP = /<colgroup>[\s\S]*?<\/colgroup>/
const COL = /<col\b[^>]*>/g

function textOf(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

/** Drops every column whose header cell names pay. Leaves the table as it is when the shape is not a plain grid. */
export function dropPayColumns(table: string): string {
  const rows = table.match(ROW)
  if (!rows || rows.length === 0) return table
  const head = rows[0].match(CELL) ?? []
  const drop = head.map((cell, i) => (PAY_HEADER.test(textOf(cell)) ? i : -1)).filter((i) => i >= 0)
  if (drop.length === 0 || drop.length === head.length) return table
  let out = table
  for (const row of rows) {
    const cells = [...row.matchAll(CELL)]
    if (cells.length !== head.length) return table
    let next = row
    for (const i of [...drop].reverse()) {
      const start = cells[i].index ?? 0
      next = next.slice(0, start) + next.slice(start + cells[i][0].length)
    }
    out = out.replace(row, () => next)
  }
  const group = out.match(COLGROUP)
  if (group) {
    const cols = group[0].match(COL) ?? []
    if (cols.length === head.length) {
      const kept = cols.filter((_, i) => !drop.includes(i)).join('')
      out = out.replace(group[0], () => `<colgroup>${kept}</colgroup>`)
    }
  }
  const keep = head.length - drop.length
  return out.replace(/^<table style="min-width:\s*\d+px(;?)"/, (_m, semi: string) => `<table style="min-width:${25 * keep}px${semi}"`)
}

/** The post HTML without salary columns, salary amounts or the 95% claim section. */
export function withoutPlacementFigures(slug: string, html: string): string {
  if (!html || !PLACEMENT_FIGURE_SLUGS.has(slug)) return html
  let out = html.replace(TABLE, (table) => dropPayColumns(table))
  for (const [old, next] of SENTENCE_RULES[slug] ?? []) {
    if (out.includes(old)) out = out.split(old).join(next)
  }
  if (slug === CLAIM_POST) {
    const start = out.indexOf(CLAIM_HEADING)
    const end = start >= 0 ? out.indexOf('<h2', start + CLAIM_HEADING.length) : -1
    if (start >= 0 && end > start) out = out.slice(0, start) + out.slice(end)
  }
  return out
}
