import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from "./product";

@Injectable()
export class ProductService {

    // dummy service URI to read from a MVC Controller class
    private _productUrl = '/api/product/getproducts';
    private _originUrl;

    //CTOR needed to add the HTTP dependency and inject it into the class
    constructor(private _http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this._originUrl = originUrl;        
    }

    getProducts(): Observable<IProduct[]> {
        console.log('URL for API: ' + this._originUrl + this._productUrl);
        return this._http.get(this._originUrl + this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error')
    }
}