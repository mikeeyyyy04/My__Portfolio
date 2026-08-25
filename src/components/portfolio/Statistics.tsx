import { FolderGit2, Smartphone, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: FolderGit2, value: "10+", label: "Projects Completed" },
  { icon: Smartphone, value: "5+", label: "Web & Mobile Apps" },
  { icon: Layers, value: "10+", label: "Technologies Used" },
  { icon: ShieldCheck, value: "100%", label: "Commitment to Quality" },
];

export function Statistics() {
  return (
    <section aria-label="Impact by the numbers" className="pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Impact by the numbers</p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="glass glass-hover h-full rounded-2xl p-7">
                <stat.icon size={20} className="text-primary" />
                <p className="mt-6 font-display text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-2 font-display text-[0.64rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
