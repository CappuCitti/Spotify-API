import { Album } from "./Album.model";
import { Artist } from "./Artist.mode";

export class Track {
  constructor(
    public album: Album = new Album(),
    public artists: Artist[] = [],
    public available_markets: string[],
    public disc_number: number,
    public duration_ms: number,
    public explicit: boolean,
    public href: string,
    public id: string,
    public is_local: boolean,
    public name: string,
    public popularity: number,
    public preview_url: string,
    public track_number: number,
    public type: string,
    public uri: string
  ) {}
}
