export interface SoftwareProject {
    id: number;
    title: string;
    img?: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string
}

export class SoftwareProjects {
    private projects = [
        {
            id: 1,
            title: "Portfolio",
            description: "This portfolio!",
            technologies: ["Next.js"],
            github: "https://github.com/rlratcliffe/portfolio",
        },
        {
            id: 2,
            title: "DataSonnet Playground",
            description: "A programming playground to experiment with the DataSonnet transformation language.",
            technologies: ["React", "JavaScript"],
            img: "ds-playground.png"
        }
    ];

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}