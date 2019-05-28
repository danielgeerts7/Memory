import { Component } from '@angular/core';
import {GameService} from '../game.service';
import {TimerService} from '../timer.service';

import { GameService } from './../game.service';

@Component({
  selector: 'config',
  template: `
  <b>Gemiddelde speeltijd:</b> <span id="gemiddeld">{{this.timerService.addToAvg(this.gameService.checkGameDone())}} (+0s)</span><br/><br/>
  <b>Karakter op kaarten:</b>
      <select [(ngModel)]="selectedOption" (change)="changeChar($event)" name="data">
        <option *ngFor="let c of chars" [ngValue]="currentData">
        {{ c }}
        </option>
      </select>
  <br>
  <b>Afmeting bord:</b>
  <select [(ngModel)]="selectedSize" (change)="changeSize($event)" name="size">
      <option value=2 [ngValue]="data">2</option>
      <option value=4 [ngValue]="data">4</option>
      <option value=6 selected [ngValue]="data">6</option>
  </select>
  `
})
export class ConfigComponent {
    chars = new Array();
    selectedOption: string;

    constructor(private gameService: GameService, private timerService: TimerService ) {
      this.chars.push('#');
      this.chars.push("*");
      this.chars.push("%");
      this.chars.push("&");
      this.chars.push("@");
      this.chars.push("X");
    }

    changeChar(event: any){
      //console.log(this.chars[1]);
      //console.log(this.chars[event.target.value[0]]);
      //this.gameService.nextSymbol(this.chars[event.target.value[0]]);
      this.gameService.symbol.next(this.chars[event.target.value[0]]);
    }

    changeSize(event: number){
      let grootte = event.target.value;
      //this.gameService.initGame(size);
      //this.gameService.size.next(parseInt(event.target.value));
      console.log(parseInt(event.target.value) + 100);
      this.gameService.size.next(grootte);
      this.gameService.initGame(grootte)
      console.log("hey hoe is het");
    }
  }
