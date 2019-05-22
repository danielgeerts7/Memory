import { Component } from '@angular/core';

import { GameService } from './../game.service';

@Component({
  selector: 'config',
  template: `
  <b>Gemiddelde speeltijd:</b> <span id="gemiddeld">0s (+0s)</span><br/><br/>
  <b>Karakter op kaarten:</b>

    <select [(ngModel)]="selectedOption" name="first">
      <option *ngFor="let c of chars">
        {{c}}
        </option>
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

    chars = new Array();
    selectedOption: string;

    constructor(private gameService: GameService){
      //this.selectedOption = '*';
      gameService.chr.subscribe(data => {
        this.selectedOption = data;
        console.log(data);
      })

      gameService.updateChr(this.selectedOption);

      //this.selectedOption = new BehaviorSubject();
      //this.gameService.setChr(this.selectedOption);
      this.chars.push('*');
      this.chars.push('#');
      this.chars.push('@');
      this.chars.push('&');
      this.chars.push('%');
      this.chars.push('X');
    }

    getSelectedOption(){
      return this.selectedOption;
    }

}
