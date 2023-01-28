import { Album } from "./Album.model";
import { Artist } from "./Artist.model";

export class Track {
  constructor(
    public album: Album = new Album(),
    public artists: Artist[] = [],
    public available_markets: string[],
    public disc_number: number = 0,
    public duration_ms: number = 0,
    public explicit: boolean = false,
    public href: string = "",
    public id: string = "",
    public is_local: boolean = false,
    public name: string = "",
    public popularity: number = 0,
    public preview_url: string = "",
    public track_number: number = 0,
    public type: string = "",
    public uri: string = "",
  ) {}
}
