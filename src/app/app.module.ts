import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerPromocionesComponent } from './banner-promociones/banner-promociones.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPromocionesComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
