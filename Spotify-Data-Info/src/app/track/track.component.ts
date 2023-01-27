import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'src/models/Track.model';
import { Tracks } from 'src/models/Tracks.model';
import { SpotifyService } from 'src/service/Spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  tracks: Track[] = [];
  constructor(private spotify: SpotifyService,
    private router: Router) {}

  ngOnInit(): void {}

  search(e: any) {
    var q = e.target.value;
    this.spotify.tracks(q).subscribe((data) => {
      console.log(data.error)
      this.tracks = data.tracks.items;
    });
  }

  navigate(id: string) {
    this.router.navigate([`artist/${id}`])
  }
}
