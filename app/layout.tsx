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
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
