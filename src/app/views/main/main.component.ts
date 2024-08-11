import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  private modalObservable: Observable<void>;
  private modalSubscription: Subscription | null = null;

  constructor() {
    this.modalObservable = new Observable((observer) => {
      const modalTimeout = setTimeout(() => {
        this.popupComponent.open();
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(modalTimeout);
        }
      }
    });
  }

  ngOnInit(): void {
    this.modalSubscription = this.modalObservable.subscribe();
  }

  ngOnDestroy(): void {
    this.modalSubscription?.unsubscribe();
  }

}
