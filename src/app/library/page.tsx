import React from 'react';
import {
  BookOpen,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  BookMarked,
  Newspaper,
  Database,
  BarChart,
  User,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';

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
  contact: string;
}

interface EResource {
  name: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
}

// Data Constants
const LIBRARY_HOURS = {
  morning: '09:00 AM - 12:30 PM',
  afternoon: '01:30 PM - 05:00 PM',
};

const LIBRARY_CONTACT = {
  phone: '+91 4288 274741',
  email: 'library@jkkncas.ac.in',
};

const LIBRARY_RULES = [
  'Silence must be maintained in the library at all times',
  'Mobile phones must be kept in silent mode',
  'No food or beverages are allowed inside the library',
  'Handle books and materials with care',
  'Return borrowed books on or before the due date',
  'Fines will be charged for overdue books',
  'Do not mark, underline, or damage library materials',
  'Bags must be left at the designated counter',
  'Use library resources for academic purposes only',
  'Report damaged or missing books to the librarian immediately',
  'Maintain cleanliness and orderliness',
  'Follow the instructions of library staff at all times',
];

const LIBRARY_SERVICES: Service[] = [
  {
    title: 'Book Lending Service',
    description: 'Borrow books for a specified period with your library card',
  },
  {
    title: 'Reference Service',
    description: 'Access reference materials and research assistance',
  },
  {
    title: 'Digital Library Access',
    description: 'Access to e-books, e-journals, and online databases',
  },
  {
    title: 'Inter-Library Loan',
    description: 'Request books from other libraries through our network',
  },
  {
    title: 'Reprography Service',
    description: 'Photocopying and scanning facilities available',
  },
  {
    title: 'OPAC System',
    description: 'Online Public Access Catalog for easy book search',
  },
  {
    title: 'Internet Access',
    description: 'High-speed internet connectivity for research',
  },
  {
    title: 'Reading Room Facility',
    description: 'Quiet study spaces for focused learning',
  },
  {
    title: 'Newspaper & Magazine Service',
    description: 'Daily newspapers and popular magazines available',
  },
  {
    title: 'Career Guidance Resources',
    description: 'Competitive exam preparation materials',
  },
];

const JOURNALS_MAGAZINES = [
  'Nature',
  'Science',
  'Current Science',
  'The Hindu',
  'Indian Express',
  'Times of India',
  'India Today',
  'Outlook',
  'Frontline',
  'Sportstar',
  'Competition Success Review',
  'Employment News',
  'Journal of Chemistry',
  'Journal of Physics',
  'Journal of Mathematics',
  'Biological Sciences',
  'Environmental Science Journal',
  'Computer Science Review',
];

const E_RESOURCES: EResource[] = [
  {
    name: 'DELNET',
    description: 'Developing Library Network - Access to union catalogue and resource sharing',
  },
  {
    name: 'INFLIBNET',
    description: 'Information and Library Network Centre - Academic e-resources and journals',
  },
  {
    name: 'N-LIST',
    description: 'National Library and Information Services Infrastructure for Scholarly Content',
  },
  {
    name: 'NPTEL',
    description: 'National Programme on Technology Enhanced Learning - Free online courses and video lectures',
  },
  {
    name: 'NDL',
    description: 'National Digital Library of India - Digital repository of learning resources',
  },
  {
    name: 'e-PG Pathshala',
    description: 'High quality curriculum-based e-content for postgraduate courses',
  },
  {
    name: 'Shodhganga',
    description: 'Digital repository of Indian Electronic Theses and Dissertations',
  },
  {
    name: 'e-ShodhSindhu',
    description: 'Consortium for Higher Education Electronic Resources',
  },
];

const LIBRARY_RESOURCES: LibraryResource[] = [
  { type: 'Books', number: '25,842' },
  { type: 'Book Titles', number: '12,456' },
  { type: 'E-Books', number: '10,000+' },
  { type: 'Print Journals', number: '156' },
  { type: 'E-Journals', number: '5,000+' },
  { type: 'Reference Books', number: '3,245' },
  { type: 'Magazines', number: '32' },
  { type: 'Newspapers', number: '12' },
  { type: 'Back Volumes', number: '2,850' },
  { type: 'CD/DVD Resources', number: '450' },
];

