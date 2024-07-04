import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../item-data.service';
import { Item } from '../lista-item/Item';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.scss'
})
export class AcercaComponent {
  items$ : Observable<Item []>;
  
  constructor(private itemDataService : ItemDataService){
    this.items$ = itemDataService.getOferta();
  }

  ngOnInit(){
    
  }
}
