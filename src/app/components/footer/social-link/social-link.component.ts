import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface SocialLink {
  uniqueID: string;
  href: string;
  dataTip: string;
  svgPath: string;
  target: string;
}

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinkComponent {
  @Input() link!: SocialLink;
}
