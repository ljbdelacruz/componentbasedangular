import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'underlined-text-fields',
  templateUrl: './underlined-text-fields.component.html',
  styleUrls: ['./underlined-text-fields.component.scss']
})
export class UnderlinedTextFieldsComponent implements OnInit {
  @Input() public addonClass:string;
  @Input() public placeholder:string;
  @Input() public type:string;
  mystyle:string="utb-text-color utb-bg-color utb-borderlined ";
  constructor(){}
  ngOnInit(){
    this.mystyle=this.mystyle+this.addonClass;
    console.log(this.mystyle);
  }
}
