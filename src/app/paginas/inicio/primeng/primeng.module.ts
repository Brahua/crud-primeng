import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengComponent } from './primeng.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagenUsuarioModule } from 'src/app/componentes/imagen-usuario/imagen-usuario.module';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/datatable';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

export const ruta: Routes = [

  {
    path: '',
    component: PrimengComponent,
  }

];

@NgModule({
  declarations: [
    PrimengComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ruta),
    ImagenUsuarioModule,
    PanelModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    DataTableModule,
    DialogModule,
    MessageModule,
    MessagesModule
  ]
})
export class PrimengModule { }
