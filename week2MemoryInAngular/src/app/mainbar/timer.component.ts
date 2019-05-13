import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  template: `
    Resterende toontijd: <br>
    <button id="myTime"><div id="timeLeft"></div></button><br/>
  `
})
export class TimerComponent { }
