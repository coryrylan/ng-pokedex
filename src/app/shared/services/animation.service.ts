import { Injectable, state, style, animate, transition, 
  AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata } from '@angular/core';

@Injectable()
export class AnimationService {
  static fadeInAndOut: (AnimationStateDeclarationMetadata | AnimationStateTransitionMetadata)[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ];

  static fadeIn: (AnimationStateDeclarationMetadata | AnimationStateTransitionMetadata)[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(150)
    ])
  ];

  constructor() { }
}
