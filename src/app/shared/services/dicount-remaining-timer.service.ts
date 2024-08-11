import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DicountRemainingTimerService {

  constructor() { }

  private getRemainigTimeString(): string {
    const dateTime = Date.now();
    const dtNow = Math.floor(dateTime / 1000);
    const dtNext = Math.ceil(dateTime / 1000 / 60 / 60 / 24) * 60 * 60 * 24;
    const timeLeft = dtNext - dtNow;
    return `${this.timeConvert(~~(timeLeft/60/60))} ч. ${this.timeConvert(~~(timeLeft/60%60))} мин. ${this.timeConvert(~~(timeLeft%60))} сек.`;
  }

  private timeConvert(num: number): string {
    return num > 9 ? num.toString() : '0' + num;
  }

  public getRemainigTime(): Observable<string> {
    return new Observable((observer) => {
      const interval = setInterval(() => {
        observer.next(this.getRemainigTimeString())
      }, 1000);
      return {
        unsubscribe() {
          clearInterval(interval);
        },
      }
    })
  }

}
