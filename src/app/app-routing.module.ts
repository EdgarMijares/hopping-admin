import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MyhopComponent } from './components/myhop/myhop.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FeedComponent } from './components/feed/feed.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

const routes: Routes = [
	{path: "signin", component: LoginComponent},
	{path: "myhob", component: MyhopComponent},
	{path: "detalles", component: DetallesComponent},
	{path: "reservaciones", component: ReservacionesComponent},
	{path: "promociones", component: PromocionesComponent},
	{path: "galeria", component: GaleriaComponent},
	{path: "feed", component: FeedComponent},
	{path: "opciones", component: OpcionesComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
