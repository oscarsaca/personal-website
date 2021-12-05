import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('SkillsChart') element!: ElementRef;
  chartWidth!: number;
  chartHeight!: number;

  ngAfterViewInit(): void {
    const canvas = this.element.nativeElement;

    const gradientBG = canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradientBG.addColorStop(0, '#e79aaf');
    gradientBG.addColorStop(1, '#fb1496');

    const gradientHover = canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradientHover.addColorStop(0, '#fb1496');
    gradientHover.addColorStop(1, '#e79aaf');

    this.desktopChart(canvas, gradientBG, gradientHover);
  }

  desktopChart(canvas: any, gradientBG: any, gradientHover: any) {
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [
          'R E A C T',
          'A N G U L A R',
          'J S',
          'T S',
          'S Q L',
          'P Y T H O N',
          'H T M L 5',
          'C S S 3',
          'G I T',
        ],
        datasets: [
          {
            label: 'S K I L L  S C O R E',
            data: [80, 90, 90, 80, 90, 90, 99, 99, 100],
            barPercentage: 0.4,
            backgroundColor: gradientBG,
            hoverBackgroundColor: gradientHover,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        animation: {
          duration: 1200,
          easing: 'easeInBounce',
        },
        scales: {
          yAxis: {
            min: 25,
            max: 100,
            grid: {
              lineWidth: 2,
              color: '#313154',
            },
            ticks: {
              stepSize: 25,
              font: {
                family: '"Heebo", sans-serif',
                size: 12,
              },
            },
          },
          xAxis: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: '"Heebo", sans-serif',
                size: 12,
              },
            },
          },
        },
      },
    });
  }
}
