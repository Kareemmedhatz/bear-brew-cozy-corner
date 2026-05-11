import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import bears from "@/assets/bears-mascot.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2 group">
          <img src={bears} alt="Bear Brew bears" className="h-12 w-12 transition-transform group-hover:rotate-[-6deg] group-hover:scale-110" />
          <div className="leading-tight">
            <p className="font-display text-xl font-extrabold text-cocoa">Bear Brew</p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Coffee &amp; Chill</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all hover:scale-105 shadow-soft"
        >
          Reserve a Table
        </a>

        <button
          className="lg:hidden p-2 rounded-full bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-up">
          <ul className="container py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 text-center bg-primary text-primary-foreground py-3 rounded-full font-semibold"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
