import { Component } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import { TimerService } from '../timer.service';
import { GameService } from '../game.service';

@Component({
  selector: 'gameinfo',
  template: `
    <h2>Javascript memory</h2>
    <div>Verlopen tijd: <span id="tijd">{{this.timerService.currTime}}</span> seconden.<br/>
    Gevonden kaart-paren: <span id="gevonden">{{this.gameService.points}}</span><br>
    </div>
  `
})
export class GameinfoComponent {

  constructor(private timerService: TimerService , private gameService: GameService ) {}



}
