import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public rout:string;

  // constructor(private router: Router, private route: ActivatedRoute) {
  //   // this.alertName();
  //   console.log(this.route.params['value'])
  //   this.rout=this.route.params['value'];
  // }
  constructor(private router: Router) {}


  goTo(path: string,id:number): void {
    this.router.navigate([path,id]);
  }

  ngOnInit() {
  }

}
