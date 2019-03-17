import { Component, OnInit } from '@angular/core';
import {GeneralUIModel} from '../../components/model/generalUI.model'

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  uiEmail=new GeneralUIModel();
  uiPassword=new GeneralUIModel();
  uiLoginButton=new GeneralUIModel();

  constructor(){    
    this.setupTF();
    this.setupButton();
  }
  ngOnInit() {
  }

  setupTF(){
    this.uiEmail.placeholder="Email/Username";
    this.uiEmail.type="text";
    this.uiPassword.placeholder="Password";
    this.uiPassword.type="password"
  }
  setupButton(){
    this.uiLoginButton.label="LOGIN";
  }

}
