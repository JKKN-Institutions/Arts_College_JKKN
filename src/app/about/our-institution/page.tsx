import type { Metadata } from "next";
import Image from 'next/image';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Institution | JKKN College of Arts and Science",
  description: "Learn about JKKN College of Arts and Science (Autonomous), an institution affiliated to Periyar University offering 27+ programmes in Arts, Science and Commerce near Erode, Tamil Nadu.",
  alternates: { canonical: "https://cas.jkkn.ac.in/about/our-institution" },
  openGraph: {
    title: "Our Institution | JKKN College of Arts and Science",
    description: "Learn about JKKN College of Arts and Science (Autonomous), an institution affiliated to Periyar University offering 27+ programmes in Arts, Science and Commerce near Erode, Tamil Nadu.",
    url: "https://cas.jkkn.ac.in/about/our-institution",
    siteName: "JKKN College of Arts and Science",
    type: "website",
  },
};

export default function OurInstitutionPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://cas.jkkn.ac.in" },
        { name: "About", url: "https://cas.jkkn.ac.in/about" },
        { name: "Our Institution", url: "https://cas.jkkn.ac.in/about/our-institution" },
      ]} />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-2">
            OUR INSTITUTION
          </h1>
          <div className="w-16 h-1 bg-brand-yellow"></div>
        </div>

        {/* Main Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <div className="relative w-full h-64 md:h-96 lg:h-[400px] bg-gray-200">
            <Image
              src="/images/about/casinstitution.avif"
              alt="JKKN Institution Entrance"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-gray-800">
          {/* Objectives Section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
              Objectives
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-brand-green mb-2">Critical Thinking:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Take informed actions after identifying the assumptions that frame our thinking and actions, checking out the degree to which these assumptions are accurate and valid, and looking at our ideas and decisions (intellectual, organizational, and personal) from different perspectives.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Effective Communication:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Speak, read, write and listen clearly in person and through electronic media in English and in one Indian language, and make meaning of the world by connecting people, ideas, books, media and technology.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Social Interaction:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Elicit views of others, mediate disagreements and help reach conclusions in group settings.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Effective Citizenship:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Demonstrate empathetic social concern and equity centred national development, and the ability to act with an informed awareness of issues and participate in civic life through volunteering.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Ethics:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Recognize different value systems including your own, understand the moral dimensions of your decisions and accept responsibility for them.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Environment and Sustainability:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Understand the issues of environmental contexts and sustainable development.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-green mb-2">Self-directed and Life-long Learning:</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Acquire the ability to engage in independent and life-long learning in the broadest context of socio-technological changes.
                </p>
              </div>
            </div>
          </div>

          {/* About the College */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-4">
            About the College
          </h2>

          <p className="text-sm md:text-base leading-relaxed">
            J.K.K. Rangammal Charitable Trust, Komarapalayam was founded by a Philanthropist, Kodaivallal J.K.K.Nataraja Chettiyar with an aim to provide quality education to the economically downtrodden rural women. Our renowned institution, J.K.K.Nataraja College of Arts and Science was started as Alamelu Angappan College for Women in 1974, with Love, Learn and Serve as its motto. The total area of the College is 15 acres and it is situated on the National Highways-544 between Salem and Coimbatore. Komarapalayam, being weavers' hub, the College was established for the benefit of the wards of weavers for promoting the literacy and to provide a better living condition. The College originated with students numbering up to just 100 and with a handful of teachers. It was started as a Government-Aided College and it grew with various Departments during the past four and a half decades. To cater to the growing demands of the society, our College was converted as a Co-Educational Institution in 2008. At present, the institution offers 15 Under Graduate programmes, 10 Post Graduate programmes, 6 M.Phil and 7 Ph.D programmes with students' strength of 1,969. The ideals of our Founding Father are scrupulously followed by his daughter Smt.N.Sendamaraai, our Secretary, a person of eminent skills and untiring enthusiasm; following the foot prints of her father with noble aspirations, she steers us as a beacon light. She is strengthened by her young, energetic and enthusiastic son Mr.Ommsharravana, our Managing Director who, with his innovative ideas always extend his support in all our endeavours. The College is proud in declaring itself as a donation-free Institution which offers merit based admission to students.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Along with the Curricula, to develop a sound mind in a sound body, our students are encouraged to take part in sports activities. In order to promote the competitive spirit and leadership, tournaments such as Basket Ball, Hand Ball and Volley Ball etc., are conducted. We have a well equipped gymnasium and Indoor stadium in our campus. In addition to sports activities, our students are engaged in social activities through NSS, RRC, YRC, Atchayam Trust and NCC programmes.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            To trigger the creativity and hidden talents of the students, various associations like Tamil Literary Association, English Literary and Debating Association, History, Commerce, Mathematics, Chemistry, Biology, Computer Science and Fine Arts Associations conducts competitions and the winners are awarded certificates and prizes on the college day.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Various clubs namely Creative Club, Legal Literacy Club, Heritage Club, Citizen Consumer Club, Gender Champions Club and Readers Club are formulated to promote social awareness in our students. Anti-Ragging Committee, Campus Monitoring Flying Squad and Student's Grievance Redressal Cell function in our College so as to facilitate a safe and comfortable environment. Entrepreneurship cum Skill Development Centre, Placement Cell and Incubation centre usher in a bright future for our students.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Our faculty members are endowed with high potential and academic excellence. We have thirty-nine Ph.D holders, twenty-five faculty members have cleared SET and NET Examinations. We take pride in presenting the fact that we have received a sum of Rs.23,20,000/- as grant towards Minor Research Projects from University Grants Commission. The teaching and administrative members are dedicated and offer their ultimate support to the upliftment of the students through education, co-curricular and extra-curricular activities.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Our faculty members have organized, participated and presented papers in various Seminars, Conferences, Symposiums and Workshops. Many of our staff members have attended Faculty Development Programme to enrich themselves.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            In order to instil cultural and traditional values in our students, Pongal festival is celebrated in the College premises with a competitive spirit among the sister concerns and many times we have won prizes.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            The holistic value based education imparted in our College has helped in producing competent students output. We have created Gazetted Officers, successful entrepreneurs and bureaucrats, private and public sector employees and bright academicians as our alumni.
          </p>
        </div>
      </div>
    </div>
  );
}
