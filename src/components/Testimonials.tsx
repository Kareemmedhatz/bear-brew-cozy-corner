import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Olivia M.", role: "Regular since '21", text: "The Papa Bear Latte is genuinely the warmest hug in a cup. I rearranged my mornings around this place." },
  { name: "Daniel K.", role: "Local writer", text: "It's the kind of café where time slows down. Bear-foam latte art still makes me grin like a kid." },
  { name: "Sofía R.", role: "First-timer", text: "Walked in for an espresso, stayed three hours. The cinnamon cold brew is otherworldly." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cocoa text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-honey font-semibold">Bear-approved</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 text-balance">
            Kind words from kind humans
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-cream/[0.06] backdrop-blur border border-cream/10 rounded-3xl p-7 hover:bg-cream/[0.1] hover:-translate-y-2 transition-all reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-honey mb-4" />
              <p className="leading-relaxed text-cream/90">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold">{r.name}</p>
                  <p className="text-xs text-cream/60">{r.role}</p>
                </div>
                <div className="flex gap-0.5 text-honey">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
