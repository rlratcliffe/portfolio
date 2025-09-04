import About from "./components/About";
import Projects from "./components/Projects";
import {SoftwareEngineer} from "@/app/domain/SoftwareEngineer";
import Image from "next/image";

export default function Home() {

  const softwareEngineer = new SoftwareEngineer();

  return (
    <div className="font-sans min-h-screen">
      <main className="w-full">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi! I'm&nbsp;
                <span className="gradient-text">
                  {softwareEngineer.getName()}
                </span>
              </h1>
              <p className="hero-subtitle">
                {softwareEngineer.getTagline()}
              </p>
              <div className="nav-buttons">
                <a href="#about" className="btn-primary">
                  About Me
                </a>
                <a href="#projects" className="btn-secondary">
                  View Projects
                </a>
              </div>
            </div>
            <div className="hero-image">
              <Image src={softwareEngineer.getPhoto()} alt="Profile picture" width={400} height={400} />
            </div>
          </div>
        </section>

        <About />
        <Projects />
      </main>
    </div>
  );
}
