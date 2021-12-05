import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartsService } from 'src/app/services/charts.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('SkillsChart') chart!: ElementRef;
  @HostListener('window:resize', ['$event'])
  screenWidth: any;

  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.onWindowResize();
  }

  onWindowResize() {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 1024) this.chartsService.desktopChart(this.chart);
    if (this.screenWidth <= 1024 && this.screenWidth > 800)
      this.chartsService.tabletChart(this.chart);
    if (this.screenWidth <= 800) this.chartsService.mobileChart(this.chart);
  }
}
