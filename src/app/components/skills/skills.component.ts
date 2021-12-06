import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk vp:`;
  }
  @HostBinding('attr.id') id = 'Skills';
}
