import { Component } from '@angular/core';

import { GameService } from './game.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private gameService:GameService) {
    this.gameService.initGame();
  }

}
