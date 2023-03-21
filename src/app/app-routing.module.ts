import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ClothsComponent } from './cloths/cloths.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FooterComponent } from './footer/footer.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  // {path:'',redirectTo:'Product',pathMatch:'full'},
  {path:'product',component:ProductComponent },
  {path:'electronics', component:ElectronicsComponent},
  {path:'cloths',component:ClothsComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'review',component:ReviewComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
