import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product';
import { ApiResponseModel } from '../models/api-response';

@Injectable({providedIn: 'root'})
export class ApiService {
    apiAdress: string = 'https://dummyjson.com';

    constructor(private httpClient: HttpClient) { }

    getProducts() : Observable<ApiResponseModel> {
        return this.httpClient.get<ApiResponseModel>(this.apiAdress+'/products');
    }

    getProductById(productId: number) : Observable<ProductModel> {
        return this.httpClient.get<ProductModel>(`${this.apiAdress}/products/${productId}`);
    }

    getCategories() : Observable<string[]> {
        return this.httpClient.get<string[]>(`${this.apiAdress}/products/categories`);
    }

    getProductsByCategory(category: string) : Observable<ApiResponseModel> {
        return this.httpClient.get<ApiResponseModel>(`${this.apiAdress}/products/category/${category}`)
    }
}
