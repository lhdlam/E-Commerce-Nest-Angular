import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  products: any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts() 
  }

  loadProducts() {
    return this.productService.getProducts().subscribe(
      (data: any) => this.products = data
    )
  }
}
