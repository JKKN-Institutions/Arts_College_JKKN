import { NextResponse } from 'next/server';
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from 'docx';

function makeTable(headers: string[], rows: string[][]): Table {
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map(
          (h) =>
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: h, bold: true })],
                }),
              ],
            })
        ),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map(
              (cell) =>
                new TableCell({
                  children: [new Paragraph({ text: cell })],
                })
            ),
          })
      ),
    ],
  });
}

function p(text: string): Paragraph {
  return new Paragraph({ text });
}

function h2(text: string): Paragraph {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2 });
}

export async function GET() {
  const doc = new Document({
    sections: [
      {
        children: [
          // ── Title ──
          new Paragraph({
            children: [
              new TextRun({
                text: 'JKKN College of Arts and Science — Blog Content Template',
                bold: true,
                size: 28,
              }),
            ],
            heading: HeadingLevel.HEADING_1,
          }),
          p('Instructions: Fill in your content under each heading below. Upload this .docx file in Step 2 of the admin panel to auto-populate the blog editor. You can review and edit each section before publishing.'),
          p('NOTE: Card details (title, category, tags, etc.) are entered directly in Step 1 of the admin form — not in this file.'),
          p(''),

          // ── Section 1 ──
          h2('Introduction'),
          p('[Write a 2–3 sentence factual summary that directly answers the main topic of this article. Start with the most important fact. This paragraph is what search engines and AI tools use for featured snippets.]'),
          p(''),

          // ── Section 2 ──
          h2('Key Information'),
          makeTable(
            ['Topic', 'Details'],
            [
              ['Programme Name', '[e.g. B.Sc. Chemistry / BCA / M.Com]'],
              ['Duration', '[e.g. 3 Years / 2 Years]'],
              ['Type', '[Aided / Self-Finance]'],
              ['Affiliated To', 'Periyar University, Salem'],
              ['Accreditation', 'NAAC Accredited — JKKN College of Arts and Science (Autonomous)'],
            ]
          ),
          p(''),

          // ── Section 3 ──
          h2('Main Content Section'),
          p('[Write your main article content here. Use clear headings, short paragraphs, and bullet points for readability. Each paragraph should cover one idea.]'),
          p(''),

          // ── Section 4 ──
          h2('Eligibility / Requirements'),
          makeTable(
            ['Criteria', 'Requirement'],
            [
              ['Qualification', '[e.g. 10+2 / Bachelor\'s degree in relevant subject]'],
              ['Minimum Marks', '[e.g. 50% aggregate in qualifying examination]'],
              ['Age Limit', '[e.g. No upper age limit / As per norms]'],
              ['Admission Process', '[e.g. Based on merit / Entrance exam / Counseling]'],
            ]
          ),
          p(''),

          // ── Section 5 ──
          h2('Career Opportunities'),
          p('[Describe the career paths available after completing this programme at JKKN CAS. Be specific about roles, industries, and salary ranges where available.]'),
          p('Top career paths:'),
          p('1. [Career path 1 — describe role and industry]'),
          p('2. [Career path 2 — describe role and industry]'),
          p('3. [Career path 3 — describe role and industry]'),
          p(''),

          // ── Mid-CTA Banner ──
          h2('MID-CONTENT CTA BANNER'),
          p('Heading: [e.g. Interested in This Programme?]'),
          p('Description: [e.g. Apply now for admission 2026 at JKKN College of Arts and Science — Autonomous, Periyar University affiliated, near Erode, Tamil Nadu.]'),
          p('Button 1 Text: Apply Now →'),
          p('Button 2 Text: Contact Admissions'),
          p(''),

          // ── Section 6 ──
          h2('Why Choose JKKN College of Arts and Science?'),
          p('1. Autonomous Institution — JKKN College of Arts and Science holds Autonomous status granted by UGC and Periyar University, allowing independent curriculum design aligned with industry needs.'),
          p('2. NAAC Accredited — The institution is NAAC accredited, ensuring quality education standards recognized across India.'),
          p('3. Strong Placement Record — 90% placement rate with 60+ recruiting companies. Highest package: ₹12 LPA.'),
          p('4. Modern Infrastructure — Well-equipped laboratories, digital library, sports facilities, and separate hostels for boys and girls.'),
          p('5. Location Advantage — Situated on NH-544 at Komarapalayam, easily accessible from Salem (45 km), Erode (30 km), Namakkal (20 km), and Tiruchengode (15 km).'),
          p(''),

          // ── Section 7 ──
          h2('Admission Process 2026'),
          p('1. [Step 1 — e.g. Check eligibility for the programme]'),
          p('2. [Step 2 — e.g. Submit application online or at the admissions office]'),
          p('3. [Step 3 — e.g. Document verification]'),
          p('4. [Step 4 — e.g. Counseling / merit-based selection]'),
          p('5. [Step 5 — e.g. Fee payment and enrolment]'),
          p('Contact JKKN CAS Admissions: +91-4288-274386'),
          p(''),

          // ── Section 8 - FAQs ──
          h2('Frequently Asked Questions'),
          p("(Format: Each question on its own line starting with 'Q:' and each answer on its own line starting with 'A:'. Add more Q/A pairs as needed.)"),
          p('Q: What is the eligibility for admission to [Programme Name] at JKKN College of Arts and Science?'),
          p("A: [Describe eligibility criteria — qualification, minimum marks, age limit, etc.]"),
          p('Q: Is hostel facility available at JKKN College of Arts and Science?'),
          p('A: Yes, JKKN CAS provides separate hostel facilities for boys and girls on campus at Komarapalayam. The campus includes mess, library, and sports facilities.'),
          p('Q: What is the fee structure for [Programme Name]?'),
          p('A: Fee structure varies based on the programme and admission category. Contact the admissions office at +91-4288-274386 for the current fee details.'),
          p('Q: Is JKKN College of Arts and Science affiliated to Periyar University?'),
          p('A: Yes, JKKN College of Arts and Science (Autonomous) is affiliated to Periyar University, Salem, Tamil Nadu. The institution holds Autonomous status granted by UGC.'),
          p('Q: What are the placement opportunities after [Programme Name]?'),
          p("A: JKKN CAS has a 90% placement record with 60+ recruiting companies. The Training and Placement Cell organizes on-campus recruitment drives, internships, and career guidance sessions throughout the academic year."),
          p(''),

          // ── Author Box ──
          h2('AUTHOR BOX'),
          p('Author Bio: [Write a 2–3 sentence bio for the author. For institutional content, use: The content team at JKKN College of Arts and Science creates informative articles on academic programmes, career guidance, and campus life. The institution is affiliated to Periyar University and holds NAAC accreditation.]'),
          p(''),

          // ── Sidebar CTA ──
          h2('SIDEBAR CTA CARD'),
          p('Status: OPEN'),
          p('Heading: Admissions 2026'),
          p('Description: [Number] Seats Available at JKKN College of Arts and Science, Komarapalayam'),
          p('Phone: +91-4288-274386'),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const uint8 = new Uint8Array(buffer);

  return new NextResponse(uint8, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename="JKKN-CAS-Blog-Template.docx"',
    },
  });
}
