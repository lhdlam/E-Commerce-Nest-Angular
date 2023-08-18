import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm = this.formBuilder.group({
    title: [''],
    description: [''],
    imgUrl1: [''],
    price: [''],
    quantity: [''],
    size: [''],
    color: [''],
    shippings: [''],
    sex: [''],
    brands: [''],
    category: [''],
    subcategory: [''],
  })

  onSubmit() {
    // console.log('VALUE', this.productForm.value)
    this.productService.createProduct(this.productForm.value)
    this.productForm.reset()
  }

  constructor(private formBuilder: FormBuilder, 
    private productService: ProductService) { }

  ngOnInit(): void {
  }



}
