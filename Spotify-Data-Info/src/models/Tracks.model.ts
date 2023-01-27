import { Track } from "./Track.model";

export class Tracks {
    constructor (
        public href: string = "",
        public items: Track[] = [],
        public limit: number = 0,
        public next: string = "",
        public offset: number = 0,
        public previous?: any,
        public total: number = 0,
    ) {}
}