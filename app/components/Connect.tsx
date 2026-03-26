const actions = [
  {
    title: "Prayer Request",
    text: "We're here to pray with you. Send your request and we'll stand in faith together.",
    cta: "Let's Pray →",
  },
  {
    title: "Testimony",
    text: "Share how God has transformed your life and inspire others with your story.",
    cta: "Share With Us →",
  },
  {
    title: "Become a Member",
    text: "Be part of a loving, faith-filled community. There's a place here for you.",
    cta: "Get In Touch →",
  },
  {
    title: "Watch Sermons",
    text: "Catch up on powerful messages from our recent series on Flourishing and Thriving.",
    cta: "Watch Now →",
    href: "http://www.youtube.com/@TTCUKOnline",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="action-section">
      <div className="reveal" style={{ textAlign: "center", marginBottom: 0 }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          Get Involved
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Take Your Next Step
        </h2>
      </div>
      <div className="action-grid">
        {actions.map((a, i) => (
          <div key={a.title} className={`action-card reveal ${i > 0 ? `delay-${i}` : ""}`}>
            <h3 className="action-title">{a.title}</h3>
            <p className="action-text">{a.text}</p>
            {a.href ? (
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="action-btn">
                {a.cta}
              </a>
            ) : (
              <button className="action-btn">{a.cta}</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
