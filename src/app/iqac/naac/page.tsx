'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type TabId =
  | 'overview'
  | 'vision-mission'
  | 'core-values'
  | 'assessment'
  | 'quality-indicator'
  | 'criterion-1'
  | 'criterion-2'
  | 'criterion-3'
  | 'criterion-4'
  | 'criterion-5'
  | 'criterion-6'
  | 'criterion-7';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Over View' },
  { id: 'vision-mission', label: 'Vision and Mission' },
  { id: 'core-values', label: 'Core Values' },
  { id: 'assessment', label: 'Assessment and Accreditation' },
  { id: 'quality-indicator', label: 'Quality Indicator Framework' },
  { id: 'criterion-1', label: 'Criterion I' },
  { id: 'criterion-2', label: 'Criterion II' },
  { id: 'criterion-3', label: 'Criterion III' },
  { id: 'criterion-4', label: 'Criterion IV' },
  { id: 'criterion-5', label: 'Criterion V' },
  { id: 'criterion-6', label: 'Criterion VI' },
  { id: 'criterion-7', label: 'Criterion VII' },
];

function TabContent({ id }: { id: TabId | null }) {
  if (id === 'overview') return <OverviewContent />;
  if (id === 'vision-mission') return <VisionMissionContent />;
  if (id === 'core-values') return <CoreValuesContent />;
  if (id === 'assessment') return <AssessmentContent />;
  if (id === 'quality-indicator') return <QualityIndicatorContent />;
  if (id === 'criterion-1') return <Criterion1Content />;
  if (id === 'criterion-2') return <Criterion2Content />;
  if (id === 'criterion-3') return <Criterion3Content />;
  if (id === 'criterion-4') return <Criterion4Content />;
  if (id === 'criterion-5') return <Criterion5Content />;
  if (id === 'criterion-6') return <Criterion6Content />;
  if (id === 'criterion-7') return <Criterion7Content />;
  return null;
}

