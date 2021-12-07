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
      transform: 'translateY(3em)',
      opacity: 0,
    })
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
      params: { transitionSpeed: 300, delay: 0, timingFunction: 'ease-out' },
    }
  ),
]);

// Logo Animation: 'O'
export const logoO = trigger('logoO', [
  state(
    'start',
    style({
      strokeDasharray: '1262',
      strokeDashoffset: '1262',
    })
  ),
  state(
    'end',
    style({
      strokeDasharray: '1262',
      strokeDashoffset: '0',
    })
  ),
  transition('start => end', animate('800ms 400ms linear')),
]);

// Logo Animation: 'S'
export const logoS = trigger('logoS', [
  state(
    'start',
    style({
      strokeDasharray: '1259',
      strokeDashoffset: '1259',
    })
  ),
  state(
    'end',
    style({
      strokeDasharray: '1259',
      strokeDashoffset: '0',
    })
  ),
  transition('start => end', animate('1200ms 0ms linear')),
]);

// Logo Animation: Logo Text
export const logoText = trigger('logoText', [
  state(
    'start',
    style({
      transform: 'translateY(-0.769rem)',
      opacity: 0,
    })
  ),
  state(
    'end',
    style({
      transform: 'translateY(0)',
      opacity: 1,
    })
  ),
  transition('start => end', animate('1000ms 800ms ease-in-out')),
]);
