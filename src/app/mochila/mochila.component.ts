import { Component } from '@angular/core';
import { CompraItemService } from '../compra-item.service';

@Component({
  selector: 'mochila-items',
  templateUrl: './mochila.component.html',
  styleUrl: './mochila.component.scss'
})
export class MochilaComponent {
  private compra : CompraItemService;

  constructor(compra : CompraItemService){
    this.compra = compra;
  }
}
