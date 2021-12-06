import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationLinkComponent } from './components/navigation-link/navigation-link.component';
import { SkipToContentComponent } from './components/skip-to-content/skip-to-content.component';
import { MainstageComponent } from './components/mainstage/mainstage.component';
import { FilmLinesComponent } from './components/mainstage/film-lines/film-lines.component';
import { BackgroundPlanetsComponent } from './components/mainstage/background-planets/background-planets.component';
import { MountainsComponent } from './components/mainstage/mountains/mountains.component';
import { InfoComponent } from './components/mainstage/header/info/info.component';
import { TaglineComponent } from './components/mainstage/header/tagline/tagline.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ChartComponent } from './components/skills/chart/chart.component';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/about/content/content.component';
import { ProfileImageComponent } from './components/about/profile-image/profile-image.component';
import { ExterienceItemComponent } from './components/about/exterience-item/exterience-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
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
    SectionHeaderComponent,
    SkillsComponent,
    ChartComponent,
    AboutComponent,
    ContentComponent,
    ProfileImageComponent,
    ExterienceItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
