import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface formaVuelos {
  aereolinea: string;
  horaSalida: Date;
  horaLlegada: Date;
  precio: string;
}
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {

  public date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
  public vuelos: formaVuelos[] = [
    {
      "aereolinea": "Avianca",
      "horaSalida": new Date('December 1, 2023 08:30:00'),
      "horaLlegada": new Date('December 1, 2023 09:30:00'),
      "precio": "100000"
    },
    {
      "aereolinea": "Latam",
      "horaSalida": new Date('December 1, 2023 12:00:00'),
      "horaLlegada": new Date('December 1, 2023 13:15:00'),
      "precio": "100000"
    },
    {
      "aereolinea": "Viva Air",
      "horaSalida": new Date('December 1, 2023 21:40:00'),
      "horaLlegada": new Date('December 1, 2023 22:30:00'),
      "precio": "100000"
    }
  ]

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  reservar(index: number){
    this.router.navigate(['formulario']);
  }

}
