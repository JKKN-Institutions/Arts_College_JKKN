/**
 * Navigation Configuration
 *
 * Centralized navigation structure for the CAS website.
 * Used by both desktop and mobile navigation components.
 *
 * Features:
 * - Hierarchical menu structure
 * - Support for nested dropdowns
 * - Type-safe navigation items
 * - Easy to maintain and extend
 */

export interface NavigationSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavigationGroup {
  id: string;
  label: string;
  items: NavigationSubItem[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  children?: NavigationGroup[];
  isMegaMenu?: boolean; // For large dropdowns like Programmes
}

// ============================================================================
// MAIN NAVIGATION STRUCTURE
// ============================================================================

export const NAVIGATION_ITEMS: NavigationItem[] = [
  // Home - Simple link
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },

  // About - Dropdown
  {
    id: 'about',
    label: 'About',
    children: [
      {
        id: 'about-main',
        label: 'About Us',
        items: [
          {
            label: 'Our Institution',
            href: '/about/our-institution',
            description: 'Learn about our rich history and values',
          },
          {
            label: 'Our Trust',
            href: '/about/our-trust',
            description: 'The foundation that supports our mission',
          },
          {
            label: 'Vision & Mission',
            href: '/about/vision-mission',
            description: 'Our guiding principles and goals',
          },
          {
            label: 'Our Management',
            href: '/about/our-management',
            description: 'Meet our leadership team',
          },
        ],
      },
      {
        id: 'why-jkkn',
        label: 'Why Students Choose JKKN?',
        items: [
          {
            label: 'Why Erode Students?',
            href: '/erode',
            description: 'Best arts and science college near Erode',
          },
          {
            label: 'Why Salem Students?',
            href: '/salem',
            description: 'Best arts and science college near Salem',
          },
          {
            label: 'Why Tiruppur Students?',
            href: '/tiruppur',
            description: 'Best arts and science college near Tiruppur',
          },
          {
            label: 'Why Namakkal Students?',
            href: '/namakkal',
            description: 'Best arts and science college near Namakkal',
          },
          {
            label: 'Why Coimbatore Students?',
            href: '/coimbatore',
            description: 'Best arts and science college near Coimbatore',
          },
        ],
      },
    ],
  },

  // Programmes - Mega Menu
  {
    id: 'programmes',
    label: 'Programmes',
    isMegaMenu: true,
    children: [
      {
        id: 'aided-ug',
        label: 'Aided UG',
        items: [
          { label: 'B.A. English', href: '/programmes/aided/ug/ba-english' },
          { label: 'B.A. History', href: '/programmes/aided/ug/ba-history' },
          { label: 'B.Sc. Chemistry', href: '/programmes/aided/ug/bsc-chemistry' },
          { label: 'B.Sc. Mathematics', href: '/programmes/aided/ug/bsc-maths' },
          { label: 'B.Sc. Zoology', href: '/programmes/aided/ug/bsc-zoology' },
          { label: 'B.Com', href: '/programmes/aided/ug/bcom' },
        ],
      },
      {
        id: 'aided-pg',
        label: 'Aided PG',
        items: [
          { label: 'MCA', href: '/programmes/aided/pg/mca' },
          { label: 'M.Sc. Chemistry', href: '/programmes/aided/pg/msc-chemistry' },
          { label: 'M.Sc. Mathematics', href: '/programmes/aided/pg/msc-maths' },
          { label: 'M.Com', href: '/programmes/aided/pg/mcom' },
        ],
      },
      {
        id: 'aided-phd',
        label: 'Aided PhD',
        items: [
          { label: 'Commerce', href: '/programmes/aided/phd/commerce' },
          { label: 'Computer Science', href: '/programmes/aided/phd/computer-science' },
          { label: 'English', href: '/programmes/aided/phd/english' },
          { label: 'Mathematics', href: '/programmes/aided/phd/mathematics' },
        ],
      },
      {
        id: 'self-finance-ug',
        label: 'Self-Finance UG',
        items: [
          { label: 'BBA', href: '/programmes/self-finance/ug/bba' },
          { label: 'BCA', href: '/programmes/self-finance/ug/bca' },
          { label: 'B.Sc. IT', href: '/programmes/self-finance/ug/bsc-it' },
          { label: 'B.Sc. CS', href: '/programmes/self-finance/ug/bsc-cs' },
          { label: 'B.Sc. AI & DS', href: '/programmes/self-finance/ug/bsc-ai-ds' },
          { label: 'B.Com CA', href: '/programmes/self-finance/ug/bcom-ca' },
          { label: 'B.Com AI', href: '/programmes/self-finance/ug/bcom-ai' },
          { label: 'B.Sc. Textile & Fashion Designing', href: '/programmes/self-finance/ug/bsc-textile-fashion-designing' },
          { label: 'B.Sc. Textile & Fashion Designing (AI)', href: '/programmes/self-finance/ug/bsc-textile-fashion-designing-ai' },
          { label: 'B.Sc. Visual Communication', href: '/programmes/self-finance/ug/bsc-visual-communication' },
          { label: 'B.Sc. Visual Communication (AI)', href: '/programmes/self-finance/ug/bsc-visual-communication-ai' },
        ],
      },
      {
        id: 'self-finance-pg',
        label: 'Self-Finance PG',
        items: [
          { label: 'MBA', href: '/programmes/self-finance/pg/mba' },
          { label: 'M.A. English', href: '/programmes/self-finance/pg/ma-english' },
          { label: 'M.Sc. IT', href: '/programmes/self-finance/pg/msc-it' },
          { label: 'M.Sc. CS', href: '/programmes/self-finance/pg/msc-cs' },
        ],
      },
    ],
  },

