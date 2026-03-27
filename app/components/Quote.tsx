import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="mission-section">
      {/* Radial gold glow */}
      <div className="mission-glow" />

      {/* Top ornament */}
      <Reveal>
        <div className="mission-ornament">
          <span className="mission-orn-line" />
          <span className="mission-orn-diamond">◆</span>
          <span className="mission-orn-line" />
        </div>
      </Reveal>

      {/* Quote lines */}
      <div className="mission-body">
        <Reveal delay={0.1}>
          <p className="mission-text">We exist to lead people</p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mission-text">into a life&#8209;transforming</p>
        </Reveal>
        <Reveal delay={0.34}>
          <p className="mission-text">relationship with</p>
        </Reveal>
        <Reveal delay={0.52}>
          <div className="mission-god">GOD</div>
        </Reveal>
      </div>

      {/* Bottom ornament */}
      <Reveal delay={0.62}>
        <div className="mission-ornament mission-ornament--bottom">
          <span className="mission-orn-line" />
          <span className="mission-orn-diamond">◆</span>
          <span className="mission-orn-line" />
        </div>
      </Reveal>

      {/* Attribution */}
      <Reveal delay={0.72}>
        <p className="mission-attr">— Mission, The Transforming Church UK</p>
      </Reveal>
    </section>
  );
}
