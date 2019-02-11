import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardiaPrimeng } from 'src/app/guardia/guardia-primeng';


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
    canActivate: [GuardiaPrimeng]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutaInicial)
  ],
  exports: [
    RouterModule
  ],
  providers: [GuardiaPrimeng]
})
export class AppRoutingModule { }
