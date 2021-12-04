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

// Mainstage Animations: Hey, i'm
export const heySVG = trigger('heySVG', [
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
  transition('start => end', animate('1.4s 0.1s ease')),
]);

// Mainstage Animations: Sscar
export const oscarSVG = trigger('oscarSVG', [
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
  transition('start => end', animate('1.2s 0.3s ease')),
]);

// Mainstage Animations: Tagline
export const tagline = trigger('tagline', [
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
  transition('start => end', animate('0.9s 0.6s ease')),
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
  transition('start => end', animate('.8s 0.4s linear')),
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
  transition('start => end', animate('1.2s 0s linear')),
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
  transition('start => end', animate('1s 1s ease')),
]);
