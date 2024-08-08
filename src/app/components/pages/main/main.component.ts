import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DicountRemainingTimerService } from 'src/app/services/dicount-remaining-timer.service';
declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DicountRemainingTimerService]
})
export class MainComponent implements OnInit, OnDestroy {

  private modalObservable: Observable<void>;
  private modalSubscription: Subscription | null = null;

  private discountObservable: Observable<string>;
  private discountSubscription: Subscription | null = null;

  protected discountRemainigTime: string = '';

  constructor(
    private discountTimer: DicountRemainingTimerService
  ) {
    
    // Создание Observable объекта для всплвающего окна
    this.modalObservable = new Observable((observer) => {
      const modalTimeout = setTimeout(() => {
        new bootstrap.Modal('#staticBackdrop').show();
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(modalTimeout);
        }
      }
    });

    // Инициализация Observable объекта таймера обратного отсчёта
    this.discountObservable = this.discountTimer.getRemainigTime();

  }

  ngOnInit(): void {

    // Инициализация аккордеона
    $(function () {
      $("#accordion").accordion({
        heightStyle: "content",
        icons: { "header": "iconClose", "activeHeader": "iconOpen" }
      });
    });

    // Подписка на Observable всплывающего окна
    this.modalSubscription = this.modalObservable.subscribe();
    // Подписка на Observable таймера обратного отсчёта 
    this.discountSubscription = this.discountObservable.subscribe({
      next: (discountTime) => { this.discountRemainigTime = discountTime }
    })

  }

  ngOnDestroy(): void {
    // Отписываемся от Observable всплывающего окна
    this.modalSubscription?.unsubscribe();
    // Отписываемся от Observable таймера обратного отсчёта
    this.discountSubscription?.unsubscribe();
  }

}
