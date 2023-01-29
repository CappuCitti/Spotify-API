import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Album } from 'src/models/Album.model';
import { Artist } from 'src/models/Artist.model';
import { SpotifyService } from 'src/services/Spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: Artist = new Artist();
  albums: Album[] = [];
  id: string | undefined = "";

  constructor(
    private spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/artist']);
      else {
        this.spotify.artist(this.id).subscribe(data => this.artist = data);
        this.spotify.artistAlbums(this.id).subscribe(data => this.albums = data.items);
      }
    });
  }
}
