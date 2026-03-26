import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="quote-section">
      <Reveal>
        <p className="quote-text">
          &ldquo;Whether you&apos;re new to faith or seeking deeper spiritual growth,
          there&apos;s a place for you here.&rdquo;
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <span className="quote-attr">— The Transforming Church UK</span>
      </Reveal>
    </section>
  );
}
