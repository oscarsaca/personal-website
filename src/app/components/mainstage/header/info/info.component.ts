import { heySVG, oscarSVG, tagline } from './../../../../../animation';
import {
  Component,
  HostBinding,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [heySVG, oscarSVG, tagline],
})
export class InfoComponent implements AfterViewInit {
  title: string = `Hey, I'm Oscar`;
  state: string = 'start';

  @HostBinding('class') get addClasses() {
    return `dp:inl-blk rel`;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'end';
      this.changeDetectorRef.detectChanges();
    });
  }
}
