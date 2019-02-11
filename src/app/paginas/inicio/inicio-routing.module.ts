import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const rutaInicial: Routes = [
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: './info-usuario/info-usuario.module#InfoUsuarioModule',
  },
  {
    path: 'primeng',
    loadChildren: './primeng/primeng.module#PrimengModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutaInicial)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }