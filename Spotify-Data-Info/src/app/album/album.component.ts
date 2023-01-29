import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
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
  id: string | undefined = "";

  constructor(
    public spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/album']);
      else {
        this.spotify.album(this.id).subscribe(data => this.album = data);
        this.spotify.albumTracks(this.id).subscribe(data => this.tracks = data.items);
      }
    });
  }
}
