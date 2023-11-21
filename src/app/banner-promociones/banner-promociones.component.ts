import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-promociones',
  templateUrl: './banner-promociones.component.html',
  styleUrls: ['./banner-promociones.component.css']
})
export class BannerPromocionesComponent implements OnInit {
  descuento: number = 5;
  imagenAvion: string = 'assets/avion2.eps'; // Ruta de la imagen de avión

  ngOnInit() {
    // Generar un porcentaje aleatorio entre 5% y 10%
    this.descuento = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  }
}
