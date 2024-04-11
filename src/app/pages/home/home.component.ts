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

    onRouterLinkActive($event: Event) {
    throw new Error('Method not implemented.');
    }

    user: string = 'nome';
    products: ProductModel[] = [];

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() { 
        this.api.getProduct().subscribe((response:any)=> {
            this.products = response.products;
        })
    }

    goToProduct(productId: number) {
        this.router.navigate(['product', productId]);
    }

    teste(){
        
    }
}