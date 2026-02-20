import React from 'react';
import {
  BookOpen,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  BookMarked,
  BarChart,
  User,
  GraduationCap,
  Eye,
  Target,
  Globe,
} from 'lucide-react';

// TypeScript Interfaces
interface LibraryResource {
  type: string;
  number: string;
}

interface StaffMember {
  sno: number;
  name: string;
  designation: string;
  qualification: string;
}

interface Service {
  title: string;
}

// Data Constants
const LIBRARY_HOURS = {
  working: '9:00 AM - 4:45 PM',
  issue: '9:00 AM - 4:30 PM',
  days: 'Monday to Friday',
};

const LIBRARY_CONTACT = {
  phone: '+91 9345855001',
  email: 'jkkncaslibrary@gmail.com',
  libraryBlog: 'https://jkkncaslibrary.wordpress.com/',
};

const LIBRARY_RULES = [
  'Silence should be strictly maintained in the library.',
  'Students and staff must scan their ID cards at the E-gate register scanner when entering the library.',
  'Personal books and files are not allowed inside the library. Only plain sheets for notes may be brought in.',
  'Books will be issued solely upon presentation of a valid ID card. Sub-lending of borrowed books is strictly prohibited.',
  'Any form of damage to books or misuse of library resources (underlining, scribbling, tearing pages) will attract penalties, including fines or other disciplinary actions.',
  'Borrowing limits: UG students may borrow 2 books, PG students may borrow 3 books, and Research scholars 5 books at a time.',
  'Books are issued for 14 days, with a renewal option. A fine of Rs. 2 per day for overdue books.',
  'Borrowers must inspect books for damages before borrowing and report any issues to the librarian immediately.',
  'Reference materials (dictionaries, encyclopedias, journals, expensive books) are for in-library use only and cannot be issued.',
  'Lost or damaged books must be replaced, or a penalty equivalent to three times the cost of the book will be imposed.',
  'The librarian reserves the right to recall any book at any time.',
  'Students must clear all dues before obtaining a transfer certificate or conduct certificate.',
];

const LIBRARY_SERVICES: Service[] = [
  { title: 'Automated and Barcoded Circulation' },
  { title: 'E-Gate Entry Register' },
  { title: 'Reference Service' },
  { title: 'User Awareness Service' },
  { title: 'Periodicals Service' },
  { title: 'Internet Browsing' },
  { title: 'Question Bank' },
  { title: 'Current Awareness Service' },
  { title: 'Display of New Arrivals' },
  { title: 'Newspaper Clipping Service' },
  { title: 'Books for Competitive Exams / Career Guidance' },
  { title: 'Bound Back Issues of Journals' },
  { title: 'Remote Access to Subscribed E-Resources' },
  { title: 'WEB OPAC' },
  { title: 'Library Blog' },
  { title: 'Best Library User Award' },
  { title: 'Digitization of Rare Books' },
];

const LIBRARY_RESOURCES: LibraryResource[] = [
  { type: 'No. of Books in Volumes', number: '26,797' },
  { type: 'No. of Books in Titles', number: '17,979' },
  { type: 'No. of Reference Books', number: '2,494' },
  { type: 'No. of Journals', number: '23' },
  { type: 'No. of Magazines', number: '31' },
  { type: 'No. of Newspapers', number: '6' },
  { type: 'No. of CD/DVD', number: '86' },
  { type: 'No. of Back Volumes', number: '636' },
  { type: 'Ph.D Thesis', number: '31' },
  { type: 'M.Phil Dissertation', number: '124' },
  { type: 'N-LIST E-Journals', number: '6,000' },
  { type: 'E-Books', number: '1,99,500' },
  { type: 'National Digital Library E-Books', number: '6,00,000' },
];

