import { ORG_ID, SITE_URL, PARENT_URL, PARENT_ID, MAPS_PIN, ORG_SAME_AS } from "./entity";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": ORG_ID,
    name: "JKKN College of Arts and Science",
    legalName: "J.K.K Nataraja College of Arts & Science",
    alternateName: ["CAS JKKN", "JKKN Arts and Science College", "J.K.K.Nataraja College of Arts and Science"],
    url: SITE_URL,
    logo: "https://cas.jkkn.ac.in/logo.svg",
    image: "https://cas.jkkn.ac.in/opengraph-image",
    description:
      "JKKN College of Arts and Science is an autonomous institution affiliated to Periyar University, offering 35 undergraduate, postgraduate and doctoral programmes in Arts, Science and Commerce near Erode, Tamil Nadu. Founded in 1974 as part of J.K.K. Nattraja Educational Institutions (est. 1952), the college serves 1,685 students (NIRF 2025 submission, AY 2023-24) across a 15-acre campus on NH-544.",
    foundingDate: "1974",
    telephone: "+91-93458-55001",
    email: "arts@jkkn.org",
    numberOfStudents: 1685,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
      addressLocality: "Komarapalayam",
      addressRegion: "Tamil Nadu",
      postalCode: "638183",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.445180",
      longitude: "77.726549",
    },
    hasMap: MAPS_PIN,
    parentOrganization: {
      "@type": "EducationalOrganization",
      "@id": PARENT_ID,
      name: "JKKN Institutions",
      url: PARENT_URL,
      foundingDate: "1952",
    },
    // Every town that has a landing page under /<town>. The eight added on
    // 2026-09-16 were merged in from the duplicate CollegeOrUniversity nodes
    // those pages used to declare, so deleting the duplicates lost no signal.
    areaServed: [
      { "@type": "City", name: "Komarapalayam" },
      { "@type": "City", name: "Erode" },
      { "@type": "City", name: "Salem" },
      { "@type": "City", name: "Namakkal" },
      { "@type": "City", name: "Tiruchengode" },
      { "@type": "City", name: "Coimbatore" },
      { "@type": "City", name: "Bhavani" },
      { "@type": "City", name: "Gobichettipalayam" },
      { "@type": "City", name: "Pallipalayam" },
      { "@type": "City", name: "Perundurai" },
      { "@type": "City", name: "Rasipuram" },
      { "@type": "City", name: "Sankagiri" },
      { "@type": "City", name: "Tiruppur" },
      { "@type": "AdministrativeArea", name: "Namakkal District" },
    ],
    sameAs: ORG_SAME_AS,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Autonomous Status",
        recognizedBy: {
          "@type": "Organization",
          name: "University Grants Commission (UGC)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "NAAC Accreditation",
        description: "NAAC Accredited Institution",
        recognizedBy: {
          "@type": "Organization",
          name: "National Assessment and Accreditation Council (NAAC)",
          url: "https://www.naac.gov.in",
        },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Periyar University",
      url: "https://www.periyaruniversity.ac.in",
    },
    department: [
      { "@type": "Organization", name: "Department of Computer Science" },
      { "@type": "Organization", name: "Department of Commerce" },
      { "@type": "Organization", name: "Department of Business Administration" },
      { "@type": "Organization", name: "Department of Data Analytics" },
      { "@type": "Organization", name: "Department of Artificial Intelligence" },
      { "@type": "Organization", name: "Department of Visual Communication" },
      { "@type": "Organization", name: "Department of Microbiology" },
      { "@type": "Organization", name: "Department of Mathematics" },
      { "@type": "Organization", name: "Department of English" },
      { "@type": "Organization", name: "Department of Tamil" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programmes 2026-27",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Undergraduate Programmes (UG)", numberOfItems: 20 },
        { "@type": "OfferCatalog", name: "Postgraduate Programmes (PG)", numberOfItems: 12 },
        { "@type": "OfferCatalog", name: "Doctoral Programmes (PhD)", numberOfItems: 3 },
      ],
    },
    knowsAbout: [
      "Arts Education",
      "Science Education",
      "Commerce Education",
      "Computer Science",
      "Data Analytics",
      "Cyber Security",
      "Artificial Intelligence",
      "Visual Communication",
      "Textile and Fashion Designing",
      "Microbiology",
    ],
    // Source: this college's own Google Business Profile, read 2026-09-16 -
    // "4.8, 524 Google reviews". Previous value 517 was the 2026-09-12 reading.
    // GBP reports one count; it is used for both ratingCount and reviewCount.
    // This is a self-reported aggregate about ourselves, so Google will not show
    // it as a review rich result - the stars in local results come from GBP
    // directly. Kept by user decision 2026-09-16. Re-read GBP when it is updated.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "524",
      reviewCount: "524",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "h1",
        ".hero-description",
        "[data-speakable]",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
