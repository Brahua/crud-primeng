import { Injectable } from '@angular/core';
import { IUsuario } from '../paginas/inicio/primeng/primeng.interface';
import {of, Observable} from 'rxjs';
@Injectable()
export class ServicioPruebaService {

  private readonly LISTA_USUARIO: IUsuario[] = [
    {
      nombre: 'Jhorman',
      apellidos: 'Bravo',
      dni: 72251322,
      profesion: 'Ing. de Software',
      hijos: [
        {
          nombre: 'Abi',
          apellidos: 'Bravo',
          edad: 15
        }
      ]
    },
    {
      nombre: 'Josue',
      apellidos: 'Bravo',
      dni: 72251322,
      profesion: 'Ing. de Software',
      hijos: [
        {
          nombre: 'Abi',
          apellidos: 'Bravo',
          edad: 15
        }
      ]
    },
    {
      nombre: 'Alejandro',
      apellidos: 'Bravo',
      dni: 72251322,
      profesion: 'Ing. de Software',
      hijos: [
        {
          nombre: 'Alejandro',
          apellidos: 'Bravo',
          edad: 15
        }
      ]
    }
  ];

  constructor() { }

  listarUsuarios(): Observable<IUsuario[]> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.LISTA_USUARIO); // This method same as resolve() method from Angular 1
        observer.complete();
      }, 5000);
     });
  }

}
