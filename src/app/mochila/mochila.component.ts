import { Component , OnDestroy } from '@angular/core';
import { CompraItemService } from '../compra-item.service';
import { Item } from '../lista-item/Item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mochila-items',
  templateUrl: './mochila.component.html',
  styleUrl: './mochila.component.scss'
})
export class MochilaComponent implements OnDestroy{

  private compra : CompraItemService;
  mochila : Item[] =[];
  private subscripcion : Subscription | undefined;

  constructor(compra : CompraItemService){
    this.compra = compra;
    this.subscripcion = compra.compras.subscribe(comprados=>this.mochila = comprados);
  }
ngOnDestroy(): void {
  if(this.subscripcion)
  this.subscripcion.unsubscribe();
  
}
}
