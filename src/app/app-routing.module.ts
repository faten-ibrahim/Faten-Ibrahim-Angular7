import { SingleProductComponent } from "./components/shopping-cart/products-list/single-product/single-product.component";

import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./components/shopping-cart/cart/cart.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product/:id", component: SingleProductComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
