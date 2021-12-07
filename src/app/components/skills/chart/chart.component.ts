import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('SkillsChart') chart!: ElementRef;
  @HostListener('window:resize', ['$event'])
  screenWidth!: number;

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.getChart();
  }

  getChart() {
    // desktop
    if (this.screenWidth > 1024) this.chartService.desktopChart(this.chart);
    // tablet
    if (this.screenWidth <= 1024 && this.screenWidth > 800)
      this.chartService.tabletChart(this.chart);
    // mobile
    if (this.screenWidth <= 800) this.chartService.mobileChart(this.chart);
  }
}
