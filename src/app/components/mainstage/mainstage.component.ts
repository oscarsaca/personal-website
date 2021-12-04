import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mainstage',
  templateUrl: './mainstage.component.html',
  styleUrls: ['./mainstage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainstageComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk ta:c rel hdn fun-cursor`;
  }
}
