import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationLinkComponent } from './components/navigation-link/navigation-link.component';
import { SkipToContentComponent } from './components/skip-to-content/skip-to-content.component';
import { MainstageComponent } from './components/mainstage/mainstage/mainstage.component';
import { FilmLinesComponent } from './components/mainstage/film-lines/film-lines.component';
import { BackgroundPlanetsComponent } from './components/mainstage/background-planets/background-planets.component';
import { MountainsComponent } from './components/mainstage/mountains/mountains.component';
import { MainstageHeaderComponent } from './components/mainstage/mainstage-header/mainstage-header.component';
import { TaglineTopComponent } from './components/mainstage/header/tagline-top/tagline-top.component';
import { TaglineMiddleComponent } from './components/mainstage/header/tagline-middle/tagline-middle.component';
import { TaglineBottomComponent } from './components/mainstage/header/tagline-bottom/tagline-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationLinkComponent,
    SkipToContentComponent,
    MainstageComponent,
    FilmLinesComponent,
    BackgroundPlanetsComponent,
    MountainsComponent,
    MainstageHeaderComponent,
    TaglineTopComponent,
    TaglineMiddleComponent,
    TaglineBottomComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
