import { Component } from '@angular/core';

import { GameService } from '../game.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent {
    rows:any[];

    constructor(private gameService: GameService) {
      //gameService.initGame(this.size);
      //this.rows = gameService.cards;
      this.rows = new Array(this.gameService.getSize());
    }

    ngOnInit() {
      this.getSize();
    }

    getSize(): void {
    //  this.gameService.getSize().subscribe(value => this.size = value);
    }
}
