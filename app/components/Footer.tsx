const visitLinks = [
  { label: "Sunday Service · 11AM", href: "#services" },
  { label: "Get Directions", href: "https://g.co/kgs/Di9Nnz1" },
  { label: "Free Parking Available", href: "#" },
  { label: "Family-Friendly", href: "#" },
];
const onlineLinks = [
  { label: "Water Brook (Wed 8PM)", href: "https://bit.ly/joinTTCUK" },
  { label: "Prayer Surge (Daily 9PM)", href: "https://bit.ly/joinTTCUK" },
  { label: "Mega Prayer Surge", href: "https://bit.ly/joinTTCUK" },
  { label: "Watch Sermons", href: "http://www.youtube.com/@TTCUKOnline" },
];
const involvedLinks = [
  { label: "Give Online", href: "https://pay.sumup.com/b2c/QCDJNNFJ" },
  { label: "Prayer Requests", href: "#connect" },
  { label: "Share Testimony", href: "#connect" },
  { label: "Become a Member", href: "#connect" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center font-bold text-black text-sm">
              TTC
            </div>
            <span className="font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
              The Transforming<br />Church UK
            </span>
          </div>
          <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
            One Church. Making Global Impact. Join us every Sunday at Ark
            Pioneer Academy, Barnet — or online from anywhere in the world.
          </p>
          <div className="flex gap-3">
            {[
              { label: "▶", href: "http://www.youtube.com/@TTCUKOnline" },
              { label: "f", href: "#" },
              { label: "ig", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white/40 flex items-center justify-center text-xs font-bold transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <h4 className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Visit</h4>
          <ul className="space-y-3">
            {visitLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Online */}
        <div>
          <h4 className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Online</h4>
          <ul className="space-y-3">
            {onlineLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Get Involved</h4>
          <ul className="space-y-3">
            {involvedLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/6 py-6 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3">
        <p className="text-white/20 text-xs">© 2025 The Transforming Church UK · All rights reserved</p>
        <p className="text-white/20 text-xs">
          www.thetransformingchurchuk.org ·{" "}
          <a href="tel:+447842671760" className="hover:text-[#C9A84C] transition-colors">+44 7842 671760</a>
        </p>
      </div>
    </footer>
  );
}
