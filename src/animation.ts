import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

/* Exported animations: */

/**
 * Fade-In Angular Animation\
 * Properties adjusted: opacity\
 * Transition: 300ms ease-out\
 * Trigger: @fadeIn, on :enter
 */
export const fadeIn = trigger('fadeIn', fade('in'));

/**
 * Fade-Out Angular Animation\
 * Properties adjusted: opacity\
 * Transition: 300ms ease-in\
 * Trigger: @fadeOut, on :leave
 */
export const fadeOut = trigger('fadeOut', fade('out'));

/**
 * Fade-In-Out Angular Animation\
 * Properties adjusted: opacity\
 * Transition: 300ms ease-in/ease-out \
 * Trigger: @fadeInOut, on :enter and :leave
 */
export const fadeInOut = trigger('fadeInOut', fade());

/* Functions for generating re-usable animations: */
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

/* Mainstage Animations: */

export const heySVG = trigger('heySVG', [
  state(
    'start',
    style({
      transform: 'translateY(3em)',
      opacity: 0,
    })
  ),
  state(
    'final',
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
    'final',
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
    'final',
    style({
      transform: 'translateY(0)',
      opacity: 1,
    })
  ),
  transition('start => end', animate('0.9s 0.6s ease')),
]);
