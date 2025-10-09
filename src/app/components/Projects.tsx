'use client';

import {SoftwareProject} from "@/app/domain/SoftwareProjects";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface ProjectsProps {
    projects: SoftwareProject[];
}


export default function Projects({projects}: ProjectsProps) {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
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
                    <div key={project.id} className="box card">
                        {project.img ? (
                            <Image src={`/assets/img/projects/${project.img}`} alt="Project image" width={400} height={400} />
                        ) : (
                            <div className="card-header">
                                <span className="text-white text-6xl">🚀</span>
                            </div>
                        )}

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
                                {project.github && (
                                    <a href={project.github} target={"_blank"} className="btn-small btn-github">
                                        GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <button
                                        onClick={() => setVideoUrl(project.demo!)}
                                        className="btn-small btn-demo"
                                    >
                                        View Demo
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {videoUrl && (
                <VideoModal
                    videoUrl={videoUrl}
                    onClose={() => setVideoUrl(null)}
                />
            )}
        </section>
    );
}