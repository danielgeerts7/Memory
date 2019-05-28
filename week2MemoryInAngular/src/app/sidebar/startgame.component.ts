import { Component } from '@angular/core';

import { GameService } from '../game.service'

@Component({
  selector: 'startgame',
  template: `
    <button id="opnieuw" (click)="newGame(size)">Nieuw Spel</button>
  `
})
export class StartgameComponent {
  size: number;

  constructor(private gameService:GameService) {
    this.size = this.gameService.size;
  }

  newGame(size: number) {
    this.gameService.initGame(size);
  }
}
