import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioComponent } from './imagen-usuario.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ImagenUsuarioComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    ImagenUsuarioComponent
  ]
})
export class ImagenUsuarioModule { }
