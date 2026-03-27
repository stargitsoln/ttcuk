import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="quote-section">
      <Reveal>
        <p className="quote-text">
          &ldquo;We exist to lead people into a life-transforming relationship with GOD.&rdquo;
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <span className="quote-attr">— Mission, The Transforming Church UK</span>
      </Reveal>
    </section>
  );
}
