export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "LocalBusiness"],
    "@id": "https://cas.jkkn.ac.in/#localbusiness",
    name: "JKKN College of Arts and Science",
    url: "https://cas.jkkn.ac.in",
    telephone: "+91-93458-55001",
    email: "arts@jkkn.ac.in",
    image: "https://cas.jkkn.ac.in/opengraph-image",
    priceRange: "$$",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    isPartOf: {
      "@id": "https://cas.jkkn.ac.in/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
