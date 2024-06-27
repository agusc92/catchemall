import { Injectable } from '@angular/core';
import { Item } from './lista-item/Item';

@Injectable({
  providedIn: 'root'
})
export class CompraItemService {

  compras : Item[]=[]
  
  constructor() { }

  comprar(item : Item) : void {
    this.compras.push(item);
  }
}
