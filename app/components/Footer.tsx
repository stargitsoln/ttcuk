export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/TTCUK-logo.gif"
            alt="TTCUK"
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </div>
        <div className="footer-info">
          Ark Pioneer Academy, Westcombe Drive, Barnet, EN5 2BE<br />
          Sundays 11AM – 1PM · Free Parking · Family-Friendly
        </div>
        <div className="footer-contact">
          <a href="tel:+447842671760">+44 7842 671760</a><br />
          <a
            href="https://pay.sumup.com/b2c/QCDJNNFJ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Give Online
          </a>
        </div>
      </div>
    </footer>
  );
}
