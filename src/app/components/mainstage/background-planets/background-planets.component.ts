import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-background-planets',
  templateUrl: './background-planets.component.html',
  styleUrls: ['./background-planets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundPlanetsComponent {
  @HostBinding('class') get addClasses() {
    return `bg usr-scl psu-bfr psu-aft`;
  }
}
