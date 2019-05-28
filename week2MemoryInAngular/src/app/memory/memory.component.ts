import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';


@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  title = 'week2memory';

  constructor(private gameService:GameService) {
    this.gameService.initGame(6);
  }

  ngOnInit() {
  }

}
