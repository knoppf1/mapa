import { MapaModule } from './../mapa/mapa.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from 'src/cadastro/cadastro.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CadastroModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrCpM0yGH_iMvBFna1gU1voQR-I7PGUgQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
