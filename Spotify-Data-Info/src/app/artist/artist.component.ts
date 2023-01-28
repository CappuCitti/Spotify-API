import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private spotify: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var id = this.router.url.split('/')[2];
    this.spotify.artist(id).subscribe(data => this.artist = data);
    this.spotify.artistAlbums(id).subscribe(data => this.albums = data.items);
  }

  albumNavigate(id: string) {
    this.router.navigate([`album/${id}`])
  }
}
