import { Component } from '@angular/core';
import { Item } from '../Item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {


constructor(public pro:ProductsService){}
 products :Item[]= [
  {
    id:100,
    name: 'Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6" FHD Thin & Light',

    price:38476,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/Vanish-Action-Remover-Washing-Powder/dp/B01MSWRC2C/ref=sr_1_8?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-8'
  },



  {
    id:101,
    name: 'Cyber Acoustics 3.5mm Stereo Headset (AC-5002) with Headphones and Noise Canceling Microphone for PCs, Tablets, and Cell Phones in The Classroom or Home…',
  
    price: 1899,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61NsyoO-U3L._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/WildHorn-Brown-Wallet-WH2052-Crackle/dp/B07C3VH84K/ref=sr_1_26?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-26'
  },




  {
    id:102,
    name: 'Hammer Ace 3.0 Bluetooth Calling Smart Watch with Largest 1.85" IPSDisplay',
  
    price: 1541,
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jQim6YPnL._AC_UL480_FMwebp_QL65_.jpg',
    // strUrl:'https://www.amazon.in/OM-SAI-LATEST-CREATION-Printed/dp/B09GM9QJ7W/ref=sr_1_27?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-27'
  },


  {
    id:103,
    name: 'acer 21.5 inch Full HD VA Panel Monitor (KA222Q B) (Response Time: 1 ms, 75 Hz Refresh Rate). ',
  
    price: 849,
    image: 'https://rukminim1.flixcart.com/image/312/312/xif0q/monitor/w/m/3/-original-imagky3vnpdgd9gm.jpeg?q=70',
    // strUrl:'https://www.amazon.in/Timex-Analog-Blue-Dial-Watch-TW00ZR262E/dp/B07H3K85H5/ref=sr_1_34?crid=1CTXRDCS472TL&keywords=top+offers&qid=1679281085&sprefix=top+offers%2Caps%2C334&sr=8-34'
  },


  {
    id:104,
    name:' Samsung 183 L 3 Star Inverter Direct-Cool Single Door Refrigerator (RR20C1723S8/HL, Silver, Elegant Inox) ',
  
    price: 14690,
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TTF88NJUL._SY741_.jpg',
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
// products=products;

}