export type ChurchLocation = {
  slug: string;
  name: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressRegion: string;
  day: "Sunday" | "Saturday";
  timeLabel: string;
  opens: string;
  closes: string;
  parking?: string;
  heroImage: string;
  intro: string;
};

export const locations: ChurchLocation[] = [
  {
    slug: "barnet",
    name: "Barnet",
    streetAddress: "Ark Pioneer Academy, Westcombe Drive",
    addressLocality: "Barnet",
    postalCode: "EN5 2BE",
    addressRegion: "Greater London",
    day: "Sunday",
    timeLabel: "11AM – 1PM",
    opens: "11:00",
    closes: "13:00",
    parking: "Free on-site parking",
    heroImage: "/images/congregation8.jpg",
    intro:
      "Our Barnet campus is where it all began — a warm, family-friendly gathering in North London open to everyone, whatever your background or stage of faith.",
  },
  {
    slug: "stratford",
    name: "Stratford",
    streetAddress: "The Dome, University of East London, Water Lane",
    addressLocality: "Stratford",
    postalCode: "E15 4LZ",
    addressRegion: "Greater London",
    day: "Sunday",
    timeLabel: "11AM – 1PM",
    opens: "11:00",
    closes: "13:00",
    heroImage: "/images/congregation7.jpg",
    intro:
      "Our Stratford campus brings the same Kingdom-values worship and community to East London, meeting at The Dome on the University of East London campus.",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    streetAddress: "53 Wyrley Rd",
    addressLocality: "Birmingham",
    postalCode: "B6 7BS",
    addressRegion: "West Midlands",
    day: "Saturday",
    timeLabel: "11AM – 1PM",
    opens: "11:00",
    closes: "13:00",
    heroImage: "/images/congre.jpg",
    intro:
      "Our newest campus in Birmingham brings The Transforming Church UK to the West Midlands, gathering every Saturday for worship, teaching, and community.",
  },
];

export function getLocation(slug: string): ChurchLocation | undefined {
  return locations.find((l) => l.slug === slug);
}
