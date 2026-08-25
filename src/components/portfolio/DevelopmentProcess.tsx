import { Search, ClipboardList, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    text: "Understand the client's goals, users, requirements, and project scope.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Plan",
    text: "Define the features, architecture, technology stack, and development roadmap.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Design",
    text: "Create clean interfaces, responsive layouts, and intuitive user experiences.",
  },
  {
    num: "04",
    icon: Code2,
    title: "Develop",
    text: "Build the web or mobile application with clean, maintainable code.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Deliver",
    text: "Test, optimize, deploy, and provide final improvements.",
  },
];

export function DevelopmentProcess() {
  return (
    <section id="process" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How I work</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            My development <span className="text-gradient">Process</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-8 left-8 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 left-8 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:hidden"
          />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 110} as="li">
                <div className="relative flex gap-6 lg:block">
                  <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_36px_-10px_var(--glow)]">
                    <step.icon size={22} />
                  </span>
                  <div className="lg:mt-6">
                    <p className="font-display text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                      Step {step.num}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:pr-4">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
