import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerPromocionesComponent } from './banner-promociones/banner-promociones.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioReservasComponent } from './formulario-reservas/formulario-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPromocionesComponent,
    ReservasComponent,
    FormularioReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
