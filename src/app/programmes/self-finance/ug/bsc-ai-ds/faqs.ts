// One FAQ list for the page body AND the FAQPage JSON-LD in layout.tsx (GL6-383, 2026-10-02).
// Every answer here must be visible on the page as written.
//
// Facts and their sources:
//   Name        - Periyar University syllabus "B.Sc Computer Science (Artificial Intelligence and Data
//                 Science)", 2023-24 (periyaruniversity.ac.in/Documents/2024/Naanmudhalvan/2023-24/
//                 B.Sc., Comp.Sci. (AI & DS) 23-24.pdf) and the college fee table ("B.Sc. Comp. Sci. (AI & DS)").
//   Eligibility - that syllabus carries no admission clause and no other Periyar document was found, so
//                 no subject or percentage rule is stated here (user decision 2026-10-02).
//   Fee         - /fee-structure, 2026-27: Rs 34,000 a year, management quota.
//   Subjects    - this page's own Learning Framework (course codes 24UAD..).
//   Placement   - NIRF 2025 college return: 135 of 373 UG graduates placed in 2023-24, college-wide.
// Removed 2026-10-02 for want of a source: "Mathematics compulsory", "minimum 50% / 45%", NVIDIA GPU labs,
// cloud credits, IoT / robotics / drones lab, IEEE / ACM subscriptions, "tie-ups with 100+ companies",
// salary bands, "70% focus", TensorFlow / PyTorch / Hadoop / Spark / Tableau lists, "Since 1952".
export const bscAiDsFaqs = [
  {
    question: "What is the full name of B.Sc AI & DS?",
    answer:
      "The full name is B.Sc Computer Science (Artificial Intelligence and Data Science), a three-year, six-semester degree. At JKKN College of Arts and Science, Komarapalayam, it is a self-finance programme and the degree is awarded by Periyar University, Salem.",
  },
  {
    question: "Is B.Sc AI & DS the same as B.Tech AI & DS?",
    answer:
      "No. B.Sc Computer Science (AI & DS) is a three-year arts and science degree, admitted on +2 marks at each college. B.Tech or B.E. Artificial Intelligence and Data Science and AI & ML are four-year engineering degrees, admitted through TNEA counselling at engineering colleges.",
  },
  {
    question: "What is the eligibility for B.Sc Computer Science (AI & DS)?",
    answer:
      "A pass in the Higher Secondary (+2) examination. For the +2 subjects required for this programme, please confirm with the admissions office before applying. Admission is on merit, with community reservation as per Tamil Nadu Government norms.",
  },
  {
    question: "What is the B.Sc AI & DS fee at JKKN College of Arts and Science?",
    answer:
      "For 2026-27 the annual tuition fee is Rs 34,000 under the management quota. Government quota seats follow the fee fixed by Government norms. The full fee table is on the Fee Structure page.",
  },
  {
    question: "Which subjects are taught in B.Sc Computer Science (AI & DS)?",
    answer:
      "Data Structures, Python programming and mathematics electives in Year 1; Foundation of Artificial Intelligence, Fundamentals of Data Science, statistics, web designing, PHP and database programming in Year 2; Database Design and Management, a Data Science Lab, Ethics of Artificial Intelligence, Natural Language Processing, Robotic Process Automation with a UiPath lab, a project with viva voce and a summer internship in Year 3.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Year 1 starts with Fundamentals of Computer Programming, Data Structures and Introduction to Python, each with a practical lab.",
  },
  {
    question: "Does the college provide placement assistance?",
    answer:
      "The college placement cell runs campus recruitment drives and interview preparation. For 2023-24 the college reported 135 of 373 UG graduates placed across all programmes (NIRF 2025); it does not publish a separate B.Sc AI & DS placement rate.",
  },
  {
    question: "What can I study after B.Sc AI & DS?",
    answer:
      "Graduates can apply for M.Sc Computer Science, M.Sc Data Science, MCA or an MBA. M.Sc Computer Science (aided and self-finance), M.Sc Computer Science (Data Analytics) and an aided MCA are offered at JKKN College of Arts and Science.",
  },
];
