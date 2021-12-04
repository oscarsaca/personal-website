import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { SocialLink } from '../social-link/social-link.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }

  socialLinks: SocialLink[] = [
    {
      uniqueID: 'Contact',
      href: 'mailto:oscarsaca88@gmail.com',
      dataTip: "Let's Chat :)",
      svgPath:
        'M0 4.506L36 4.506L36 31.494L0 31.494L0 4.506ZM30.062 7.88L5.937 7.88L17.999 17.549L30.062 7.88ZM3.272 10.015L3.272 28.121L32.726 28.121L32.726 10.015L17.999 21.824L3.272 10.015Z',
      target: '_self',
    },
    {
      uniqueID: 'Linkedin',
      href: 'https://www.linkedin.com/in/oscar-saca-919a8293',
      dataTip: 'Linkedin',
      svgPath:
        'M4.286 1.688C1.695 1.688 0 3.347 0 5.536C0 7.684 1.647 9.378 4.187 9.378L4.238 9.378C6.875 9.378 8.517 7.677 8.517 5.529C8.467 3.342 6.875 1.688 4.286 1.688ZM27.096 11.936C23.076 11.936 20.557 14.106 20.091 15.627L20.091 12.149L12.208 12.149C12.311 13.996 12.208 34.312 12.208 34.312L20.091 34.312L20.091 22.319C20.091 21.653 20.06 20.986 20.262 20.508C20.805 19.176 21.969 17.792 24.063 17.792C26.799 17.792 28.044 19.842 28.044 22.843L28.044 34.312L36 34.312L36 21.989C36 15.125 32.082 11.936 27.096 11.936ZM0.908 12.15L0.908 34.312L7.924 34.312L7.924 12.15L0.908 12.15Z',
      target: '_blank',
    },
    {
      uniqueID: 'GitHub',
      href: 'https://github.com/oscarsaca',
      dataTip: 'GitHub',
      svgPath:
        'M18 0C8.061 0 0 8.061 0 18c0 7.956 5.157 14.699 12.312 17.079c0.9 0.165 1.227-0.39 1.227-0.865c0-0.429-0.018-1.849-0.025-3.35c-5.006 1.086-6.064-2.123-6.064-2.123c-0.819-2.078-1.997-2.633-1.997-2.633c-1.635-1.118 0.123-1.093 0.123-1.093c1.807 0.127 2.76 1.856 2.76 1.856c1.607 2.753 4.215 1.955 5.238 1.494c0.165-1.16 0.629-1.955 1.143-2.405c-3.997-0.454-8.198-2-8.198-8.898c0-1.965 0.703-3.572 1.853-4.83c-0.183-0.457-0.802-2.289 0.179-4.767c0 0 1.508-0.485 4.95 1.846c1.434-0.401 2.974-0.598 4.504-0.605c1.529 0.007 3.069 0.207 4.507 0.608c3.435-2.331 4.946-1.846 4.946-1.846c0.984 2.479 0.366 4.31 0.179 4.764c1.153 1.259 1.849 2.865 1.849 4.83c0 6.915-4.212 8.438-8.22 8.884c0.647 0.559 1.223 1.652 1.223 3.333c0 2.405-0.025 4.345-0.025 4.939c0 0.478 0.327 1.041 1.241 0.865C30.846 32.695 36 25.949 36 18C36 8.061 27.942 0 18 0z',
      target: '_blank',
    },
    {
      uniqueID: 'Instagram',
      href: 'https://www.instagram.com/oscarsaca/',
      dataTip: 'Instagram',
      svgPath:
        'M25.283 35.997L10.737 35.997C4.816 35.989 0.018 31.191 0.01 25.271L0.01 10.723C0.018 4.802 4.816 0.006 10.737-0.002L25.283-0.002C31.204 0.006 36.001 4.802 36.01 10.723L36.01 25.271C36.001 31.191 31.204 35.989 25.283 35.997ZM32.385 10.723C32.388 6.802 29.213 3.62 25.291 3.615C25.289 3.615 25.287 3.615 25.283 3.615L10.737 3.615C6.815 3.615 3.636 6.794 3.636 10.715L3.636 25.271C3.636 29.192 6.815 32.371 10.737 32.371L25.283 32.371C29.205 32.371 32.385 29.192 32.385 25.271L32.385 10.723ZM27.342 10.987C26.093 10.987 25.08 9.975 25.08 8.726C25.08 7.477 26.093 6.464 27.342 6.464C28.59 6.464 29.603 7.477 29.603 8.726C29.603 9.975 28.59 10.987 27.342 10.987ZM18.01 27.305C12.869 27.305 8.701 23.138 8.701 17.997C8.701 12.856 12.869 8.688 18.01 8.688C23.151 8.688 27.319 12.856 27.319 17.997C27.311 23.135 23.148 27.298 18.01 27.305ZM18.01 12.306C14.867 12.306 12.319 14.854 12.319 17.997C12.319 21.14 14.867 23.688 18.01 23.688C21.153 23.688 23.701 21.14 23.701 17.997C23.701 14.854 21.153 12.306 18.01 12.306Z',
      target: '_blank',
    },
  ];
}
