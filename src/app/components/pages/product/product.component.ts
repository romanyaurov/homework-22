import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private acivatedRouteSubscription: Subscription | null = null;
  public product: ProductType = {} as ProductType;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private prodctsService: ProductsService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        const product = this.prodctsService.productsList
        .find(product => product.id === +params['id']);
        if (product) {
          this.product = product;
        } else {
          alert(`Продукт с ID ${params['id']} не найден.`);
          this.router.navigate(['/catalog']);
        }
      } else {
        alert('Что-то пошло не так.');
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    this.acivatedRouteSubscription?.unsubscribe();
  }

  protected selectProduct() {
    this.prodctsService.selectedProductTitle = this.product.title;
  }

}
