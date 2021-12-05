import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  desktopChart(element: any) {
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
          'H T M L',
          'S C S S',
        ],
        datasets: [
          {
            label: 'S K I L L  S C O R E',
            data: [80, 90, 90, 90, 90, 90, 99, 99],
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

  tabletChart(element: any) {
    const canvas = element;

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
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [
          'R E A C T tablet',
          'A N G U L A R',
          'J S',
          'T S',
          'S Q L',
          'P Y T H O N',
          'H T M L',
          'S C S S',
        ],
        datasets: [
          {
            label: 'S K I L L  S C O R E',
            data: [80, 90, 90, 90, 90, 90, 99, 99],
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

  mobileChart(element: any) {
    const canvas = element;

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
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [
          'R E A C T mobile',
          'A N G U L A R',
          'J S',
          'T S',
          'S Q L',
          'P Y T H O N',
          'H T M L',
          'S C S S',
        ],
        datasets: [
          {
            label: 'S K I L L  S C O R E',
            data: [80, 90, 90, 90, 90, 90, 99, 99],
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
}
