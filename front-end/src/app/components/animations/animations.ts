import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '1000px','opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '1000px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
    )]),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
    )])
  ]),
];

export const IndicatorRotate = [
  trigger('indicatorRotate', [
    state('collapsed', style({transform: 'rotate(0deg)'})),
    state('expanded', style({transform: 'rotate(180deg)'})),
    transition('expanded <=> collapsed',
      animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
    ),
  ])
];
