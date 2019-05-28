
import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Card } from './board/row/card/card'
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cards: any[];
  //size: number;
  getLetter: any;
  char: string;
  firstcard:Card;
  secondcard:Card;
  points: number = 0;

  isOpen = true;
  timeout: any;

  symbol = new BehaviorSubject('*');
  size = new BehaviorSubject(6);

  constructor() {}

  getCards() {//: Obverable<Card[]> {
    return this.cards;
  }

  getSize() {//: Obverable<number> {
    return this.size.value;
  }

  nextLetter(size):any {
    console.log('next'+size);
    let letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,size*size).split('');
  	var idx=0;
  	letterArray = this.shuffle(letterArray);
  	return () => {
  		const letter = letterArray[idx++];
  		return letter;
  	};
  }

  initGame(size:number=this.size.value) {
    //this.size = size;
    console.log("Init game with " + this.size.value);

    this.initVars();
    this.showScores();
  }

  initVars() {
    this.getLetter = this.nextLetter(this.size.value);
  }

  showScores() {
    // Vul het topscore lijstje op het scherm.
  }

  shuffle(array:any[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  flipCard(card: Card) {
    this.checkDerdeKaart();
    let draaiKaartOm = this.turnCard(card);
    if (draaiKaartOm === 2) {
      this.checkKaarten();
      this.toggle();
      this.checkGameDone();

    }
  }

  checkDerdeKaart() {
    if (this.firstcard && this.secondcard) {
      clearInterval(this.timeout);
      this.deactivateCards();
      this.resetToggle();
    } else if (this.firstcard && !this.secondcard ) {
      console.log('this one')
      this.timeoutCheck();
    }
  }

  deactivateCards() {
  	if (this.firstcard) {
  		this.firstcard.className = 'inactive';
    	this.firstcard.showThis = this.symbol.value;
      this.firstcard = null;
  	}
  	if (this.secondcard) {
  		this.secondcard.className = 'inactive';
      this.secondcard.showThis = this.symbol.value;
    	this.secondcard = null;
  	}
  }

  turnCard(card:Card) {
    let count = 0;
    if (card.className === 'inactive') {
      card.className = 'active';
      card.showThis = card.karakter;
    } else if (card.className === 'active') {
      card.className = 'inactive';
      //console.log(this.char);
      card.showThis = this.symbol.value;
      //console.log(this.char);
    }

    if (!this.firstcard) {
      this.firstcard = card;
      count = 1;
    } else if (this.firstcard !== card && !this.secondcard) {
      this.secondcard = card;
      count = 2;
    }
    return count;
  }

  checkKaarten() {
    if (this.firstcard.className !== 'found' && this.secondcard.className !== 'found') {
      console.log("Check : " + this.firstcard.karakter + " met " +  this.secondcard.karakter);
      if (this.firstcard.karakter === this.secondcard.karakter) {
        this.firstcard.className = 'found';
        this.secondcard.className = 'found';
        this.firstcard = null;
        this.secondcard = null;
        this.points = this.points + 1;
        this.resetToggle();
      }
    }
  }

  fetchAchterkant() {
    console.log("fetch");
    //console.log('this.char: ' + this.char);
    //return this.char;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  resetToggle() {
    this.isOpen = true;
  }
  timeoutCheck() {
    this.timeout = setTimeout(() => {
      this.deactivateCards();
      this.resetToggle();
    }, 2000);
  }

  //todo stop mogelijk maken en gemiddelde tijd uitrekeken en punten berekenen
  checkGameDone() {
    if (this.points * 2 == this.size * this.size) {
      console.log('game done');
      return true;
    }
  }
}
