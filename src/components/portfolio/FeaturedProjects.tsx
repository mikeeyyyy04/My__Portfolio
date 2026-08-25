import { ArrowUpRight, ArrowRight } from "lucide-react";
import jeepguide from "@/assets/project-jeepguide.jpg";
import appointify from "@/assets/project-appointify.jpg";
import sportify from "@/assets/project-sportify.jpg";
import { Reveal } from "./Reveal";

const PROJECTS = [
  {
    image: jeepguide,
    category: "Mobile App / Transport",
    name: "Sikatuna JeepGuide",
    url: "https://drive.google.com/uc?export=view&id=10WGcmcXMreXFvSp3-6PaBd9fHnrc9gj5",
    description:
      "A mobile application for viewing jeepney schedules and transportation information between Sikatuna and Tagbilaran.",
  },
  {
    image: appointify,
    category: "Mobile App / Healthcare",
    name: "Appointify",
    url: "https://drive.google.com/file/d/1G4i-InpTCD_SaTcU5nNFCYmAUsSUBdQi/view?usp=sharing",
    description:
      "A mobile appointment tracking application designed to help clinics organize appointments and improve scheduling.",
  },
  {
    image: sportify,
    category: "Mobile App / Machine Learning",
    name: "Sportify",
    description:
      "A sports equipment scanning application using machine learning for equipment recognition.",
  },
];

export function FeaturedProjects() {
  return (
    <section id="work" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Selected Builds</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 120}>
              <article className="glass glass-hover group relative h-full overflow-hidden rounded-3xl">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name}`}
                    className="absolute inset-0 z-10"
                  />
                )}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} interface preview`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-[0.6rem] tracking-[0.22em] text-primary uppercase">
                    {project.category}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold">{project.name}</h3>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary/30 text-primary transition-all group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_22px_-4px_var(--glow)]">
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.18em] uppercase transition-all hover:border-primary/70 hover:text-primary"
          >
            View all projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
