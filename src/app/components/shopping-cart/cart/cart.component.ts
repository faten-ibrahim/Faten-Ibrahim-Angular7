import { Component, OnInit } from '@angular/core';
import { Iproduct } from './../../../models/iproduct';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products:Iproduct[];

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this.products=this._productService.get_cart_products();
  }

  removeItem(id:string):void{
    this._productService.remove_from_cart(id);
    console.log(this._productService.get_cart_products());
  }

  getTotal():any {
    var total = 0;
    for(var i = 0; i < this.products.length; i++){
        var product = this.products[i];
        total += (product.Price);
    }
    return total;
}



}
