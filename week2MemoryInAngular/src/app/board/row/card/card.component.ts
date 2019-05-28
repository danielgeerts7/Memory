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

  constructor(private gameService: GameService) {
    this.card.className = 'inactive';
    this.card.karakter = 'null';
    this.card.showThis = this.gameService.symbol.value;

    this.gameService.symbol.subscribe(val => {
        if(this.card.className == 'inactive'){
          this.card.showThis = val;
        }
    });
  }

  ngOnInit() {

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
