import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk sec vp:`;
  }
  @HostBinding('attr.id') id = 'About';
}
