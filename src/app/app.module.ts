import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OrderComponent } from './order/order.component';


import { OrderHistoryComponent } from './order-history/order-history.component';
import { SearchPipe } from './Pipe/search.pipe';
import { BiographyComponent } from './biography/biography.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddproductComponent,
    UpdateProductComponent,
    OrderComponent,
    OrderHistoryComponent,
    SearchPipe,
    BiographyComponent,
    ContactUsComponent,
    SearchPipe

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
