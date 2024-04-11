import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    standalone: true,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    construction() {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Essa função ainda está em desenvolvimento",
        });
    }
}