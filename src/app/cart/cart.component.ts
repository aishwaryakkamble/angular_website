import { Component } from '@angular/core';
import { products } from '../products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems:any = [];


  addToCart(product: any) {
    this.cartItems.push(product);
    alert("Your card is added at the end of page");
    
  }
products=products;
removeItem(index:number) {
this.cartItems.splice(index, 1);
}


}
