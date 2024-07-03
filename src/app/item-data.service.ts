import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Item } from './lista-item/Item';
const URL= 'https://6684656756e7503d1ae02b13.mockapi.io/poke/item';
@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  

  constructor(private http:HttpClient) { }

  getAll():Observable<Item[]>{
   return this.http.get<Item[]>(URL)
    .pipe(tap((items:Item[])=>items.forEach(item=>item.cantidad = 0)));
  }
}
