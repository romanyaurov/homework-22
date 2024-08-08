import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  protected successOrder: boolean = false;
  protected responseError: boolean = false;
  protected disabledButton: boolean = false;

  private processOrderSubscription: Subscription | null = null;

  protected orderForm = this.fb.group(
    {
      product: ['', {
        validators: []
      }],
      name: ['', {
        validators: [Validators.required]
      }],
      last_name: ['', {
        validators: [Validators.required]
      }],
      phone: ['', {
        validators: [Validators.required, Validators.pattern(/^\+?[0-9]{11}$/)]
      }],
      country: ['', {
        validators: [Validators.required]
      }],
      zip: ['', {
        validators: [Validators.required, Validators.pattern(/^[0-9]{5}$/)]
      }],
      address: ['', {
        validators: [Validators.required, Validators.pattern(/^[А-Яа-яA-Za-z\d\s\-\/]+$/)]
      }],
      comment: ['', {
        validators: []
      }]
    }
  )

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  get name() { return this.orderForm.get('name') }
  get last_name() { return this.orderForm.get('last_name') }
  get phone() { return this.orderForm.get('phone') }
  get country() { return this.orderForm.get('country') }
  get zip() { return this.orderForm.get('zip') }
  get address() { return this.orderForm.get('address') }

  ngOnInit(): void {
    this.orderForm.patchValue({ product: this.productService.selectedProductTitle });
  }

  protected processOrder() {
    this.disabledButton = true;
    this.processOrderSubscription = this.http.post<{ success: number, message?: string }>(
      'https://testologia.ru/order-tea',
      this.orderForm.value
    ).pipe(
      tap(() => { this.disabledButton = false })
    )
    .subscribe(response => {
      if (response && response.success === 1) {
        this.successOrder = true;
        this.orderForm.reset();
      } else {
        this.responseError = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.processOrderSubscription?.unsubscribe();
  }

}
