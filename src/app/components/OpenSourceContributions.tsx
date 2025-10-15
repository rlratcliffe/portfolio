'use client';

import {IOpenSourceContribution} from "@/app/domain/SoftwareEngineer";
import styles from "./OpenSourceContributions.module.css";

interface OpenSourceContributionsProps {
    contributions: IOpenSourceContribution[];
}

export default function OpenSourceContributions({contributions}: OpenSourceContributionsProps) {
    return (
        <section id="open-source" className={`section-container-wide ${styles.section}`}>
            <div className="section-header">
                <h2 className={`section-title ${styles.openSourceTitle}`}>
                    Open Source Contributions
                </h2>
                <div className="section-divider"></div>
            </div>

            <div className="grid-projects">
                {contributions.map((contribution) => (
                    <div key={contribution.id} className="box card">

                        <div className="card-content">
                            <h3 className="card-title">
                                {contribution.title}
                            </h3>
                            <p className="card-description">
                                {contribution.description}
                            </p>

                            <div className="tech-tags">
                                {contribution.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="project-buttons">
                                <a href={contribution.link} target="_blank" rel="noopener noreferrer" className={`btn-small ${styles.contributionLink}`}>
                                    View Contribution
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
