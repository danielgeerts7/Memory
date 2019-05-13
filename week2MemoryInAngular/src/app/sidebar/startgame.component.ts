import { Component } from '@angular/core';

@Component({
  selector: 'startgame',
  template: `
    <button id="opnieuw" ng-click="initGame(6)">Nieuw Spel</button>
  `
})
export class StartgameComponent { }
