const items = [
  { icon: "🕙", label: "Sunday Service", value: "11AM – 1PM" },
  { icon: "📍", label: "Location", value: "Ark Pioneer Academy, Barnet EN5 2BE" },
  { icon: "💻", label: "Bible Study — Wednesdays", value: "Water Brook · 8PM GMT" },
  { icon: "🙏", label: "Prayer Surge — Daily", value: "Online · 9PM GMT" },
];

export default function ServiceStrip() {
  return (
    <div className="bg-[#C9A84C]">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/15 divide-y md:divide-y-0">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 px-6 py-6 hover:bg-black/10 transition-colors duration-200"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                {item.label}
              </p>
              <p className="text-sm font-bold text-black">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
