import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skip-to-content',
  templateUrl: './skip-to-content.component.html',
  styleUrls: ['./skip-to-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkipToContentComponent {
  buttonText: string = 'Skip To Content?';
}
