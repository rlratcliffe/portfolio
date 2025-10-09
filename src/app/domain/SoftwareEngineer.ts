interface ISoftwareEngineer {
    getName(): string;
    getTagline(): string;
}

export interface ISoftwareProject {
    id: number;
    title: string;
    img?: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string
}

export class SoftwareEngineer implements ISoftwareEngineer {
    private name: string = "";
    private tagline: string = "";
    private projects: ISoftwareProject[] = [];

    constructor(name: string, tagline: string, projects: ISoftwareProject[]) {
        this.name = name;
        this.tagline = tagline;
        this.validateProjects(projects);
        this.projects = projects;
    }

    getName(): string {
        return this.name;
    }

    getTagline(): string {
        return this.tagline;
    }

    getPhoto(): string {
        return "rob-300.webp";
    }

    getProjects(): ISoftwareProject[] {
        return this.projects;
    }

    private validateProjects(projects: ISoftwareProject[]) {
        return projects.forEach(project => {
            if (project.demo && !project.demo.includes('embed')) {
                throw new Error(`Project "${project.title}" has a demo URL that does not contain "embed". Demo URLs must be embed URLs.`);
            }
        });
    }
}