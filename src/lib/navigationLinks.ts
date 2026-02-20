import {
  Home,
  Info,
  GraduationCap,
  FileCheck,
  Warehouse,
  UserPlus,
  FileText,
  LayoutGrid,
  Phone,
  BookOpen,
  FlaskConical,
  Mic2,
  Users,
  School,
  UtensilsCrossed,
  Dumbbell,
  Landmark,
  Bus,
  BedDouble,
  Building2,
  Heart,
  Target,
  Briefcase,
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
          icon: Building2,
          active: pathname === '/about/our-institution'
        },
        {
          href: '/about/our-trust',
          label: 'Our Trust',
          icon: Heart,
          active: pathname === '/about/our-trust'
        },
        {
          href: '/about/vision-mission',
          label: 'Vision & Mission',
          icon: Target,
          active: pathname === '/about/vision-mission'
        },
        {
          href: '/about/our-management',
          label: 'Our Management',
          icon: Briefcase,
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
                  id: 'aided-pg-msc-zoology',
                  label: 'M.Sc. Zoology',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/msc-zoology',
                  active: pathname === '/programmes/aided/pg/msc-zoology'
                },
                {
                  id: 'aided-pg-ma-history',
                  label: 'M.A. History',
                  icon: GraduationCap,
                  href: '/programmes/aided/pg/ma-history',
                  active: pathname === '/programmes/aided/pg/ma-history'
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
                },
                {
                  id: 'self-finance-ug-bsc-ai-ds',
                  label: 'B.Sc. AI & DS',
                  icon: GraduationCap,
                  href: '/programmes/self-finance/ug/bsc-ai-ds',
                  active: pathname === '/programmes/self-finance/ug/bsc-ai-ds'
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

    // Group 4: IQAC & Quality (Hierarchical — matches desktop nested structure)
    {
      id: 'iqac',
      groupLabel: 'IQAC',
      icon: FileCheck,
      isHierarchical: true,
      hierarchicalMenus: [
        { id: 'iqac-vision-mission', label: 'Vision & Mission', icon: FileCheck, href: '/iqac/vision-mission', active: pathname === '/iqac/vision-mission' },
        { id: 'iqac-objectives-functions', label: 'Objectives/Functions', icon: FileCheck, href: '/iqac/objectives-functions', active: pathname === '/iqac/objectives-functions' },
        { id: 'iqac-role-responsibilities', label: 'Role / Responsibilities', icon: FileCheck, href: '/iqac/role-responsibilities', active: pathname === '/iqac/role-responsibilities' },
        { id: 'iqac-minutes', label: 'Minutes of IQAC Meeting', icon: FileCheck, href: '/iqac/minutes-of-meeting', active: pathname === '/iqac/minutes-of-meeting' },
        { id: 'iqac-naac', label: 'NAAC', icon: FileCheck, href: '/iqac/naac', active: pathname === '/iqac/naac' },
        {
          id: 'iqac-iiqa',
          label: 'IIQA',
          icon: FileCheck,
          children: [
            { id: 'iqac-iiqa-cycle1', label: 'Cycle-I', icon: FileCheck, href: '/documents/iqac/iiqa/cycle-1.pdf', active: false }
          ]
        },
        {
          id: 'iqac-ssr',
          label: 'Self-Study-Report (SSR)',
          icon: FileCheck,
          children: [
            { id: 'iqac-ssr-cycle1', label: 'Cycle-I (2013-2018)', icon: FileCheck, href: '/documents/iqac/ssr/cycle-1-2013-2018.pdf', active: false }
          ]
        },
        {
          id: 'iqac-aqar',
          label: 'AQAR',
          icon: FileCheck,
          children: [
            { id: 'iqac-aqar-2022-23', label: '2022-2023', icon: FileCheck, href: '/documents/iqac/aqar/aqar-2022-2023.pdf', active: false },
            { id: 'iqac-aqar-2021-22', label: '2021-2022', icon: FileCheck, href: '/documents/iqac/aqar/aqar-2021-2022.pdf', active: false },
            { id: 'iqac-aqar-2020-21', label: '2020-2021', icon: FileCheck, href: '/documents/iqac/aqar/aqar-2020-2021.pdf', active: false },
            { id: 'iqac-aqar-2019-20', label: '2019-2020', icon: FileCheck, href: '/documents/iqac/aqar/aqar-2019-2020.pdf', active: false },
            { id: 'iqac-aqar-2018-19', label: '2018-2019', icon: FileCheck, href: '/documents/iqac/aqar/aqar-2018-2019.pdf', active: false }
          ]
        },
        {
          id: 'iqac-best-practices',
          label: 'Best Practices',
          icon: FileCheck,
          children: [
            { id: 'iqac-bp-2022-23', label: '2022-2023', icon: FileCheck, href: '/documents/iqac/best-practices/best-practice-2022-2023.pdf', active: false },
            { id: 'iqac-bp-2021-22', label: '2021-2022', icon: FileCheck, href: '/documents/iqac/best-practices/best-practice-2021-2022.pdf', active: false },
            { id: 'iqac-bp-2020-21', label: '2020-2021', icon: FileCheck, href: '/documents/iqac/best-practices/best-practice-2020-2021.pdf', active: false },
            { id: 'iqac-bp-2019-20', label: '2019-2020', icon: FileCheck, href: '/documents/iqac/best-practices/best-practice-2019-2020.pdf', active: false },
            { id: 'iqac-bp-2018-19', label: '2018-2019', icon: FileCheck, href: '/documents/iqac/best-practices/best-practice-2018-2019.pdf', active: false }
          ]
        },
        {
          id: 'iqac-college-magazine',
          label: 'College Magazine',
          icon: FileCheck,
          children: [
            { id: 'iqac-cm-2022-23', label: '2022-2023', icon: FileCheck, href: '/documents/iqac/college-magazine/magazine-2022-2023.pdf', active: false },
            { id: 'iqac-cm-2020-21', label: '2020-2021', icon: FileCheck, href: '/documents/iqac/college-magazine/magazine-2020-2021.pdf', active: false }
          ]
        }
      ],
      menus: []
    },

    // Group 5: Facilities (More menu)
    {
      id: 'facilities',
      groupLabel: 'Facilities',
      icon: Warehouse,
      menus: [
        {
          href: '/library',
          label: 'Library',
          icon: BookOpen,
          active: pathname === '/library'
        },
        {
          href: '/facilities/labs',
          label: 'Labs',
          icon: FlaskConical,
          active: pathname === '/facilities/labs'
        },
        {
          href: '/facilities/auditorium',
          label: 'Auditorium',
          icon: Mic2,
          active: pathname === '/facilities/auditorium'
        },
        {
          href: '/facilities/seminar-hall',
          label: 'Seminar Hall',
          icon: Users,
          active: pathname === '/facilities/seminar-hall'
        },
        {
          href: '/facilities/classroom',
          label: 'Classroom',
          icon: School,
          active: pathname === '/facilities/classroom'
        },
        {
          href: '/facilities/food-court',
          label: 'Food Court',
          icon: UtensilsCrossed,
          active: pathname === '/facilities/food-court'
        },
        {
          href: '/facilities/sports-club',
          label: 'Sports Club',
          icon: Dumbbell,
          active: pathname === '/facilities/sports-club'
        },
        {
          href: '/facilities/bank-post-office',
          label: 'Bank & Post Office',
          icon: Landmark,
          active: pathname === '/facilities/bank-post-office'
        },
        {
          href: '/facilities/transport',
          label: 'Transport',
          icon: Bus,
          active: pathname === '/facilities/transport'
        },
        {
          href: '/facilities/hostel',
          label: 'Hostel',
          icon: BedDouble,
          active: pathname === '/facilities/hostel'
        }
      ]
    },

    // Group 6: Examination (More menu)
    {
      id: 'admissions',
      groupLabel: 'Examination',
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

    // Group 8: AICTE (More menu)
    {
      id: 'aicte',
      groupLabel: 'AICTE',
      icon: LayoutGrid,
      menus: [
        {
          href: '/aicte',
          label: 'AICTE',
          icon: LayoutGrid,
          active: pathname === '/aicte'
        },
        {
          href: '/documents/aicte/LOA_EOA_Report_23-24.pdf',
          label: 'LOA & EOA Report',
          icon: LayoutGrid,
          active: false
        },
        {
          href: '/documents/aicte/MANDATORY-DISCLOSURE-23-24.pdf',
          label: 'Mandatory Disclosure',
          icon: LayoutGrid,
          active: false
        },
        {
          href: 'https://www.aicte.gov.in/feedback/index.php',
          label: 'AICTE Feedback',
          icon: LayoutGrid,
          active: false
        }
      ]
    },

    // Group 9: Committees (hierarchical — matches desktop nested submenu)
    {
      id: 'committees',
      groupLabel: 'Committees',
      icon: LayoutGrid,
      isHierarchical: true,
      hierarchicalMenus: [
        { id: 'committee-iqac', label: 'Internal Quality Assurance Cell', icon: LayoutGrid, href: '/documents/committees/Internal-Quality-Assurance-Cell-2024.pdf', active: false },
        { id: 'committee-anti-ragging', label: 'Anti-Ragging Committee', icon: LayoutGrid, href: '/documents/committees/2-Anti%20Ragging%20Committee%202025.pdf', active: false },
        { id: 'committee-grievance', label: 'Grievance Redressal Cell', icon: LayoutGrid, href: '/documents/committees/3-Grievance-Redressal%20cell.pdf', active: false },
        { id: 'committee-grievance-form', label: 'Student Grievance Form', icon: LayoutGrid, href: 'https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform', active: false },
        { id: 'committee-icc', label: 'Internal Committee', icon: LayoutGrid, href: '/documents/committees/4-ICC-Merged.pdf', active: false },
        { id: 'committee-iic', label: 'Institution Industry Cell', icon: LayoutGrid, href: '/documents/committees/27-institution industry cell IIC 2025.pdf', active: false },
        { id: 'committee-scst', label: 'SC-ST Committee', icon: LayoutGrid, href: '/documents/committees/5-SCST Cell.pdf', active: false }
      ],
      menus: []
    },

    // Group 10: Others (More menu)
    {
      id: 'others',
      groupLabel: 'Others',
      icon: LayoutGrid,
      menus: [
        {
          href: '/documents/nirf/J.K.K-Nataraja-College-of-Arts-Science20240313-.pdf',
          label: 'NIRF 2024',
          icon: LayoutGrid,
          active: false
        },
        {
          href: '/documents/nirf/NIRF-2025-COLLEGE.pdf',
          label: 'NIRF 2025',
          icon: LayoutGrid,
          active: false
        },
        {
          href: '/gallery',
          label: 'Gallery',
          icon: LayoutGrid,
          active: pathname === '/gallery'
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
