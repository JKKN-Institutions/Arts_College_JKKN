import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bachelor of Science in Computer Science with Cyber Security at JKKN College of Arts and Science",
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
    title:
      "Bachelor of Science in Computer Science with Cyber Security | JKKN College of Arts and Science",
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
      {children}
    </>
  );
}
