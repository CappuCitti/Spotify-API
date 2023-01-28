import { Album } from "./Album.model";

export class Albums {
    constructor (
        public href: string = "",
        public items: Album[] = [],
        public limit: number = 0,
        public next: string = "",
        public offset: number = 0,
        public previous?: any,
        public total: number = 0,
    ) {}
}