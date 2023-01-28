import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { SearchTrackComponent } from './search-track/track.component';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'track', component: SearchTrackComponent},
  {path: 'artist', component: SearchArtistComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album', component: SearchAlbumComponent},
  {path: 'album/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
