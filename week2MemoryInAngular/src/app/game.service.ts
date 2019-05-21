import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cards: any[];
  size: number;
  getLetter: any;

  constructor() {}

  getCards() {//: Obverable<Card[]> {
    return this.cards;
  }

  getSize() {//: Obverable<number> {
    return this.size;
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

  initGame(size:number) {
    this.size = size;
    console.log("Init game with " + size);

    this.initVars();
    this.vulSpeelveld();
    this.showScores();
  }

  initVars() {
    this.getLetter = this.nextLetter(this.size);
  }

  vulSpeelveld(){
    // Bouw de size x size table speelveld op. Elk <td> element van de tabel
    // moet een karakter toegewezen worden. Hiervoor kan de nextletter functie
    // gebruikt worden. Ook moet de eventlistener cardClicked aan de cell gekoppeld worden
    // en de opmaak juist gezet worden.
    //this.cards = new Array(this.size*this.size)
    //next = new nextLetter(size);

    //for (var i = 0; i < this.size * this.size; i++) {
      //this.cards[i] = new Card('inactive', '*', '');
        //td.innerHTML = document.getElementById("character").value;
  //  }
  }

  showScores(){
    // Vul het topscore lijstje op het scherm.

  }

  flipCard(id) {

  }

  // knuth array shuffle
  // from https://bost.ocks.org/mike/shuffle/
  shuffle(array: any[]) {
  	var currentIndex:number = 6;
    var temporaryValue:string;
    var randomIndex:number;
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

  fetchAchterkant() {
    return '0'
  }
}
