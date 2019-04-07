import { Iproduct } from "./../../../../models/iproduct";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"]
})
export class SingleProductComponent implements OnInit {
  public product: Iproduct;
  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // console.log(this.route.params['value']);
    // console.log(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {}

  showProduct():Iproduct {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("idddddddddddddddd is :", id);
    console.log(this._productService.get_product(id));
    return this._productService.get_product(id);
  }
}
