import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothsComponent } from './cloths/cloths.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SampleComponent } from './sample/sample.component';


const routes:Routes=[
  
  
  {path:"Product", component:ProductComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
   
 
    ProductComponent,
    HeaderComponent,
    FurnitureComponent,
    ElectronicsComponent,
    ClothsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ReviewComponent,
    FooterComponent,
    SampleComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
