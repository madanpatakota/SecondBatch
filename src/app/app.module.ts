import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppCustomer } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component'



@NgModule({
  declarations: [
    AppComponent,
    AppCustomer,
    CustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  
  bootstrap: [AppComponent]
})

export class AppModule { }
