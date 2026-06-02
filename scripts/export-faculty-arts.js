// Faculty export script — Arts & Science College (college_id: arts)
// Outputs: faculty_arts_complete.xlsx (single sheet, all fields, styled)

const { createClient } = require('@supabase/supabase-js');
const ExcelJS = require('exceljs');
const path = require('path');

const SUPABASE_URL = 'https://czjzizrzmqcdwgtxwuks.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6anppenJ6bXFjZHdndHh3dWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMTY1OTMsImV4cCI6MjA4NzU5MjU5M30.Kv-nlx7-F7KFIQWr5NNj9OIELkD1iKhgTB_QLm1sIVU';
const COLLEGE_ID = 'arts';

// ── Helpers ───────────────────────────────────────────────────────────────────

function str(val) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'boolean') return val ? 'Yes' : 'No';
  return String(val);
}

function jsonStr(val) {
  if (!val || (Array.isArray(val) && val.length === 0)) return '';
  return JSON.stringify(val, null, 0);
}

// Flatten academic_qualifications array → readable multi-line string
function fmtAcademicQuals(arr) {
  if (!arr || !arr.length) return '';
  return arr
    .map((q) => `${q.degree || ''} | ${q.specialisation || ''} | ${q.university || ''} | ${q.year || ''}`)
    .join('\n');
}

// Flatten experience array
function fmtExperience(arr) {
  if (!arr || !arr.length) return '';
  return arr
    .map(
      (e) =>
        `[${e.type || ''}] ${e.role || ''} @ ${e.institution || ''} (${e.period_start || ''} - ${e.period_end || ''}) — ${e.description || ''}`
    )
    .join('\n');
}

// Flatten publications array
function fmtPublications(arr) {
  if (!arr || !arr.length) return '';
  return arr
    .map(
      (p) =>
        `${p.title || ''} | ${p.authors || ''} | ${p.journal || ''} | ${p.year || ''} | DOI: ${p.doi_url || ''} | PubMed: ${p.pubmed_url || ''}`
    )
    .join('\n');
}

// Flatten funded_research array
function fmtFundedResearch(arr) {
  if (!arr || !arr.length) return '';
  return arr
    .map((r) => `${r.project || ''} | ${r.agency || ''} | ${r.amount || ''} | ${r.period || ''} | ${r.status || ''}`)
    .join('\n');
}

// Flatten certifications
function fmtCertifications(arr) {
  if (!arr || !arr.length) return '';
  return arr.map((c) => `${c.name || ''} | ${c.organisation || ''} | ${c.year || ''}`).join('\n');
}

// Flatten awards
function fmtAwards(arr) {
  if (!arr || !arr.length) return '';
  return arr.map((a) => `${a.award || ''} | ${a.body || ''} | ${a.year || ''}`).join('\n');
}

// Flatten memberships
function fmtMemberships(arr) {
  if (!arr || !arr.length) return '';
  return arr.map((m) => `${m.organisation || ''} | ${m.type || ''} | Since: ${m.since || ''}`).join('\n');
}

// Flatten phd_scholars
function fmtPhdScholars(arr) {
  if (!arr || !arr.length) return '';
  return arr.map((s) => `${s.scholar || ''} | ${s.research_topic || ''} | ${s.status || ''}`).join('\n');
}

// Flatten faqs
function fmtFaqs(arr) {
  if (!arr || !arr.length) return '';
  return arr.map((f) => `Q: ${f.question || ''}\nA: ${f.answer || ''}`).join('\n\n');
}

// ── Column definitions ────────────────────────────────────────────────────────

const COLUMNS = [
  // Basic Info
  { header: 'S.No', key: 'sno', width: 6 },
  { header: 'Name', key: 'name', width: 30 },
  { header: 'Designation', key: 'designation', width: 22 },
  { header: 'Department', key: 'department', width: 30 },
  { header: 'Qualification', key: 'qualification', width: 30 },
  { header: 'URL Slug', key: 'slug', width: 28 },
  { header: 'Photo URL', key: 'photo_url', width: 50 },
  { header: 'Display Order', key: 'display_order', width: 14 },
  { header: 'Experience (Years)', key: 'experience_years', width: 18 },
  { header: 'Research Papers Count', key: 'research_papers_count', width: 22 },
  { header: 'PhD Scholars Count', key: 'phd_scholars_count', width: 20 },
  { header: 'Awards Won Count', key: 'awards_won_count', width: 18 },
  { header: 'Email', key: 'email', width: 32 },
  { header: 'Status', key: 'status', width: 10 },
  { header: 'Aided/Self-Finance', key: 'aided_or_self', width: 18 },
  { header: 'Professional Summary', key: 'summary', width: 60 },
  // Academic
  { header: 'Academic Qualifications', key: 'academic_qualifications', width: 70 },
  { header: 'Areas of Specialisation', key: 'areas_of_specialisation', width: 50 },
  // Experience
  { header: 'Experience Details', key: 'experience', width: 80 },
  // Research
  { header: 'Research Focus', key: 'research_focus', width: 50 },
  { header: 'Publications', key: 'publications', width: 100 },
  { header: 'Funded Research', key: 'funded_research', width: 80 },
  { header: 'Google Scholar URL', key: 'google_scholar_url', width: 40 },
  { header: 'ResearchGate URL', key: 'researchgate_url', width: 40 },
  { header: 'ORCID URL', key: 'orcid_url', width: 35 },
  // Achievements
  { header: 'Certifications', key: 'certifications', width: 60 },
  { header: 'Awards & Recognitions', key: 'awards', width: 60 },
  { header: 'Professional Memberships', key: 'memberships', width: 60 },
  { header: 'Badges', key: 'badges', width: 40 },
  // Mentoring
  { header: 'Mentoring Description', key: 'mentoring_description', width: 60 },
  { header: 'PG Dissertations Guided', key: 'pg_dissertations_guided', width: 24 },
  { header: 'UG Projects Guided', key: 'ug_projects_guided', width: 20 },
  { header: 'PhD Scholars', key: 'phd_scholars', width: 60 },
  // FAQs
  { header: 'FAQs', key: 'faqs', width: 80 },
];

