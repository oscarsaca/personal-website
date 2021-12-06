import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
}
