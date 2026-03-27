import Reveal from "./Reveal";

const features = [
  {
    num: "I",
    title: "Dynamic Worship",
    text: "Feel the presence of God in an atmosphere of passionate praise and deep worship that moves the soul.",
    img: "/images/choir-ministration.jpg",
  },
  {
    num: "II",
    title: "Powerful Teachings",
    text: "Biblical, life-changing messages rooted in Kingdom values that will equip you to thrive in every season.",
    img: "/images/pastor-yinka.jpg",
  },
  {
    num: "III",
    title: "Loving Community",
    text: "Build meaningful, lasting relationships in a church that truly cares about YOU and your journey.",
    img: "/images/church-having-fun.jpg",
  },
  {
    num: "IV",
    title: "Prayers & Miracles",
    text: "Experience divine breakthroughs through our prophetic prayers and powerful intercessions.",
    img: "/images/revsam2.jpg",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="section" style={{ background: "var(--dark)", paddingBottom: 0 }}>
        <Reveal style={{ textAlign: "center" }}>
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>Why Join Us</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Experience faith<br />
            <em>like never before</em>
          </h2>
        </Reveal>
      </section>

      <div className="card-grid">
        {features.map((f, i) => (
          <Reveal key={f.num} delay={i * 0.1}>
            <div
              className="feature-card"
              style={{ "--card-bg": `url(${f.img})` } as React.CSSProperties}
            >
              <div className="card-bg-image" />
              <div className="card-bg-overlay" />
              <div className="card-number">{f.num}</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-text">{f.text}</p>
              <span className="card-arrow">Explore →</span>
              <div className="card-line" />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
