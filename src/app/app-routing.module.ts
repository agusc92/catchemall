import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'tienda',
    pathMatch: 'full'
  },
  {
    path : 'tienda',
    component : TiendaComponent
  },
  {
    path : 'acerca',
    component : AcercaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
