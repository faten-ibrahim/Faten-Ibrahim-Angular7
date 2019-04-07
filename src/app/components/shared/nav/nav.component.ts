import { Component, OnInit } from '@angular/core';
import { Iproduct } from './../../../models/iproduct';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public cartProducts:Iproduct[];
  public likedProducts:Iproduct[];
  

  constructor(private _productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.cartProducts=this._productService.get_cart_products();
    this.likedProducts=this._productService.get_likes_products();


  }

}
