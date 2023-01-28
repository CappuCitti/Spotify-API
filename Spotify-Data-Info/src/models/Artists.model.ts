import { Artist } from "./Artist.model";

export class Artists {
  constructor(
    public href: string = "",
    public items: Artist[] = [],
    public limit: number = 0,
    public next: string = "",
    public offset: number = 0,
    public previous?: any,
    public total: number = 0,
  ) { }

}