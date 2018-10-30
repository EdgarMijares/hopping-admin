import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyhopComponent } from './components/myhop/myhop.component';

const routes: Routes = [
	{path: "myhob", component: MyhopComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'myhob'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
