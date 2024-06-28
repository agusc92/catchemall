import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompraItemService } from '../compra-item.service';


@Component({
  selector: 'indicador-cantidad',
  templateUrl: './indicador-cantidad.component.html',
  styleUrl: './indicador-cantidad.component.scss'
})
export class IndicadorCantidadComponent {
  
  
  @Input() cantidad: number =0 ;
  @Input() max : number = 0;
  @Output() cantidadChange : EventEmitter<number> = new EventEmitter<number>

  agregar() : void{
    if(this.cantidad < this.max)
    this.cantidad ++;
  this.cantidadChange.emit(this.cantidad);
  }

  quitar() : void{
    if(this.cantidad > 0)
    this.cantidad --;
  this.cantidadChange.emit(this.cantidad);
  }

  verificarValor(event : KeyboardEvent) : void{
    if(!parseInt(event.key)&&event.key !='Backspace'){ 
      event.preventDefault();
    }
  }
  acomodarValor() : void{
    if(this.cantidad>this.max){
      this.cantidad = this.max
    alert(`Este item posee una cantidad maxima de: ${this.max} unidades`)
  }
  this.cantidadChange.emit(this.cantidad);
  }

  
}
