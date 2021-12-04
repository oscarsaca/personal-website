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
import { InfoComponent } from './components/mainstage/header/info/info.component';
import { TaglineComponent } from './components/mainstage/header/tagline/tagline.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { SocialLinkComponent } from './components/footer/social-link/social-link.component';

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
    InfoComponent,
    TaglineComponent,
    FooterComponent,
    CopyrightComponent,
    SocialLinkComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
