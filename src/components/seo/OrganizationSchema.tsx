export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": "https://cas.jkkn.ac.in/#organization",
    name: "JKKN College of Arts and Science",
    alternateName: ["CAS JKKN", "JKKN Arts and Science College"],
    url: "https://cas.jkkn.ac.in",
    logo: "https://cas.jkkn.ac.in/logo.svg",
    image: "https://cas.jkkn.ac.in/logo.svg",
    description:
      "JKKN College of Arts and Science is an autonomous institution affiliated to Periyar University, offering 27+ undergraduate, postgraduate and doctoral programmes in Arts, Science and Commerce near Erode, Tamil Nadu.",
    foundingDate: "1994",
    telephone: "+91-93458-55001",
    email: "arts@jkkn.ac.in",
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
    hasMap: "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
    parentOrganization: {
      "@type": "EducationalOrganization",
      "@id": "https://www.jkkn.ac.in/#organization",
      name: "JKKN Institutions",
      url: "https://www.jkkn.ac.in",
      foundingDate: "1952",
    },
    areaServed: [
      { "@type": "City", name: "Erode" },
      { "@type": "City", name: "Salem" },
      { "@type": "City", name: "Namakkal" },
      { "@type": "City", name: "Tiruchengode" },
      { "@type": "City", name: "Coimbatore" },
      { "@type": "AdministrativeArea", name: "Namakkal District" },
    ],
    sameAs: [
      "https://www.jkkn.ac.in",
      "https://maps.app.goo.gl/ya6SAYhWUBQWSvXe7",
    ],
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
        recognizedBy: {
          "@type": "Organization",
          name: "National Assessment and Accreditation Council (NAAC)",
        },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Periyar University",
      url: "https://www.periyaruniversity.ac.in",
    },
    knowsAbout: [
      "Arts Education",
      "Science Education",
      "Commerce Education",
      "Computer Science",
      "Data Analytics",
      "Cyber Security",
      "Artificial Intelligence",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "JKKN College of Arts and Science",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
