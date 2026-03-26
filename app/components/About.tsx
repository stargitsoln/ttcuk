import Image from "next/image";

const beliefs = [
  {
    ref: "John 5:39",
    text: "We believe the Bible is inspired by God — the complete revelation of His Will and the final authority for Christian faith.",
  },
  {
    ref: "Matt 28:19",
    text: "We believe in one God — Father, Son, and Holy Spirit — Creator of the heavens and Ruler of all worlds.",
  },
  {
    ref: "Eph 4:11",
    text: "We believe the church exists to advance God's Kingdom in the community and beyond.",
  },
  {
    ref: "1 Peter 2:21",
    text: "We believe salvation is by grace through faith in the finished works of Jesus Christ alone.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Images */}
        <div className="reveal-left relative h-[520px]">
          <Image
            src="/images/congregation.jpg"
            alt="Congregation"
            fill
            className="object-cover object-top rounded-sm"
            style={{ clipPath: "inset(0 25% 15% 0)" }}
          />
          <Image
            src="/images/greeter.jpg"
            alt="Church greeter"
            width={260}
            height={260}
            className="absolute bottom-0 right-0 object-cover border-4 border-[#0d0d0d] rounded-sm"
            style={{ height: "260px", width: "260px" }}
          />
          {/* Gold stat box */}
          <div className="absolute top-8 -right-4 bg-[#C9A84C] text-black px-5 py-4 text-center z-10">
            <p className="text-4xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>10+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider mt-1">Sermons<br />Online</p>
          </div>
          {/* Decorative border */}
          <div className="absolute -bottom-5 -left-5 w-20 h-20 border-2 border-[#C9A84C]/40" />
        </div>

        {/* Text */}
        <div className="reveal-right">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Who We Are</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Committed to{" "}
            <span className="text-[#C9A84C]">Kingdom Values</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            The Transforming Church is deeply committed to the essential
            foundations of discipleship, fellowship, ministry, and mission.
            Whether you&apos;re new to faith or seeking deeper spiritual growth,
            there&apos;s a place for you here.
          </p>

          <div className="space-y-3 mb-10">
            {beliefs.map((b) => (
              <div
                key={b.ref}
                className="flex gap-4 border-l-2 border-[#C9A84C] bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10 transition-colors px-4 py-3"
              >
                <span className="text-[#C9A84C] text-[11px] font-bold whitespace-nowrap pt-0.5 min-w-[70px]">
                  {b.ref}
                </span>
                <p className="text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#connect"
            className="bg-[#C9A84C] hover:bg-[#F0D080] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-1 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
