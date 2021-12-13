import { floatUp, drawSVG } from './../../../animation';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [floatUp, drawSVG],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements AfterViewInit {
  logoText: string = 'Oscar Saca';
  state: string = 'start';

  @Input() animate: boolean = false;

  @HostBinding('class') get addClasses() {
    return `nlf-middle`;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'end';
      this.changeDetectorRef.detectChanges();
    });
  }
}
