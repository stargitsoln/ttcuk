import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      <Image
        src="/images/worship.jpg"
        alt="Join TTCUK"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Your Next Step</span>
          <span className="block w-8 h-px bg-[#C9A84C]" />
        </div>
        <h2
          className="text-4xl md:text-5xl font-black leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Transforming Lives —{" "}
          <span className="text-[#C9A84C]">Starting With Yours</span>
        </h2>
        <p className="text-white/60 leading-relaxed mb-10 text-lg">
          We believe that every person has a purpose. At The Transforming Church
          UK, we want to help you discover yours. Whether you&apos;re passionate
          about serving, growing in faith, or making a difference in the world —
          there&apos;s a place for you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="http://www.youtube.com/@TTCUKOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#F0D080] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
          >
            ▶ &nbsp;Join Us Live This Sunday
          </a>
          <a
            href="https://bit.ly/joinTTCUK"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white text-xs font-semibold uppercase tracking-widest px-8 py-4 transition-all duration-300"
          >
            Join Online
          </a>
        </div>
      </div>
    </section>
  );
}
