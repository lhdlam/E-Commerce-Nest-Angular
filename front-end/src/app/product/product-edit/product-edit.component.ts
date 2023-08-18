import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: any
  product: any

  setValue() {
    this.productForm.get('title').setValue(this.product.title)
    this.productForm.get('description').setValue(this.product.description)
    this.productForm.get('imgUrl1').setValue(this.product.imgUrl1)
    this.productForm.get('price').setValue(this.product.price)
    this.productForm.get('quantity').setValue(this.product.quantity)
    this.productForm.get('size').setValue(this.product.size)
    this.productForm.get('color').setValue(this.product.color)
    this.productForm.get('shippings').setValue(this.product.shippings)
    this.productForm.get('sex').setValue(this.product.sex)
    this.productForm.get('brands').setValue(this.product.brands)
    this.productForm.get('category').setValue(this.product.category)
    this.productForm.get('subcategory').setValue(this.product.subcategory)
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
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

    this.activatedRoute.params.subscribe(url => {
      this.productService.getProductDetailById(url['id'])
      .subscribe(data => {

        if(Object.keys(data).length !== 0 ) {
          this.product = data
          this.setValue()
        } else {
          this.product = undefined 
        }

      })
    })
  }

  onSubmit() {
    this.productService.editProduct(this.product.id, this.productForm.value)
    .subscribe(
      () => {
        this.router.navigate(['/' + this.product.category + '/', this.product.subcategory])
      }
    )
  }
}
