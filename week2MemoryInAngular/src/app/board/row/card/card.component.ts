import { Component, OnInit, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { GameService } from '../../../game.service';

import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  _size:number;
  card:Card = new Card();
  symbol:string;

  constructor(private gameService: GameService) {
    this.card.className = 'inactive';
    this.card.karakter = 'null';
    //console.log('1. achterkant: '+this.card.achterkant + ' card: '+this.gameService.char + ' showThis: '+this.card.showThis);
    this.card.achterkant = this.symbol;
    //console.log('2. achterkant: '+this.card.achterkant + ' card: '+this.gameService.char + ' showThis: '+this.card.showThis);
    this.card.showThis = this.card.achterkant;
    //console.log('3. achterkant: '+this.card.achterkant + ' card: '+this.gameService.char + ' showThis: '+this.card.showThis);
  }

  ngOnInit() {
    //this.card.achterkant = this.gameService.char;
    //this.card.achterkant.subscribe(_char => this.gameService.char = _char);
    //this.gameService.cast.subscribe(symbol => this.selectedOption = symbol);
    console.log('hey: '+ this.gameService.symbol); // * of # of ...
  }

  @Input()
  set karakter(karakter:string) {
    this.card.karakter = this.gameService.getLetter();
  }
  get karakter() {
    return this.card.karakter;
  }

  @Input()
  set size(size:number) {
    this._size = size;
  }
  get size() {
    return this._size;
  }

  get char(){
    return this.char;
  }

  set char(char){
    this.char = char;
  }

  onSelect() {
    this.gameService.flipCard(this.card);
  }
}
