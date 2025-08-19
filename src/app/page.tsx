import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="w-full">
        <section className="hero-section">
          <div className="container-centered">
            <h1 className="hero-title">
              Hi! I'm&nbsp;
              <span className="gradient-text">
                Rob Ratcliffe
              </span>
            </h1>
            <p className="hero-subtitle">
              Insert tagline here
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
        </section>

        <About />
        <Projects />
      </main>
    </div>
  );
}
