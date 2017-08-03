import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/products/product-list.component';
import { ProductFilterPipe } from './components/products/product-filter.pipe';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,        
        HomeComponent,        
        ProductListComponent,
        ProductFilterPipe
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },           
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
