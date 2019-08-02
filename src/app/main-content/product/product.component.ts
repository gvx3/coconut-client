import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productTitle = 'Product';
  productDescription = 'Quality Aromatic coconuts come from a special soil in Damnoen Saduak, Ratchaburi, Thailand.';
  product: any;
  ingredient: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
    this.getIngredient();
  }

  getProduct(): void {
    this.productService.getProduct().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.product = data;
        console.log(data);
      }
    );
  }

  getIngredient(): void {
    this.productService.getIngredient().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.image_url) {
            item.image_url = environment.apiUrl + item.image_url;
          }
        });
        this.ingredient = data;
        console.log(data);
      }
    );
  }

}
