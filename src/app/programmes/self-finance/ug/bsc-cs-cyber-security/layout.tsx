import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Computer Science with Cyber Security",
  description:
    "Study B.Sc. Computer Science with Cyber Security at JKKN College of Arts and Science (Autonomous). Specialised programme in cybersecurity near Erode, Tamil Nadu.",
  keywords: [
    "BSc Cyber Security",
    "cyber security degree near Erode",
    "BSc CS Cyber Security Tamil Nadu",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
  },
  openGraph: {
    title: "B.Sc CS — Cyber Security | JKKN Arts & Science",
    description:
      "Study B.Sc. Computer Science with Cyber Security at JKKN College of Arts and Science (Autonomous). Specialised programme in cybersecurity near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Computer Science with Cyber Security"
        description="Study B.Sc. Computer Science with Cyber Security at JKKN College of Arts and Science (Autonomous). Specialised programme in cybersecurity near Erode, Tamil Nadu."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-cs-cyber-security"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. CS (Cyber Security)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-cs-cyber-security",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "What is the duration of the B.Sc Computer Science (Cyber Security) programme?", answer: "The B.Sc Computer Science (Cyber Security) programme is a 3-year full-time undergraduate degree comprising six semesters with hands-on practical sessions in security labs." },
        { question: "What are the career opportunities after B.Sc Computer Science (Cyber Security)?", answer: "Graduates can pursue careers as Cyber Security Analyst, Ethical Hacker, Security Consultant, Network Security Engineer, Digital Forensics Investigator, Information Security Officer, SOC Analyst, and Penetration Tester in IT companies, banks, government agencies, and consulting firms." },
        { question: "What is the eligibility criteria for B.Sc Computer Science (Cyber Security) admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board with Mathematics or Computer Science as a subject. Minimum aggregate marks requirement is typically 50% for general category and 45% for reserved categories." },
        { question: "What certifications can I prepare for during this programme?", answer: "The curriculum is aligned with industry certifications like Certified Ethical Hacker (CEH), CompTIA Security+, and CCNA Security. These certifications significantly enhance your employability and industry recognition." },
        { question: "What tools and technologies will I learn?", answer: "You will learn industry-standard tools including Kali Linux, Metasploit, Wireshark, Nmap, Burp Suite, security information and event management (SIEM) tools, and work with platforms like AWS, Azure, and Google Cloud for cloud security." },
        { question: "Are internships mandatory in the programme?", answer: "Yes, internships are mandatory and typically conducted in the fifth semester. Students gain practical experience with IT companies, security firms, or government agencies, working on real-world cybersecurity challenges." },
        { question: "What makes this programme unique?", answer: "Our programme stands out with dedicated cyber security labs, certified industry-expert faculty, hands-on penetration testing experience, participation in CTF competitions, industry internships, and alignment with global certification standards." },
        { question: "Can I pursue higher studies after this programme?", answer: "Yes, you can pursue M.Sc/M.Tech in Cyber Security, Information Security, or related fields. You can also opt for MBA or prepare for government exams. The programme provides a strong foundation for advanced studies and research." },
      ]} />
      {children}
    </>
  );
}
