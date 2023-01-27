import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'search/artist', component: ArtistComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'search/album', component: AlbumComponent},
  {path: 'search/tracks', component: TrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
