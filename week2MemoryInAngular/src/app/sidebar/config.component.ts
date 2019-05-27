import { Component } from '@angular/core';

import { GameService } from './../game.service';

@Component({
  selector: 'config',
  template: `
  <b>Gemiddelde speeltijd:</b> <span id="gemiddeld">0s (+0s)</span><br/><br/>
  <b>Karakter op kaarten:</b>
      <select [(ngModel)]="selectedOption" (change)="changeChar($event)" name="data">
        <option *ngFor="let c of chars" [ngValue]="currentData">
        {{ c }}
        </option>
      </select>
  <br>
  <b>Afmeting bord:</b>
  <select name="size" id ="size">
      <option value=2>2</option>
      <option value=4>4</option>
      <option value=6 selected>6</option>
  </select>
  `
})
export class ConfigComponent {
    chars = new Array();
    selectedOption: string;

    constructor(private gameService: GameService){

      this.chars.push('#');
      this.chars.push("*");
      this.chars.push("%");
      this.chars.push("&");
      this.chars.push("@");
      this.chars.push("X");

    }

    ngOnInit(){
      this.gameService.cast.subscribe(symbol => this.selectedOption = symbol);
    }

    changeChar(event: any){
      //console.log(this.chars[1]);
      console.log(this.chars[event.target.value[0]]);
      this.gameService.nextSymbol(this.chars[event.target.value[0]]);
    }
}
