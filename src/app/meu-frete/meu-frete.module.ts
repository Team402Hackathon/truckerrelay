import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuFretePageRoutingModule } from './meu-frete-routing.module';

import { MeuFretePage } from './meu-frete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuFretePageRoutingModule
  ],
  declarations: [MeuFretePage]
})
export class MeuFretePageModule {}
