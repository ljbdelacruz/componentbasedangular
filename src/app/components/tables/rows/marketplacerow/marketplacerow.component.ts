import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'marketplacerow',
  templateUrl: './marketplacerow.component.html',
  styleUrls: ['./marketplacerow.component.scss']
})
export class MarketplacerowComponent implements OnInit {
  @Input() public title:string="Wooden Chair"; 
  @Input() public bodyDesc:string="Description"
  @Input() public description:string="Chairs to make you com....";
  @Input() public oldPrice:string="$25 off";
  @Input() public price:string="$0";
  @Output() public onClick = new EventEmitter();
  @Input() public value:string="";
  @Input() public image:string="";
  constructor(){}
  ngOnInit() {}
  onClickCell(){
    this.onClick.emit(this.value);
  }

}
