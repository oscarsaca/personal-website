import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Link } from 'src/app/components/navigation-link/navigation-link.component';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MastheadComponent {
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
    return `dp:blk nlf-middle-between ctr-800`;
  }
}
