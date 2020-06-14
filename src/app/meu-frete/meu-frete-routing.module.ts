import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuFretePage } from './meu-frete.page';

const routes: Routes = [
  {
    path: '',
    component: MeuFretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuFretePageRoutingModule {}
