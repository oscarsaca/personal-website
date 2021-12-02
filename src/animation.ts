import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

// Functions for generating re-usable animations:
export const fadeIn = trigger('fadeIn', fade('in'));

export const fadeOut = trigger('fadeOut', fade('out'));

export const fadeInOut = trigger('fadeInOut', fade());

function fade(type?: 'in' | 'out') {
  const animation = [];
  if (type === 'in' || !type) {
    animation.push(
      transition(':enter', [
        style({ opacity: '0' }),
        animate('300ms 200ms ease-out', style({ opacity: '1' })),
      ])
    );
  }
  if (type === 'out' || !type) {
    animation.push(
      transition(':leave', [
        style({ opacity: '1' }),
        animate('300ms 200ms ease-in', style({ opacity: '0' })),
      ])
    );
  }
  return animation;
}

// Mainstage Animations:
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

// Logo Animation
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
