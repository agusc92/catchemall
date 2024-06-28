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

  comerciar(item : Item){
    if(item.cantidad){
      this.compra.comprar(item);
      item.stock -= item.cantidad;
      item.cantidad = 0;
    }
  }
}
