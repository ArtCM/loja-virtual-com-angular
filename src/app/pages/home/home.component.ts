import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { ApiService } from '../../service/api.service';
import { ProductModel } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    imports: [NavbarComponent, CommonModule, FooterComponent]
})

export class HomeComponent implements OnInit {
    user: string = 'nome';
    products: ProductModel[] = [];

    constructor(private api: ApiService) { }

    ngOnInit() { 
        
    }

    teste(){
        this.api.getProduct().subscribe((response:any)=> {
            this.products = response.products;
        })
    }
}