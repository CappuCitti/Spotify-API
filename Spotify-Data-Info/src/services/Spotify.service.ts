import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { Album } from 'src/models/Album.model';
import { Albums } from 'src/models/Albums.model';
import { Artist } from 'src/models/Artist.model';

import { Data as AlbumsData } from 'src/models/AlbumsData.model';
import { Data as AlbumTracksData } from 'src/models/AlbumTracksData.mode';
import { Data as TrackData } from 'src/models/TracksData.model';
import { Data as ArtistsData} from 'src/models/ArtistsData.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private baseURL: string = 'https://api.spotify.com/v1';
  private auth_token: string = environment.auth_token;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  /**
   * Rende il protollo di spotify un URL sicuro per il sito
   * @param {string} params - Parametri
   */
  public sanitize(params: string) {
    return this.sanitizer.bypassSecurityTrustUrl("spotify://" + params);
  }

  /**
   * Restituisce tutti gli artisti coerenti con il termine di ricerca dato
   * @param {string} query - Termine di ricerca
   * @returns Observable<ArtistsData>
   */
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

  /**
   * Restituisce un osservabile con le informazioni dell'artista dato il suo ID
   * @param {string} id - ID dell'artista 
   * @returns Observable<Artist>
   */
  public artist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseURL}/artists/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  /**
   * Restituisce un osservabile con gli album dato l'ID di un artista
   * @param {string} id - ID dell'artista
   * @returns Observable<Albums>
   */
  public artistAlbums(id: string): Observable<Albums> {
    return this.http.get<Albums>(`${this.baseURL}/artists/${id}/albums`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  /**
   * Restituisce tutti i brani coerenti con il termine di ricerca dato
   * @param {string} query - Termine di ricerca
   * @returns Observable<TrackData>
   */
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

  /**
   * Restituisce tutti gli album coerenti con il termine di ricerca dato
   * @param {string} query - Termine di ricerca
   * @returns Observable<AlbumsData>
   */
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

  /**
   * Restituisce un osservabile con le informazioni dell'album dato il suo ID
   * @param {string} id - ID dell'album
   * @returns Observable<Album>
   */
  public album(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.baseURL}/albums/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }
    });
  }

  /**
   * Restituisce i brani di un album dato il suo ID
   * @param {string} id - ID dell'album
   * @returns Observable<AlbumTracksData>
   */
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
