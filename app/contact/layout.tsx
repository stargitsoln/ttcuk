import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Get Involved",
  description:
    "Get in touch with The Transforming Church UK. Visit us on Sundays in Barnet (EN5 2BE) or Stratford (E15 4LZ), or send us a message online.",
  alternates: {
    canonical: "https://www.ttcuk.church/contact",
  },
  openGraph: {
    title: "Contact & Get Involved | The Transforming Church UK",
    description:
      "Get in touch with The Transforming Church UK. Visit us on Sundays in Barnet (EN5 2BE) or Stratford (E15 4LZ), or send us a message online.",
    url: "https://www.ttcuk.church/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
