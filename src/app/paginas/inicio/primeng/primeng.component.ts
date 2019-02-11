import { Component, OnInit, Input } from '@angular/core';
import { IUsuario } from './primeng.interface';
import { IHijos } from './primeng.interface';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css'],
  providers: [MessageService]
})
export class PrimengComponent {

  usuarios: IUsuario[] = [
    {
      nombre: 'Josue',
      apellidos: 'Bravo',
      dni: 72251322,
      profesion: 'Ing',
      hijos: [
        {
          nombre: 'Junior',
          apellidos: 'Bravo',
          edad: 10
        },
        {
          nombre: 'Abigail',
          apellidos: 'Bravo',
          edad: 15
        }
      ]
    }
  ];

  temporalUsuario: IUsuario = {};

  hijos: IHijos[] = [];

  temporalHijo: IHijos = {};

  editar = false;
  indice: number;
  display = false;
  msgs: Message[] = [];
  msgsh: Message[] = [];


  // Usuarios
  validar() {
    let validado = false;
    let mensaje = '';

    if (this.temporalUsuario.nombre === undefined || this.temporalUsuario.nombre.trim() === '') {
      mensaje = 'Ingrese un nombre';
    } else if (this.temporalUsuario.apellidos === undefined || this.temporalUsuario.apellidos.trim() === '') {
      mensaje = 'Ingrese un apellido';
    } else if (this.temporalUsuario.dni === undefined) {
      mensaje = 'Ingrese el dni';
    } else if (this.temporalUsuario.profesion === undefined || this.temporalUsuario.profesion.trim() === '') {
      mensaje = 'Ingrese la profesion';
    }

    if (mensaje) {
      this.msgs = [];
      this.msgs.push({ severity: 'warn', summary: 'Aviso!', detail: mensaje });
    } else {
      validado = true;
    }

    return validado;
  }

  onClickGuardar() {
    if (this.validar()) {
      if (this.editar) {
        this.usuarios[this.indice] = this.temporalUsuario;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Editado!', detail: 'Se editó correctamente el usuario.' });
      } else {
        this.usuarios.push(this.temporalUsuario);
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Guardado!', detail: 'Se agregó correctamente el usuario.' });
      }
      this.temporalUsuario = {};
      this.editar = false;
    }
  }

  onClickEditar(usuario: IUsuario, i: number) {
    this.editar = true;
    this.indice = i;
    this.temporalUsuario = this.clonar(usuario);
  }

  onClickEliminar(i: number) {
    const r: boolean = confirm('¿Seguro?');
    if (r) {
      this.usuarios.splice(i, 1);
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Eliminado!', detail: 'Se eliminó correctamente el usuario.' });
    }
    this.temporalUsuario = {};
  }



  // Hijos
  validarHijo() {
    let valida = false;
    let mensaje = '';

    if (this.temporalHijo.nombre === undefined || this.temporalHijo.nombre.trim() === '') {
      mensaje = 'Ingresa el nombre del hijo';
    } else if (this.temporalHijo.edad === undefined) {
      mensaje = 'Ingresa la edad del hijo';
    }

    if (mensaje) {
      this.msgsh = [];
      this.msgsh.push({ severity: 'warn', summary: 'Aviso!', detail: mensaje });
    } else {
      valida = true;
    }

    return valida;
  }

  onClickGuardarHijo() {
    if (this.validarHijo()) {
      this.temporalHijo.apellidos = this.temporalUsuario.apellidos;
      this.hijos.push(this.temporalHijo);
      this.temporalUsuario.hijos = [];
      this.temporalUsuario.hijos = this.hijos;
      this.temporalHijo = {};
      this.msgsh = [];
      this.msgsh.push({ severity: 'success', summary: 'Guardado!', detail: 'Se agregó correctamente el hijo.' });
    }
  }



  // Metodos de apoyo
  public clonar(objeto: any): any {
    const r: any = {};
    if (objeto == null) {
      return null;
    }
    for (const prop in objeto) {
      if (objeto[prop] != null && objeto[prop] instanceof Array) {
        const lista: any = objeto[prop];
        if (lista.length === 0) {
          r[prop] = [];
        }
        if (lista.length > 0) {
          if (typeof lista[0] === 'string' || typeof lista[0] === 'number') {
            r[prop] = lista;
          } else {
            r[prop] = this.clonar_lista(objeto[prop]);
          }
        }
      } else {
        r[prop] = objeto[prop];
      }
      // r[prop] = this.clonar(objeto[prop]);
    }
    return r;
  }

  public clonar_lista(lista: any): any {
    const r: any = [];
    lista.forEach((element) => {
      const re = this.clonar(element);
      r.push(re);
    });
    return r;
  }
}
