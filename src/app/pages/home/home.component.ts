import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { ApiService } from '../../service/api.service';
import { ProductModel } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    imports: [NavbarComponent, CommonModule, FooterComponent]
})

export class HomeComponent implements OnInit {

    products: ProductModel[] = [];
    categorias: string[] = [];

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() { 
        this.api.getProducts().subscribe((response)=> {
            this.products = response.products;
        })
        this.api.getCategories().subscribe((response)=> {
            this.categorias = response;
        })
    }

    goToProduct(productId: number) {
        this.router.navigate(['product', productId]);
    }

    listCategory(productCategory: string){
        this.api.getProductsByCategory(productCategory).subscribe((response)=> {
            this.products = response.products;
        })
    }
}