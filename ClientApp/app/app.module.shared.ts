import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/products/product-list.component';
import { ProductFilterPipe } from './components/products/product-filter.pipe';
import { StarComponent } from './components/shared/star.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,        
        HomeComponent,        
        ProductListComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [        
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },           
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
