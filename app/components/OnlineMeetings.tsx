const meetings = [
  {
    time: "Wednesday · 8PM GMT",
    name: "Water Brook",
    desc: "Bible Study — Online via Zoom",
  },
  {
    time: "Daily · 9PM GMT",
    name: "Prayer Surge",
    desc: "Prayer Meeting — Online via Zoom",
  },
  {
    time: "Last Friday · 11PM GMT",
    name: "Mega Prayer Surge",
    desc: "Monthly Intercession — Online via Zoom",
  },
];

export default function OnlineMeetings() {
  return (
    <section className="section" style={{ background: "var(--mid)" }} id="online">
      <div className="reveal" style={{ textAlign: "center" }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>Online Meetings</span>
        <h2 className="section-title" style={{ textAlign: "center" }}>Join From Anywhere</h2>
      </div>
      <div className="meetings-grid">
        {meetings.map((m, i) => (
          <div key={m.name} className={`meeting-card reveal ${i > 0 ? `delay-${i}` : ""}`}>
            <span className="meeting-time">{m.time}</span>
            <div className="meeting-name">{m.name}</div>
            <p className="meeting-desc">{m.desc}</p>
            <a
              href="https://bit.ly/joinTTCUK"
              target="_blank"
              rel="noopener noreferrer"
              className="meeting-link"
            >
              Join →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
