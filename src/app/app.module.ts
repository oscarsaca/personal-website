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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationLinkComponent,
    SkipToContentComponent,
    MainstageComponent,
    FilmLinesComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
