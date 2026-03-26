const features = [
  {
    num: "01",
    title: "Dynamic Worship",
    text: "Feel the presence of God in an atmosphere of passionate praise and deep worship that moves the soul.",
  },
  {
    num: "02",
    title: "Powerful Teachings",
    text: "Biblical, life-changing messages rooted in Kingdom values that will equip you to thrive in every season.",
  },
  {
    num: "03",
    title: "Loving Community",
    text: "Build meaningful, lasting relationships in a church that truly cares about YOU and your journey.",
  },
  {
    num: "04",
    title: "Prayers & Miracles",
    text: "Experience divine breakthroughs through our prophetic prayers and powerful intercessions.",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="section" style={{ background: "var(--dark)", paddingBottom: 0 }}>
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>Why Join Us</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Experience faith<br />
            <em>like never before</em>
          </h2>
        </div>
      </section>

      <div className="card-grid">
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`feature-card reveal ${i > 0 ? `delay-${i}` : ""}`}
          >
            <div className="card-number">{f.num}</div>
            <h3 className="card-title">{f.title}</h3>
            <p className="card-text">{f.text}</p>
            <span className="card-arrow">Explore →</span>
            <div className="card-line" />
          </div>
        ))}
      </div>
    </>
  );
}
