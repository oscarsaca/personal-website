import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @HostBinding('class') get addClasses() {
    return `dp:inl-blk rel`;
  }
}
