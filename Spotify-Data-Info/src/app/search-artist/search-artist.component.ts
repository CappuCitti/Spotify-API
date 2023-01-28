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
    this.spotify.artists(q).subscribe((data) => {
      console.log(data.artists)
      this.artists = data.artists.items;
    });
  }

  navigate(id: string) {
    this.router.navigate([`artist/${id}`])
  }
}
