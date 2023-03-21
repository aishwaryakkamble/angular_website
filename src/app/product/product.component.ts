import { Component } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
price:number=39999;
productList:any;




constructor(public pro:ProductsService){}
 products :Item[]= [
  {
    id:100,
    name: 'Vanish All in One Powder Detergent Booster - 400 g | Stain Remover for  Clothes | Whitens Whites Brightens Colours',

    price: 182,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/612FFlb7f6L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Vanish-Action-Remover-Washing-Powder/dp/B01MSWRC2C/ref=sr_1_8?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-8'
  },



  {
    id:101,
    name: 'WildHorn Brown RFID Blocking Leather Wallet for Men I Ultra Strong Stitching I 6 Credit Card Slots I ',
  
    price: 285,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81vMec1lk+L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/WildHorn-Brown-Wallet-WH2052-Crackle/dp/B07C3VH84K/ref=sr_1_26?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-26'
  },




  {
    id:102,
    name: 'OM SAI LATEST CREATION Women Printed Slub Rayon Tops with Half Sleeves for Office Wear',
  
    price: 519,
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91FJgVJoqIL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/OM-SAI-LATEST-CREATION-Printed/dp/B09GM9QJ7W/ref=sr_1_27?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-27'
  },


  {
    id:103,
    name: 'TIMEX Analog Mens Watch ',
  
    price: 849,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Kx6rgmlRS._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Timex-Analog-Blue-Dial-Watch-TW00ZR262E/dp/B07H3K85H5/ref=sr_1_34?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-34'
  },


  {
    id:104,
    name:' Festive Fashion™ Premium Women Top Handle Handbag | Crossbody ',
  
    price: 1299,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61AOay4rIgL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/FESTIVE-Festive-Fashion-Crossbody-Shoulder/dp/B09JN1NWMB/ref=sr_1_46?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-46'
  },


  {
    id:105,
    name: 'Maxima Max Pro X5 Smartwatch-Premium Ultra Slim 1.7” HD Display with 15 ',
  
    price: 2199,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71lqfmYUT7L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Maxima-Smartwatch-Premium-Resistance-Monitoring-Multiple/dp/B09H3364QV/ref=sr_1_49?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-49'
  }

  // add more products here
];


addToCart(product: Item) {
 this. pro.cart.push(product);
  alert("Your card is added in cart section");
  
}
openProduct(product:Item ){
this.pro.detailsId=product.id;

  
}

}