const STAFF_MEMBERS: StaffMember[] = [
  {
    sno: 1,
    name: 'Dr. S. Sasikala',
    designation: 'Librarian',
    qualification: 'B.Com., M.L.I.S., Ph.D.,PGDLAN., NET',
    contact: 'nandhini@jkkncas.ac.in',
  }
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                About the Library
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-800">
              <p>
                The JKKN College of Arts and Science Library is the academic hub of our institution,
                serving as a vital resource center for students, faculty, and research scholars.
                Established with the vision of supporting academic excellence, our library houses an
                extensive collection of books, journals, and digital resources across various disciplines.
              </p>

              <p>
                With a collection of over 25,000 books and access to more than 5,000 e-journals, our
                library caters to the diverse academic needs of our vibrant campus community. The library
                is equipped with modern facilities including a digital library section, reading rooms,
                internet access, and an Online Public Access Catalog (OPAC) system for easy resource discovery.
              </p>

              <p>
                Our library is committed to fostering a culture of reading, research, and lifelong learning.
                We provide a conducive environment for study and research, supported by a dedicated team of
                library professionals who are always ready to assist users in their quest for knowledge.
              </p>
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                  Library Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Morning Session</p>
                  <p className="text-base md:text-lg text-gray-900">{LIBRARY_HOURS.morning}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Afternoon Session</p>
                  <p className="text-base md:text-lg text-gray-900">{LIBRARY_HOURS.afternoon}</p>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  * Closed on Sundays and Public Holidays
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-[#0b6d41]" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
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
              </div>
            </div>
          </div>
        </section>

        {/* Library Rules and Regulations */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                Library Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {LIBRARY_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-base md:text-lg text-[#0b6d41] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journals and Magazines */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                Journals and Magazines
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              The library subscribes to a wide range of national and international journals,
              magazines, and newspapers to keep our academic community updated with the latest
              developments in various fields.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {JOURNALS_MAGAZINES.map((journal, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm md:text-base text-gray-800 hover:bg-[#0b6d41] hover:text-white transition"
                >
                  {journal}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-Resources & Databases */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-[#0b6d41]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                E-Resources & Databases
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              Access to comprehensive digital resources and databases for enhanced learning and research.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {E_RESOURCES.map((resource, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-5 w-5 text-[#0b6d41] flex-shrink-0" />
                    <h4 className="font-bold text-base md:text-lg text-[#0b6d41]">
                      {resource.name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {resource.description}
                  </p>
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
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
                      className="border-t border-gray-200 hover:bg-gray-50"
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
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {resource.type}
                  </p>
                  <p className="text-lg font-bold text-[#0b6d41]">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b6d41]">
                Library Staff
              </h2>
            </div>

            {/* Librarian Photo and Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0b6d41] bg-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {STAFF_MEMBERS[0].name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {STAFF_MEMBERS[0].designation}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                {STAFF_MEMBERS[0].qualification}
              </p>

              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <a
                  href={`mailto:${STAFF_MEMBERS[0].contact}`}
                  className="inline-flex items-center gap-2 bg-[#0b6d41] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#094d2e] transition"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
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
                      Designation
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Qualification
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold border border-gray-300">
                      Contact
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
                        {staff.designation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">
                        {staff.qualification}
                      </td>
                      <td className="px-6 py-4 text-sm border border-gray-300">
                        <a
                          href={`mailto:${staff.contact}`}
                          className="text-[#0b6d41] hover:underline"
                        >
                          {staff.contact}
                        </a>
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
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">S.No.</p>
                      <p className="text-sm font-semibold text-gray-900">{staff.sno}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Name</p>
                      <p className="text-sm font-semibold text-gray-900">{staff.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Designation</p>
                      <p className="text-sm text-gray-800">{staff.designation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Qualification</p>
                      <p className="text-sm text-gray-800">{staff.qualification}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-600 mb-1">Contact</p>
                      <a
                        href={`mailto:${staff.contact}`}
                        className="text-sm text-[#0b6d41] hover:underline"
                      >
                        {staff.contact}
                      </a>
                    </div>
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
