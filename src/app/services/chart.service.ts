import { ElementRef, Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  labels = [
    'J S',
    'T S',
    'A N G U L A R',
    'R X J S',
    'S Q L',
    'P Y T H O N',
    'H T M L',
    'S C S S',
  ];

  data = [90, 90, 85, 80, 90, 85, 99, 99];

  chart: any;

  desktopChart(element: ElementRef) {
    const canvas = element.nativeElement;

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

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            barPercentage: 0.4,
            backgroundColor: gradientBG,
            hoverBackgroundColor: gradientHover,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            bottom: -30,
            left: -10,
          },
        },
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
              borderWidth: 2,
              borderColor: '#313154',
              drawBorder: false,
            },
            ticks: {
              stepSize: 25,
              color: '#fff',
              padding: 10,
              font: {
                family: '"Heebo", sans-serif',
                size: 12,
              },
            },
          },
          xAxis: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: '#fff',
              padding: 30,
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

  tabletChart(element: ElementRef) {
    const canvas = element.nativeElement;

    const gradientBG = canvas
      .getContext('2d')
      .createLinearGradient(500, 0, 0, 0);
    gradientBG.addColorStop(0, '#e79aaf');
    gradientBG.addColorStop(1, '#fb1496');

    const gradientHover = canvas
      .getContext('2d')
      .createLinearGradient(500, 0, 0, 0);
    gradientHover.addColorStop(0, '#fb1496');
    gradientHover.addColorStop(1, '#e79aaf');

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            barPercentage: 0.7,
            backgroundColor: gradientBG,
            hoverBackgroundColor: gradientHover,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        layout: {
          padding: {
            bottom: -5,
            left: -5,
          },
        },
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
          xAxis: {
            min: 50,
            max: 100,
            grid: {
              lineWidth: 2,
              color: '#313154',
              borderWidth: 2,
              borderColor: '#313154',
            },
            ticks: {
              stepSize: 25,
              color: '#fff',
              padding: 5,
              font: {
                family: '"Heebo", sans-serif',
                size: 12,
              },
            },
          },
          yAxis: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: '#fff',
              padding: 5,
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

  mobileChart(element: ElementRef) {
    const canvas = element.nativeElement;

    const gradientBG = canvas
      .getContext('2d')
      .createLinearGradient(300, 0, 0, 0);
    gradientBG.addColorStop(0, '#e79aaf');
    gradientBG.addColorStop(1, '#fb1496');

    const gradientHover = canvas
      .getContext('2d')
      .createLinearGradient(300, 0, 0, 0);
    gradientHover.addColorStop(0, '#fb1496');
    gradientHover.addColorStop(1, '#e79aaf');

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            barPercentage: 0.8,
            backgroundColor: gradientBG,
            hoverBackgroundColor: gradientHover,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        layout: {
          padding: {
            bottom: -5,
            left: -5,
          },
        },
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
          xAxis: {
            min: 50,
            max: 100,
            grid: {
              lineWidth: 2,
              color: '#313154',
              borderWidth: 2,
              borderColor: '#313154',
            },
            ticks: {
              stepSize: 25,
              color: '#fff',
              padding: 5,
              font: {
                family: '"Heebo", sans-serif',
                size: 12,
              },
            },
          },
          yAxis: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: '#fff',
              padding: 5,
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

  destroyChart() {
    this.chart.destroy();
  }
}
