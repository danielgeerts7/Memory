import { Component } from '@angular/core';

import { GameService } from '../game.service'

@Component({
  selector: 'startgame',
  template: `
    <button id="opnieuw" (click)="newGame(size)">Nieuw Spel</button>
  `
})
export class StartgameComponent {

  constructor(private gameService:GameService) {

  }

  newGame(size: any) {
    this.gameService.initGame(size);
  }
}
