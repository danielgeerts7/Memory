import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {GameService} from '../game.service';


@Component({
  selector: 'timer',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 1,
        width: '1px',
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ],
  templateUrl: 'timer.component.html',
})
export class TimerComponent {

  constructor(private gameService: GameService) {}
}
