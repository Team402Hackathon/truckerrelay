import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FretesPageRoutingModule } from './fretes-routing.module';

import { FretesPage } from './fretes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FretesPageRoutingModule
  ],
  declarations: [FretesPage]
})
export class FretesPageModule {}
