import Projects from "./components/Projects";
import {SoftwareEngineer} from "@/app/domain/SoftwareEngineer";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner";

export default function Home() {

  const projects = [
        {
          id: 1,
          title: "Portfolio",
          description: "This portfolio, which is being iteratively improved!",
          technologies: ["React", "Next.js"],
          github: "https://github.com/rlratcliffe/portfolio",
        },
        {
          id: 2,
          title: "DataSonnet Playground",
          description: "Built early in my career, this is a programming playground to experiment with the DataSonnet transformation language.",
          technologies: ["React", "JavaScript"],
          img: "ds-playground.png",
          demo: "https://www.youtube.com/embed/zFB5HYyExCY?si=OfpBJNYJpP2fbphU"
        }
  ];

  const softwareEngineer = new SoftwareEngineer(
      "Rob Ratcliffe",
      "Builder & Operator",
      projects
  );

  return (
    <div className="font-sans min-h-screen">
      <main className="w-full">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi! I&apos;m&nbsp;
                  <span className="name">{softwareEngineer.getName()}</span>
              </h1>
              <p className="hero-subtitle">
                {softwareEngineer.getTagline()}
              </p>
            </div>
            <div className="hero-image">
              <Image priority={true} src={"/assets/img/" + softwareEngineer.getPhoto()} alt="Profile picture" width={300} height={300} quality={100} />
            </div>
          </div>
        </section>

        <Projects projects={softwareEngineer.getProjects()} />
      </main>
    <CookieBanner />
    </div>
  );
}
