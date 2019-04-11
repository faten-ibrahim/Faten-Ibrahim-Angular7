import { AuthGuard } from './auth.guard';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { SingleProductComponent } from "./components/shopping-cart/products-list/single-product/single-product.component";

import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./components/shopping-cart/cart/cart.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "product/:id", component: SingleProductComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
