export interface ProgrammeInfo {
  name: string;
  fullName: string;
  degree: string;
  duration: string;
  level: "UG" | "PG" | "PhD";
  category: "Aided" | "Self-Finance";
  description: string;
  keywords: string[];
}

export const programmeMetadata: Record<string, ProgrammeInfo> = {
  // ── Aided UG ──
  "aided/ug/ba-english": {
    name: "B.A. English",
    fullName: "Bachelor of Arts in English",
    degree: "B.A.",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.A. English at JKKN College of Arts and Science (Autonomous), affiliated to Periyar University. 3-year aided programme with strong placement support near Erode, Tamil Nadu.",
    keywords: [
      "BA English",
      "BA English college near Erode",
      "English literature degree Tamil Nadu",
      "arts college Namakkal",
    ],
  },
  "aided/ug/ba-history": {
    name: "B.A. History",
    fullName: "Bachelor of Arts in History",
    degree: "B.A.",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.A. History at JKKN College of Arts and Science (Autonomous). 3-year aided programme with expert faculty and campus placements near Erode, Tamil Nadu.",
    keywords: [
      "BA History",
      "BA History college near Erode",
      "history degree Tamil Nadu",
    ],
  },
  "aided/ug/bcom": {
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    degree: "B.Com",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.Com at JKKN College of Arts and Science (Autonomous). Government-aided 3-year commerce programme with industry-aligned curriculum and placements near Erode.",
    keywords: [
      "BCom",
      "BCom college near Erode",
      "commerce degree Namakkal",
      "aided BCom Tamil Nadu",
    ],
  },
  "aided/ug/bsc-chemistry": {
    name: "B.Sc. Chemistry",
    fullName: "Bachelor of Science in Chemistry",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided programme with modern labs, research opportunities, and strong placements near Erode, Tamil Nadu.",
    keywords: [
      "BSc Chemistry",
      "BSc Chemistry college near Erode",
      "chemistry degree Tamil Nadu",
      "science college Namakkal",
    ],
  },
  "aided/ug/bsc-maths": {
    name: "B.Sc. Mathematics",
    fullName: "Bachelor of Science in Mathematics",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.Sc. Mathematics at JKKN College of Arts and Science (Autonomous). Aided programme building strong analytical and problem-solving skills near Erode, Tamil Nadu.",
    keywords: [
      "BSc Mathematics",
      "BSc Maths college near Erode",
      "maths degree Tamil Nadu",
    ],
  },
  "aided/ug/bsc-zoology": {
    name: "B.Sc. Zoology",
    fullName: "Bachelor of Science in Zoology",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Aided",
    description:
      "Study B.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided programme with fieldwork, lab facilities, and career pathways in life sciences near Erode.",
    keywords: [
      "BSc Zoology",
      "BSc Zoology college near Erode",
      "zoology degree Tamil Nadu",
    ],
  },
  // ── Aided PG ──
  "aided/pg/ma-history": {
    name: "M.A. History",
    fullName: "Master of Arts in History",
    degree: "M.A.",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.A. History at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with research focus and expert faculty near Erode, Tamil Nadu.",
    keywords: [
      "MA History",
      "MA History college near Erode",
      "postgraduate history Tamil Nadu",
    ],
  },
  "aided/pg/mca": {
    name: "MCA",
    fullName: "Master of Computer Applications",
    degree: "MCA",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study MCA at JKKN College of Arts and Science (Autonomous). Aided programme with modern computer labs, industry projects, and IT placements near Erode, Tamil Nadu.",
    keywords: [
      "MCA",
      "MCA college near Erode",
      "master of computer applications Tamil Nadu",
      "MCA Namakkal",
    ],
  },
  "aided/pg/mcom": {
    name: "M.Com",
    fullName: "Master of Commerce",
    degree: "M.Com",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.Com at JKKN College of Arts and Science (Autonomous). Aided postgraduate commerce programme with specialization options near Erode, Tamil Nadu.",
    keywords: [
      "MCom",
      "MCom college near Erode",
      "master of commerce Tamil Nadu",
    ],
  },
  "aided/pg/msc-chemistry": {
    name: "M.Sc. Chemistry",
    fullName: "Master of Science in Chemistry",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.Sc. Chemistry at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced research labs near Erode, Tamil Nadu.",
    keywords: [
      "MSc Chemistry",
      "MSc Chemistry college near Erode",
      "postgraduate chemistry Tamil Nadu",
    ],
  },
  "aided/pg/msc-computer-science": {
    name: "M.Sc. Computer Science",
    fullName: "Master of Science in Computer Science",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). Aided programme with modern tech infrastructure and IT placements near Erode.",
    keywords: [
      "MSc Computer Science",
      "MSc CS college near Erode",
      "computer science postgraduate Tamil Nadu",
    ],
  },
  "aided/pg/msc-physics": {
    name: "M.Sc. Physics",
    fullName: "Master of Science in Physics",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.Sc. Physics at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with advanced lab facilities near Erode, Tamil Nadu.",
    keywords: [
      "MSc Physics",
      "MSc Physics college near Erode",
      "postgraduate physics Tamil Nadu",
    ],
  },
  "aided/pg/msc-zoology": {
    name: "M.Sc. Zoology",
    fullName: "Master of Science in Zoology",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Aided",
    description:
      "Study M.Sc. Zoology at JKKN College of Arts and Science (Autonomous). Aided postgraduate programme with fieldwork and research near Erode, Tamil Nadu.",
    keywords: [
      "MSc Zoology",
      "MSc Zoology college near Erode",
      "postgraduate zoology Tamil Nadu",
    ],
  },
  // ── Aided PhD ──
  "aided/phd/chemistry": {
    name: "Ph.D. Chemistry",
    fullName: "Doctor of Philosophy in Chemistry",
    degree: "Ph.D.",
    duration: "3-5 Years",
    level: "PhD",
    category: "Aided",
    description:
      "Pursue Ph.D. in Chemistry at JKKN College of Arts and Science (Autonomous). Doctoral research programme affiliated to Periyar University near Erode, Tamil Nadu.",
    keywords: [
      "PhD Chemistry",
      "PhD Chemistry college near Erode",
      "doctoral chemistry Tamil Nadu",
    ],
  },
  "aided/phd/tamil": {
    name: "Ph.D. Tamil",
    fullName: "Doctor of Philosophy in Tamil",
    degree: "Ph.D.",
    duration: "3-5 Years",
    level: "PhD",
    category: "Aided",
    description:
      "Pursue Ph.D. in Tamil at JKKN College of Arts and Science (Autonomous). Doctoral research programme in Tamil language and literature near Erode, Tamil Nadu.",
    keywords: [
      "PhD Tamil",
      "PhD Tamil college near Erode",
      "doctoral Tamil literature",
    ],
  },
  "aided/phd/zoology": {
    name: "Ph.D. Zoology",
    fullName: "Doctor of Philosophy in Zoology",
    degree: "Ph.D.",
    duration: "3-5 Years",
    level: "PhD",
    category: "Aided",
    description:
      "Pursue Ph.D. in Zoology at JKKN College of Arts and Science (Autonomous). Doctoral research programme in life sciences near Erode, Tamil Nadu.",
    keywords: [
      "PhD Zoology",
      "PhD Zoology college near Erode",
      "doctoral zoology Tamil Nadu",
    ],
  },
  // ── Self-Finance UG ──
  "self-finance/ug/ba-english": {
    name: "B.A. English (SF)",
    fullName: "Bachelor of Arts in English",
    degree: "B.A.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with placement support near Erode, Tamil Nadu.",
    keywords: [
      "BA English self finance",
      "BA English college near Erode",
      "English degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bba": {
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    degree: "BBA",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study BBA at JKKN College of Arts and Science (Autonomous). 3-year management programme with industry exposure and campus placements near Erode, Tamil Nadu.",
    keywords: [
      "BBA",
      "BBA college near Erode",
      "business administration Tamil Nadu",
      "BBA Namakkal",
    ],
  },
  "self-finance/ug/bca": {
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    degree: "BCA",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study BCA at JKKN College of Arts and Science (Autonomous). 3-year programme in computer applications with modern labs and IT placements near Erode, Tamil Nadu.",
    keywords: [
      "BCA",
      "BCA college near Erode",
      "computer applications degree Tamil Nadu",
      "BCA Namakkal",
    ],
  },
  "self-finance/ug/bcom-accounting-finance": {
    name: "B.Com (Accounting & Finance)",
    fullName: "Bachelor of Commerce in Accounting and Finance",
    degree: "B.Com",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Com Accounting & Finance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with industry-aligned curriculum near Erode.",
    keywords: [
      "BCom Accounting Finance",
      "BCom AF college near Erode",
      "accounting degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bcom-banking-insurance": {
    name: "B.Com (Banking & Insurance)",
    fullName: "Bachelor of Commerce in Banking and Insurance",
    degree: "B.Com",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Com Banking & Insurance at JKKN College of Arts and Science (Autonomous). Specialised commerce programme with banking sector placements near Erode.",
    keywords: [
      "BCom Banking Insurance",
      "BCom BI college near Erode",
      "banking degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bcom-ca": {
    name: "B.Com (Computer Applications)",
    fullName: "Bachelor of Commerce with Computer Applications",
    degree: "B.Com CA",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Com Computer Applications at JKKN College of Arts and Science (Autonomous). Commerce programme with IT skills and placements near Erode, Tamil Nadu.",
    keywords: [
      "BCom CA",
      "BCom Computer Applications",
      "BCom CA college near Erode",
    ],
  },
  "self-finance/ug/bsc-ai-ds": {
    name: "B.Sc. AI & Data Science",
    fullName: "Bachelor of Science in Artificial Intelligence and Data Science",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. AI & Data Science at JKKN College of Arts and Science (Autonomous). Future-ready programme in artificial intelligence and data analytics near Erode.",
    keywords: [
      "BSc AI Data Science",
      "BSc AIDS college near Erode",
      "artificial intelligence degree Tamil Nadu",
      "data science Namakkal",
    ],
  },
  "self-finance/ug/bsc-computer-science": {
    name: "B.Sc. Computer Science",
    fullName: "Bachelor of Science in Computer Science",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Computer Science at JKKN College of Arts and Science (Autonomous). 3-year programme with modern labs and strong IT placements near Erode, Tamil Nadu.",
    keywords: [
      "BSc Computer Science",
      "BSc CS college near Erode",
      "computer science degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bsc-cs-cyber-security": {
    name: "B.Sc. CS (Cyber Security)",
    fullName:
      "Bachelor of Science in Computer Science with Cyber Security",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Computer Science with Cyber Security at JKKN College of Arts and Science (Autonomous). Specialised programme in cybersecurity near Erode, Tamil Nadu.",
    keywords: [
      "BSc Cyber Security",
      "cyber security degree near Erode",
      "BSc CS Cyber Security Tamil Nadu",
    ],
  },
  "self-finance/ug/bsc-microbiology": {
    name: "B.Sc. Microbiology",
    fullName: "Bachelor of Science in Microbiology",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Microbiology at JKKN College of Arts and Science (Autonomous). 3-year programme with lab facilities and research opportunities near Erode, Tamil Nadu.",
    keywords: [
      "BSc Microbiology",
      "BSc Microbiology college near Erode",
      "microbiology degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bsc-physics": {
    name: "B.Sc. Physics (SF)",
    fullName: "Bachelor of Science in Physics",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Physics (Self-Finance) at JKKN College of Arts and Science (Autonomous). 3-year programme with modern physics labs near Erode, Tamil Nadu.",
    keywords: [
      "BSc Physics",
      "BSc Physics college near Erode",
      "physics degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bsc-textile-fashion-designing": {
    name: "B.Sc. Textile & Fashion Designing",
    fullName: "Bachelor of Science in Textile and Fashion Designing",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Textile & Fashion Designing at JKKN College of Arts and Science (Autonomous). Creative programme with industry exposure near Erode, Tamil Nadu.",
    keywords: [
      "BSc Textile Fashion Designing",
      "fashion design college near Erode",
      "textile design degree Tamil Nadu",
    ],
  },
  "self-finance/ug/bsc-visual-communication": {
    name: "B.Sc. Visual Communication",
    fullName: "Bachelor of Science in Visual Communication",
    degree: "B.Sc.",
    duration: "3 Years",
    level: "UG",
    category: "Self-Finance",
    description:
      "Study B.Sc. Visual Communication at JKKN College of Arts and Science (Autonomous). Creative media programme with industry projects near Erode, Tamil Nadu.",
    keywords: [
      "BSc Visual Communication",
      "visual communication college near Erode",
      "media studies Tamil Nadu",
    ],
  },
  // ── Self-Finance PG ──
  "self-finance/pg/ma-english": {
    name: "M.A. English (SF)",
    fullName: "Master of Arts in English",
    degree: "M.A.",
    duration: "2 Years",
    level: "PG",
    category: "Self-Finance",
    description:
      "Study M.A. English (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate literature programme near Erode, Tamil Nadu.",
    keywords: [
      "MA English",
      "MA English college near Erode",
      "postgraduate English Tamil Nadu",
    ],
  },
  "self-finance/pg/mcom": {
    name: "M.Com (SF)",
    fullName: "Master of Commerce",
    degree: "M.Com",
    duration: "2 Years",
    level: "PG",
    category: "Self-Finance",
    description:
      "Study M.Com (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate commerce programme near Erode, Tamil Nadu.",
    keywords: [
      "MCom self finance",
      "MCom college near Erode",
      "postgraduate commerce Tamil Nadu",
    ],
  },
  "self-finance/pg/msc-computer-science": {
    name: "M.Sc. Computer Science (SF)",
    fullName: "Master of Science in Computer Science",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Self-Finance",
    description:
      "Study M.Sc. Computer Science (Self-Finance) at JKKN College of Arts and Science (Autonomous). Advanced CS programme with IT placements near Erode.",
    keywords: [
      "MSc Computer Science",
      "MSc CS college near Erode",
      "computer science PG Tamil Nadu",
    ],
  },
  "self-finance/pg/msc-cs-data-analytics": {
    name: "M.Sc. CS (Data Analytics)",
    fullName:
      "Master of Science in Computer Science with Data Analytics",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Self-Finance",
    description:
      "Study M.Sc. Computer Science with Data Analytics at JKKN College of Arts and Science (Autonomous). Specialised data analytics programme near Erode, Tamil Nadu.",
    keywords: [
      "MSc Data Analytics",
      "MSc CS Data Analytics college near Erode",
      "data analytics degree Tamil Nadu",
    ],
  },
  "self-finance/pg/msc-mathematics": {
    name: "M.Sc. Mathematics (SF)",
    fullName: "Master of Science in Mathematics",
    degree: "M.Sc.",
    duration: "2 Years",
    level: "PG",
    category: "Self-Finance",
    description:
      "Study M.Sc. Mathematics (Self-Finance) at JKKN College of Arts and Science (Autonomous). Postgraduate maths programme near Erode, Tamil Nadu.",
    keywords: [
      "MSc Mathematics",
      "MSc Maths college near Erode",
      "postgraduate mathematics Tamil Nadu",
    ],
  },
};

/**
 * Get programme metadata by route path.
 * Path should be relative, e.g. "aided/ug/bsc-chemistry"
 */
export function getProgrammeByPath(path: string): ProgrammeInfo | undefined {
  return programmeMetadata[path];
}
