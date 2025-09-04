import {StaticImageData} from "next/image";
import photo from "@/app/assets/img/bug.webp";
import {SoftwareProjects, SoftwareProject} from "@/app/domain/SoftwareProjects";

interface ISoftwareEngineer {
    getName(): string;
    getTagline(): string;
}

export class SoftwareEngineer implements ISoftwareEngineer {
    private name: string = "Rob Ratcliffe";
    private tagline: string = "Builder & Operator";
    private projects: SoftwareProject[] = new SoftwareProjects().getProjects();

    getName(): string {
        return this.name;
    }

    getTagline(): string {
        return this.tagline;
    }

    getPhoto(): StaticImageData {
        return photo;
    }

    getProjects(): SoftwareProject[] {
        return this.projects;
    }
}