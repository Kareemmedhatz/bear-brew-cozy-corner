import bears from "@/assets/bears-mascot.png";
import { ArrowRight, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-hero">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-honey/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-caramel/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-secondary/70 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cocoa">
            <Coffee className="w-3.5 h-3.5" /> Roasted with love since 2018
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-cocoa text-balance">
            A warm hug, <br />
            <span className="italic text-accent">brewed</span> just for you.
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Three bears. One tiny cabin café. Endless cups of small-batch coffee, honey-glazed treats and the coziest corner in town.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 bg-cocoa text-cream px-7 py-4 rounded-full font-semibold shadow-warm hover:shadow-cup transition-all hover:scale-[1.03]"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cream/70 backdrop-blur border-2 border-cocoa/15 text-cocoa px-7 py-4 rounded-full font-semibold hover:bg-cream transition-all hover:scale-[1.03]"
            >
              Find the Den
            </a>
          </div>

          <div className="flex gap-8 pt-4">
            {[
              { n: "12k+", l: "Cozy mornings" },
              { n: "30+", l: "Drinks crafted" },
              { n: "4.9★", l: "Bear-approved" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-extrabold text-cocoa">{s.n}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cream rounded-[3rem] rotate-3 shadow-warm" />
          <div className="relative bg-gradient-warm rounded-[3rem] p-8 sm:p-12 shadow-cup">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3">
              <span className="steam" style={{ animationDelay: "0s" }} />
              <span className="steam" style={{ animationDelay: "0.6s" }} />
              <span className="steam" style={{ animationDelay: "1.2s" }} />
            </div>
            <img
              src={bears}
              alt="Three friendly bears holding coffee cups"
              className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-cream rounded-2xl px-4 py-3 shadow-soft animate-wiggle">
              <p className="text-xs text-muted-foreground">Today's brew</p>
              <p className="font-display font-bold text-cocoa">Honey Oat Latte</p>
            </div>
            <div className="absolute top-8 right-6 bg-accent text-accent-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center font-display font-bold rotate-12 shadow-soft hover:rotate-0 transition-transform">
              <span className="text-[10px] uppercase">From</span>
              <span className="text-xl">$3.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
