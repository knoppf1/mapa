import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from './cadastro-view/cadastro-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroListComponent,
    CadastroViewComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
