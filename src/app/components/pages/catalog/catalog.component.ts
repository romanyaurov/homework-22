import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  protected pageTitle: string = 'Наши чайные коллекции';
  private getProductsSubscription: Subscription | null = null;
  public productsList: ProductType[] = [] as ProductType[];
  protected isLoaderActive: boolean = false;

  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoaderActive = true;
    let url: string = 'https://testologia.ru/tea';
    if (this.productsService.searchingString) {
      url += `?search=${this.productsService.searchingString}`;
    }
    this.getProductsSubscription = this.http.get<ProductType[]>(url)
      .pipe(
        tap(() => this.isLoaderActive = false)
      )
      .subscribe({
        next: (data: ProductType[]) => {
          if (data && data.length > 0) {
            this.productsList = data;
            this.productsService.productsList = data;
            this.pageTitle = `Результаты поиска по запросу "${this.productsService.searchingString}"`;
          } else {
            this.pageTitle = `По запросу "${this.productsService.searchingString}" ничего не найдено`;
          }
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      })
  }

  ngOnDestroy(): void {
    this.getProductsSubscription?.unsubscribe();
  }

}
