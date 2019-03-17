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
  @Input() textValue:string;
  mystyle:string="utb-text-color utb-bg-color utb-borderlined ";
  placeholderStyle:string="utb-placeholder";
  constructor(){}
  ngOnInit(){
    this.mystyle=this.mystyle+this.addonClass;
    console.log(this.mystyle);
  }
  onTextChange(text){
    if(text.length > 0){
      this.placeholderStyle="utb-placeholder-show";
    }else{
      this.placeholderStyle="utb-placeholder-hide";
    }
  }

}
