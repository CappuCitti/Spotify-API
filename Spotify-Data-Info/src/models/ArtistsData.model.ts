
import { Artists } from "./Artists.model";

export class Data {
    constructor (
        public artists: Artists = new Artists(),
    ) {}
}