import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export interface Link {
  name: string;
  href: string;
  download?: boolean;
}

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationLinkComponent {
  @Input() link!: Link;

  @HostBinding('class') get addClasses() {
    return `nlf-middle-center`;
  }
}
