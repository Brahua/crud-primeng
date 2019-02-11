import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-imagen-usuario',
  templateUrl: './imagen-usuario.component.html',
  styleUrls: ['./imagen-usuario.component.css']
})
export class ImagenUsuarioComponent implements OnInit {
  @Input() mostrarNombre: boolean;

  @Output() clickButton: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick_pressBoton() {
    this.clickButton.emit('CLICK');
  }

}