  // IQAC - Dropdown
  {
    id: 'iqac',
    label: 'IQAC',
    children: [
      {
        id: 'iqac-main',
        label: 'Quality Assurance',
        items: [
          {
            label: 'Objectives & Functions',
            href: '/iqac/objectives-functions',
            description: 'IQAC objectives and quality improvement functions',
          },
          {
            label: 'Vision & Mission',
            href: '/iqac/vision-mission',
            description: 'Quality assurance vision and mission statements',
          },
          {
            label: 'Roles & Responsibilities',
            href: '/iqac/role-responsibilities',
            description: 'IQAC committee members and responsibilities',
          },
          {
            label: 'Minutes of Meeting',
            href: '/iqac/minutes-of-meeting',
            description: 'Records of IQAC meetings and decisions',
          },
          {
            label: 'NAAC',
            href: '/iqac/naac',
            description: 'NAAC accreditation and quality assessment',
          },
        ],
      },
    ],
  },

  // Facilities - Dropdown
  {
    id: 'facilities',
    label: 'Facilities',
    children: [
      {
        id: 'facilities-main',
        label: 'Campus Facilities',
        items: [
          {
            label: 'Library',
            href: '/library',
            description: 'Digital library with books and e-resources',
          },
          {
            label: 'Laboratories',
            href: '/facilities/labs',
            description: 'Science, computer, and research labs',
          },
          {
            label: 'Smart Classrooms',
            href: '/facilities/classroom',
            description: 'Technology-enabled learning spaces',
          },
          {
            label: 'Auditorium',
            href: '/facilities/auditorium',
            description: 'Multi-purpose auditorium for events',
          },
          {
            label: 'Seminar Hall',
            href: '/facilities/seminar-hall',
            description: 'Workshops and academic discussions',
          },
          {
            label: 'Hostel',
            href: '/facilities/hostel',
            description: 'Accommodation for men and women',
          },
          {
            label: 'Sports & Recreation',
            href: '/facilities/sports-club',
            description: 'Indoor and outdoor sports facilities',
          },
          {
            label: 'Food Court',
            href: '/facilities/food-court',
            description: 'Multi-cuisine dining options',
          },
          {
            label: 'Transport',
            href: '/facilities/transport',
            description: 'Bus facilities to major towns',
          },
          {
            label: 'Bank & Post Office',
            href: '/facilities/bank-post-office',
            description: 'On-campus banking and postal services',
          },
        ],
      },
    ],
  },

  // AICTE - Dropdown
  {
    id: 'aicte',
    label: 'AICTE',
    children: [
      {
        id: 'aicte-main',
        label: 'AICTE Information',
        items: [
          {
            label: 'AICTE Details',
            href: '/aicte',
            description: 'AICTE approval and compliance',
          },
          {
            label: 'AICTE Feedback',
            href: 'https://www.aicte.gov.in/feedback/index.php',
            description: 'Submit feedback through the official AICTE portal',
          },
        ],
      },
    ],
  },

