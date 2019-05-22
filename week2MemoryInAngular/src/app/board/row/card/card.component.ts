import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../../../game.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  className:string = 'inactive';
  _karakter:string = '*';
  achterkant:string;
  _size:number;
  tempchar:string;

  constructor(private gameService: GameService) {

  }

  ngOnInit() {
    // this.getNextLetter();
    this.achterkant = this.gameService.fetchAchterkant(); // * of # of ...
  }

  @Input()
  set karakter(karakter:string) {
    this.tempchar = this.gameService.getLetter();
  }
  get karakter() {
    return this._karakter;
  }

  @Input()
  set size(size:number) {
    this._size = size;
  }
  get size() {
    return this._size;
  }

  onSelect(data:string) {
    this.flip();
    this.achterkant = 'verander dit!';
    console.log(data);
  }

  flip() {
    this.gameService.flipCard(); // * of # of ...

    if (this.className === 'inactive') {
      this.className = 'active';
      console.log(this._karakter);

      this._karakter = this.tempchar;

    } else if (this.className === 'active') {
      this.className = 'inactive';
      console.log(this._karakter);

      this.tempchar = this._karakter;
      this._karakter = '*';


    }
  }
}
