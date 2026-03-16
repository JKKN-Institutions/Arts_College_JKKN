import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

const SITE_URL = "https://cas.jkkn.ac.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    // Homepage
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },

    // About pages
    { url: `${SITE_URL}/about/our-institution`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about/our-management`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about/our-trust`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about/vision-mission`, changeFrequency: "monthly", priority: 0.7 },

    // Admissions, Contact, Library, Gallery, IQAC
    { url: `${SITE_URL}/admissions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/library`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/iqac/naac`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/iqac/objectives-functions`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/iqac/role-responsibilities`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/iqac/vision-mission`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/nirf/nirf-2025`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/others/academic-calendar`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/others/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/blog/top-10-career-options-after-bed-2026`, changeFrequency: "yearly", priority: 0.7 },

    // Programmes — Aided UG
    { url: `${SITE_URL}/programmes/aided/ug/ba-english`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/ug/ba-history`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/ug/bcom`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/ug/bsc-chemistry`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/ug/bsc-maths`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/ug/bsc-zoology`, changeFrequency: "monthly", priority: 0.9 },

    // Programmes — Aided PG
    { url: `${SITE_URL}/programmes/aided/pg/ma-history`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/mca`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/mcom`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/msc-chemistry`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/msc-computer-science`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/msc-physics`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/pg/msc-zoology`, changeFrequency: "monthly", priority: 0.9 },

    // Programmes — Aided PhD
    { url: `${SITE_URL}/programmes/aided/phd/chemistry`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/phd/tamil`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/aided/phd/zoology`, changeFrequency: "monthly", priority: 0.9 },

    // Programmes — Self-Finance UG
    { url: `${SITE_URL}/programmes/self-finance/ug/ba-english`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bba`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bca`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bcom-accounting-finance`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bcom-banking-insurance`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bcom-ca`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-ai-ds`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-computer-science`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-cs-cyber-security`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-microbiology`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-physics`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-textile-fashion-designing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/ug/bsc-visual-communication`, changeFrequency: "monthly", priority: 0.9 },

    // Programmes — Self-Finance PG
    { url: `${SITE_URL}/programmes/self-finance/pg/ma-english`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/pg/mcom`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/pg/msc-computer-science`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/pg/msc-cs-data-analytics`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/programmes/self-finance/pg/msc-mathematics`, changeFrequency: "monthly", priority: 0.9 },

    // Departments — Aided
    { url: `${SITE_URL}/departments/aided/botany`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/chemistry`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/commerce`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/computer-science`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/economics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/english`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/geography`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/history`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/library`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/mathematics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/physical-education`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/physics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/tamil`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/aided/zoology`, changeFrequency: "monthly", priority: 0.8 },

    // Departments — Self-Finance
    { url: `${SITE_URL}/departments/self-finance/ai-data-science`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/business-administration`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/commerce`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/computer-applications`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/computer-science`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/cyber-security`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/english`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/mathematics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/microbiology`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/physics`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/tamil`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/textile-fashion-designing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/departments/self-finance/visual-communication`, changeFrequency: "monthly", priority: 0.8 },

    // Facilities
    { url: `${SITE_URL}/facilities/auditorium`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/bank-post-office`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/classroom`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/food-court`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/hostel`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/labs`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/seminar-hall`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/sports-club`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/facilities/transport`, changeFrequency: "yearly", priority: 0.7 },
  ];

  // Dynamic routes from Supabase
  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const supabase = await createClient();
    const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "arts-science";

    const [{ data: blogs }, { data: events }] = await Promise.all([
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
  } catch {
    // Supabase unavailable at build time — return static routes only
  }

  return [...staticRoutes, ...dynamicRoutes];
}
