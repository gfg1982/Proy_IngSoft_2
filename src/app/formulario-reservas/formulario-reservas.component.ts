import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface form {
  nombres: string;
  apellidos: string;
  pais: string;
  documento: string;
  numDoc: string;
  email: string;
  codigo: string;
  numeroc: number;
  numerot: number;
  nombreT: string;
  vencimiento: string;
  cvv: string;
  numT: number;
}
@Component({
  selector: 'app-formulario-reservas',
  templateUrl: './formulario-reservas.component.html',
  styleUrls: ['./formulario-reservas.component.css']
})
export class FormularioReservasComponent {

  public formulario?: form;

  constructor(
    private router: Router
  ) { }

  guardar() {
    this.router.navigate(['reservas']);
  }

}
