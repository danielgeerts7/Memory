import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  row_id:number = 0;
  cells:string[];
  _size:number;

  constructor(private gameService:GameService) {
    this._size = this.gameService.getSize();
  }

  ngOnInit() {

  }

  @Input('size')
  set size(value: number) {
    this._size = value;
    this.cells = new Array(this.size).fill(value);
  }
  get size(): number {
    return this._size;
  }
}
