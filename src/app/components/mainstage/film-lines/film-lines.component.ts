import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-film-lines',
  templateUrl: './film-lines.component.html',
  styleUrls: ['./film-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmLinesComponent {
  @HostBinding('class') get addClasses() {
    return `bg usr-scl psu-bfr hdn`;
  }
}
