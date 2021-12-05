import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  @Input() title!: string;
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
  @HostBinding('attr.id') id = 'MainContent';
  @HostBinding('attr.tabindex') tabIndex = -1;
}
