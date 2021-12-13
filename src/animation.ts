import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

// Fade-In
export const fadeIn = trigger('fadeIn', fade('in'));

// Fade-Out
export const fadeOut = trigger('fadeOut', fade('out'));

// Fade fn
function fade(type: 'in' | 'out') {
  const animation = [];
  if (type === 'in' || !type) {
    animation.push(
      transition(
        ':enter',
        [
          style({ opacity: '0' }),
          animate(
            '{{ transitionSpeed }}ms {{ delay }}ms {{ timingFunction }}',
            style({ opacity: '1' })
          ),
        ],
        {
          params: {
            transitionSpeed: 300,
            delay: 200,
            timingFunction: 'ease-in',
          },
        }
      )
    );
  }
  if (type === 'out' || !type) {
    animation.push(
      transition(
        ':leave',
        [
          style({ opacity: '1' }),
          animate(
            '{{ transitionSpeed }}ms {{ delay }}ms {{ timingFunction }}',
            style({ opacity: '0' })
          ),
        ],
        {
          params: {
            transitionSpeed: 300,
            delay: 200,
            timingFunction: 'ease-out',
          },
        }
      )
    );
  }
  return animation;
}

// Float-Up
export const floatUp = trigger('floatUp', [
  state(
    'start',
    style({
      transform: 'translateY({{translateStart}}{{unitType}})',
      opacity: 0,
    }),
    {
      params: {
        translateStart: 3,
        unitType: 'em',
      },
    }
  ),
  state(
    'end',
    style({
      transform: 'translateY(0)',
      opacity: 1,
    })
  ),
  transition(
    'start => end',
    animate('{{transitionSpeed}}ms {{delay}}ms {{timingFunction}}'),
    {
      params: {
        transitionSpeed: 300,
        delay: 0,
        timingFunction: 'ease-out',
      },
    }
  ),
]);

// Draw SVG's
export const drawSVG = trigger('drawSVG', [
  state(
    'start',
    style({
      strokeDasharray: '{{strokeDasharrayStart}}',
      strokeDashoffset: '{{strokeDasharrayStart}}',
    }),
    {
      params: {
        strokeDasharrayStart: 3000,
      },
    }
  ),
  state(
    'end',
    style({
      strokeDasharray: '{{strokeDasharrayEnd}}',
      strokeDashoffset: '0',
    }),
    {
      params: {
        strokeDasharrayEnd: 0,
      },
    }
  ),
  transition(
    'start => end',
    animate('{{transitionSpeed}}ms {{delay}}ms {{timingFunction}}'),
    {
      params: {
        transitionSpeed: 1000,
        delay: 0,
        timingFunction: 'linear',
      },
    }
  ),
]);
