import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductService } from './product.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {ProductsListComponent} from './components/shopping-cart/products-list/products-list.component';
import { SingleProductComponent } from './components/shopping-cart/products-list/single-product/single-product.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductsListComponent,
    SingleProductComponent,
    CartComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
