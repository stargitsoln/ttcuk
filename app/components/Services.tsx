import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <div id="services" className="times-block">
      <Reveal>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          Gather With Us
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Every Sunday
        </h2>
      </Reveal>

      <div className="service-layout">
        {/* Image side */}
        <Reveal direction="left" className="service-image">
          <Image
            src="/images/pst-gene.jpg"
            alt="Sunday service at The Transforming Church UK"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="service-image-overlay" />
        </Reveal>

        {/* Info side */}
        <div className="service-info">
          <Reveal delay={0.2}>
            <div className="times-ring">
              <div className="orbit-dot" />
              <div className="orbit-dot" />
              <div className="orbit-dot" />
              <div className="times-inner">
                <span className="big">11AM</span>
                <span className="small" style={{ marginTop: 4 }}>to 1PM</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35} style={{ maxWidth: 340 }}>
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 300,
                lineHeight: 1.6,
                marginBottom: 24,
                color: "rgba(255,255,255,0.85)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Are you searching for a vibrant, spirit-filled church where you can grow in faith?&rdquo;
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8, fontWeight: 300 }}>
              📍 Ark Pioneer Academy, Westcombe Drive<br />
              Barnet, EN5 2BE — Free Parking
            </p>
            <p style={{ fontSize: 12, color: "var(--gold)", letterSpacing: 2, marginTop: 16 }}>
              Family-Friendly ✦ All Welcome
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
