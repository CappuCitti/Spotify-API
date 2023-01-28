import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/models/Album.model';
import { Track } from 'src/models/Track.model';
import { SpotifyService } from 'src/services/Spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  album: Album = new Album();
  tracks: Track[] = [];
  constructor(
    public spotify: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var id = this.router.url.split('/')[2];

    this.spotify.album(id).subscribe(data => this.album = data);

    this.spotify.albumTracks(id).subscribe(data => {
      this.tracks = data.items;
      console.log(this.tracks)
    })
  }

  navigate(id: string) {
    this.router.navigate([`artist/${id}`])
  }
}
