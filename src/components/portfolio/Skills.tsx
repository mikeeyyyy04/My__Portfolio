import { Reveal, useInView } from "./Reveal";

const TOOLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "Flutter",
  "Dart",
  "Firebase",
  "Node.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
];

const SKILLS = [
  { label: "Frontend Development", value: 92 },
  { label: "Responsive Web Design", value: 90 },
  { label: "Mobile App Development", value: 90 },
  { label: "UI/UX Implementation", value: 85 },
  { label: "API Integration", value: 88 },
  { label: "Database Development", value: 82 },
];

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            Tools &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="glass glass-hover rounded-xl px-4 py-3 text-center font-display text-[0.68rem] tracking-[0.14em] uppercase"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Capability</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            Development <span className="text-gradient">Skills</span>
          </h2>
          <div ref={ref} className="mt-9 space-y-7">
            {SKILLS.map((skill, i) => (
              <div key={skill.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[0.7rem] tracking-[0.16em] uppercase">
                    {skill.label}
                  </span>
                  <span className="font-display text-xs font-bold text-primary">
                    {skill.value}%
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-secondary/70">
                  <div
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.label}
                    style={{
                      width: inView ? `${skill.value}%` : "0%",
                      transitionDelay: `${i * 110}ms`,
                    }}
                    className="h-full rounded-full bg-[image:var(--gradient-accent)] shadow-[0_0_14px_-2px_var(--glow)] transition-[width] duration-1000 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
