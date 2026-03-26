const beliefs = [
  {
    num: "I",
    verse: "John 5:39 · 2 Timothy 3:16–17",
    text: "The Bible is inspired by God — the complete revelation of His will and the final authority for Christian faith. We shall not allow or practise anything that is not scriptural.",
  },
  {
    num: "II",
    verse: "Deuteronomy 6:4 · Matthew 28:19",
    text: "We believe in one God, infinitely perfect and eternally existing in three Persons — the Father, the Son, and the Holy Spirit. Creator of the heavens and Ruler of the natural and spiritual world.",
  },
  {
    num: "III",
    verse: "Hebrews 10:1–10 · Colossians 1:17",
    text: "All have sinned and cannot be saved by works but by grace through faith in Jesus Christ — born of the Virgin Mary, who died, rose bodily from the dead, and now intercedes for us.",
  },
  {
    num: "IV",
    verse: "Matthew 28:19–20 · Ephesians 4:11–13",
    text: "The church exists in the community to advance God's Kingdom in the community and beyond — through discipleship, fellowship, ministry, and mission.",
  },
];

export default function Pillars() {
  return (
    <section id="beliefs" className="beliefs-section">
      <video
        className="section-bg-video beliefs-bg-video"
        src="/images/TTCUK-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="section-bg-overlay" />
      <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
        <span className="section-label">Foundation</span>
        <h2 className="section-title">Our Beliefs</h2>
      </div>
      {beliefs.map((b) => (
        <div key={b.num} className="belief-item reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="belief-num">{b.num}</div>
          <div>
            <div className="belief-verse">{b.verse}</div>
            <p className="belief-text">{b.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
