import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productTitle = 'Product';
  productDescription = 'Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand.';
  
  constructor() { }

  ngOnInit() {
  }

}