const STAFF_MEMBERS: StaffMember[] = [
  {
    sno: 1,
    name: 'Dr. S. Sasikala',
    designation: 'Librarian',
    qualification: 'B.Com., M.L.I.S., Ph.D., PGDLAN., NET',
  },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41] mb-2">
            LIBRARY
          </h1>
          <div className="w-16 h-1 bg-[#ffde59]"></div>
        </div>

        {/* About the Library Section */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                About the Library
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-800">
              <p>
                Established in 1974, College Library serves as an invaluable knowledge hub for students and
                faculty members, fostering academic growth and intellectual exploration. Spanning an area of
                3,328 square feet with a seating capacity for 130 readers, the library is thoughtfully
                designed to provide a comfortable and conducive environment for learning. It boasts a
                remarkable collection of over 26,700 books across diverse disciplines, 23 esteemed national
                and international journals, 31 magazines, 4 newspapers, 636 back volumes, and a wealth of
                e-resources. Recent publications and journals in the fields of arts, science, and social
                sciences further enrich the library&apos;s comprehensive offerings, along with access to online
                resources through the N-LIST program under UGC-INFONET, available free of cost.
              </p>

              <h3 className="text-lg font-bold text-[#0b6d41] mt-4">
                Modernized Facilities for a Seamless Experience
              </h3>
              <p>
                Equipped with the advanced automation software &quot;Campes I Lib,&quot; the library is fully
                computerized and integrated with barcode technology for efficient book transactions. Staff
                and students are issued personalized ID cards with barcodes for streamlined access and
                borrowing procedures. The WEB OPAC service enables users to search the library catalog
                with ease, while 10 computer systems in the digital library provide internet and printing
                facilities. Ensuring a secure and user-friendly environment, the library is monitored by
                CCTV cameras.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-[#0b6d41]" />
                <h3 className="text-xl font-bold text-[#0b6d41]">Vision</h3>
              </div>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                To be a dynamic hub of knowledge, empowering students and faculty with resources,
                technology, and inspiration to achieve academic excellence and foster lifelong learning.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-[#0b6d41]" />
                <h3 className="text-xl font-bold text-[#0b6d41]">Mission</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-800">
                    To provide comprehensive access to diverse learning resources and services to the academic community.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-800">
                    To provide a technologically advanced, inclusive, and student-centric environment for holistic research and academic enrichment.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Library Hours & Contact */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Library Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-[#0b6d41]" />
                <h3 className="text-xl font-bold text-[#0b6d41]">
                  Working Hours
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Working Hours</p>
                  <p className="text-sm text-gray-500 mb-1">{LIBRARY_HOURS.days}</p>
                  <p className="text-base md:text-lg font-medium text-gray-900">{LIBRARY_HOURS.working}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Book Issue & Return</p>
                  <p className="text-sm text-gray-500 mb-1">{LIBRARY_HOURS.days}</p>
                  <p className="text-base md:text-lg font-medium text-gray-900">{LIBRARY_HOURS.issue}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-[#0b6d41]" />
                <h3 className="text-xl font-bold text-[#0b6d41]">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Phone</p>
                    <a
                      href={`tel:${LIBRARY_CONTACT.phone}`}
                      className="text-base md:text-lg text-gray-900 hover:text-[#0b6d41] transition"
                    >
                      {LIBRARY_CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Email</p>
                    <a
                      href={`mailto:${LIBRARY_CONTACT.email}`}
                      className="text-base md:text-lg text-gray-900 hover:text-[#0b6d41] transition"
                    >
                      {LIBRARY_CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Library Blog</p>
                    <a
                      href={LIBRARY_CONTACT.libraryBlog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#0b6d41] hover:underline break-all"
                    >
                      {LIBRARY_CONTACT.libraryBlog}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Library Rules and Regulations */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                Library Rules and Regulations
              </h2>
            </div>

            <ul className="space-y-3">
              {LIBRARY_RULES.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-800">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Library Services */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookMarked className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                Library Services and Best Practices
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {LIBRARY_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-[#0b6d41] hover:text-white hover:border-[#0b6d41] transition group"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0b6d41] group-hover:text-white flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Library Resources Table */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                Library Resources
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0b6d41] text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Type of Resources
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LIBRARY_RESOURCES.map((resource, index) => (
                    <tr
                      key={index}
                      className={`border-t border-gray-200 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">
                        {resource.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-semibold border border-gray-300">
                        {resource.number}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {LIBRARY_RESOURCES.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <p className="text-sm font-medium text-gray-700">
                    {resource.type}
                  </p>
                  <p className="text-base font-bold text-[#0b6d41]">
                    {resource.number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Details Section */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41]">
                Staff Details
              </h2>
            </div>

            {/* Staff Table - Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0b6d41] text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      S.No.
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Degree / Qualification
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STAFF_MEMBERS.map((staff) => (
                    <tr
                      key={staff.sno}
                      className="border-t border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">
                        {staff.sno}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium border border-gray-300">
                        {staff.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">
                        {staff.qualification}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">
                        {staff.designation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Staff Cards - Mobile */}
            <div className="md:hidden space-y-4">
              {STAFF_MEMBERS.map((staff) => (
                <div
                  key={staff.sno}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{staff.name}</p>
                      <p className="text-xs text-[#0b6d41] font-medium">{staff.designation}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Qualification</p>
                    <p className="text-sm text-gray-800">{staff.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
