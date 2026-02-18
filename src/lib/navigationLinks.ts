import {
  Home,
  Info,
  GraduationCap,
  Building2,
  FileCheck,
  Warehouse,
  UserPlus,
  FileText,
  LayoutGrid,
  Phone,
  LucideIcon
} from 'lucide-react';
import { BottomNavGroup, FlatMenuItem, HierarchicalMenuItem } from '@/components/BottomNav/types';

// Navigation structure for CAS website
export function getNavigationGroups(pathname: string): BottomNavGroup[] {
  return [
    // Group 1: Home
    {
      id: 'home',
      groupLabel: 'Home',
      icon: Home,
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/'
        }
      ]
    },

    // Group 2: About
    {
      id: 'about',
      groupLabel: 'About',
      icon: Info,
      menus: [
        {
          href: '/about/our-institution',
          label: 'Our Institution',
          icon: Info,
          active: pathname === '/about/our-institution'
        },
        {
          href: '/about/our-trust',
          label: 'Our Trust',
          icon: Info,
          active: pathname === '/about/our-trust'
        },
        {
          href: '/about/vision-mission',
          label: 'Vision & Mission',
          icon: Info,
          active: pathname === '/about/vision-mission'
        },
        {
          href: '/about/our-management',
          label: 'Our Management',
          icon: Info,
          active: pathname === '/about/our-management'
        }
      ]
    },

    // Group 3: Programmes (Hierarchical drill-down navigation)
    {
      id: 'programmes',
      groupLabel: 'Programmes',
      icon: GraduationCap,
      isHierarchical: true,
      hierarchicalMenus: [
        // Level 1: Aided
        {
          id: 'aided',
          label: 'Aided',
          icon: GraduationCap,
          children: [
            // Level 2: UG
            {
              id: 'aided-ug',
              label: 'UG',
              icon: GraduationCap,
              children: [
                // Level 3: Individual courses
                {
                  id: 'aided-ug-ba-english',
                  label: 'B.A. English',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/ba-english',
                  active: pathname === '/programmes/aided/ug/ba-english'
                },
                {
                  id: 'aided-ug-ba-history',
                  label: 'B.A. History',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/ba-history',
                  active: pathname === '/programmes/aided/ug/ba-history'
                },
                {
                  id: 'aided-ug-bsc-chemistry',
                  label: 'B.Sc. Chemistry',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/bsc-chemistry',
                  active: pathname === '/programmes/aided/ug/bsc-chemistry'
                },
                {
                  id: 'aided-ug-bsc-maths',
                  label: 'B.Sc. Mathematics',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/bsc-maths',
                  active: pathname === '/programmes/aided/ug/bsc-maths'
                },
                {
                  id: 'aided-ug-bsc-zoology',
                  label: 'B.Sc. Zoology',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/bsc-zoology',
                  active: pathname === '/programmes/aided/ug/bsc-zoology'
                },
                {
                  id: 'aided-ug-bcom',
                  label: 'B.Com',
                  icon: GraduationCap,
                  href: '/programmes/aided/ug/bcom',
                  active: pathname === '/programmes/aided/ug/bcom'
                }
              ]
            },
            // Level 2: PG
            {
              id: 'aided-pg',
              label: 'PG',
              icon: GraduationCap,
              children: [
                {
                  id: 'aided-pg-mca',
                  label: 'MCA',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/mca',
                  active: pathname === '/programmes/aided/pg/mca'
                },
                {
                  id: 'aided-pg-mcom',
                  label: 'M.Com',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/mcom',
                  active: pathname === '/programmes/aided/pg/mcom'
                },
                {
                  id: 'aided-pg-msc-chemistry',
                  label: 'M.Sc. Chemistry',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/msc-chemistry',
                  active: pathname === '/programmes/aided/pg/msc-chemistry'
                },
                {
                  id: 'aided-pg-msc-computer-science',
                  label: 'M.Sc. Computer Science',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/msc-computer-science',
                  active: pathname === '/programmes/aided/pg/msc-computer-science'
                },
                {
                  id: 'aided-pg-msc-physics',
                  label: 'M.Sc. Physics',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/msc-physics',
                  active: pathname === '/programmes/aided/pg/msc-physics'
                },
                {
                  id: 'aided-pg-msc-zoology',
                  label: 'M.Sc. Zoology',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/msc-zoology',
                  active: pathname === '/programmes/aided/pg/msc-zoology'
                }
              ]
            },
            // Level 2: PhD
            {
              id: 'aided-phd',
              label: 'PhD',
              icon: GraduationCap,
              children: [
                {
                  id: 'aided-phd-chemistry',
                  label: 'Chemistry',
                  icon: GraduationCap,
                  href: '/programmes/aided/phd/chemistry',
                  active: pathname === '/programmes/aided/phd/chemistry'
                },
                {
                  id: 'aided-phd-tamil',
                  label: 'Tamil',
                  icon: GraduationCap,
                  href: '/programmes/aided/phd/tamil',
                  active: pathname === '/programmes/aided/phd/tamil'
                },
                {
                  id: 'aided-phd-zoology',
                  label: 'Zoology',
                  icon: GraduationCap,
                  href: '/programmes/aided/phd/zoology',
                  active: pathname === '/programmes/aided/phd/zoology'
                }
              ]
            }
          ]
        },
        // Level 1: Self-Finance
        {
          id: 'self-finance',
          label: 'Self-Finance',
          icon: GraduationCap,
          children: [
            // Level 2: UG
            {
              id: 'self-finance-ug',
              label: 'UG',
              icon: GraduationCap,
              children: [
                {
                  id: 'self-finance-ug-bba',
                  label: 'BBA',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bba',
                  active: pathname === '/programmes/self-finance/ug/bba'
                },
                {
                  id: 'self-finance-ug-bca',
                  label: 'BCA',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bca',
                  active: pathname === '/programmes/self-finance/ug/bca'
                },
                {
                  id: 'self-finance-ug-bcom-accounting-finance',
                  label: 'B.Com Accounting and Finance',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bcom-accounting-finance',
                  active: pathname === '/programmes/self-finance/ug/bcom-accounting-finance'
                },
                {
                  id: 'self-finance-ug-bcom-banking-insurance',
                  label: 'B.Com Banking and Insurance',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bcom-banking-insurance',
                  active: pathname === '/programmes/self-finance/ug/bcom-banking-insurance'
                },
                {
                  id: 'self-finance-ug-bcom-ca',
                  label: 'B.Com CA',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bcom-ca',
                  active: pathname === '/programmes/self-finance/ug/bcom-ca'
                },
                {
                  id: 'self-finance-ug-bsc-computer-science',
                  label: 'B.Sc. Computer Science',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-computer-science',
                  active: pathname === '/programmes/self-finance/ug/bsc-computer-science'
                },
                {
                  id: 'self-finance-ug-bsc-cs-cyber-security',
                  label: 'B.Sc. CS (Cyber Security)',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-cs-cyber-security',
                  active: pathname === '/programmes/self-finance/ug/bsc-cs-cyber-security'
                },
                {
                  id: 'self-finance-ug-bsc-microbiology',
                  label: 'B.Sc. Microbiology',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-microbiology',
                  active: pathname === '/programmes/self-finance/ug/bsc-microbiology'
                },
                {
                  id: 'self-finance-ug-bsc-physics',
                  label: 'B.Sc. Physics',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-physics',
                  active: pathname === '/programmes/self-finance/ug/bsc-physics'
                },
                {
                  id: 'self-finance-ug-bsc-textile-fashion-designing',
                  label: 'B.Sc. Textile and Fashion Design',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-textile-fashion-designing',
                  active: pathname === '/programmes/self-finance/ug/bsc-textile-fashion-designing'
                },
                {
                  id: 'self-finance-ug-bsc-visual-communication',
                  label: 'B.Sc. Visual Communication',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-visual-communication',
                  active: pathname === '/programmes/self-finance/ug/bsc-visual-communication'
                }
              ]
            },
            // Level 2: PG
            {
              id: 'self-finance-pg',
              label: 'PG',
              icon: GraduationCap,
              children: [
                {
                  id: 'self-finance-pg-mcom',
                  label: 'M.Com',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/pg/mcom',
                  active: pathname === '/programmes/self-finance/pg/mcom'
                },
                {
                  id: 'self-finance-pg-ma-english',
                  label: 'M.A. English',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/pg/ma-english',
                  active: pathname === '/programmes/self-finance/pg/ma-english'
                },
                {
                  id: 'self-finance-pg-msc-computer-science',
                  label: 'M.Sc. Computer Science',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/pg/msc-computer-science',
                  active: pathname === '/programmes/self-finance/pg/msc-computer-science'
                },
                {
                  id: 'self-finance-pg-msc-cs-data-analytics',
                  label: 'M.Sc. CS (Data Analytics)',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/pg/msc-cs-data-analytics',
                  active: pathname === '/programmes/self-finance/pg/msc-cs-data-analytics'
                },
                {
                  id: 'self-finance-pg-msc-mathematics',
                  label: 'M.Sc. Mathematics',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/pg/msc-mathematics',
                  active: pathname === '/programmes/self-finance/pg/msc-mathematics'
                }
              ]
            }
          ]
        }
      ],
      // Fallback flat menus (for backward compatibility)
      menus: []
    },

    // Group 3: Departments - HIDDEN
    // {
    //   id: 'departments',
    //   groupLabel: 'Departments',
    //   icon: Building2,
    //   menus: [
    //     // Aided Departments
    //     {
    //       href: '/departments/aided/english',
    //       label: 'English',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/english'
    //     },
    //     {
    //       href: '/departments/aided/tamil',
    //       label: 'Tamil',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/tamil'
    //     },
    //     {
    //       href: '/departments/aided/history',
    //       label: 'History',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/history'
    //     },
    //     {
    //       href: '/departments/aided/chemistry',
    //       label: 'Chemistry',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/chemistry'
    //     },
    //     {
    //       href: '/departments/aided/mathematics',
    //       label: 'Mathematics',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/mathematics'
    //     },
    //     {
    //       href: '/departments/aided/zoology',
    //       label: 'Zoology',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/zoology'
    //     },
    //     {
    //       href: '/departments/aided/commerce',
    //       label: 'Commerce',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/commerce'
    //     },
    //     {
    //       href: '/departments/aided/computer-science',
    //       label: 'Computer Science',
    //       icon: Building2,
    //       parentLabel: 'Aided',
    //       active: pathname === '/departments/aided/computer-science'
    //     },
    //     // Self-Finance Departments
    //     {
    //       href: '/departments/self-finance/bba',
    //       label: 'BBA',
    //       icon: Building2,
    //       parentLabel: 'Self-Finance',
    //       active: pathname === '/departments/self-finance/bba'
    //     },
    //     {
    //       href: '/departments/self-finance/bca',
    //       label: 'BCA',
    //       icon: Building2,
    //       parentLabel: 'Self-Finance',
    //       active: pathname === '/departments/self-finance/bca'
    //     },
    //     {
    //       href: '/departments/self-finance/it',
    //       label: 'IT',
    //       icon: Building2,
    //       parentLabel: 'Self-Finance',
    //       active: pathname === '/departments/self-finance/it'
    //     },
    //     {
    //       href: '/departments/self-finance/commerce-ca',
    //       label: 'Commerce CA',
    //       icon: Building2,
    //       parentLabel: 'Self-Finance',
    //       active: pathname === '/departments/self-finance/commerce-ca'
    //     }
    //   ]
    // },

    // Group 4: IQAC & Quality
    {
      id: 'iqac',
      groupLabel: 'IQAC',
      icon: FileCheck,
      menus: [
        {
          href: '/iqac/composition',
          label: 'IQAC Composition',
          icon: FileCheck,
          active: pathname === '/iqac/composition'
        },
        {
          href: '/iqac/minutes',
          label: 'Meeting Minutes',
          icon: FileCheck,
          active: pathname === '/iqac/minutes'
        },
        {
          href: '/iqac/iiqa',
          label: 'IIQA',
          icon: FileCheck,
          active: pathname === '/iqac/iiqa'
        },
        {
          href: '/iqac/ssr',
          label: 'SSR',
          icon: FileCheck,
          active: pathname === '/iqac/ssr'
        },
        {
          href: '/iqac/aqar',
          label: 'AQAR',
          icon: FileCheck,
          active: pathname === '/iqac/aqar'
        },
        {
          href: '/iqac/best-practices',
          label: 'Best Practices',
          icon: FileCheck,
          active: pathname === '/iqac/best-practices'
        },
        {
          href: '/iqac/college-calendar',
          label: 'College Calendar',
          icon: FileCheck,
          active: pathname === '/iqac/college-calendar'
        }
      ]
    },

    // Group 5: Facilities (More menu)
    {
      id: 'facilities',
      groupLabel: 'Facilities',
      icon: Warehouse,
      menus: [
        {
          href: '/facilities/library',
          label: 'Library',
          icon: Warehouse,
          active: pathname === '/facilities/library'
        },
        {
          href: '/facilities/hostel',
          label: 'Hostel',
          icon: Warehouse,
          active: pathname === '/facilities/hostel'
        },
        {
          href: '/facilities/sports',
          label: 'Sports',
          icon: Warehouse,
          active: pathname === '/facilities/sports'
        },
        {
          href: '/facilities/nss',
          label: 'NSS',
          icon: Warehouse,
          active: pathname === '/facilities/nss'
        },
        {
          href: '/facilities/ncc',
          label: 'NCC',
          icon: Warehouse,
          active: pathname === '/facilities/ncc'
        },
        {
          href: '/facilities/placement-cell',
          label: 'Placement Cell',
          icon: Warehouse,
          active: pathname === '/facilities/placement-cell'
        }
      ]
    },

    // Group 6: Admissions & Exams (More menu)
    {
      id: 'admissions',
      groupLabel: 'Admissions',
      icon: UserPlus,
      menus: [
        {
          href: '/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf',
          label: 'Exam Timetable',
          icon: UserPlus,
          active: false
        }
      ]
    },

    // Group 7: RTI & Transparency (More menu)
    {
      id: 'rti',
      groupLabel: 'RTI',
      icon: FileText,
      menus: [
        {
          href: '/documents/rti/RTI-2024.pdf',
          label: 'RTI 2024',
          icon: FileText,
          active: false
        }
      ]
    },

    // Group 8: Others (More menu)
    {
      id: 'others',
      groupLabel: 'Others',
      icon: LayoutGrid,
      menus: [
        {
          href: '/aicte',
          label: 'AICTE',
          icon: LayoutGrid,
          active: pathname === '/aicte'
        },
        {
          href: '/committees',
          label: 'Committees',
          icon: LayoutGrid,
          active: pathname === '/committees'
        },
        {
          href: '/documents/nirf/NIRF-2024-COLLEGE.pdf',
          label: 'NIRF 2024',
          icon: LayoutGrid,
          active: false
        },
        {
          href: '/documents/nirf/NIRF-2025-COLLEGE.pdf',
          label: 'NIRF 2025',
          icon: LayoutGrid,
          active: false
        }
      ]
    },

    // Group 9: Contact (More menu)
    {
      id: 'contact',
      groupLabel: 'Contact',
      icon: Phone,
      menus: [
        {
          href: '/contact',
          label: 'Contact Us',
          icon: Phone,
          active: pathname === '/contact'
        }
      ]
    }
  ];
}
