import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracks } from 'src/models/Tracks.model';
import { Data } from 'src/models/TracksData.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  baseURL: string = 'https://api.spotify.com/v1';
  auth_token: string ='BQA3YZKU-4NRXZPgUeS9Wu18kXJfq7EKkBKXkqa8gsHAoTU8O_UR3677Z4tFKSP8jcJb8uIk23bRWhIYZBI5TOZ1QWsfU70s44U_So80qmNpn9Ib4N6QqwtEALRtQb8gl6zChxNdsY8NwE7NUhZj_oZUa2_-uHgiTEcwEPRnHGE';

  constructor(private http: HttpClient) {}

  public artist(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/artists/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
    });
  }

  public tracks(query: string): Observable<Data> {
    return this.http.get<Data>(`${this.baseURL}/search`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
      params: {
        type: 'track',
        q: query,
      },
    });
  }
}
