import {interval, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  subscription: Subscription;
  currTime: number = 0;
  timerStarted: number = 0;
  avarageCalcArray = [];


constructor() {}

startTimer() {
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.timerAdd());
  }
timerAdd() {
    this.currTime = this.currTime + 1;
  }

  timerServiceStartOnce() {
    if(this.timerStarted === 0) {
      this.timerStarted = 1;
      this.startTimer();
    } else {}
  }

  avarageTime() {

  }

  addToAvgArr() {
    this.avarageCalcArray.push(this.currTime);
  }
}
