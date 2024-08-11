import { Injectable } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsList: ProductType[] = [] as ProductType[];
  private _selectedProductTitle: string = '';
  private _searchingString: string = '';

  constructor() { }

  get selectedProductTitle(): string { return this._selectedProductTitle; }

  set selectedProductTitle(title: string) { this._selectedProductTitle = title; }

  get productsList(): ProductType[] { return this._productsList; }

  set productsList(data: ProductType[]) { this._productsList = data; }

  get searchingString(): string { return this._searchingString; }

  set searchingString(string: string) { this._searchingString = string; }

}
