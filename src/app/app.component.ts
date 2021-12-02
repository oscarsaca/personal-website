import { Component } from '@angular/core';
import { fadeIn } from 'src/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent {}
