import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-top-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackTopTopComponent {
  @ViewChild('toTopBtn') toTopBtn!: ElementRef;
  @ViewChild('path') path!: ElementRef;
  @HostListener('window:scroll', ['$event']) onScroll() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    this.path.nativeElement.style.strokeDashoffset = (1 - scrollPercent) * 307.919;
  }

  get showButton() {
    if (window.scrollY !== 0) return 'vsb';
    return '';
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }
}
