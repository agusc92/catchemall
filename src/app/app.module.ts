import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { MochilaComponent } from './mochila/mochila.component';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './tienda/tienda.component';
import { AcercaComponent } from './acerca/acerca.component';
import { IndicadorCantidadComponent } from './indicador-cantidad/indicador-cantidad.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemComponent,
    MochilaComponent,
    TiendaComponent,
    AcercaComponent,
    IndicadorCantidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
