import { Component } from '@angular/core';
import {GameService} from '../game.service';
import {TimerService} from '../timer.service';

@Component({
  selector: 'config',
  template: `
  <b>Gemiddelde speeltijd:</b> <span id="gemiddeld">{{this.timerService.addToAvg(this.gameService.checkGameDone())}} (+0s)</span><br/><br/>
  <b>Karakter op kaarten:</b>
    <select name="character" id="character">
      <option value="*">*</option>
      <option value="#">#</option>
      <option value="@">@</option>
      <option value="&">&</option>
      <option value="%">%</option>
      <option value="X">X</option>
    </select>
  <br>
  <b>Afmeting bord:</b><select name="size" id ="size">
      <option value=2>2</option>
      <option value=4>4</option>
      <option value=6 selected>6</option>
  </select>
  `
})
export class ConfigComponent {
  constructor(private gameService: GameService, private timerService: TimerService ) {

  }
}
