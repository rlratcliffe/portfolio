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
            demo: "https://youtu.be/zFB5HYyExCY"
        }
    ];

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}