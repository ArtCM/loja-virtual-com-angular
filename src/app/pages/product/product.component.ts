import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { ProductModel } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
    standalone: true,
    selector: 'product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css'],
    imports: [NavbarComponent, CommonModule, FooterComponent]
})

export class ProductComponent implements OnInit {

    product?: ProductModel;
    showAlert: boolean = false;

    constructor(private routes: ActivatedRoute, private api: ApiService) { }

    ngOnInit() { 
        const productId = this.routes.snapshot.paramMap.get('id') ?? 0;

        this.api.getProductById(+productId).subscribe((response)=> {
            this.product = response;
        })
    }

    success() {
        Swal.fire({
            title: "Sucesso!",
            text: "Produto Comprado Com Sucesso!",
            icon: "success"
        });
    }

}