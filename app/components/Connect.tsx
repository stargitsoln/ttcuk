import Image from "next/image";

const details = [
  { icon: "📞", title: "Phone", body: "+44 7842 671760", href: "tel:+447842671760" },
  { icon: "📍", title: "Address", body: "Ark Pioneer Academy, Westcombe Drive\nBarnet, EN5 2BE, UK\nFree Parking · Family-Friendly", href: "https://g.co/kgs/Di9Nnz1" },
  { icon: "🗺️", title: "Find Us", body: "View on Google Maps →", href: "https://g.co/kgs/Di9Nnz1" },
  { icon: "🌐", title: "Follow Us", body: "@TTCUKOnline on YouTube, Facebook & Instagram", href: "http://www.youtube.com/@TTCUKOnline" },
];

export default function Connect() {
  return (
    <section id="connect" className="py-28 bg-gradient-to-br from-[#0D2A52] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="reveal-left relative">
          <Image
            src="/images/congregation-2.jpg"
            alt="Connect with TTCUK"
            width={600}
            height={500}
            className="object-cover w-full h-[480px] rounded-sm"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute -bottom-5 -right-5 w-28 h-28 border-2 border-[#C9A84C]/30" />
        </div>

        {/* Text */}
        <div className="reveal-right">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-[0.25em]">Reach Out</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Connect <span className="text-[#C9A84C]">With Us</span>
          </h2>
          <p className="text-white/55 leading-relaxed mb-10">
            Reach out and connect with our church community. We&apos;re here to
            welcome, assist, and share in your journey of faith.
          </p>

          <div className="space-y-6 mb-10">
            {details.map((d) => (
              <div key={d.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 flex-shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 flex items-center justify-center text-lg rounded-sm">
                  {d.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{d.title}</p>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm leading-relaxed hover:text-[#C9A84C] transition-colors whitespace-pre-line"
                  >
                    {d.body}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://pay.sumup.com/b2c/QCDJNNFJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] hover:bg-[#F0D080] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-1"
            >
              Give Online
            </a>
            <a
              href="https://g.co/kgs/Di9Nnz1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white text-xs font-semibold uppercase tracking-widest px-8 py-4 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
