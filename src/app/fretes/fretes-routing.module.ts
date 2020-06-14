import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FretesPage } from './fretes.page';

const routes: Routes = [
  {
    path: '',
    component: FretesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FretesPageRoutingModule {}
