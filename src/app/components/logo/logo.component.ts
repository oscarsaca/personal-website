import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements AfterViewInit {
  @HostBinding('class') get addClasses() {
    return `nlf-middle`;
  }

  logoText = 'Oscar Saca';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.onLoad());
  }

  onLoad(): void {
    this.elementRef.nativeElement.classList.add('animate');
  }
}
