import { Tracks } from "./Tracks.model";

export class Data {
    constructor (
        public tracks: Tracks = new Tracks()
    ) {}
}