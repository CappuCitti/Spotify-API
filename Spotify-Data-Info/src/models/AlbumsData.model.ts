import { Albums } from "./Albums.model";

export class Data {
    constructor (
        public albums: Albums = new Albums()
    ) {}
}