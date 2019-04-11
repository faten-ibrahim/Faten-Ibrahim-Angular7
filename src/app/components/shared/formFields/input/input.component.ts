import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  @Input('type') type:string;
  @Input('class') class:string;
  @Input('controlName') controlName:string;
  @Input('fGroup') formGroup:string;

  constructor() { }

  ngOnInit() {
    // alert(this.type);
    alert(this.controlName);
  }


}
