import { Injectable, AnimationStateTransitionMetadata, state, style, animate, transition } from '@angular/core';

@Injectable()
export class AnimationService {
  static fadeInAndOut: AnimationStateTransitionMetadata[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ];

  static fadeIn: AnimationStateTransitionMetadata[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(150)
    ])
  ];

  constructor() { }
}
