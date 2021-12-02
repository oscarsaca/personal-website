import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mainstage-header',
  templateUrl: './mainstage-header.component.html',
  styleUrls: ['./mainstage-header.component.scss'],
})
export class MainstageHeaderComponent {
  @HostBinding('class') get addClasses() {
    return `dp:inl-blk rel`;
  }
}
