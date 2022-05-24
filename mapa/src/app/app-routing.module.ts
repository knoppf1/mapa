import { CadastroListComponent } from './../cadastro/cadastro-list/cadastro-list.component';
import { MapaViewComponent } from './../mapa/mapa-view/mapa-view.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroViewComponent } from 'src/cadastro/cadastro-view/cadastro-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapa',
    pathMatch: 'full'
},

{
  path: 'mapa',
  children: [
    {
      path: '',
      component: MapaViewComponent
    },
  ]
},
{
  path: 'cadastro',
  children: [
    {
      path: 'list',
      component: CadastroListComponent
    },
    {
      path: 'view',
      component: CadastroViewComponent
    },
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
