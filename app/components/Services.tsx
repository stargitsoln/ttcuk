import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <div id="services" className="times-block" style={{ background: "var(--dark)" }}>
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

          <Reveal delay={0.35} style={{ maxWidth: 500 }}>
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 300,
                lineHeight: 1.6,
                marginBottom: 24,
                color: "rgba(255,255,255,0.85)",
                fontStyle: "italic",
                maxWidth: 340,
                margin: "0 auto 24px"
              }}
            >
              &ldquo;Are you searching for a vibrant, spirit-filled church where you can grow in faith?&rdquo;
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", marginBottom: 8 }}>
              <div style={{ flex: "1 1 200px" }}>
                <p style={{ fontSize: 14, color: "var(--gold)", marginBottom: 4, fontWeight: 400 }}>Barnet Campus</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                  📍 Ark Pioneer Academy, Westcombe Drive<br />
                  Barnet, EN5 2BE — Free Parking
                </p>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <p style={{ fontSize: 14, color: "var(--gold)", marginBottom: 4, fontWeight: 400 }}>Stratford Campus</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                  📍 The Dome, University of East London, Water Ln<br />
                  London E15 4LZ
                </p>
              </div>
            </div>

            <p style={{ fontSize: 12, color: "var(--gold)", letterSpacing: 2, marginTop: 24 }}>
              Family-Friendly ✦ All Welcome
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
