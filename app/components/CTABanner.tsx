import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <div className="final-cta">
      <div className="ghost-word">TRANSFORM</div>
      <Reveal>
        <span className="section-label" style={{ display: "block", marginBottom: 16 }}>
          Be Part of Something Bigger
        </span>
        <h2 className="final-title">
          Every person has a purpose.<br />
          <em>Discover yours here.</em>
        </h2>
        <p className="final-sub">
          Whether you&apos;re passionate about serving, growing in faith, or making a difference
          in the world — there&apos;s a place for you at The Transforming Church UK.
        </p>
        <div className="final-cta-btns">
          <a href="#connect" className="btn-primary">Get In Touch</a>
          <a
            href="http://www.youtube.com/@TTCUKOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Watch Live
          </a>
        </div>
      </Reveal>
    </div>
  );
}
