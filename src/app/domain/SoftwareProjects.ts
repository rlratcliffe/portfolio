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
            description: "This portfolio!",
            technologies: ["Next.js"],
            github: "https://github.com/rlratcliffe/portfolio",
            demo: ""
        },
        {
            id: 2,
            title: "DataSonnet Playground",
            description: "A programming playground to experiment with the DataSonnet transformation language.",
            technologies: ["React", "JavaScript"],
            github: "",
            demo: "",
            img: "ds-playground.png"
        }
    ];

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}