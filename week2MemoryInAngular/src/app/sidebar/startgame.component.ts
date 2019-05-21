import { Component } from '@angular/core';

import { GameService } from '../game.service'

@Component({
  selector: 'startgame',
  template: `
    <button id="opnieuw" (click)="newGame()">Nieuw Spel</button>
  `
})
export class StartgameComponent {


  constructor(private gameService:GameService) {

  }

  newGame() {
    this.gameService.restartGame(4);
  }
}
