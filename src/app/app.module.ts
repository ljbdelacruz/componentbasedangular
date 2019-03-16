import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './page/logincomponent/logincomponent.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

import {ButtonDesign1Component} from './components/buttons/button-design1/button-design1.component';
import { UnderlinedTextFieldsComponent } from './components/textfields/underlined-text-fields/underlined-text-fields.component'


@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    DashboardComponent,

    //button components
    ButtonDesign1Component,
    //textfields components
    UnderlinedTextFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
