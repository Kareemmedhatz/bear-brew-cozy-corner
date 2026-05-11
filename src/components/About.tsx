import packaging from "@/assets/packaging.jpg";
import barista from "@/assets/barista.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-warm overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal">
          <img
            src={barista}
            alt="Barista pouring milk"
            loading="lazy"
            className="rounded-[2.5rem] shadow-cup w-full object-cover aspect-[4/5]"
          />
          <img
            src={packaging}
            alt="Bear Brew packaging"
            loading="lazy"
            className="absolute -bottom-8 -right-4 sm:-right-12 w-44 sm:w-56 rounded-3xl shadow-warm rotate-6 hover:rotate-0 transition-transform duration-500 border-4 border-cream"
          />
        </div>

        <div className="space-y-6 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our story</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-cocoa text-balance leading-tight">
            Three bears, one tiny cabin, a whole lot of cozy.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bear Brew started in 2018 when Papa, Mama and Baby Bear opened a wood-paneled coffee corner on a rainy afternoon. We roast in micro-batches, bake every morning, and treat every guest like family wandering in from the cold.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { t: "Direct trade beans", d: "Sourced from small farms we visit every season." },
              { t: "Daily fresh bakes", d: "Croissants, cookies and cakes from our oven." },
              { t: "Plant-friendly", d: "Oat, almond and coconut milk — always free." },
              { t: "Slow café energy", d: "No rush, no judgement. Stay as long as you like." },
            ].map((f) => (
              <li key={f.t} className="bg-cream/70 backdrop-blur p-5 rounded-2xl border border-border/40 hover:bg-cream transition-colors">
                <p className="font-display font-bold text-cocoa">{f.t}</p>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
