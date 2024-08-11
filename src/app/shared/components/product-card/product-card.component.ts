import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductType = {} as ProductType;

  constructor() { }

  ngOnInit(): void {
  }

}
