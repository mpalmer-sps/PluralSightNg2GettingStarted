import { Component } from '@angular/core';

import { ProductService } from '../products/product.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ ProductService ]
})


export class AppComponent {
}
