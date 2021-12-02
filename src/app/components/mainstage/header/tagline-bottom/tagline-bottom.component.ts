import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tagline-bottom',
  templateUrl: './tagline-bottom.component.html',
  styleUrls: ['./tagline-bottom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineBottomComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
}
