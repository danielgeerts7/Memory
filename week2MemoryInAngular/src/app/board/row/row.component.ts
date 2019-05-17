import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  cells:String[] = new Array<String>();
  size:number = 6;

  constructor() {
    this.cells = new Array<String>(this.size);
    for (let i = 0; i < this.size; i++){
        //var card = new Card('inactive', '*', 'A'); // Classname, innerHTML, memory value
        this.cells[i] = 'empty'
    }
  }

  ngOnInit() {
  }

}
