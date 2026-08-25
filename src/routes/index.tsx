import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechnologyStrip } from "@/components/portfolio/TechnologyStrip";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Skills } from "@/components/portfolio/Skills";
import { DevelopmentProcess } from "@/components/portfolio/DevelopmentProcess";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Mike Estrada — Web & Mobile App Developer";
const description =
  "Portfolio of Mike Estrada, a web developer and mobile app developer building responsive websites, scalable web apps, and high-quality mobile experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <TechnologyStrip />
        </div>
        <FeaturedProjects />
        <Skills />
        <DevelopmentProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
