import { Iproduct } from './../../../models/iproduct';
import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products:Iproduct[];
  constructor(private _productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.products=this._productService.getAll_products();
    // console.log(this.products);
  }

  goTo(path: string,id:number): void {
    this.router.navigate([path,id]);
  }

  buyClick(id :string):void{
    console.log(id);
    this._productService.addTo_Cart(id);
  }
  likeClick(id:string):void{
    console.log(id);
    this._productService.addTo_Likes(id);
  }

}
