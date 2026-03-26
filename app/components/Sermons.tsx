const sermons = [
  "Flourishing & Thriving Through Extraordinary Love",
  "Flourishing and Thriving by Grace",
  "Flourishing by Extraordinary Faith",
  "Accessing the Ministry of Helpers",
  "From Little to Great Faith",
  "Passion Restored",
  "Faith to Finish Strong",
  "The Mystery of Thriving — Sure Footed",
  "Walking in the Spirit and Power",
  "London Miracle and Prophetic Service",
];

export default function Sermons() {
  return (
    <section id="sermons" className="py-28 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Watch & Listen</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recent <span className="text-[#C9A84C]">Sermons</span>
            </h2>
          </div>
          <a
            href="http://www.youtube.com/@TTCUKOnline"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 transition-all duration-200 self-start md:self-auto"
          >
            View All on YouTube →
          </a>
        </div>

        {/* List */}
        <div className="grid md:grid-cols-2 gap-3">
          {sermons.map((title, i) => (
            <a
              key={title}
              href="http://www.youtube.com/@TTCUKOnline"
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal delay-${(i % 2) + 1} group flex items-center gap-5 border border-white/6 bg-white/2 hover:bg-[#C9A84C]/6 hover:border-[#C9A84C]/25 hover:translate-x-1 px-6 py-5 rounded-sm transition-all duration-300`}
            >
              <span
                className="text-3xl font-black text-[#C9A84C]/20 min-w-[48px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/30 mt-1">The Transforming Church UK</p>
              </div>
              <div className="w-9 h-9 rounded-full border border-[#C9A84C]/35 flex items-center justify-center text-[#C9A84C] text-xs group-hover:bg-[#C9A84C] group-hover:text-black group-hover:border-[#C9A84C] transition-all duration-300 flex-shrink-0">
                ▶
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
