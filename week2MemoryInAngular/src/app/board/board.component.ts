import { Component } from '@angular/core';

import { Card } from './card'

@Component({
  selector: 'board',
  template: `
      {{ initGame(6) }}

      <table id ="speelveld">
        <tr *ngFor="let a of data">
          <td *ngFor="let b of a">
            <div id="card" class="{{ b.className }}" (click)="flipCard(b)">{{ b.innerHTML }}</div>
          </td>
        </tr>
      </table>
  `,
})
export class BoardComponent {
    data:Card[][]
    private size:number;

    initGame(size:number) {
      this.size = size;
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
      this.data = new Array()
      //next = new nextLetter(size);
      let count = 0;

      for (var i = 0; i < this.size; i++) {
        let tr = document.createElement('tr');
        this.data[i] = new Array();
        for (var j = 0; j < this.size; j++) {
          let td = document.createElement('td');
          //td.innerHTML = document.getElementById("character").value;
          count++;
          let temp:Card = {
            id: count,
            className: 'inactive',
            innerHTML: '*',
           	chr: 'A',
          };

          this.data[i][j] = temp;
        }
      }
    }

    showScores(){
    	// Vul het topscore lijstje op het scherm.

    }

    flipCard(id) {

    }

}
