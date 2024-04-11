import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {
    apiAdress: string = 'https://dummyjson.com';

    constructor(private httpClient: HttpClient) { }

    getProduct(){
        return this.httpClient.get(this.apiAdress+'/products');
    }
}
