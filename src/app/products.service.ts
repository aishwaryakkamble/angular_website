import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  // constructor(private pro:Item) { }
 cart:Item[]= [];
 getAll(){
  return this.cart;
 }
  detailsId!: number;
}


