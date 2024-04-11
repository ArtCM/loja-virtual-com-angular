import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { ApiService } from '../../service/api.service';
import { ProductModel } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
    standalone: true,
    selector: 'product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css'],
    imports: [NavbarComponent, CommonModule, FooterComponent]
})

export class ProductComponent implements OnInit {

    products: ProductModel[] = [];

    constructor(private api: ApiService) { }

    ngOnInit() { 
        this.api.getProduct().subscribe((response:any)=> {
            this.products = response.products;
        })
    }
}