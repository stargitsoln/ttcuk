import Image from "next/image";

const cards = [
  {
    img: "/images/worship.jpg",
    tag: "Every Sunday",
    title: "Dynamic Worship",
    desc: "Feel the presence of God in an atmosphere of passionate praise and deep worship that moves hearts.",
  },
  {
    img: "/images/preacher.jpg",
    tag: "Biblical Truth",
    title: "Powerful Teachings",
    desc: "Receive biblical, life-changing messages that will equip you to thrive in every area of life.",
  },
  {
    img: "/images/greeter.jpg",
    tag: "Community",
    title: "A Loving Community",
    desc: "Build meaningful relationships in a church that truly cares about YOU and your journey.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gradient-to-b from-[#0d0d0d] to-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Experience</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Life at <span className="text-[#C9A84C]">TTCUK</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-sm text-right leading-relaxed">
            From powerful worship to life-changing teachings — every service is
            an encounter with the living God.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0.5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal delay-${i + 1} group relative overflow-hidden aspect-[3/4] cursor-pointer`}
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent group-hover:from-[#0D2A52]/95 transition-all duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{c.tag}</p>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{c.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
