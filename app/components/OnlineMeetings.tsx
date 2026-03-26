import Image from "next/image";

const meetings = [
  {
    img: "/images/water-brook.jpg",
    title: "Water Brook",
    badge: "Bible Study",
    time: "Every Wednesday · 8PM GMT",
    desc: "Dive deep into the Word with our church family in this weekly online Bible Study.",
  },
  {
    img: "/images/prayer-surge.jpg",
    title: "Prayer Surge",
    badge: "Daily Prayer",
    time: "Every Day · 9PM GMT",
    desc: "Come as you are and experience the power of corporate prayer in our daily online meeting.",
  },
  {
    img: "/images/mega-prayer-surge.jpg",
    title: "Mega Prayer Surge",
    badge: "Monthly",
    time: "Last Friday · 11PM GMT",
    desc: "An extended night of breakthrough prayer on the last Friday of every month.",
  },
];

export default function OnlineMeetings() {
  return (
    <section id="online" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-18">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Join Online</span>
            <span className="block w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Online <span className="text-[#C9A84C]">Meetings</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
            Can&apos;t make it in person? Join us from anywhere in the world
            through our regular online gatherings on Zoom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {meetings.map((m, i) => (
            <div
              key={m.title}
              className={`reveal delay-${i + 1} group bg-[#111] rounded-sm overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {m.title}
                </h3>
                <div className="flex items-center gap-2 text-[#C9A84C] text-xs font-semibold mb-4">
                  <span className="block w-5 h-px bg-[#C9A84C]" />
                  {m.time}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{m.desc}</p>
                <a
                  href="https://bit.ly/joinTTCUK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#C9A84C]/40 hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] text-[#C9A84C] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  📹 Join on Zoom
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
