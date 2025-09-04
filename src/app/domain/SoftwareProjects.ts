export interface SoftwareProject {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string
}

export class SoftwareProjects {
    private projects = [
        {
            id: 1,
            title: "Example",
            description: "",
            technologies: ["Next.js"],
            github: "#",
            demo: "#"
        }
    ];

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}