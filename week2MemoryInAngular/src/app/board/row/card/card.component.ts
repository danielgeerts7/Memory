import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../../../game.service';
import { TimerService } from '../../../timer.service';


import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  _size:number;
  card:Card = new Card();


  constructor(private gameService: GameService, private timerService: TimerService) {
    this.card.className = 'inactive';
    this.card.karakter = 'null';
    this.card.achterkant = '*';
    this.card.showThis = this.card.achterkant;

  }

  ngOnInit() {
    this.card.achterkant = this.gameService.fetchAchterkant(); // * of # of ...
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

  onSelect() {
    this.timerService.timerServiceStartOnce();
    this.gameService.flipCard(this.card);
  }

}
