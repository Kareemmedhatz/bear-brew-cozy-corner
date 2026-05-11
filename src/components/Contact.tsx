import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "🐻 Reservation requested!",
        description: "We'll send a confirmation to your email within an hour.",
      });
    }, 900);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-warm">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div className="space-y-8 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Visit us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-cocoa mt-3 text-balance">
              Come in. <span className="italic text-accent">Stay a while.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Tucked between an old bookshop and a flower stand. Look for the bears in the window.
            </p>
          </div>

          <ul className="space-y-5">
            {[
              { i: MapPin, t: "Address", d: "42 Honeybark Lane, Pinewood District" },
              { i: Clock, t: "Hours", d: "Mon–Fri 7am–9pm · Weekends 8am–10pm" },
              { i: Phone, t: "Phone", d: "(555) 012-BEAR" },
              { i: Mail, t: "Email", d: "hello@bearbrew.cafe" },
            ].map(({ i: Icon, t, d }) => (
              <li key={t} className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-cocoa text-cream flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t}</p>
                  <p className="font-display font-bold text-cocoa text-lg">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-soft border-4 border-cream aspect-[16/10] bg-secondary">
            <div className="absolute inset-0" style={{
              backgroundImage:
                "linear-gradient(120deg, hsl(var(--cream)) 0%, hsl(32 35% 80%) 50%, hsl(var(--cream)) 100%), repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--border)) 20px, hsl(var(--border)) 21px)",
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-cocoa text-cream px-5 py-3 rounded-full shadow-warm flex items-center gap-2 animate-float">
                <MapPin className="w-4 h-4" /> You'll find us here
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-cream rounded-[2rem] p-8 sm:p-10 shadow-cup space-y-5 reveal h-fit"
        >
          <h3 className="font-display text-2xl font-extrabold text-cocoa">Reserve a cozy table</h3>
          <p className="text-sm text-muted-foreground">Tell us when, and we'll save your favorite corner.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Date" name="date" type="date" required />
            <Field label="Guests" name="guests" type="number" defaultValue={2} min={1} max={20} required />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Any allergies or special wishes?"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cocoa text-cream font-semibold py-4 rounded-full hover:bg-accent transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-warm disabled:opacity-60"
          >
            {loading ? "Sending..." : (<>Send request <Send className="w-4 h-4" /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        {...props}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all"
      />
    </div>
  );
}
