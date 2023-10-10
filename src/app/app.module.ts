import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScrollComponent } from './pages/home-scroll/home-scroll.component';
import { VideoPlayerAndTextComponent } from './blocks/video-player-and-text/video-player-and-text.component';
import { BlockFullWidthDirective } from './helpers/block-full-width.directive';
import { NormalTestBlockComponent } from './blocks/normal-test-block/normal-test-block.component';
import { BlockFullHeightDirective } from './helpers/block-full-height.directive';
import { BlockBackgroundLightDirective } from './helpers/block-background-light.directive';
import { BlockSmallPaddingDirective } from './helpers/block-small-padding.directive';
import { TextScrollCssComponent } from './blocks/text-scroll-css/text-scroll-css.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScrollComponent,
    VideoPlayerAndTextComponent,
    BlockFullWidthDirective,
    NormalTestBlockComponent,
    BlockFullHeightDirective,
    BlockBackgroundLightDirective,
    BlockSmallPaddingDirective,
    TextScrollCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
