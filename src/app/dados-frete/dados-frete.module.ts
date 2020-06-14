import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosFretePageRoutingModule } from './dados-frete-routing.module';

import { DadosFretePage } from './dados-frete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosFretePageRoutingModule
  ],
  declarations: [DadosFretePage]
})
export class DadosFretePageModule {}
