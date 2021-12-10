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
  screenWidth!: number;

  @ViewChild('SkillsChart') chart!: ElementRef;
  @HostListener('window:resize', ['$event']) onResize() {
    this.resizeChart();
  }

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.displayChart();
  }

  displayChart(): void {
    if (this.screenWidth > 1024) this.chartService.desktopChart(this.chart);
    if (this.screenWidth <= 1024 && this.screenWidth > 800)
      this.chartService.tabletChart(this.chart);
    if (this.screenWidth <= 800) this.chartService.mobileChart(this.chart);
  }

  resizeChart(): void {
    this.screenWidth = window.innerWidth;
    this.chartService.destroyChart();
    setTimeout(() => this.displayChart());
  }
}
