import { Component } from '@angular/core';
import { Item } from './Item';
import { CompraItemService } from '../compra-item.service';

@Component({
  selector: 'lista-item',
  templateUrl: './lista-item.component.html',
  styleUrl: './lista-item.component.scss'
})
export class ListaItemComponent {

  items : Item[]=[
    {nombre : 'pokebola',
      tipo : 'captura',
      precio : 100,
      stock : 5,
      imagen : 'assets/media/pokeball.webp',
      oferta : false,
      cantidad : 0,
    },
    {nombre : 'revive',
      tipo : 'revive',
      precio : 100,
      stock : 3,
      imagen : 'assets/media/revive.webp',
      oferta : true,
      cantidad : 0,
    },
    {nombre : 'pocion',
      tipo : 'curacion',
      precio : 100,
      stock : 1,
      imagen : 'assets/media/pocion.webp',
      oferta : true,
      cantidad : 0,
    },
    {nombre : 'superbola',
      tipo : 'captura',
      precio : 100,
      stock : 2,
      imagen : 'assets/media/superball.webp',
      oferta : false,
      cantidad : 0,
    },
    
  ]
  private compra : CompraItemService;
  constructor(compra : CompraItemService){
    this.compra = compra;
  }
  agregar(item :Item) : void{
    if(item.cantidad < item.stock)
    item.cantidad ++;
  }

  quitar(item :Item) : void{
    if(item.cantidad > 0)
    item.cantidad --;
  }

  verificarValor(event : KeyboardEvent,item : Item) : void{
    if(!parseInt(event.key)&&event.key !='Backspace'){ 
      event.preventDefault();
    }
  }
  acomodarValor(item : Item) : void{
    if(item.cantidad>item.stock){
      item.cantidad = item.stock
    alert(`Este item posee una cantidad maxima de: ${item.stock} unidades`)
    }
  }

  comprar(item : Item) : void{
     this.compra.comprar(item );
  }
}
