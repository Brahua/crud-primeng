import { Component, OnInit } from '@angular/core';
import { IUsuario } from './info-usuario.interface';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  usuario: IUsuario = {
    nombre: 'Josue',
    apellidos: 'Bravo',
    dni: 72251322,
    profesion: 'Ing. de Software',
    hijos: [
      {
        nombre: 'Junior',
        apellidos: 'Bravo',
        edad: 12
      },

      {
        nombre: 'Valentina',
        apellidos: 'Bravo',
        edad: 15
      },

      {
        nombre: 'Max',
        apellidos: 'Bravo',
        edad: 16
      },

    ]
  };

  constructor() { }

  ngOnInit() {
  }

  emit_botton(variable: string) {
    alert(variable);
  }
}
