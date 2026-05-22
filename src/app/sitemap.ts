import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";
import { getAllAdmissionSlugs } from "@/data/programme-metadata";

const SITE_URL = "https://cas.jkkn.ac.in";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const s = (url: string, changeFrequency: "weekly" | "monthly" | "yearly", priority: number) =>
    ({ url, changeFrequency, priority });

  const staticRoutes: MetadataRoute.Sitemap = [
    // Homepage
    s(SITE_URL, "weekly", 1.0),

    // About
    s(`${SITE_URL}/about`, "monthly", 0.7),
    s(`${SITE_URL}/about/our-institution`, "monthly", 0.7),
    s(`${SITE_URL}/about/our-management`, "monthly", 0.7),
    s(`${SITE_URL}/about/our-trust`, "monthly", 0.7),
    s(`${SITE_URL}/about/vision-mission`, "monthly", 0.7),

    // Admissions, Contact, Placements, Library, Gallery, IQAC
    s(`${SITE_URL}/admissions`, "monthly", 0.8),
    s(`${SITE_URL}/admissions/courses`, "monthly", 0.85),
    ...getAllAdmissionSlugs().map((slug) =>
      s(`${SITE_URL}/admissions/${slug}`, "monthly", 0.85)
    ),
    s(`${SITE_URL}/contact`, "yearly", 0.6),
    s(`${SITE_URL}/placements`, "monthly", 0.8),
    s(`${SITE_URL}/library`, "monthly", 0.6),
    s(`${SITE_URL}/gallery`, "monthly", 0.6),

    // IQAC
    s(`${SITE_URL}/iqac`, "yearly", 0.5),
    s(`${SITE_URL}/iqac/naac`, "yearly", 0.5),
    s(`${SITE_URL}/iqac/objectives-functions`, "yearly", 0.5),
    s(`${SITE_URL}/iqac/role-responsibilities`, "yearly", 0.5),
    s(`${SITE_URL}/iqac/vision-mission`, "yearly", 0.5),
    s(`${SITE_URL}/iqac/minutes-of-meeting`, "yearly", 0.5),

    // NIRF / Others
    s(`${SITE_URL}/nirf`, "yearly", 0.5),
    s(`${SITE_URL}/nirf/nirf-2025`, "yearly", 0.5),
    s(`${SITE_URL}/others`, "yearly", 0.4),
    s(`${SITE_URL}/others/academic-calendar`, "monthly", 0.6),
    s(`${SITE_URL}/others/privacy-policy`, "yearly", 0.3),

    // Blog (parent + static posts)
    s(`${SITE_URL}/blog`, "weekly", 0.7),
    s(`${SITE_URL}/blog/top-10-career-options-after-bed-2026`, "yearly", 0.7),
    s(`${SITE_URL}/blog/bed-admission-2026-tamil-nadu`, "yearly", 0.7),

    // Events parent
    s(`${SITE_URL}/events`, "weekly", 0.7),

    // Key PDF assets
    s(`${SITE_URL}/pdf/brochure.pdf`, "yearly", 0.6),
    s(`${SITE_URL}/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf`, "yearly", 0.5),

    // Programmes parent
    s(`${SITE_URL}/programmes`, "monthly", 0.8),

    // Programmes — Aided UG
    s(`${SITE_URL}/programmes/aided/ug/ba-english`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/ug/ba-history`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/ug/bcom`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/ug/bsc-chemistry`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/ug/bsc-maths`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/ug/bsc-zoology`, "monthly", 0.9),

    // Programmes — Aided PG
    s(`${SITE_URL}/programmes/aided/pg/ma-history`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/mca`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/mcom`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/msc-chemistry`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/msc-computer-science`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/msc-physics`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/pg/msc-zoology`, "monthly", 0.9),

    // Programmes — Aided PhD
    s(`${SITE_URL}/programmes/aided/phd/chemistry`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/phd/tamil`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/aided/phd/zoology`, "monthly", 0.9),

    // Programmes — Self-Finance UG
    s(`${SITE_URL}/programmes/self-finance/ug/ba-english`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bba`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bca`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bcom-accounting-finance`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bcom-banking-insurance`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bcom-ca`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bcom-ai`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-ai-ds`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-computer-science`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-cs-cyber-security`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-microbiology`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-physics`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-textile-fashion-designing`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-textile-fashion-designing-ai`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-visual-communication`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/ug/bsc-visual-communication-ai`, "monthly", 0.9),

    // Programmes — Self-Finance PG
    s(`${SITE_URL}/programmes/self-finance/pg/ma-english`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/pg/mcom`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/pg/msc-computer-science`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/pg/msc-cs-data-analytics`, "monthly", 0.9),
    s(`${SITE_URL}/programmes/self-finance/pg/msc-mathematics`, "monthly", 0.9),

    // Departments parent
    s(`${SITE_URL}/departments`, "monthly", 0.7),

    // Departments — Aided
    s(`${SITE_URL}/departments/aided/chemistry`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/commerce`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/computer-science`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/economics`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/english`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/geography`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/history`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/library`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/mathematics`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/physical-education`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/physics`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/tamil`, "monthly", 0.8),
    s(`${SITE_URL}/departments/aided/zoology`, "monthly", 0.8),

    // Departments — Self-Finance
    s(`${SITE_URL}/departments/self-finance/ai-data-science`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/business-administration`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/commerce`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/computer-applications`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/computer-science`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/cyber-security`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/english`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/mathematics`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/microbiology`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/physics`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/tamil`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/textile-fashion-designing`, "monthly", 0.8),
    s(`${SITE_URL}/departments/self-finance/visual-communication`, "monthly", 0.8),

    // Faculty parent
    s(`${SITE_URL}/faculty`, "monthly", 0.7),

    // Facilities
    s(`${SITE_URL}/facilities`, "monthly", 0.7),
    s(`${SITE_URL}/facilities/auditorium`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/bank-post-office`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/classroom`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/food-court`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/hostel`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/labs`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/seminar-hall`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/sports-club`, "yearly", 0.7),
    s(`${SITE_URL}/facilities/transport`, "yearly", 0.7),

    // City landing pages
    s(`${SITE_URL}/erode`, "monthly", 0.8),
    s(`${SITE_URL}/namakkal`, "monthly", 0.8),
    s(`${SITE_URL}/salem`, "monthly", 0.8),
    s(`${SITE_URL}/tiruppur`, "monthly", 0.8),
    s(`${SITE_URL}/coimbatore`, "monthly", 0.8),
  ];

  // Dynamic routes from Supabase
  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const supabase = await createClient();
    const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts-science";

    const [{ data: blogs }, { data: events }, { data: faculty }] = await Promise.all([
      supabase
        .from("blogs")
        .select("slug, updated_at, created_at")
        .eq("college_id", collegeId)
        .eq("is_published", true),
      supabase
        .from("events")
        .select("slug, event_date, created_at")
        .eq("college_id", collegeId)
        .eq("is_published", true),
      supabase
        .from("faculty")
        .select("id, slug, updated_at, created_at")
        .eq("college_id", collegeId)
        .eq("is_active", true),
    ]);

    if (blogs) {
      dynamicRoutes = dynamicRoutes.concat(
        blogs.map((blog) => ({
          url: `${SITE_URL}/blog/campus/${blog.slug}`,
          lastModified: blog.updated_at ?? blog.created_at ?? undefined,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        }))
      );
    }

    if (events) {
      dynamicRoutes = dynamicRoutes.concat(
        events.map((event) => ({
          url: `${SITE_URL}/events/${event.slug}`,
          lastModified: event.event_date ?? event.created_at ?? undefined,
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }))
      );
    }

    if (faculty) {
      dynamicRoutes = dynamicRoutes.concat(
        faculty
          .filter((f) => f.slug || f.id)
          .map((f) => ({
            url: `${SITE_URL}/faculty/${f.slug ?? f.id}`,
            lastModified: f.updated_at ?? f.created_at ?? undefined,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          }))
      );
    }
  } catch (err) {
    console.error("[sitemap] Supabase fetch failed:", err);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
