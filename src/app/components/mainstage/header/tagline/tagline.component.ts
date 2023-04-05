import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tagline',
  templateUrl: './tagline.component.html',
  styleUrls: ['./tagline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineComponent {
  taglineTop: string = `& I build things on `;
  taglineBottom: string = `the interwebs.`;

  @HostBinding('class') get addClasses() {
    return `dp:blk usr-scl`;
  }
}
