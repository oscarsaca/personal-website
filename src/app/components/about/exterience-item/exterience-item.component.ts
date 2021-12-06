import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

export interface Skill {
  subTitle: string;
  infoOne: string;
  infoTwo: string;
}

@Component({
  selector: 'app-exterience-item',
  templateUrl: './exterience-item.component.html',
  styleUrls: ['./exterience-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExterienceItemComponent {
  @HostBinding('class') get addClasses() {
    return `dp:blk`;
  }
  @Input() item!: Skill;
}
