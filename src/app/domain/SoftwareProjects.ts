import {StaticImageData} from "next/image";

export interface SoftwareProject {
    id: number;
    title: string;
    img: StaticImageData;
    description: string;
    technologies: string[];
    github: string;
    demo: string
}

export class SoftwareProjects {
    private projects = [
        {
            id: 1,
            title: "Portfolio",
            description: "This portfolio that you are currently viewing is also one of my projects.",
            technologies: ["Next.js"],
            github: "https://github.com/rlratcliffe/portfolio",
            demo: ""
        }
    ];

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}