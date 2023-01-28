import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/models/Album.model';
import { SpotifyService } from 'src/services/Spotify.service';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss']
})
export class SearchAlbumComponent implements OnInit {
  albums: Album[] = [];
  constructor(
    private spotify: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  search(e: any) {
    var q = e.target.value;
    this.spotify.albums(q).subscribe((data) => {
      this.albums = data.albums.items;
    });
  }

  artistNavigate(id: string) {
    this.router.navigate([`artist/${id}`])
  }

  albumNavigate(id: string) {
    this.router.navigate([`album/${id}`])
  }
}
