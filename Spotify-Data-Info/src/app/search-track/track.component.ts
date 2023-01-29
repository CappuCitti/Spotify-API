import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'src/models/Track.model';
import { SpotifyService } from 'src/services/Spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class SearchTrackComponent implements OnInit {
  tracks: Track[] = [];
  constructor(
    public spotify: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  search(e: any) {
    var q = e.target.value;
    this.spotify.tracks(q).subscribe(data => this.tracks = data.tracks.items);
  }
}
