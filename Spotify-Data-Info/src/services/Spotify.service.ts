import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { Album } from 'src/models/Album.model';
import { Artist } from 'src/models/Artist.model';

import { Data as AlbumsData } from 'src/models/AlbumsData.model';
import { Data as AlbumTracksData } from 'src/models/AlbumTracksData.mode';
import { Data as TrackData } from 'src/models/TracksData.model';
import { Albums } from 'src/models/Albums.model';
import { Data as ArtistsData} from 'src/models/ArtistsData.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private baseURL: string = 'https://api.spotify.com/v1';
  private auth_token: string = 'BQD6plTbaIonheesFseYtUQwXH5c1vea7FDohBDvu7MyKfq2In0W-o87lsj71PF1EbQ1Ub89RHOMnlccSNIFS8IcUTgaE7As4wiI98HygcJktU6pqAbgvkHvcwlxuVVVbIFHDaB6jumHb_I7Hyszgh87E24fN3LRhGaXLcOIaLk';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  public sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl("spotify://" + url);
  }

  public artist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseURL}/artists/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  public artists(query: string): Observable<ArtistsData> {
    return this.http.get<ArtistsData>(`${this.baseURL}/search`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
      params: {
        type: 'artist',
        q: query,
      }
    });
  }

  public artistAlbums(id: string): Observable<Albums> {
    return this.http.get<Albums>(`${this.baseURL}/artists/${id}/albums`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  public tracks(query: string): Observable<TrackData> {
    return this.http.get<TrackData>(`${this.baseURL}/search`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
      params: {
        type: 'track',
        q: query,
      }
    });
  }

  public albums(query: string): Observable<AlbumsData> {
    return this.http.get<AlbumsData>(`${this.baseURL}/search`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
      params: {
        type: 'album',
        q: query,
      }
    });
  }

  public album(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.baseURL}/albums/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  public albumTracks(id: string): Observable<AlbumTracksData> {
    return this.http.get<AlbumTracksData>(`${this.baseURL}/albums/${id}/tracks`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
      params: {
        limit: 50
      }
    });
  }
}
