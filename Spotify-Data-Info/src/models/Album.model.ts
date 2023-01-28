import { Artist } from "./Artist.model";
import { Image } from "./Image.model";

export class Album {
  constructor (
    public album_type: string = "",
    public artists: Artist[] = [],
    public available_markets: string[] = [],
    public external_urls: string = "",
    public href: string = "",
    public id: string = "",
    public images: Image[] = [],
    public name: string = "",
    public release_date: string = "",
    public release_date_precision: string = "",
    public total_tracks: number = 0,
    public type: string = "",
    public uri: string = ""
  ) {}
}
