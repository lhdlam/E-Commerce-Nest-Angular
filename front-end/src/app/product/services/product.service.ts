
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    apiURL = 'http://localhost:3001';

    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get(this.apiURL + '/product')
    }

    getProductsBySubCategory(id: any) {
        return this.http.get(this.apiURL + '/product/category/' + id)
    }
    
    getProductDetailById (id: any) {
        return this.http.get(this.apiURL + '/product/' + id)
    }

    createProduct(product: any) {
        return this.http.post(this.apiURL + '/product', product).subscribe()
    }

    deleteProduct(id: any) {
        return this.http.delete(this.apiURL + '/product/' + id, {responseType: 'text'})
    }   

    editProduct(id: any, product: any) {
        return this.http.patch(this.apiURL + '/product/' + id, product)
    }
   
}