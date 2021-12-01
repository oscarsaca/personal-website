import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements AfterViewInit {
  logoText: string = 'Oscar Saca';

  @Input() animate!: boolean;

  @HostBinding('class') get addClasses() {
    return `nlf-middle`;
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.onLoad());
  }

  onLoad(): void {
    this.animate
      ? this.elementRef.nativeElement.classList.add('animate')
      : this.elementRef.nativeElement.classList.add(`no-animation`);
  }
}
