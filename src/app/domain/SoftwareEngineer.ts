import {StaticImageData} from "next/image";

interface ISoftwareEngineer {
    getName(): string;
    getTagline(): string;
}

import photo from "@/app/assets/img/bug.webp";

export class SoftwareEngineer implements ISoftwareEngineer {
    private name: string = "Rob Ratcliffe";
    private tagline: string = "Builder & Operator";

    getName(): string {
        return this.name;
    }

    getTagline(): string {
        return this.tagline;
    }

    getPhoto(): StaticImageData {
        return photo;
    }
}