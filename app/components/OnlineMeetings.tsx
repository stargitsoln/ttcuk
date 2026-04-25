import Reveal from "./Reveal";

const meetings = [
  {
    time: "Wednesday · 8PM GMT",
    name: "Water Brook",
    desc: "Bible Study — Online via Zoom",
    links: [
      { label: "Join Zoom →", href: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09", variant: "zoom" },
    ],
  },
  {
    time: "Daily · 9PM – 9:30PM GMT",
    name: "Prayer Surge",
    desc: "Prayer Meeting — Online via Zoom and YouTube @TTCUKOnline",
    links: [
      { label: "Join Zoom →", href: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09", variant: "zoom" },
      { label: "YouTube →", href: "https://www.youtube.com/@TTCUKOnline", variant: "yt" },
    ],
  },
  {
    time: "Last Friday · 11PM – 1AM GMT",
    name: "MEGA Prayer Surge",
    desc: "Monthly Intercession — Online via Zoom and YouTube @TTCUKOnline",
    links: [
      { label: "Join Zoom →", href: "https://zoom.us/j/3947895656?pwd=NzNVQytZQXpFV0JSMGV4YUo4ZzNtZz09", variant: "zoom" },
      { label: "YouTube →", href: "https://www.youtube.com/@TTCUKOnline", variant: "yt" },
    ],
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
              <div className="meeting-links">
                {m.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`meeting-link meeting-link--${l.variant}`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
