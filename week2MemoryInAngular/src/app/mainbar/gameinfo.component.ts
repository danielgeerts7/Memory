import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'gameinfo',
  template: `
    <h2>Javascript memory</h2>
    <div>Verlopen tijd: <span id="tijd">{{returnTime()}}</span> seconden.<br/>
    Gevonden kaart-paren: <span id="gevonden">0</span><br>
    </div>
  `
})
export class GameinfoComponent {
  subscription: Subscription;
  currTime: number = 0;

  ngOnInit(){
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.timerAdd());
  }

  timerAdd(){
    this.currTime = this.currTime + 1;
  }

  returnTime(){
    return this.currTime
  }

}
