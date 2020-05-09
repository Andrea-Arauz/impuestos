import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'registrardeclaracion',
    loadChildren: () => import('./pages/registrardeclaracion/registrardeclaracion.module').then( m => m.RegistrardeclaracionPageModule)
  },
  {
    path: 'registrarempresa',
    loadChildren: () => import('./pages/registrarempresa/registrarempresa.module').then( m => m.RegistrarempresaPageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
