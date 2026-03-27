"use client";

const testimonies = [
  {
    name: "Grace O.",
    category: "Healing",
    text: "I was diagnosed with stage 3 breast cancer. Doctors gave me little hope. My church family prayed, and six months later my scans came back completely clear. My oncologist called it medically unexplainable.",
  },
  {
    name: "Michael T.",
    category: "Career",
    text: "After 18 months without work, I was on the verge of losing my home. I joined the prayer meetings at TTCUK and within three weeks received a job offer I hadn't even applied for. God truly provides.",
  },
  {
    name: "Blessing A.",
    category: "Miracle",
    text: "My visa had been refused three times. On the fourth application — after a full night of prayer here at TTCUK — I was approved the very next morning. I still cannot explain it. Only God.",
  },
  {
    name: "David C.",
    category: "Promotion",
    text: "I joined my company as an intern with no degree. Eight months after connecting with this church, I was promoted to team lead. My manager said she had never moved anyone that fast in her career.",
  },
  {
    name: "Pastor Emmanuel F.",
    category: "Protection",
    text: "My son was in a vehicle completely destroyed in a motorway collision. Every other passenger was hospitalised. My son walked away without a single scratch. The hand of God was upon him.",
  },
  {
    name: "Ruth N.",
    category: "Healing",
    text: "Doctors told me I needed urgent spinal surgery. A deacon from TTCUK prayed over me on Sunday. By Thursday my MRI showed nothing wrong. The surgeon himself had no medical explanation.",
  },
  {
    name: "James K.",
    category: "Restoration",
    text: "My business was £40,000 in debt and days from closing. After fasting and prayer with the church, three major contracts came in within a week. Today I am debt-free and employing five people.",
  },
  {
    name: "Faith P.",
    category: "Protection",
    text: "My car was hit by a lorry at speed. Paramedics could not believe I was conscious and completely uninjured. I know with everything in me it was the prayers of this church that covered me that day.",
  },
];

export default function Testimonies() {
  return (
    <section className="testimonies-section">
      <div className="testimonies-header">
        <span className="section-label" style={{ display: "block", textAlign: "center" }}>
          Testimonies
        </span>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 0 }}>
          Lives <em>Transformed</em>
        </h2>
      </div>
      <div className="testimonies-track-wrap">
        <div className="testimonies-track">
          {[...testimonies, ...testimonies].map((t, i) => (
            <div key={i} className="testimony-card">
              <span className="testimony-category">{t.category}</span>
              <p className="testimony-text">&ldquo;{t.text}&rdquo;</p>
              <span className="testimony-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
