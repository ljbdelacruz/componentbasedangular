import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-design1',
  templateUrl: './button-design1.component.html',
  styleUrls: ['./button-design1.component.scss']
})
export class ButtonDesign1Component implements OnInit {
  @Input() public label:string="Default";
  @Input() public addonClass:string;
  @Input() public value:string;
  @Output() public eventOnClick=new EventEmitter();
  mystyle:string="";
  constructor() { }
  ngOnInit() {
    this.mystyle="btn1 "+this.addonClass;
  }
  onClick(){
    if (this.eventOnClick != null){
      this.eventOnClick.emit(this.value);
    }
  }

}
