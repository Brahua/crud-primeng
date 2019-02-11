import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUsuarioComponent } from './info-usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagenUsuarioModule } from 'src/app/componentes/imagen-usuario/imagen-usuario.module';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

export const ruta: Routes = [

  {
    path: '',
    component: InfoUsuarioComponent,
  }

];

@NgModule({
  declarations: [
    InfoUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ruta),
    ImagenUsuarioModule,
    PanelModule,
    CardModule,
    ButtonModule
  ]
})
export class InfoUsuarioModule { }
