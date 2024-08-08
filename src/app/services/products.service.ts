import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable()
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
