import bears from "@/assets/bears-mascot.png";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={bears} alt="Bear Brew" className="w-14 h-14" />
            <div>
              <p className="font-display text-2xl font-extrabold">Bear Brew</p>
              <p className="text-xs tracking-[0.25em] uppercase text-cream/60">Coffee &amp; Chill</p>
            </div>
          </div>
          <p className="mt-5 text-cream/70 max-w-sm leading-relaxed">
            A tiny den serving big, warm cups since 2018. Come for the coffee — stay for the bears.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Visit</h4>
          <ul className="space-y-2 text-cream/70 text-sm">
            <li>42 Honeybark Lane</li>
            <li>Pinewood District</li>
            <li>Open daily 7am – 10pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["Menu", "Our Story", "Gallery", "Reservations"].map((l) => (
              <li key={l}>
                <a href="#" className="text-cream/70 hover:text-honey transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Bear Brew Coffee Co. Brewed with love.</p>
        <p>Crafted for cozy humans 🐻</p>
      </div>
    </footer>
  );
}
