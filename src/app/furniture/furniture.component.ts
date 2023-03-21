import { Component,OnInit } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit{
 constructor(public pro : ProductsService){}

ngOnInit(): void {
 
  }
  

 
furniture :Item[]= [
    {
      id:100,
      name: 'Device Bas with BROWN ART SHOPPEE Home Decor Furniture Round Side Tea Coffee Table Sets,2 Piece Mdf Top Couch ',
  
      price: 3230,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51fQ0k-ah8L._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/Vanish-Action-Remover-Washing-Powder/dp/B01MSWRC2C/ref=sr_1_8?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-8'
    },
  
  
  
    {
      id:101,
      name: 'Happy Star Outdoor Furniture Single Seater Swing, Beautiful Swing Without Stand (Black Swing with Red Cushion',
    
      price:  6229,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61LxhRLmXRL._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/WildHorn-Brown-Wallet-WH2052-Crackle/dp/B07C3VH84K/ref=sr_1_26?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-26'
    },
  
  
  
  
    {
      id:102,
      name: 'Happy Star Outdoor Furniture Single Seater Swing, Beautiful Swing Without Stand (Black Swing with Red Cushion',
    
      price:  6229,
      image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81dZ9PhNEVS._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/OM-SAI-LATEST-CREATION-Printed/dp/B09GM9QJ7W/ref=sr_1_27?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-27'
    },
  
  
    {
      id:103,
      name: 'Aart Store Two - Seater Folding Sofa Cum Bed Furniture | Size - 4x6 Feet | for Home & Living Room - Brown Color',
    
      price: 5999,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61rRA1nzuUL._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/Timex-Analog-Blue-Dial-Watch-TW00ZR262E/dp/B07H3K85H5/ref=sr_1_34?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-34'
    },
  
  
    {
      id:104,
      name:' iCare Gifts Home Engineered Wood Furniture for Living Room Accent Sofa Side Table Nightstand ',
    
      price: 315,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71vnQqDhd0L._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/FESTIVE-Festive-Fashion-Crossbody-Shoulder/dp/B09JN1NWMB/ref=sr_1_46?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-46'
    },
  
  
    {
      id:105,
      name: 'Danish Art Window Beautiful Antique Wooden Stool with Storage for Living and Bedroom Furniture (Brown, 12 Inch) ',
    
      price: 899,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XPc7WoqiS._AC_UL480_FMwebp_QL65_.jpg',
      // strUrl:'https://www.amazon.in/Maxima-Smartwatch-Premium-Resistance-Monitoring-Multiple/dp/B09H3364QV/ref=sr_1_49?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-49'
    }
  
    // add more products here
  ];

  addToCart(product: Item) {
    this.pro.cart.push(product);
    alert("Your card is added in cart section");
    
  
}
}
