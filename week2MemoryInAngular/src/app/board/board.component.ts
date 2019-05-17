import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent {
    rows:String[] = new Array();
    size:Number;

    constructor() {
      this.initGame(6);
    }

    initGame(size:number) {
      console.log("Init game with " + size);
      this.size = size;

      this.rows = new Array(size);
      for (let i = 0; i < size; i++){
          this.rows[i] = 'empty';
          //this.rows[i].id = i;
      }

      this.initVars();
    	this.vulSpeelveld();
    	this.showScores();
    }

    initVars() {

    }

    vulSpeelveld(){
    	// Bouw de size x size table speelveld op. Elk <td> element van de tabel
    	// moet een karakter toegewezen worden. Hiervoor kan de nextletter functie
    	// gebruikt worden. Ook moet de eventlistener cardClicked aan de cell gekoppeld worden
    	// en de opmaak juist gezet worden.
      let data = new Array()
      //next = new nextLetter(size);

      for (var i = 0; i < this.size; i++) {
        data[i] = new Array();
        for (var j = 0; j < this.size; j++) {
          //td.innerHTML = document.getElementById("character").value;
        }
      }
    }

    showScores(){
    	// Vul het topscore lijstje op het scherm.

    }

    flipCard(id) {

    }

}
