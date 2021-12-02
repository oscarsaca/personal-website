import { animate, style, transition, trigger } from '@angular/animations';

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
        animate('3000ms 200ms ease-out', style({ opacity: '1' })),
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
