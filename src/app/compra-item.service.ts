import { Injectable } from '@angular/core';
import { Item } from './lista-item/Item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraItemService {
  private _compras : Item[] = [];
  compras : BehaviorSubject<Item[]>= new BehaviorSubject(this._compras);
  
  constructor() { }

  comprar(item : Item) : void {
    let itemEncontrado : Item |undefined = this._compras.find(ele=> ele.nombre == item.nombre);
    if(!itemEncontrado){
      this._compras.push({...item});
      
    } else{
      
      itemEncontrado.cantidad += item.cantidad;
    }
    
    this.compras.next(this._compras);
  }
}
