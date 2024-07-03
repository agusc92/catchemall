import { Component,OnInit } from '@angular/core';
import { Item } from './Item';
import { CompraItemService } from '../compra-item.service';
import { ItemDataService } from '../item-data.service';

@Component({
  selector: 'lista-item',
  templateUrl: './lista-item.component.html',
  styleUrl: './lista-item.component.scss'
})
export class ListaItemComponent {

  items : Item[]=[];
  private compra : CompraItemService;

  constructor(compra : CompraItemService,
    private itemDataService : ItemDataService
  ){
    this.compra = compra;
  }
  ngOnInit(){
    this.itemDataService.getAll()
    .subscribe(items=>this.items = items);
  }
  comerciar(item : Item){
    if(item.cantidad){
      this.compra.comprar(item);
      item.stock -= item.cantidad;
      item.cantidad = 0;
    }
  }
}
