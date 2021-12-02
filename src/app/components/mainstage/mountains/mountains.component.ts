import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MountainsComponent {
  @HostBinding('class') get addClasses() {
    return `bg usr-scl`;
  }
}
