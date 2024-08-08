import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected searchInput: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  protected searchProducts() {
    this.productsService.searchingString = this.searchInput;
    this.navToCatalog();
  }

  protected clearSearchInput() {
    if (window.location.href.includes('/catalog')) {
      this.navToCatalog();
    }
    this.searchInput = '';
    this.productsService.searchingString = '';
  }

  private navToCatalog() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false };
    this.router.navigate(['/catalog']);
  }

}