  // Contact - Simple link
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },

  // Admission - Simple link
  {
    id: 'admission',
    label: 'Admission',
    href: '/admissions',
  },

  // Blog - Simple link
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
  },

  // More - Mega Dropdown
  {
    id: 'more',
    label: 'More',
    isMegaMenu: true,
    children: [
      {
        id: 'admissions',
        label: 'Admissions',
        items: [
          {
            label: 'Admissions 2026-27',
            href: '/admissions',
            description: 'Apply now — 27+ UG, PG & PhD programmes',
          },
          {
            label: 'Course-wise Admissions',
            href: '/admissions/courses',
            description: 'Browse admission pages for each programme — eligibility, fees, seats',
          },
          {
            label: 'Placements',
            href: '/placements',
            description: 'Placement stats, recruiters & career outcomes',
          },
          {
            label: 'Exam Timetable',
            href: '/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf',
          },
        ],
      },
      {
        id: 'resources',
        label: 'Resources',
        items: [
          {
            label: 'Blog',
            href: '/blog',
            description: 'News, insights & campus updates',
          },
          {
            label: 'Events',
            href: '/events',
            description: 'Upcoming events & past highlights',
          },
        ],
      },
      {
        id: 'governance',
        label: 'Governance',
        items: [
          {
            label: 'Committees',
            href: '/committees',
          },
          {
            label: 'RTI 2024',
            href: '/documents/rti/RTI-2024.pdf',
          },
        ],
      },
      {
        id: 'rankings',
        label: 'Rankings',
        items: [
          {
            label: 'NIRF 2024',
            href: '/documents/nirf/NIRF-2024-COLLEGE.pdf',
          },
          {
            label: 'NIRF 2025 Overall',
            href: '/documents/nirf/NIRF-2025-OVER-All.pdf',
          },
          {
            label: 'NIRF 2025 Arts',
            href: '/documents/nirf/NIRF-2025-COLLEGE.pdf',
          },
          {
            label: 'NIRF 2025 SDG',
            href: '/documents/nirf/NIRF-2025-SDG.pdf',
          },
        ],
      },
      {
        id: 'nirf-2026',
        label: 'NIRF 2026',
        items: [
          {
            label: 'Overall',
            href: '/documents/nirf/J.K.K Nataraja College of Arts & Science20260402- Overall.pdf',
          },
          {
            label: 'Arts',
            href: '/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-college.pdf',
          },
          {
            label: 'SDG',
            href: '/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-  Sustainable Institutions.pdf',
          },
        ],
      },
    ],
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get navigation item by ID
 */
export function getNavigationItem(id: string): NavigationItem | undefined {
  return NAVIGATION_ITEMS.find((item) => item.id === id);
}

/**
 * Get all navigation items with children (dropdowns)
 */
export function getDropdownItems(): NavigationItem[] {
  return NAVIGATION_ITEMS.filter((item) => item.children && item.children.length > 0);
}

/**
 * Check if a navigation item has a mega menu
 */
export function isMegaMenu(id: string): boolean {
  const item = getNavigationItem(id);
  return item?.isMegaMenu || false;
}

/**
 * Get all href paths from navigation (for static generation)
 */
export function getAllNavigationPaths(): string[] {
  const paths: string[] = [];

  NAVIGATION_ITEMS.forEach((item) => {
    if (item.href) {
      paths.push(item.href);
    }

    if (item.children) {
      item.children.forEach((group) => {
        group.items.forEach((subItem) => {
          paths.push(subItem.href);
        });
      });
    }
  });

  return paths;
}

/**
 * Find active navigation item based on pathname
 */
export function getActiveNavigationId(pathname: string): string | null {
  // Exact match for home
  if (pathname === '/') {
    return 'home';
  }

  // Check each navigation item
  for (const item of NAVIGATION_ITEMS) {
    if (item.href === pathname) {
      return item.id;
    }

    // Check children
    if (item.children) {
      for (const group of item.children) {
        const hasActiveItem = group.items.some((subItem) => subItem.href === pathname);
        if (hasActiveItem) {
          return item.id;
        }
      }
    }
  }

  // Fallback: match by path segment
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0];
    const matchingItem = NAVIGATION_ITEMS.find((item) => item.id === firstSegment);
    return matchingItem?.id || null;
  }

  return null;
}
