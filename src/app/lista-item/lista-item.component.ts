import { Component } from '@angular/core';
import { Item } from './Item';

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
    },
    {nombre : 'revive',
      tipo : 'revive',
      precio : 100,
      stock : 3,
      imagen : 'assets/media/revive.webp',
      oferta : true,
    },
    {nombre : 'pocion',
      tipo : 'curacion',
      precio : 100,
      stock : 1,
      imagen : 'assets/media/pocion.webp',
      oferta : true,
    },
    {nombre : 'superbola',
      tipo : 'captura',
      precio : 100,
      stock : 2,
      imagen : 'assets/media/superball.webp',
      oferta : false,
    },
    
  ]
  
}
