import { ArrowRight, ArrowDown, Briefcase, MapPin, Code2, Smartphone } from "lucide-react";
import portrait from "@/assets/hero.png";
import { Reveal } from "./Reveal";

const PARTICLES = [
  { top: "12%", left: "8%", d: 0 },
  { top: "26%", left: "88%", d: 1.4 },
  { top: "62%", left: "4%", d: 2.2 },
  { top: "78%", left: "72%", d: 0.8 },
  { top: "42%", left: "96%", d: 3 },
  { top: "88%", left: "26%", d: 1.9 },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal>
          <p className="eyebrow">Hi, I&apos;m Mike Estrada</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-bold uppercase sm:text-5xl xl:text-6xl">
            I build modern
            <br />
            <span className="text-gradient">web &amp; mobile</span>
            <br />
            experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Web Developer and Mobile App Developer focused on building responsive websites, scalable
            web applications, and high-quality mobile experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 font-display text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-[0_0_34px_-8px_var(--glow)] transition-all hover:shadow-[0_0_44px_-4px_var(--glow)]"
            >
              View my work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://drive.google.com/file/d/1qXBPvoFug9bstNXF3uxhRY1BRHUY57zk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.18em] text-foreground uppercase transition-all hover:border-primary/70 hover:text-primary"
            >
              Download resume
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square">
            <div
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_62%)] opacity-40 blur-2xl animate-pulse-glow"
              aria-hidden="true"
            />
            <div
              className="absolute inset-3 rounded-full border border-primary/45 shadow-[0_0_60px_-10px_var(--glow),inset_0_0_60px_-20px_var(--glow)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow"
              aria-hidden="true"
            >
              <span className="absolute top-1/2 -left-1 size-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
              <span className="absolute -top-1 left-1/2 size-1.5 rounded-full bg-primary/80" />
            </div>
            <div className="absolute inset-6 overflow-hidden rounded-full">
              <img
                src={portrait}
                alt="Mike Estrada, web and mobile app developer"
                width={1024}
                height={1024}
                className="size-full object-cover object-top"
              />
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_45%,oklch(0.16_0.03_264/85%)_100%)]"
                aria-hidden="true"
              />
            </div>

            {PARTICLES.map((p, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{ top: p.top, left: p.left, animationDelay: `${p.d}s` }}
                className="absolute size-1.5 rounded-full bg-primary/70 shadow-[0_0_10px_var(--glow)] animate-float-soft"
              />
            ))}

            <div className="glass absolute -top-2 -left-2 flex items-center gap-2 rounded-xl px-3 py-2 animate-float-soft sm:left-0">
              <Code2 size={14} className="text-primary" />
              <span className="font-display text-[0.6rem] tracking-[0.16em] uppercase">
                Web Apps
              </span>
            </div>
            <div
              className="glass absolute top-1/3 -right-2 flex items-center gap-2 rounded-xl px-3 py-2 animate-float-soft"
              style={{ animationDelay: "1.5s" }}
            >
              <Smartphone size={14} className="text-primary" />
              <span className="font-display text-[0.6rem] tracking-[0.16em] uppercase">
                Mobile Apps
              </span>
            </div>
          </div>

          <div className="glass absolute right-0 -bottom-4 w-56 rounded-2xl p-4 sm:-right-2">
            <div className="flex items-start gap-3">
              <Briefcase size={15} className="mt-0.5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Available for
                </p>
                <p className="font-display text-sm font-bold text-primary uppercase">Freelance</p>
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3 border-t border-border/60 pt-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-display text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Location
                </p>
                <p className="font-display text-xs font-bold uppercase">Philippines / Remote</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
