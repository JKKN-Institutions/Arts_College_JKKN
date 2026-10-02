import type { AdmissionFAQ } from "@/lib/admission-defaults";

/**
 * Course-specific admission overrides — sparse by design.
 * Any field omitted falls back to defaults derived in
 * src/lib/admission-defaults.ts. Add entries only when a course
 * has something unique to say.
 *
 * Keyed by programme path (e.g., "self-finance/ug/bcom-ai"), NOT slug.
 */
export interface AdmissionOverride {
  intakeSeats?: number;
  eligibilityCriteria?: string[];
  recommendedBackground?: string[];
  documents?: string[];
  faq?: AdmissionFAQ[];
  applicationDeadline?: string;
  careers?: string[];
  curriculumHighlights?: string[];
  highlights?: string[];
  importantDates?: { label: string; date: string }[];
  scholarshipNote?: string;
  /**
   * Drop the level-default "What is the eligibility for this UG programme?" FAQ, whose 50% / 45% / 40%
   * figures have no source. Set only where eligibilityCriteria above carries the regulation (GL6-380).
   */
  dropDefaultEligibilityFaq?: boolean;
}

export const admissionOverrides: Record<string, AdmissionOverride> = {
  // Eligibility from the Periyar University B.Sc Computer Science (Cyber Security) OBE regulations,
  // 2023-24 onwards: +2 with Mathematics OR Business Mathematics OR Computer Science OR Statistics. GL6-375.
  "self-finance/ug/bsc-cs-cyber-security": {
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations)",
      "Academic or vocational stream; Tamil Nadu board or an equivalent examination",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Mathematics is not compulsory if the +2 had Computer Science, Statistics or Business Mathematics",
      "Science and Commerce groups with one of those subjects both qualify",
      "This is a 3-year B.Sc, not a B.E. or B.Tech engineering degree",
      "Interest in lab work - each core subject has a practical",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Cyber Security Lab, Ethical Hacking Lab and Network Security in the syllabus",
      "M.Sc Computer Science and MCA available on the same campus",
    ],
    curriculumHighlights: [
      "Year 1: Programming in C; Data Structures and Algorithms",
      "Year 2: Java; Web Designing; PHP; Tools and Techniques for Cyber Security with Cyber Security Lab",
      "Year 3: RDBMS with Oracle Lab; Essentials of Cyber Security; Ethical Hacking with lab; Network Security",
      "A practical lab for each core subject",
      "Project with viva voce in the final year",
      "Summer internship or industrial training",
    ],
    careers: [
      "Cyber Security Analyst (entry-level)",
      "SOC Analyst (Tier 1)",
      "Penetration Tester / Ethical Hacker (junior)",
      "Network Security Trainee",
      "Information Security Auditor (junior)",
      "Higher studies: M.Sc Computer Science, M.Sc Cyber Security, MCA",
    ],
    faq: [
      {
        question: "Is Maths compulsory for B.Sc Cyber Security?",
        answer:
          "No. The Periyar University regulation accepts any one of Mathematics, Business Mathematics, Computer Science or Statistics in the +2.",
      },
      {
        question: "What is the B.Sc Cyber Security fee for 2026-27?",
        answer:
          "Rs 32,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },
  // Eligibility from the Periyar University B.Sc Computer Science OBE regulations, 2021-22
  // onwards (periyaruniversity.ac.in/Documents/2021/syllabus/2021/Affiliated/ug/B.Sc. COMPUTER SCIENCE.pdf):
  // +2 with Mathematics OR Business Mathematics OR Computer Science OR Statistics. GL6-363.
  "self-finance/ug/bsc-computer-science": {
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Any one of Mathematics, Business Mathematics, Computer Science or Statistics (Periyar University regulations)",
      "Academic or vocational stream; Tamil Nadu board or an equivalent examination",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Mathematics is not compulsory if the +2 had Computer Science, Statistics or Business Mathematics",
      "Science and Commerce groups with one of those subjects both qualify",
      "Logical thinking helps in programming courses",
      "Interest in lab work - each core subject has a practical",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Python, Java, PHP, .NET and DBMS with a lab for each core subject",
      "M.Sc Computer Science and MCA available on the same campus",
    ],
    curriculumHighlights: [
      "Year 1: Python Programming; Data Structures and Algorithms",
      "Year 2: Microprocessor and Microcontroller; Web Designing; Java Programming; PHP Programming",
      "Year 3: Software Engineering; Database Management Systems; Computer Networks; .NET Programming",
      "A practical lab for each core subject",
      "Project with viva voce in the final year",
      "Internship or industrial training",
    ],
    faq: [
      {
        question: "Can I do B.Sc Computer Science without Maths?",
        answer:
          "Yes, if your +2 included Computer Science, Statistics or Business Mathematics. The Periyar University regulation accepts any one of Mathematics, Business Mathematics, Computer Science or Statistics.",
      },
      {
        question: "What is the B.Sc Computer Science fee for 2026-27?",
        answer:
          "Rs 34,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },
  // Eligibility from the Periyar University B.Sc Physics regulations, 2023-24 onwards
  // (periyaruniversity.ac.in/Documents/2023/CDC/Affiliated/ug/B.Sc PHYSICS  .pdf):
  // "passed the Higher Secondary examination with Mathematics, Physics and Chemistry".
  // The regulation states no minimum percentage, so none is published here.
  "self-finance/ug/bsc-physics": {
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Mathematics, Physics and Chemistry as subjects (Periyar University regulations)",
      "Tamil Nadu State Board or an examination accepted as equivalent",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "+2 Mathematics-Physics-Chemistry-Biology or Mathematics-Physics-Chemistry-Computer Science group",
      "Commerce and Arts streams are not eligible for B.Sc Physics",
      "Comfort with mathematics helps in every semester",
      "Interest in laboratory work - there is a practical course each semester",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Six core physics practicals, an internship or field visit, and a final-year project",
      "Aided M.Sc Physics available on the same campus",
    ],
    curriculumHighlights: [
      "Semesters I-II: Properties of Matter and Sound; Heat, Thermodynamics and Statistical Physics",
      "Semesters III-IV: General and Classical Mechanics; Optics and Spectroscopy; Electronic Devices",
      "Semester V: Atomic Physics and Lasers; Relativity and Quantum Mechanics; Electricity and Magnetism",
      "Semester VI: Nuclear and Particle Physics; Solid State Physics; Digital Electronics and Microprocessor 8085",
      "A core practical course in every semester",
      "Internship or field visit (Semester V) and a project (Semester VI)",
    ],
    faq: [
      {
        question: "Can a Commerce or Arts +2 student join B.Sc Physics?",
        answer:
          "No. The Periyar University B.Sc Physics regulations require a pass in the Higher Secondary examination with Mathematics, Physics and Chemistry. Commerce and Arts stream students can look at the college's other UG programmes.",
      },
      {
        question: "What is the B.Sc Physics fee for 2026-27?",
        answer:
          "Rs 25,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },
  "self-finance/ug/bcom-ai": {
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval" },
    ],
    eligibilityCriteria: [
      "Pass in Higher Secondary (10+2) from a recognized board",
      "Open to Commerce, Science, and Arts streams",
      "Minimum 50% aggregate marks (general category)",
      "45% for OBC, 40% for SC/ST as per government norms",
    ],
    recommendedBackground: [
      "Any +2 stream is welcome — no programming background required",
      "Basic comfort with mathematics is helpful",
      "Curiosity about technology, finance, and business",
      "Willingness to learn Python, SQL, Power BI from scratch",
    ],
    careers: [
      "AI Financial Analyst",
      "Business Intelligence Analyst",
      "FinTech Associate",
      "RPA Developer (Finance Automation)",
      "Risk & Fraud Analytics Executive",
      "Algorithmic Trading Associate",
      "AI Audit Consultant",
      "Data Analyst (Commerce-Tech)",
    ],
    curriculumHighlights: [
      "Financial Accounting + Python for Business",
      "Fundamentals of AI and Machine Learning",
      "Business Analytics with Power BI / Tableau",
      "Algorithmic Trading & Financial Modelling",
      "AI in Fraud Detection & Risk Analytics",
      "Robotic Process Automation (RPA) for Finance",
      "Two structured industry internships",
      "Capstone project blending Commerce + AI",
    ],
    highlights: [
      "First-of-its-kind Commerce + AI hybrid learning framework",
      "Hands-on tooling: Python, SQL, Power BI, Tally, RPA",
      "Two industry internships (Analytics + FinTech)",
      "Future-ready for MBA Analytics, M.Sc. Data Science, CA + Analytics",
    ],
    faq: [
      {
        question:
          "Do I need a programming or science background to apply for B.Com (AI)?",
        answer:
          "No. The programme is open to students from any stream (Commerce, Science, or Arts) with 50% aggregate in 10+2. Programming, Python, and AI concepts are taught from the basics — no prior coding experience is required.",
      },
      {
        question: "What tools and technologies will I learn?",
        answer:
          "Hands-on training in Python, SQL, Excel (advanced), Power BI, Tableau, Tally, machine learning libraries (scikit-learn, TensorFlow basics), RPA tools (UiPath / Automation Anywhere basics), and AI-powered accounting platforms.",
      },
      {
        question: "Is B.Com (AI) approved by the university?",
        answer:
          "B.Com (AI) is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will notify you as soon as applications open.",
      },
    ],
  },

  // GL6-383, 2026-10-02. The Periyar B.Sc Computer Science (AI & DS) 2023-24 syllabus has no admission clause,
  // so no subject or percentage rule is stated (user decision). The earlier block listed TensorFlow, PyTorch,
  // Power BI, AWS / GCP and "internship with AI / analytics firms", none of which is in the syllabus.
  "self-finance/ug/bsc-ai-ds": {
    dropDefaultEligibilityFaq: true,
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Confirm the required +2 subjects with the admissions office",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "No prior coding experience needed - Python is taught from Year 1",
      "Mathematics electives in Year 1 and statistics in Year 2",
      "This is a 3-year B.Sc, not a 4-year B.Tech AI & DS (TNEA)",
      "Interest in programming and working with data",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "A practical lab every semester, including a Data Science Lab and a UiPath Automation Lab",
      "M.Sc Computer Science and MCA available on the same campus",
    ],
    curriculumHighlights: [
      "Year 1: Fundamentals of Computer Programming; Data Structures; Introduction to Python; mathematics electives",
      "Year 2: Foundation of Artificial Intelligence; Fundamentals of Data Science; statistics; web designing; PHP; database programming",
      "Year 3: Database Design and Management; Data Science Lab; Ethics of Artificial Intelligence",
      "Year 3: Natural Language Processing; Robotic Process Automation with a UiPath lab",
      "Project with viva voce",
      "Summer internship or industrial training",
    ],
    careers: [
      "Data Analyst (entry-level)",
      "Junior Python Developer",
      "Data Science / AI Trainee",
      "RPA (Automation) Developer Trainee",
      "Web Developer",
      "Higher studies: M.Sc Computer Science, M.Sc Data Science, MCA, MBA",
    ],
    faq: [
      {
        question: "Is B.Sc AI & DS the same as B.Tech AI & DS?",
        answer:
          "No. B.Sc Computer Science (AI & DS) is a three-year arts and science degree admitted on +2 marks; B.Tech AI & DS is a four-year engineering degree admitted through TNEA counselling.",
      },
      {
        question: "What is the B.Sc AI & DS fee for 2026-27?",
        answer:
          "Rs 34,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },

  // Eligibility from the Periyar University B.Sc Microbiology regulations, 2023-24 onwards
  // (periyaruniversity.ac.in/Documents/2023/CDC/Affiliated/ug/B.Sc. Microbiology.pdf), "Condition for admission":
  // +2 pass in any one of Botany, Zoology or Biology, academic or vocational; no percentage. GL6-384.
  "self-finance/ug/bsc-microbiology": {
    dropDefaultEligibilityFaq: true,
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination",
      "Any one of Botany, Zoology or Biology (Periyar University regulations)",
      "Academic or vocational stream (Agriculture, Home Science, Poultry)",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Chemistry is not required by the regulation",
      "No minimum percentage and no entrance test - NEET is not needed",
      "This is a 3-year arts and science B.Sc",
      "Interest in laboratory work - every core subject has a practical",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "A practical in every core subject",
      "Project with viva voce and an internship or industrial visit",
    ],
    curriculumHighlights: [
      "Year 1: Fundamentals of Microbiology; Microbial Physiology and Metabolism; Biochemistry; Bioinstrumentation",
      "Year 2: Molecular Biology and Microbial Genetics; Immunology and Immunotechnology; Clinical Laboratory Technology",
      "Year 3: Bacteriology and Mycology; Virology and Parasitology; Recombinant DNA Technology",
      "Year 3: Environmental and Agriculture Microbiology; Food, Dairy and Probiotic Microbiology; Pharmaceutical Microbiology",
      "Project with viva voce",
      "Internship, industrial visit or field visit",
    ],
    careers: [
      "Microbiology Laboratory Assistant",
      "Quality Control Trainee (food / pharma)",
      "Clinical Laboratory Assistant",
      "Research Assistant",
      "Higher studies: M.Sc Microbiology, M.Sc Biotechnology, MBA",
    ],
    faq: [
      {
        question: "Is Chemistry compulsory for B.Sc Microbiology?",
        answer:
          "No. The Periyar University regulation asks for any one of Botany, Zoology or Biology in the +2.",
      },
      {
        question: "What is the B.Sc Microbiology fee for 2026-27?",
        answer:
          "Rs 34,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },

  // Eligibility from the Periyar University B.Sc Textile and Fashion Designing regulations, 2023-24
  // onwards (periyaruniversity.ac.in/Documents/2026/syllabus/nanmudh/23-24even/
  // B.Sc. TEXTILE AND FASHION DESIGNING.pdf): pass in any Higher Secondary course; a three-year
  // Fashion/Costume/Textile/Apparel diploma qualifies for direct second-year admission. GL6-379.
  "self-finance/ug/bsc-textile-fashion-designing": {
    eligibilityCriteria: [
      "Pass in any Higher Secondary (+2) course, academic or vocational",
      "State Board, CBSE, ICSE or an equivalent examination (Periyar University regulations)",
      "Diploma holders: a three-year Fashion, Costume, Textile or Apparel diploma qualifies for direct second-year admission",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Science, Commerce, Arts and vocational groups are all eligible",
      "No particular +2 subject is required",
      "This is a 3-year B.Sc, not a B.Tech in Fashion or Textile Technology",
      "Interest in drawing, garments and fabrics - every year has practicals",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Apparel practicals every year and CAD in Garment Designing in Semester VI",
      "Internship project and fashion portfolio presentation, both with viva voce",
    ],
    curriculumHighlights: [
      "Year 1: Fiber and Yarn Science; Woven Fabric Science; Basic Apparel Designing; Illustration and Sketching",
      "Year 2: Textile Wet Processing; Textile Finishing; Children's and Women's Apparel; Fashion Designing; Boutique Management",
      "Year 3: Apparel Costing and Merchandising; Knitting and Non-woven; Men's Apparel; Textile Testing and Quality Control",
      "CAD in Garment Designing Practical (Semester VI)",
      "Internship project with viva voce",
      "Fashion portfolio presentation with viva voce",
    ],
    careers: [
      "Fashion Designer (entry-level)",
      "Textile Designer",
      "Apparel Merchandiser",
      "Pattern Maker",
      "Quality Controller in a garment unit",
      "Higher studies: M.Sc in textiles, fashion or costume design; MBA",
    ],
    faq: [
      {
        question: "Can Commerce or Arts students join B.Sc Textile and Fashion Designing?",
        answer:
          "Yes. The Periyar University regulation accepts a pass in any Higher Secondary course, academic or vocational.",
      },
      {
        question: "What is the B.Sc Textile and Fashion Designing fee for 2026-27?",
        answer:
          "Rs 32,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },

  "self-finance/ug/bsc-textile-fashion-designing-ai": {
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval" },
    ],
    highlights: [
      "Proposed programme — currently awaiting official approval from Periyar University",
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Register your interest via the Contact page; admissions open only after approval",
    ],
    faq: [
      {
        question: "Is B.Sc. Textile and Fashion Designing (AI) approved?",
        answer:
          "This is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will keep you informed. The approved B.Sc Textile and Fashion Designing (without AI) is open for 2026-27 admission.",
      },
    ],
  },

  // Eligibility from the Periyar University B.Sc Visual Communication regulations, effective 2021-22
  // (periyaruniversity.ac.in/Documents/2021/syllabus/2021/Affiliated/ug1/B.Sc. Visual Communication.pdf),
  // clause 1: a pass in Higher Secondary or an equivalent (10+2 or 10+3 year Diploma); no percentage. GL6-380.
  "self-finance/ug/bsc-visual-communication": {
    dropDefaultEligibilityFaq: true,
    eligibilityCriteria: [
      "Pass in the Higher Secondary (+2) examination or an equivalent examination",
      "Or a 10+3 year Diploma (Periyar University regulations)",
      "No minimum percentage and no particular +2 subject in the regulation",
      "Merit-based admission; community reservation as per Tamil Nadu Government norms",
    ],
    recommendedBackground: [
      "Science, Commerce, Arts and vocational groups are all eligible",
      "No portfolio or entrance test",
      "Interest in drawing, photography, video and design - every year has practicals",
      "This is a 3-year B.Sc in the arts and science stream",
    ],
    highlights: [
      "Affiliated to Periyar University, Salem",
      "NAAC-accredited autonomous institution",
      "Photography studio and editing lab for the practical courses",
      "Internship in Semester V and a capstone project in Semester VI",
    ],
    curriculumHighlights: [
      "Year 1: Graphic Design; Digital Drawing; Storytelling and Script Writing; Photography and Videography; Image Editing",
      "Year 2: Audio and Visual Editing; 2D and 3D Modelling; Film Appreciation; Animation and Character Design; Visual Effects",
      "Year 3: Advertising and Brand Communication; User Experience Design; 3D Environment Design; Immersive Media",
      "Short film making and an internship in Semester V",
      "Extended Reality Design and a capstone project in Semester VI",
      "A practical course in every semester",
    ],
    careers: [
      "Graphic Designer",
      "Video Editor",
      "Photographer",
      "Animator / Motion Graphics Artist",
      "UI / UX Designer (entry-level)",
      "Higher studies: M.Sc Visual Communication, M.A. Mass Communication, MBA",
    ],
    faq: [
      {
        question: "Is there a minimum percentage for B.Sc Visual Communication?",
        answer:
          "The Periyar University regulation asks for a pass in +2 or an equivalent, or a 10+3 year Diploma, and sets no minimum percentage.",
      },
      {
        question: "What is the B.Sc Visual Communication fee for 2026-27?",
        answer:
          "Rs 32,000 a year under the management quota. Government quota seats follow Government norms.",
      },
    ],
  },

  "self-finance/ug/bsc-visual-communication-ai": {
    applicationDeadline: "Subject to University Approval",
    importantDates: [
      { label: "Programme Status", date: "Proposed — awaiting university approval" },
      { label: "Register Interest", date: "Open year-round" },
      { label: "Expected Admissions Open", date: "After approval, 2026-27 cycle" },
    ],
    faq: [
      {
        question: "Is B.Sc. Visual Communication (AI) approved?",
        answer:
          "This is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open once approval is received. Register your interest via the Contact page and we will keep you informed. The approved B.Sc Visual Communication (without AI) is open for 2026-27 admission.",
      },
    ],
  },
};