// ── Styles ────────────────────────────────────────────────────────────────────

const HEADER_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0B6D41' } };
const HEADER_FONT = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11, name: 'Calibri' };
const HEADER_ALIGNMENT = { vertical: 'middle', horizontal: 'center', wrapText: true };
const BORDER_THIN = { style: 'thin', color: { argb: 'FFD0D0D0' } };
const CELL_BORDER = { top: BORDER_THIN, left: BORDER_THIN, bottom: BORDER_THIN, right: BORDER_THIN };

const ROW_EVEN_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F7F3' } };
const ROW_ODD_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } };

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Connecting to Supabase — college_id: ${COLLEGE_ID} …`);
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Fetch all faculty rows (paginate in case >1000)
  let allRows = [];
  let from = 0;
  const PAGE = 1000;
  while (true) {
    const { data, error } = await supabase
      .from('faculty')
      .select('*')
      .eq('college_id', COLLEGE_ID)
      .order('display_order', { ascending: true })
      .range(from, from + PAGE - 1);

    if (error) {
      console.error('Supabase error:', error.message);
      process.exit(1);
    }
    if (!data || data.length === 0) break;
    allRows = allRows.concat(data);
    if (data.length < PAGE) break;
    from += PAGE;
  }

  console.log(`Fetched ${allRows.length} faculty members.`);

  // Build workbook
  const wb = new ExcelJS.Workbook();
  wb.creator = 'JKKN Faculty Export';
  wb.created = new Date();

  const ws = wb.addWorksheet('Faculty', {
    views: [{ state: 'frozen', ySplit: 1 }], // freeze header row
    pageSetup: { paperSize: 9, orientation: 'landscape' },
  });

  // Set columns
  ws.columns = COLUMNS;

  // Style header row
  const headerRow = ws.getRow(1);
  headerRow.height = 30;
  COLUMNS.forEach((_, ci) => {
    const cell = headerRow.getCell(ci + 1);
    cell.fill = HEADER_FILL;
    cell.font = HEADER_FONT;
    cell.alignment = HEADER_ALIGNMENT;
    cell.border = CELL_BORDER;
  });

  // Add data rows
  allRows.forEach((f, idx) => {
    const rowData = {
      sno: idx + 1,
      name: str(f.name),
      designation: str(f.designation),
      department: str(f.department),
      qualification: str(f.qualification),
      slug: str(f.slug),
      photo_url: str(f.photo_url),
      display_order: f.display_order ?? '',
      experience_years: f.experience_years ?? '',
      research_papers_count: f.research_papers_count ?? '',
      phd_scholars_count: f.phd_scholars_count ?? '',
      awards_won_count: f.awards_won_count ?? '',
      email: str(f.email),
      status: f.is_active ? 'Active' : 'Inactive',
      aided_or_self: str(f.aided_or_self),
      summary: str(f.summary),
      // Academic
      academic_qualifications: fmtAcademicQuals(f.academic_qualifications),
      areas_of_specialisation: Array.isArray(f.areas_of_specialisation)
        ? f.areas_of_specialisation.join('; ')
        : str(f.areas_of_specialisation),
      // Experience
      experience: fmtExperience(f.experience),
      // Research
      research_focus: Array.isArray(f.research_focus) ? f.research_focus.join('; ') : str(f.research_focus),
      publications: fmtPublications(f.publications),
      funded_research: fmtFundedResearch(f.funded_research),
      google_scholar_url: str(f.google_scholar_url),
      researchgate_url: str(f.researchgate_url),
      orcid_url: str(f.orcid_url),
      // Achievements
      certifications: fmtCertifications(f.certifications),
      awards: fmtAwards(f.awards),
      memberships: fmtMemberships(f.memberships),
      badges: Array.isArray(f.badges) ? f.badges.join('; ') : str(f.badges),
      // Mentoring
      mentoring_description: str(f.mentoring_description),
      pg_dissertations_guided: f.pg_dissertations_guided ?? '',
      ug_projects_guided: f.ug_projects_guided ?? '',
      phd_scholars: fmtPhdScholars(f.phd_scholars),
      // FAQs
      faqs: fmtFaqs(f.faqs),
    };

    const row = ws.addRow(rowData);
    row.height = 18;

    const fill = (idx + 1) % 2 === 0 ? ROW_EVEN_FILL : ROW_ODD_FILL;
    const textFont = { name: 'Calibri', size: 10 };

    COLUMNS.forEach((_, ci) => {
      const cell = row.getCell(ci + 1);
      cell.fill = fill;
      cell.font = textFont;
      cell.border = CELL_BORDER;
      cell.alignment = { vertical: 'top', wrapText: true };
    });
  });

  // Auto-filter on header row
  ws.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: COLUMNS.length },
  };

  // Output path
  const outPath = path.join(
    'd:\\Deepakkumar\\college_websites\\Arts-Science_College\\jkkn-cas-website',
    `faculty_${COLLEGE_ID}_complete.xlsx`
  );

  await wb.xlsx.writeFile(outPath);
  console.log(`\nExport complete → ${outPath}`);
  console.log(`Total rows: ${allRows.length}`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
