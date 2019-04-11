import { Component, OnInit, Output,EventEmitter,Input  } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Output() callBack: EventEmitter<string> = new EventEmitter();
  @Input('class') class:string;


  constructor() { }

  ngOnInit() {
  }

  callBackEmitte():void{
    this.callBack.emit();
  }


}
