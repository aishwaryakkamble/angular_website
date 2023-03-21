import { Component } from '@angular/core';

import { ProductsService } from '../products.service';
import { Item } from '../Item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public product:ProductsService){}
  // cartItems:any = [];


  // removeItem(pro:Item) {
  //   console.log(pro);
  //   this.product.cart.splice(1, pro.id);
  //   console.log(   this.product.cart.splice(1, pro.id));
  //   window.location.reload();

  //   }
removeItem(index:number){
  this.product.cart.splice(index,1);
}
 totalPrice:number=0;
 modalCheck:boolean=false;

buyAll(){
this.modalCheck=true;
  for(let i=0;i<this.product.cart.length;i++){
    this.totalPrice += this.product.cart[i].price;
  }
  alert("Your total cart bill is:  "+this.totalPrice);
}

}
