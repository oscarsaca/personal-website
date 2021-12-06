import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Skill } from './exterience-item/exterience-item.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk sec vp:`;
  }
  @HostBinding('attr.id') id = 'About';

  experience: Skill[] = [
    {
      subTitle: 'Software Engineer',
      infoOne: 'Scorpion',
      infoTwo: 'November 2021 - Present',
    },
    {
      subTitle: 'Senior Product Developer',
      infoOne: 'Scorpion',
      infoTwo: 'October 2017 - October 2021',
    },
    {
      subTitle: 'Senior Web Developer',
      infoOne: 'Scorpion',
      infoTwo: 'January 2017 - October 2017',
    },
    {
      subTitle: 'Front-End Developer',
      infoOne: 'Scorpion',
      infoTwo: 'May 2015 - January 2017',
    },
  ];

  education: Skill[] = [
    {
      subTitle: 'Brandman University',
      infoOne: 'Bachelor of Science - BS, Computing Technology',
      infoTwo: '',
    },
    {
      subTitle: 'Chapman University',
      infoOne: 'Bachelor of Arts - BA, Criminal Justice and Corrections',
      infoTwo: '',
    },
    {
      subTitle: 'College of the Canyons',
      infoOne: 'Associate of Arts - AS, Transfer Studies',
      infoTwo: '',
    },
  ];

  languages: Skill[] = [
    {
      subTitle: '',
      infoOne: 'English',
      infoTwo: 'Spanish',
    },
  ];
}
