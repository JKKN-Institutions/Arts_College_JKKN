import { ORG_ID, ORG_NAME, SITE_URL } from "./entity";

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  /**
   * Optional and deliberately NOT defaulted to startDate. All 57 live Event
   * nodes lacked an endDate on 2026-09-18; the honest fix is to let a caller
   * supply the real one, not to invent a same-day end for events whose length
   * nobody recorded. Google needs startDate, and treats endDate as optional.
   */
  endDate?: string;
  location?: string;
  imageUrl?: string;
  url: string;
  eventStatus?: "EventScheduled" | "EventCancelled" | "EventPostponed" | "EventRescheduled";
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  imageUrl,
  url,
  eventStatus = "EventScheduled",
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    ...(endDate ? { endDate } : {}),
    url,
    eventStatus: `https://schema.org/${eventStatus}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: imageUrl || "https://cas.jkkn.ac.in/opengraph-image",
    location: {
      "@type": "Place",
      name: location ?? "JKKN College of Arts and Science",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
        addressLocality: "Komarapalayam",
        addressRegion: "Tamil Nadu",
        postalCode: "638183",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: ORG_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
