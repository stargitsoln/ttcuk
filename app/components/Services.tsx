import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className="times-block">
      <div className="reveal">
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          Gather With Us
        </span>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Every Sunday
        </h2>
      </div>

      <div className="service-layout">
        {/* Image side */}
        <div className="service-image reveal">
          <Image
            src="/images/pst-gene.jpg"
            alt="Sunday service at The Transforming Church UK"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="service-image-overlay" />
        </div>

        {/* Info side */}
        <div className="service-info">
          <div className="times-ring reveal">
            <div className="orbit-dot" />
            <div className="orbit-dot" />
            <div className="orbit-dot" />
            <div className="times-inner">
              <span className="big">11AM</span>
              <span className="small" style={{ marginTop: 4 }}>to 1PM</span>
            </div>
          </div>

          <div className="reveal" style={{ maxWidth: 340 }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