export default function NAACPage() {
  const [activeTab, setActiveTab] = useState<TabId | null>('overview');

  const activeLabel = tabs.find((t) => t.id === activeTab)?.label ?? 'NAAC';

  return (
    <main className="min-h-screen bg-brand-cream py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-8 uppercase">
          {activeLabel}
        </h1>

        {/* ── Mobile: Accordion ── */}
        <div className="flex flex-col gap-1 xl:hidden">
          {tabs.map((tab) => {
            const isOpen = activeTab === tab.id;
            return (
              <div key={tab.id} className="rounded overflow-hidden border border-gray-200">
                <button
                  onClick={() => setActiveTab(isOpen ? null : tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 font-bold text-sm transition-colors ${
                    isOpen
                      ? 'bg-brand-green text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {tab.label}
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="bg-white p-4">
                    <TabContent id={tab.id} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Desktop: Side tabs + content panel ── */}
        <div className="hidden xl:flex gap-6">
          {/* Left Sidebar Tabs */}
          <aside className="w-64 flex-shrink-0">
            <ul className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded font-bold text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'bg-brand-green text-white'
                        : 'bg-white text-gray-700 hover:bg-brand-green hover:text-white border border-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <TabContent id={activeTab} />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─────────────────── Shared Styles ─────────────────── */
const heading2 = 'text-2xl font-extrabold text-brand-green mb-4';
const heading3 = 'text-lg font-bold text-gray-800 mt-6 mb-3';
const para = 'text-gray-700 text-base leading-relaxed text-justify mb-4';

/* ─────────────────── Table Component ─────────────────── */
function MetricTable({
  rows,
}: {
  rows: { metric: string; title: React.ReactNode; weightage: number | string }[];
}) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-brand-green text-white">
            <th className="border border-gray-300 px-3 py-2 text-left w-24">Metric No.</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Title</th>
            <th className="border border-gray-300 px-3 py-2 text-center w-24">Weightage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 align-top font-medium">{row.metric}</td>
              <td className="border border-gray-300 px-3 py-2 align-top">{row.title}</td>
              <td className="border border-gray-300 px-3 py-2 text-center align-top">{row.weightage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────── Tab Contents ─────────────────── */

function OverviewContent() {
  return (
    <>
      <h2 className={heading2}>Introduction</h2>
      <p className={para}>
        India has one of the largest and diverse education systems in the world. Privatization,
        widespread expansion, increased autonomy and introduction of Programmes in new and emerging
        areas have improved access to higher education. At the same time, it has also led to
        widespread concern on the quality and relevance of the higher education. To address these
        concerns, the National Policy on Education (NPE, 1986) and the Programme of Action
        (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an
        independent National accreditation agency. Consequently, the National Assessment and
        Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the
        University Grants Commission (UGC) with its Head Quarter in Bengaluru.
      </p>
      <p className={para}>
        The mandate of NAAC as reflected in its vision statement is in making quality assurance an
        integral part of the functioning of Higher Education Institutions (HEIs). The NAAC functions
        through its General Council (GC) and Executive Committee (EC) comprising educational
        administrators, policy makers and senior academicians from a cross-section of Indian higher
        education system. The Chairperson of the UGC is the President of the GC of the NAAC, the
        Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The
        Director is the academic and administrative head of NAAC and is the member-secretary of both
        the GC and the EC. In addition to the statutory bodies that steer its policies and core staff
        to support its activities NAAC is advised by the advisory and consultative committees
        constituted from time to time.
      </p>
    </>
  );
}

function VisionMissionContent() {
  return (
    <>
      <h2 className={heading2}>Vision and Mission</h2>
      <p className={para}>
        <strong>The vision of NAAC is:</strong>
        <br />
        To make quality the defining element of higher education in India through a combination of
        self and external quality evaluation, promotion and sustenance initiatives.
      </p>
      <p className={para}>
        The mission statements of the NAAC aim at translating the NAAC&apos;s vision into action
        plans and define NAAC&apos;s engagement and endeavor as given below:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base mb-4">
        <li>
          To arrange for periodic assessment and accreditation of institutions of higher education or
          units thereof, or specific academic programmes or projects;
        </li>
        <li>
          To stimulate the academic environment for promotion of quality in teaching-learning and
          research in higher education institutions;
        </li>
        <li>
          To encourage self-evaluation, accountability, autonomy and innovations in higher education;
        </li>
        <li>To undertake quality-related research studies, consultancy and training programmes;</li>
        <li>
          To collaborate with other stakeholders of higher education for quality evaluation,
          promotion and sustenance.
        </li>
      </ul>
      <p className={para}>
        Striving to achieve its goals as guided by its vision and mission statements, NAAC primarily
        focuses on assessment of the quality of higher education institutions in the country. The
        NAAC methodology for Assessment and Accreditation is very much similar to that followed by
        Quality Assurance (QA) agencies across the world and consists of self-assessment by the
        institution along with external peer assessment organized by NAAC.
      </p>
    </>
  );
}

function CoreValuesContent() {
  return (
    <>
      <h2 className={heading2}>Core Values</h2>
      <p className={para}>
        Throughout the world, Higher Education Institutions (HEIs) function in a dynamic
        environment. The need to expand the system of higher education, the impact of technology on
        the educational delivery, the increasing private participation in higher education and the
        impact of globalization (including liberal cross-border and trans-national educational
        imperatives), have necessitated marked changes in the Indian higher education system. These
        changes and the consequent shift in values have been taken into cognizance by NAAC while
        formulating the core values. Accordingly, in order to ensure external and internal validity
        and credibility, the QA process of NAAC is grounded within a value framework which is
        suitable and appropriate to the National context.
      </p>
      <h3 className={heading3}>The accreditation framework of NAAC is thus based on five core values detailed below.</h3>

      <h4 className="font-bold text-gray-800 mt-4 mb-2">(i) Contributing to National Development:</h4>
      <p className={para}>
        Most of the HEIs have a remarkable capacity to adapt to changes and at the same time, pursue
        the goals and objectives that they have set forth for themselves. Contributing to national
        development has always been an implicit goal of Indian HEIs. The role of HEIs is significant
        in human resource development and capacity building of individuals, to cater to the needs of
        the economy, society and the country as a whole, thereby, contributing to the development of
        the Nation. Serving the cause of social justice, ensuring equity and increasing access to
        higher education are a few ways by which HEIs can contribute to the national development. It
        is therefore appropriate that the Assessment and Accreditation (A&amp;A) process of NAAC
        looks into the ways HEIs have been responding to and contributing towards national
        development.
      </p>

      <h4 className="font-bold text-gray-800 mt-4 mb-2">(ii) Fostering Global Competencies among Students:</h4>
      <p className={para}>
        The spiraling developments at the global level also warrant that the NAAC includes in its
        scope of assessment skill development of students, on par with their counterparts elsewhere
        in the world. With liberalization and globalization of economic activities, the need to
        develop skilled human resources of a high caliber is imperative. Consequently, the demand
        for internationally acceptable standards in higher education is evident. Therefore, the
        accreditation process of NAAC needs to examine the role of HEIs in preparing the students to
        achieve core competencies, to face the global challenges successfully.
      </p>

      <h4 className="font-bold text-gray-800 mt-4 mb-2">(iii) Inculcating a Value System among Students:</h4>
      <p className={para}>
        Although skill development is crucial to the success of students in the job market, skills
        are of less value in the absence of appropriate value systems. The HEIs have to shoulder the
        responsibility of inculcating desirable value systems among students. In a country like
        India, with cultural pluralities and diversities, it is essential that students imbibe the
        appropriate values commensurate with social, cultural, economic and environmental realities,
        at the local, national and universal levels.
      </p>

      <h4 className="font-bold text-gray-800 mt-4 mb-2">(iv) Promoting the Use of Technology:</h4>
      <p className={para}>
        Most of the significant developments that one can observe today can be attributed to the
        impact of Science and Technology. While the advantages of using modern tools and
        technological innovations in the day-to-day-life are well recognized, the corresponding
        changes in the use of new technologies, for teaching learning and governance of HEIs, leaves
        much to be desired. Technological advancement and innovations in educational transactions
        have to be undertaken by all HEIs, to make a visible impact on academic development as well
        as administration.
      </p>
      <p className={para}>
        In addition to using technology as a learning resource, managing the activities of the
        institution in a technology-enabled way will ensure effective institutional functioning.
        Moving towards electronic data management and having institutional website to provide ready
        and relevant information to stakeholders are desirable steps in this direction. Effective use
        of ICT in HEIs will be able to provide ICT literacy to the campus community, using ICT for
        resource sharing and networking, as well as adopting ICT-enabled administrative processes.
      </p>

      <h4 className="font-bold text-gray-800 mt-4 mb-2">(v) Quest for Excellence:</h4>
      <p className={para}>
        Contributing to nation-building and skills development of students, HEIs should demonstrate
        a drive to develop themselves into centres of excellence. Excellence in all that they
        contribute to the overall development of the system of higher education of the country as a
        whole. This &apos;Quest for Excellence&apos; could start with the assessment or even
        earlier, by the establishment of the Steering Committee for the preparation of the
        Self-Study Report (SSR) of an institution.
      </p>
      <p className={para}>
        The five core values as outlined above form the foundation for assessment of institutions
        that volunteer for accreditation by NAAC. The HEIs may also add their own core values to
        these in conformity with the goals and mission.
      </p>
    </>
  );
}

function AssessmentContent() {
  return (
    <>
      <h2 className={heading2}>Assessment and Accreditation</h2>
      <p className={para}>
        The NAAC has been carrying out the process of quality assessment and accreditation of HEIs
        over the past two decades. Several HEIs have gone through this process, and a sizeable
        number has also undergone subsequent cycles of accreditation. True to its commitment for
        promoting a quality culture in HEIs in consonance with the overall developments in the field
        of education as well as the outside world, NAAC has strived to be sensitive to these and
        adequately reflect these in its processes. The A&amp;A process of NAAC continues to be an
        exercise in partnership of NAAC with the HEI being assessed.
      </p>
      <p className={para}>
        As is known by now, the A&amp;A process of NAAC is being revised, and this revision
        attempts to enhance such a partnership. Over the years, the feedback procured from the HEIs,
        other stakeholders, and the developments in the national scene – all have contributed to
        making appropriate revisions in the process so as to accelerate the process with greater
        quality rigor.
      </p>
      <h3 className={heading3}>Revised Assessment and Accreditation (A&amp;A) Framework</h3>
      <p className={para}>
        The Revised Assessment and Accreditation Framework were launched in July 2017. It represents
        an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable, and
        robust. The Shift is:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base mb-4">
        <li>
          From qualitative peer judgement to data-based quantitative indicator evaluation with
          increased objectivity and transparency
        </li>
        <li>Towards extensive use of ICT confirming scalability and robustness</li>
        <li>
          In terms of simplification of the process — drastic reduction in the number of questions,
          size of the report, visit days, and so on
        </li>
        <li>
          In terms of boosting benchmarking as a quality improvement tool, through comparison of
          NAAC indicators with other international QA frameworks
        </li>
        <li>Introducing Pre-qualifier for peer team visit, as 25% of system-generated score</li>
        <li>
          Introducing System Generated Scores (SGS) with a combination of online evaluation of
          Quantitative metrics and peer judgement of Qualitative metrics
        </li>
        <li>Introducing the element of third-party validation of data</li>
        <li>
          Providing appropriate differences in the metrics, weightages, and benchmarks to
          universities, autonomous colleges, and affiliated/constituent colleges
        </li>
        <li>
          Revising several metrics to bring in enhanced participation of students and alumni in the
          assessment process
        </li>
      </ul>
      <p className={para}>
        After launching the framework, several modifications and updates have been carried out.
        Recently, an update of the manual is in line with the NEP-2020 recommendations.
      </p>
      <p className={para}>
        Again in January 2022, metrics related to seven criteria including both QnM and QlM have
        been now reduced to ease the Assessment and Accreditation process of NAAC for
        Affiliated/Constituent Colleges without compromising the quality aspects in Higher Education.
      </p>
      <h3 className={heading3}>Focus of Assessment</h3>
      <p className={para}>
        The NAAC continues with its focus on the quality culture of the institution in terms of
        Quality Initiatives, Quality Sustenance, and Quality Enhancement, as reflected in its
        vision, organization, operations, and the processes. Experience has reiterated that these can
        be ascertained either by on-site observations and/or through the facts and figures about the
        various aspects of institutional functioning.
      </p>
      <p className={para}>
        In line with NAAC&apos;s conviction that quality concerns are institutional, Quality
        Assessment (QA) can better be done through self-evaluation. The self-evaluation process and
        the subsequent preparation of the Self Study Report (SSR) to be submitted to NAAC involves
        the participation of all the stakeholders – management, faculty members, administrative
        staff, students, parents, employers, community, and alumni.
      </p>
    </>
  );
}

function QualityIndicatorContent() {
  return (
    <>
      <h2 className={heading2}>Quality Indicator Framework</h2>
      <p className={para}>
        The criteria-based assessment forms the backbone of the A&amp;A process of NAAC. The seven
        criteria represent the core functions and activities of a HEI. In the revised framework, not
        only the academic and administrative aspects of institutional functioning but also the
        emerging issues have been included. The seven Criteria to serve as a basis for the
        assessment of HEIs are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base mb-4">
        <li><strong>Curricular Aspects</strong></li>
        <li><strong>Teaching-Learning and Evaluation</strong></li>
        <li><strong>Research, Innovations, and Extension</strong></li>
        <li><strong>Infrastructure and Learning Resources</strong></li>
        <li><strong>Student Support and Progression</strong></li>
        <li><strong>Governance, Leadership, and Management</strong></li>
        <li><strong>Institutional Values and Best Practices</strong></li>
      </ul>
      <p className={para}>
        Under each Criterion, a few Key Indicators are identified. These Key Indicators (KIs) are
        further delineated as Metrics which actually elicit responses from the HEIs. These seven
        criteria along with their KIs are given below, explicating the aspects they represent.
      </p>
    </>
  );
}

function Criterion1Content() {
  return (
    <>
      <h2 className={heading2}>Curricular Aspects</h2>

      <h3 className={heading3}>Key Indicator 1.1 – Curricular Planning and Implementation (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '1.1.1 QlM',
            title:
              'The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment.',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 1.2 – Academic Flexibility (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '1.2.1 QnM',
            title:
              'Number of Add on / Certificate / Value added programs offered and online MOOC programs like SWAYAM, NPTEL etc. where the students of the institution have benefitted during the last five years.',
            weightage: 15,
          },
          {
            metric: '1.2.2 QnM',
            title:
              'Percentage of students enrolled in Certificate / Add-on / Value added programs and also completed online MOOC programs like SWAYAM, NPTEL etc. as against the total number of students during the last five years.',
            weightage: 15,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 1.3 – Curriculum Enrichment (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '1.3.1 QlM',
            title:
              'Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum.',
            weightage: 10,
          },
          {
            metric: '1.3.2 QnM',
            title:
              'Percentage of students undertaking project work / field work / internships (Data for the latest completed academic year).',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 1.4 – Feedback System (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '1.4.1 QnM',
            title:
              'Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website.',
            weightage: 20,
          },
        ]}
      />
    </>
  );
}

function Criterion2Content() {
  return (
    <>
      <h2 className={heading2}>Teaching Learning and Evaluation</h2>

      <h3 className={heading3}>Key Indicator 2.1 – Student Enrolment and Profile (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.1.1 QnM',
            title: 'Enrolment percentage.',
            weightage: 20,
          },
          {
            metric: '2.1.2 QnM',
            title:
              'Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, etc. as per applicable reservation policy) during the last five years (Exclusive of supernumerary seats).',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.2 – Student Teacher Ratio (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.2.1 QnM',
            title: 'Student – Full time Teacher Ratio (Data for the latest completed academic year).',
            weightage: 40,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.3 – Teaching-Learning Process (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.3.1 QlM',
            title:
              'Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences using ICT tools.',
            weightage: 40,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.4 – Teacher Profile and Quality (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.4.1 QnM',
            title: 'Percentage of full-time teachers against sanctioned posts during the last five years.',
            weightage: 15,
          },
          {
            metric: '2.4.2 QnM',
            title:
              'Percentage of full-time teachers with NET/SET/SLET/ Ph.D./D.Sc./D.Litt. during the last five years (consider only highest degree for count).',
            weightage: 25,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.5 – Evaluation Process and Reforms (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.5.1 QlM',
            title:
              'Mechanism of internal/external assessment is transparent and the grievance redressal system is time-bound and efficient.',
            weightage: 40,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.6 – Student Performance and Learning Outcome (90)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.6.1 QlM',
            title:
              'Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on the website, and attainment of POs and COs are evaluated.',
            weightage: 25,
          },
          {
            metric: '2.6.2 QlM',
            title: 'Attainment of POs and COs are evaluated.',
            weightage: 20,
          },
          {
            metric: '2.6.3 QnM',
            title: 'Pass percentage of Students during the last five years.',
            weightage: 45,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 2.7 – Student Satisfaction Survey (60)</h3>
      <MetricTable
        rows={[
          {
            metric: '2.7.1 QnM',
            title:
              'Online student satisfaction survey regarding to teaching learning process. (Online survey to be conducted).',
            weightage: 60,
          },
        ]}
      />
    </>
  );
}

function Criterion3Content() {
  return (
    <>
      <h2 className={heading2}>Research, Innovations and Extension</h2>

      <h3 className={heading3}>Key Indicator 3.1 – Resource Mobilization for Research (10)</h3>
      <MetricTable
        rows={[
          {
            metric: '3.1.1 QnM',
            title:
              'Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs).',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 3.2 – Innovation Ecosystem (15)</h3>
      <MetricTable
        rows={[
          {
            metric: '3.2.1 QlM',
            title:
              'Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation center facilities in the HEI to be considered).',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 3.3 – Research Publication and Awards (25)</h3>
      <MetricTable
        rows={[
          {
            metric: '3.3.1 QnM',
            title:
              'Number of research papers published per teacher in the Journals notified on UGC care list during the last five years.',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 3.4 – Extension Activities (40)</h3>
      <MetricTable
        rows={[
          {
            metric: '3.4.1 QlM',
            title:
              'Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years.',
            weightage: 15,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 3.5 – Collaboration (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '3.5.1 QnM',
            title:
              'The number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field project, On-the-job training, research and other academic activities during the last five years.',
            weightage: 20,
          },
        ]}
      />
    </>
  );
}

function Criterion4Content() {
  return (
    <>
      <h2 className={heading2}>Infrastructure and Learning Resources</h2>

      <h3 className={heading3}>Key Indicator 4.1 – Physical Facilities (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '4.1.1 QlM',
            title:
              'Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT infrastructure, facilities for cultural and sports activities, gymnasium, yoga centre etc. in the institution.',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 4.2 – Library as a Learning Resource (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '4.2.1 QlM',
            title:
              'Library automation using Integrated Library Management System (ILMS), subscription to e-resources including provision of links to OER repositories, amount spent on purchase of books, journals and usage of library.',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 4.3 – IT Infrastructure (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '4.3.1 QlM',
            title:
              'Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection.',
            weightage: 20,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 4.4 – Maintenance of Campus Infrastructure (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '4.4.1 QnM',
            title:
              'Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs).',
            weightage: 20,
          },
        ]}
      />
    </>
  );
}

function Criterion5Content() {
  return (
    <>
      <h2 className={heading2}>Student Support and Progression</h2>

      <h3 className={heading3}>Key Indicator 5.1 – Student Support (50)</h3>
      <MetricTable
        rows={[
          {
            metric: '5.1.1 QnM',
            title:
              'Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies and philanthropists during last five years.',
            weightage: 20,
          },
          {
            metric: '5.1.2 QnM',
            title: (
              <>
                Capacity building and skills enhancement initiatives taken by the institution include
                the following:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>Soft skills</li>
                  <li>Language and communication skills</li>
                  <li>Life skills (Yoga, physical fitness, health and hygiene)</li>
                  <li>ICT/computing skills</li>
                </ol>
              </>
            ),
            weightage: 10,
          },
          {
            metric: '5.1.3 QnM',
            title:
              'Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years.',
            weightage: 10,
          },
          {
            metric: '5.1.4 QnM',
            title: (
              <>
                The Institution has a transparent mechanism for timely redressal of student
                grievances including sexual harassment and ragging cases:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>Implementation of guidelines of statutory/regulatory bodies</li>
                  <li>Organisation wide awareness and undertakings on policies with zero tolerance</li>
                  <li>Mechanisms for submission of online/offline students&apos; grievances</li>
                  <li>Timely redressal of the grievances through appropriate committees</li>
                </ol>
              </>
            ),
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 5.2 – Student Progression (35)</h3>
      <MetricTable
        rows={[
          {
            metric: '5.2.1 QnM',
            title:
              'Percentage of placement of outgoing students and students progressing to higher education during the last five years.',
            weightage: 25,
          },
          {
            metric: '5.2.2 QnM',
            title:
              'Percentage of students qualifying in state/national/international level examinations during the last five years (e.g., JAM/CLAT/GATE/GMAT/CAT/GRE/TOEFL/Civil Services/State government examinations).',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 5.3 – Student Participation and Activities (45)</h3>
      <MetricTable
        rows={[
          {
            metric: '5.3.1 QnM',
            title:
              'Number of awards/medals for outstanding performance in sports/cultural activities at University/state/national/international level (award for a team event should be counted as one) during the last five years.',
            weightage: 20,
          },
          {
            metric: '5.3.2 QnM',
            title:
              'Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions).',
            weightage: 25,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 5.4 – Alumni Engagement (10)</h3>
      <MetricTable
        rows={[
          {
            metric: '5.4.1 QnM',
            title:
              'There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services.',
            weightage: 10,
          },
        ]}
      />
    </>
  );
}

function Criterion6Content() {
  return (
    <>
      <h2 className={heading2}>Governance, Leadership and Management</h2>

      <h3 className={heading3}>Key Indicator 6.1 – Institutional Vision and Leadership</h3>
      <MetricTable
        rows={[
          {
            metric: '6.1.1 QlM',
            title:
              'The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance.',
            weightage: 15,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 6.2 – Strategy Development and Deployment</h3>
      <MetricTable
        rows={[
          {
            metric: '6.2.1 QlM',
            title:
              'The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/perspective/development plan etc.',
            weightage: 8,
          },
          {
            metric: '6.2.2 QnM',
            title: (
              <>
                Implementation of e-governance in areas of operation:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>Administration</li>
                  <li>Finance and Accounts</li>
                  <li>Student Admission and Support</li>
                  <li>Examination</li>
                </ol>
              </>
            ),
            weightage: 4,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 6.3 – Faculty Empowerment Strategies (33)</h3>
      <MetricTable
        rows={[
          {
            metric: '6.3.1 QlM',
            title:
              'The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff.',
            weightage: 6,
          },
          {
            metric: '6.3.2 QnM',
            title:
              'Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years.',
            weightage: 12,
          },
          {
            metric: '6.3.3 QnM',
            title:
              'Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development / administrative training programs during the last five years.',
            weightage: 15,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 6.4 – Financial Management and Resource Mobilization (10)</h3>
      <MetricTable
        rows={[
          {
            metric: '6.4.1 QlM',
            title:
              'Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/non-government organizations) and it conducts financial audits regularly (internal and external).',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 6.5 – Internal Quality Assurance System (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '6.5.1 QlM',
            title:
              'Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities.',
            weightage: 15,
          },
          {
            metric: '6.5.2 QnM',
            title: (
              <>
                Quality assurance initiatives of the institution include:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>
                    Regular meeting of Internal Quality Assurance Cell (IQAC); Feedback collected,
                    analysed and used for improvements
                  </li>
                  <li>
                    Collaborative quality initiatives with other institution(s)/membership of
                    international networks
                  </li>
                  <li>Participation in NIRF</li>
                  <li>
                    Any other quality audit/accreditation recognized by state, national or
                    international agencies such as NAAC, NBA etc.
                  </li>
                </ol>
              </>
            ),
            weightage: 15,
          },
        ]}
      />
    </>
  );
}

function Criterion7Content() {
  return (
    <>
      <h2 className={heading2}>Institutional Values and Best Practices</h2>

      <h3 className={heading3}>Key Indicator 7.1 – Institutional Values and Social Responsibilities (50)</h3>
      <MetricTable
        rows={[
          {
            metric: '7.1.1 QlM',
            title:
              'Measures initiated by the Institution for the promotion of gender equity and Institutional initiatives to celebrate / organize national and international commemorative days, events and festivals during the last five years.',
            weightage: 6,
          },
          {
            metric: '7.1.2 QnM',
            title: (
              <>
                The Institution has facilities and initiatives for:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>Alternate sources of energy and energy conservation measures</li>
                  <li>Management of the various types of degradable and non-degradable waste</li>
                  <li>Water conservation</li>
                  <li>Green campus initiatives</li>
                  <li>Disabled-friendly, barrier free environment</li>
                </ol>
              </>
            ),
            weightage: 20,
          },
          {
            metric: '7.1.3 QnM',
            title: (
              <>
                Quality audits on environment and energy regularly undertaken by the Institution.
                The institutional environment and energy initiatives are confirmed through the
                following:
                <ol className="list-decimal pl-4 mt-1 space-y-1">
                  <li>Green audit / Environment audit</li>
                  <li>Energy audit</li>
                  <li>Clean and green campus initiatives</li>
                  <li>Beyond the campus environmental promotion and sustainability activities</li>
                </ol>
              </>
            ),
            weightage: 10,
          },
          {
            metric: '7.1.4 QlM',
            title:
              'Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic diversity and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens (Within 500 words).',
            weightage: 10,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 7.2 – Best Practices (30)</h3>
      <MetricTable
        rows={[
          {
            metric: '7.2.1 QlM',
            title:
              'Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual.',
            weightage: 30,
          },
        ]}
      />

      <h3 className={heading3}>Key Indicator 7.3 – Institutional Distinctiveness (20)</h3>
      <MetricTable
        rows={[
          {
            metric: '7.3.1 QlM',
            title:
              'Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words.',
            weightage: 20,
          },
        ]}
      />
    </>
  );
}
