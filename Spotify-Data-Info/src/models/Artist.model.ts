import { URLs } from "./ArtistExternalURLs.model";
import { Followers } from "./Followers.model";
import { Image } from "./Image.model";

export class Artist {
  constructor(
    public href: string = "",
    public id: string = "",
    public name: string = "",
    public type: string = "",
    public uri: string = "",
    public genres: string[] = [],
    public images: Image[] = [new Image(), new Image(), new Image()],
    public followers: Followers = new Followers(),
    public popularity: number = 0,
    public external_urls: URLs = new URLs(),
  ) { }
}
