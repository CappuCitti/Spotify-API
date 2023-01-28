import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SearchTrackComponent } from './search-track/track.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    SearchTrackComponent,
    SearchArtistComponent,
    SearchAlbumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
