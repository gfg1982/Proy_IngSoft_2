import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { FormularioReservasComponent } from './formulario-reservas/formulario-reservas.component';

const routes: Routes = [
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
  { path: 'reservas', component: ReservasComponent },
  { path: 'formulario', component: FormularioReservasComponent },
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
