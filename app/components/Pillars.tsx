const pillars = [
  { icon: "🙏", title: "Prayer & Miracles", desc: "Experience divine breakthroughs through our prophetic prayers and intercessions. God still moves today." },
  { icon: "📖", title: "Biblical Teaching", desc: "We believe the Bible is our final authority. Receive life-changing messages rooted in scripture." },
  { icon: "🤝", title: "Community & Fellowship", desc: "Build meaningful relationships in a church that truly cares about you and your journey of faith." },
  { icon: "🌍", title: "Global Mission", desc: "One Church making global impact — we exist to advance God's Kingdom in the community and beyond." },
];

const actions = [
  { icon: "✉️", title: "Prayer Request", desc: "We're here to pray with you. Send your request and we'll stand in faith together.", cta: "Let's Pray" },
  { icon: "📣", title: "Share Testimony", desc: "Share how God has transformed your life and inspire others with your story.", cta: "Share With Us" },
  { icon: "🏠", title: "Become a Member", desc: "Be part of a loving, faith-filled community. Every person has a purpose here.", cta: "Get in Touch" },
];

export default function Pillars() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Why Join Us</span>
            <span className="block w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Be Part of Something <span className="text-[#C9A84C]">Bigger</span>
          </h2>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mb-0.5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${i + 1} group relative bg-[#111] p-10 text-center overflow-hidden hover:-translate-y-1 hover:bg-[#1a1a1a] transition-all duration-300`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 action cards */}
        <div className="grid md:grid-cols-3 gap-0.5">
          {actions.map((a, i) => (
            <div
              key={a.title}
              className={`reveal delay-${i + 1} bg-[#111] p-8 flex gap-5 items-start hover:bg-[#1a1a1a] transition-colors duration-300`}
            >
              <span className="text-2xl mt-1">{a.icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{a.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed mb-4">{a.desc}</p>
                <a
                  href="#connect"
                  className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  {a.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
