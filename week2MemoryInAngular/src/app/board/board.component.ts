import { Component } from '@angular/core';

import { CardComponent } from './card.component'

@Component({
  selector: 'board',
  template: `

      {{ initGame(6) }}

      {{ field.innerHTML }}

      <table>
        <tr>
          <th *ngFor="let col of columns">
            {{col}}
          </th>
        </tr>
        <tr *ngFor="let char of characters | async">
          <td *ngFor="let col of columns" class="{{ col }}">
            {{char[col]}}
          </td>
        </tr>
      </table>
  `
})
export class BoardComponent {
    field:HTMLTableElement;
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
      let table = document.createElement('table'); // Clear board
      //next = new nextLetter(size);

      for (var i = 0; i < this.size; i++) {
        let tr = document.createElement('tr');
        for (var j = 0; j < this.size; j++) {
          let td = document.createElement('td');
          //td.innerHTML = document.getElementById("character").value;
          td.className = 'inactive';
          //td.chr = next();
          //td.addEventListener('click', cardClicked, true);
          tr.appendChild(td)
        }
        table.appendChild(tr);
      }
      this.field = table;
    }

    showScores(){
    	// Vul het topscore lijstje op het scherm.

    }

}
