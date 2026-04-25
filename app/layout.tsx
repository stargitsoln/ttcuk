import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SITE_URL = "https://www.ttcuk.church";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Transforming Church UK",
    template: "%s | The Transforming Church UK",
  },
  description:
    "A Kingdom-values church with campuses in Barnet & Stratford, London. We exist to lead people into a life-transforming relationship with Jesus Christ.",
  keywords: [
    "church in Barnet",
    "church in Stratford London",
    "churches in North London",
    "Sunday service Barnet",
    "Christian church East London",
    "spirit filled church London",
    "charismatic church North London",
    "church near me Barnet EN5",
    "church E15",
    "TTCUK",
    "The Transforming Church UK",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "The Transforming Church UK",
    description:
      "A Kingdom-values church with campuses in Barnet & Stratford, London. We exist to lead people into a life-transforming relationship with Jesus Christ.",
    url: SITE_URL,
    siteName: "The Transforming Church UK",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Transforming Church UK congregation worshipping together",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Transforming Church UK",
    description:
      "A Kingdom-values church with campuses in Barnet & Stratford, London. We exist to lead people into a life-transforming relationship with Jesus Christ.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

/** JSON-LD structured data — Church + both campuses */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "The Transforming Church UK",
  alternateName: "TTCUK",
  url: SITE_URL,
  logo: `${SITE_URL}/images/TTCUK-logo.gif`,
  telephone: "+447842671760",
  email: "hello@ttcuk.church",
  description:
    "A Kingdom-values church with campuses in Barnet & Stratford, London. We exist to lead people into a life-transforming relationship with Jesus Christ.",
  sameAs: [
    "https://www.facebook.com/TTCUKOnline",
    "https://www.instagram.com/TTCUKOnline",
    "https://www.youtube.com/@TTCUKOnline",
    "https://www.x.com/TTCUKOnline",
  ],
  location: [
    {
      "@type": "Place",
      name: "Barnet Campus",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ark Pioneer Academy, Westcombe Drive",
        addressLocality: "Barnet",
        postalCode: "EN5 2BE",
        addressRegion: "Greater London",
        addressCountry: "GB",
      },
    },
    {
      "@type": "Place",
      name: "Stratford Campus",
      address: {
        "@type": "PostalAddress",
        streetAddress: "The Dome, University of East London, Water Lane",
        addressLocality: "Stratford",
        postalCode: "E15 4LZ",
        addressRegion: "Greater London",
        addressCountry: "GB",
      },
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "11:00",
    closes: "13:00",
  },
};

const eventsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Water Brook Bible Study",
    description: "Weekly online Bible Study hosted by The Transforming Church UK via Zoom.",
    organizer: { "@type": "Church", name: "The Transforming Church UK", url: SITE_URL },
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09",
    },
    eventSchedule: {
      "@type": "Schedule",
      byDay: "https://schema.org/Wednesday",
      startTime: "20:00",
      endTime: "21:30",
      repeatFrequency: "P1W",
      scheduleTimezone: "Europe/London",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Prayer Surge",
    description: "Daily online prayer meeting (9PM–9:30PM GMT) via Zoom and YouTube @TTCUKOnline.",
    organizer: { "@type": "Church", name: "The Transforming Church UK", url: SITE_URL },
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09",
    },
    eventSchedule: {
      "@type": "Schedule",
      byDay: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      startTime: "21:00",
      endTime: "21:30",
      repeatFrequency: "P1D",
      scheduleTimezone: "Europe/London",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "MEGA Prayer Surge",
    description: "Monthly all-night intercession (11PM–1AM GMT) via Zoom and YouTube @TTCUKOnline. Held on the last Friday of each month.",
    organizer: { "@type": "Church", name: "The Transforming Church UK", url: SITE_URL },
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09",
    },
    eventSchedule: {
      "@type": "Schedule",
      byDay: "https://schema.org/Friday",
      byMonthWeek: -1,
      startTime: "23:00",
      endTime: "01:00",
      repeatFrequency: "P1M",
      scheduleTimezone: "Europe/London",
    },
  },
];

import CookieConsent from "./components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {eventsJsonLd.map((event) => (
          <script
            key={event.name}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
          />
        ))}
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
