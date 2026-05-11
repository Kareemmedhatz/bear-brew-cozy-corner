import cafe from "@/assets/cafe-interior.jpg";
import latte from "@/assets/latte-bear.jpg";
import flatlay from "@/assets/menu-flatlay.jpg";
import pancakes from "@/assets/dessert-pancakes.jpg";
import packaging from "@/assets/packaging.jpg";
import barista from "@/assets/barista.jpg";

const shots = [
  { src: cafe, label: "The Den", span: "md:col-span-2 md:row-span-2" },
  { src: latte, label: "Bear Latte" },
  { src: pancakes, label: "Cocoa Cloud" },
  { src: flatlay, label: "Morning Set", span: "md:col-span-2" },
  { src: packaging, label: "House Beans" },
  { src: barista, label: "Slow Pour" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Gallery</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-cocoa mt-3">A peek inside the den</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Snapshots of warm light, lazy afternoons and bear-shaped foam.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-warm transition-all reveal ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-cream font-display font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
