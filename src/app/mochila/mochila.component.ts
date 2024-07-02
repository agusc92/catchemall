import { Component , EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CompraItemService } from '../compra-item.service';
import { Item } from '../lista-item/Item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mochila-items',
  templateUrl: './mochila.component.html',
  styleUrl: './mochila.component.scss'
})
export class MochilaComponent implements OnDestroy{
  @Input() cantidad: number =0 ;
  @Output() cantidadChange : EventEmitter<number> = new EventEmitter<number>
  
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
quitar(item : Item) : void{
  if(item.cantidad > 0)
  item.cantidad --;
  item.stock =item.stock+1;
// this.cantidadChange.emit(this.cantidad);
}
}
