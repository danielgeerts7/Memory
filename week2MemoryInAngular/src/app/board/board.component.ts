import { Component } from '@angular/core';

import { GameService } from '../game.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent {
    rows:any[];
    size:number;

    constructor(private gameService: GameService) {
      //gameService.initGame(this.size);
      //this.rows = gameService.cards;
      this.size = this.gameService.getSize();
      this.rows = new Array(this.size);
      console.log(this.size);
    }

    ngOnInit() {
    }
}
