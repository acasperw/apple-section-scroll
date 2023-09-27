import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScrollComponent } from './pages/home-scroll/home-scroll.component';
import { VideoPlayerAndTextComponent } from './blocks/video-player-and-text/video-player-and-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScrollComponent,
    VideoPlayerAndTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
