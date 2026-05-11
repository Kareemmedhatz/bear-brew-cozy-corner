const items = ["Small batch", "Bear hugs", "Honey glazed", "Slow roasted", "House baked", "Locally loved", "Stay cozy"];

export default function Marquee() {
  return (
    <div className="bg-cocoa text-cream py-5 overflow-hidden border-y border-cocoa/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display italic text-2xl flex items-center gap-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
