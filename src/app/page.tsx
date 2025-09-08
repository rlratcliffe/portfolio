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
                Hi! I&apos;m&nbsp;
                  {softwareEngineer.getName()}
              </h1>
              <p className="hero-subtitle">
                {softwareEngineer.getTagline()}
              </p>
            </div>
            <div className="hero-image">
              <Image src={softwareEngineer.getPhoto()} alt="Profile picture" width={400} height={400} />
            </div>
          </div>
        </section>

        <Projects projects={softwareEngineer.getProjects()} />
      </main>
    </div>
  );
}
