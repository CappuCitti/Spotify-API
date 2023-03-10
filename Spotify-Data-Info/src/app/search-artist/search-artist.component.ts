import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/models/Artist.model';
import { SpotifyService } from 'src/services/Spotify.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss']
})
export class SearchArtistComponent {
  artists: Artist[] = [];
  constructor(
    public spotify: SpotifyService,
    private router: Router
  ) { }

  search(e: any) {
    var q = e.target.value;
    this.spotify.artists(q).subscribe(data => this.artists = data.artists.items);
  }
}
