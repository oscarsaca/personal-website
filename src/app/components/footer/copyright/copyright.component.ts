import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent {
  @Input() textTop!: string;
  @Input() textBottom!: string;
}
