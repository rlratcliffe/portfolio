import {SoftwareProject} from "@/app/domain/SoftwareProjects";

interface ProjectsProps {
    projects: SoftwareProject[];
}


export default function Projects({projects}: ProjectsProps) {
    return (
        <section id="projects" className="section-container-wide">
            <div className="section-header">
                <h2 className="section-title">
                    Projects
                </h2>
                <div className="section-divider"></div>
            </div>

            <div className="grid-projects">
                {projects.map((project) => (
                    <div key={project.id} className="card">
                        <div className="card-header">
                            <span className="text-white text-6xl">🚀</span>
                        </div>

                        <div className="card-content">
                            <h3 className="card-title">
                                {project.title}
                            </h3>
                            <p className="card-description">
                                {project.description}
                            </p>

                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="project-buttons">
                                <a href={project.github} target={"_blank"} className="btn-small btn-github">
                                    GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} className="btn-small btn-demo">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}