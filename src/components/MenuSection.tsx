import { useState } from "react";
import { menu } from "@/data/menu";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Menu</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-cocoa mt-3 text-balance">
            Brewed slow. Served with a smile.
          </h2>
          <p className="text-muted-foreground mt-4">
            Every cup is hand-crafted by our bears using ethically-sourced beans and obscene amounts of love.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10 reveal">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
                active === c.id
                  ? "bg-cocoa text-cream shadow-warm"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              <span className="mr-2">{c.emoji}</span>
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {cat.items.map((item, i) => (
            <article
              key={item.name}
              className="group bg-card rounded-3xl p-7 shadow-soft hover:shadow-warm transition-all hover:-translate-y-1 border border-border/40 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-xl font-bold text-cocoa">{item.name}</h3>
                    {item.tag && (
                      <span className="text-[10px] bg-accent/15 text-accent px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
                <span className="font-display text-2xl font-extrabold text-accent shrink-0">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
