import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './page/logincomponent/logincomponent.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

import {ButtonDesign1Component} from './components/buttons/button-design1/button-design1.component';
import { UnderlinedTextFieldsComponent } from './components/textfields/underlined-text-fields/underlined-text-fields.component';
import { RegistrationComponent } from './page/registration/registration.component';
import {MarketplacerowComponent} from './components/tables/rows/marketplacerow/marketplacerow.component';

@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    DashboardComponent,

    //button components
    ButtonDesign1Component,
    //textfields components
    UnderlinedTextFieldsComponent,
    RegistrationComponent,
    MarketplacerowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
