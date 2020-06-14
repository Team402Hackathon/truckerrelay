import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosFretePage } from './dados-frete.page';

const routes: Routes = [
  {
    path: '',
    component: DadosFretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosFretePageRoutingModule {}
