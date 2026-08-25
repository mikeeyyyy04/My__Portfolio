import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The mobile app was delivered on schedule and the interface was easy for our staff to use from day one.",
    name: "Sample Client",
    role: "Clinic Administrator — Appointment App",
    initials: "SC",
  },
  {
    quote:
      "Clear communication throughout the build, with a responsive website that performs well on every device.",
    name: "Sample Client",
    role: "Small Business Owner — Web Project",
    initials: "SB",
  },
  {
    quote:
      "Clean, maintainable code and thoughtful UI decisions made handover to our team straightforward.",
    name: "Sample Client",
    role: "Project Lead — Full Stack Build",
    initials: "PL",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Sample feedback</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            What clients <span className="text-gradient">Say</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Placeholder testimonials shown as sample content — real client feedback will
            replace these.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="glass glass-hover h-full rounded-3xl p-7">
                <Quote size={22} className="text-primary" />
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/10 font-display text-xs font-bold text-primary">
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
