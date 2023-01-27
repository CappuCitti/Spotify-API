import { Error } from "./Error.model";
import { Tracks } from "./Tracks.model";

export class Data {
    constructor (
        public tracks: Tracks = new Tracks(),
        public error: Error = new Error()
    ) {}
}