import Reveal from "./Reveal";

const meetings = [
  {
    time: "Wednesday · 8PM GMT",
    name: "Water Brook",
    desc: "Bible Study — Online via Zoom",
    link: "https://bit.ly/joinTTCUK",
  },
  {
    time: "Daily · 9PM GMT",
    name: "Prayer Surge",
    desc: "Prayer Meeting — Online via Zoom",
    link: "https://www.youtube.com/ttcukonline",
  },
  {
    time: "Last Friday · 11PM GMT",
    name: "Mega Prayer Surge",
    desc: "Monthly Intercession — Online via Zoom",
    link: "https://www.youtube.com/ttcukonline",
  },
];

export default function OnlineMeetings() {
  return (
    <section className="section" id="online">
      <Reveal style={{ textAlign: "center" }}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>Online Meetings</span>
        <h2 className="section-title" style={{ textAlign: "center" }}>Join From Anywhere</h2>
      </Reveal>
      <div className="meetings-grid">
        {meetings.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.12}>
            <div className="meeting-card">
              <span className="meeting-time">{m.time}</span>
              <div className="meeting-name">{m.name}</div>
              <p className="meeting-desc">{m.desc}</p>
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="meeting-link"
              >
                Join →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
