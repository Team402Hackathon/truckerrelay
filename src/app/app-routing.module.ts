import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fretes',
    pathMatch: 'full'
  },
  {
    path: 'fretes',
    loadChildren: () => import('./fretes/fretes.module').then( m => m.FretesPageModule)
  },
  {
    path: 'dados-frete',
    loadChildren: () => import('./dados-frete/dados-frete.module').then( m => m.DadosFretePageModule)
  },
  {
    path: 'meu-frete',
    loadChildren: () => import('./meu-frete/meu-frete.module').then( m => m.MeuFretePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
