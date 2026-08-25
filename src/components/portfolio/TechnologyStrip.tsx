import { Reveal } from "./Reveal";

const TECHS = [
  "Flutter",
  "Dart",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
];

export function TechnologyStrip() {
  return (
    <section aria-label="Technologies I use" className="border-y border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center font-display text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
            Technologies &amp; platforms I work with
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TECHS.map((tech) => (
              <li
                key={tech}
                className="font-display text-sm font-medium tracking-[0.14em] text-muted-foreground/70 uppercase transition-colors hover:text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
