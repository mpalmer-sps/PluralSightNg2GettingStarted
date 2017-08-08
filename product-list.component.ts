import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {    
    // Define properties first
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: any;

    products: IProduct[];
    //products: IProduct[] = [
    //    {
    //        "productId": 1,
    //        "productName": "Leaf Rake",
    //        "productCode": "GDN-0011",
    //        "releaseDate": "March 19, 2016",
    //        "description": "Leaf rake with 48-inch wooden handle.",
    //        "price": 19.95,
    //        "starRating": 3.2,
    //        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //    }
    //    ,
    //    {
    //        "productId": 8,
    //        "productName": "Saw",
    //        "productCode": "TBX-0022",
    //        "releaseDate": "May 15, 2016",
    //        "description": "15-inch steel blade hand saw",
    //        "price": 11.55,
    //        "starRating": 3.7,
    //        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    //    }
    //];

    constructor(private _productService: ProductService) {

    }

    // Define Methods after properties
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Calling the Product Service');
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }


} // end of class
