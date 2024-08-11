import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { DicountRemainingTimerService } from '../../services/dicount-remaining-timer.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [DicountRemainingTimerService]
})
export class PopupComponent implements OnInit, OnDestroy {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  private discountObservable: Observable<string>;
  private discountSubscription: Subscription | null = null;

  protected discountRemainigTime: string = '';

  constructor(
    private modalService: NgbModal,
    private discountTimer: DicountRemainingTimerService
  ) {
    this.discountObservable = this.discountTimer.getRemainigTime();
  }

  ngOnInit(): void {
    this.discountSubscription = this.discountObservable.subscribe({
      next: (discountTime) => { this.discountRemainigTime = discountTime }
    })
  }

  ngOnDestroy(): void {
    this.discountSubscription?.unsubscribe();
  }

  public open() {
		this.modalService.open(this.popup, { centered: true });
	}

  public close() {
    this.modalService.dismissAll();
  }

}
