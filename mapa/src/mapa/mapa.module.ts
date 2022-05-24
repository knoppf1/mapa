import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaViewComponent } from './mapa-view/mapa-view.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    MapaViewComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrCpM0yGH_iMvBFna1gU1voQR-I7PGUgQ'
    }),
    MapaRoutingModule
  ]
})
export class MapaModule { }
