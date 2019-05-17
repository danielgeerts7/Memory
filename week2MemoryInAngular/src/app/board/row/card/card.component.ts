import { Component, OnInit } from '@angular/core';

import { Card } from './card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card:Card = new Card('inactive', '*', 'A');
  symbol:String = 'card'
  class:String = 'inactive'
  class:String = 'inactive'

  constructor() {
  }

  ngOnInit() {
  }

}
