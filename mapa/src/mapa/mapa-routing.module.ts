
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaViewComponent } from './mapa-view/mapa-view.component';

const routes: Routes = [

  {
    path: 'mapa',
    component: MapaViewComponent
    },
    // {
    //   path: 'view',
    //   component: CadastroBaseViewComponent
    // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
