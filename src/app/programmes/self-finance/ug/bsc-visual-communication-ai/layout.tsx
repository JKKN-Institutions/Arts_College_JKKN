import type { Metadata } from "next";
import { CourseSchema } from "@/components/seo/CourseSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "B.Sc. Visual Communication (AI) — Proposed Programme",
  description:
    "B.Sc. Visual Communication (AI) at JKKN College of Arts and Science (Autonomous) is a proposed 3-year UG programme blending design, generative AI, prompt engineering, and AI-powered motion & UI/UX. Currently awaiting university approval — register your interest, near Erode, Tamil Nadu.",
  keywords: [
    "BSc Visual Communication AI",
    "generative AI design course",
    "AI visual communication Tamil Nadu",
    "AI design degree Erode",
    "prompt engineering UG course",
    "AI creative course JKKN",
    "B.Sc. Visual Communication AI 2026",
  ],
  alternates: {
    canonical: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication-ai",
  },
  openGraph: {
    title: "B.Sc. Visual Communication (AI) | JKKN Arts & Science",
    description:
      "Future-ready creators — Where creativity meets artificial intelligence. Study B.Sc. Visual Communication (AI) at JKKN College of Arts and Science, near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication-ai",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Science in Visual Communication (AI)"
        description="A 3-year UG programme blending visual communication fundamentals with generative AI, prompt engineering, AI-powered motion & UI/UX at JKKN College of Arts and Science, near Erode, Tamil Nadu. New programme for 2026-27."
        duration="P3Y"
        educationalLevel="UG"
        category="Self-Finance"
        url="/programmes/self-finance/ug/bsc-visual-communication-ai"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://cas.jkkn.ac.in" },
          { name: "Programmes", url: "https://cas.jkkn.ac.in/programmes" },
          { name: "Self-Finance", url: "https://cas.jkkn.ac.in/programmes/self-finance" },
          { name: "UG", url: "https://cas.jkkn.ac.in/programmes/self-finance/ug" },
          {
            name: "B.Sc. Visual Communication (AI)",
            url: "https://cas.jkkn.ac.in/programmes/self-finance/ug/bsc-visual-communication-ai",
          },
        ]}
      />
      <FAQSchema faqs={[
        { question: "Is this programme approved by the university? Can I apply right now?", answer: "B.Sc. Visual Communication (AI) is a proposed programme currently awaiting official approval from the affiliating university. Admissions will open only after approval is received. In the meantime, you can register your interest via our Contact page and we will notify you as soon as applications open — no payment or commitment is required at this stage." },
        { question: "What is the duration of the B.Sc. Visual Communication (AI) programme?", answer: "The B.Sc. Visual Communication (AI) programme is a 3-year full-time undergraduate degree comprising six semesters. Each academic year consists of two semesters with theoretical courses, practical studio sessions, AI tool labs, and hands-on industry projects." },
        { question: "How is this programme different from the regular B.Sc. Visual Communication?", answer: "The AI variant blends all core visual communication subjects (design, typography, photography, videography, motion graphics) with an AI layer — Generative AI (Midjourney, Stable Diffusion, Firefly), Prompt Engineering, AI-powered video (Runway, Sora, Pika), AI-augmented UI/UX, and fundamentals of Machine Learning for designers. Graduates are prepared for emerging AI-first creative roles in addition to traditional VC careers." },
        { question: "What is the eligibility criteria for admission?", answer: "Candidates must have completed Higher Secondary (10+2) from a recognized board in any stream — Arts, Science, or Commerce. No coding background or entrance test is required. Passion for design, storytelling, and emerging technology is what matters." },
        { question: "Do I need prior programming or ML knowledge?", answer: "No. The programme is designed for creative learners. Machine Learning and AI concepts are taught from scratch with a designer-first lens — focusing on tools, workflows, ethical use, and prompt craft rather than heavy mathematics or coding." },
        { question: "What AI tools and software will I learn?", answer: "You will work hands-on with Midjourney, Stable Diffusion, DALL-E, Adobe Firefly, Figma AI, Runway, Sora, Pika Labs, ChatGPT and Claude for creative workflows, alongside industry-standard Adobe Creative Suite (Photoshop, Illustrator, Premiere, After Effects), Figma, Blender, and Cinema 4D." },
        { question: "Are internships mandatory and what industries will I work in?", answer: "Yes, a final-semester industry internship is mandatory. Our placement cell connects learners with AI-forward design studios, advertising agencies, OTT platforms, SaaS/product companies, edtech, fintech, gaming, and film production houses — giving you portfolio-ready live project experience." },
        { question: "What career roles can I target after graduating?", answer: "Graduates can pursue emerging roles like AI Content Creator, Prompt Designer, AI Visual Artist, AI Motion Designer, AI-Augmented UI/UX Designer, AI Video Editor, alongside traditional careers — Graphic Designer, Art Director, Brand Designer, Photographer, Videographer, Digital Marketer, and Animator." },
        { question: "Can I pursue higher studies after B.Sc. Visual Communication (AI)?", answer: "Yes. Graduates can pursue M.Sc. in Visual Communication, M.A. in Mass Communication, M.Des in Interaction/Graphic/Motion Design, MBA in Marketing or Media Management, or specialized programmes in AI, Animation, Film Studies, or Digital Media. Industry certifications in Generative AI, UI/UX, and Motion Design also add strong career leverage." },
      ]} />
      {children}
    </>
  );
}
