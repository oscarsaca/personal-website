import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tagline-middle',
  templateUrl: './tagline-middle.component.html',
  styleUrls: ['./tagline-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineMiddleComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
}
