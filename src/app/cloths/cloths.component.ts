import { Component } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent {

  constructor(public pro:ProductsService){}
 products :Item[]= [
  {
    id:100,
    name: 'FIBREZA Womens Georgette A-line Maxi Dress',

    price:798,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61UeHG7WbpL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Vanish-Action-Remover-Washing-Powder/dp/B01MSWRC2C/ref=sr_1_8?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-8'
  },



  {
    id:101,
    name: 'RARE Womens Synthetic a-line Knee-Long Dress ',
  
    price:919,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71nWkTTddlL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/WildHorn-Brown-Wallet-WH2052-Crackle/dp/B07C3VH84K/ref=sr_1_26?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-26'
  },




  {
    id:102,
    name: 'OGoSriKi Women Kurta with Palazzos & Dupatta',
  
    price: 641,
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51PKiwdvG-L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/OM-SAI-LATEST-CREATION-Printed/dp/B09GM9QJ7W/ref=sr_1_27?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-27'
  },


  {
    id:103,
    name: 'Elecurve Ruched Tulip Hem Premium Satin Bodycon Dress |Latest Western Dress for Women|Green',
  
    price: 989,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61797g8pOXL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Timex-Analog-Blue-Dial-Watch-TW00ZR262E/dp/B07H3K85H5/ref=sr_1_34?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-34'
  },


  {
    id:104,
    name:' SIRIL Womens Solid Stretchable Bodycon Velvet Dress ',
  
    price: 329,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61FcAjTxH6L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/FESTIVE-Festive-Fashion-Crossbody-Shoulder/dp/B09JN1NWMB/ref=sr_1_46?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-46'
  },


  {
    id:105,
    name: 'Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (560-563)',
  
    price: 669,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61LLVU45xtL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Maxima-Smartwatch-Premium-Resistance-Monitoring-Multiple/dp/B09H3364QV/ref=sr_1_49?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-49'
  }

  // add more products here
];


addToCart(product: Item) {
 this. pro.cart.push(product);
  alert("Your card is added in cart section");
  
}
}
