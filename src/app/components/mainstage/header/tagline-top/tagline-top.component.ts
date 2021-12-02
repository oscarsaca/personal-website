import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tagline-top',
  templateUrl: './tagline-top.component.html',
  styleUrls: ['./tagline-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineTopComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
}
