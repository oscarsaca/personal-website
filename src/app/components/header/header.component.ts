import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Link } from 'src/app/components/navigation-link/navigation-link.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links: Link[] = [
    {
      name: 'skills',
      href: '#Skills',
    },
    {
      name: 'about',
      href: '#About',
    },
    {
      name: 'contact',
      href: '#Contact',
    },
  ];

  @HostBinding('class') get addClasses() {
    return `dp:blk nlf-middle-between`;
  }
}
