import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//FIREBASE
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';

// SERVICES
import { ReservacionesService } from './services/reservaciones.service';
//MODULES
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// DISEÑO
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MyhopComponent } from './components/myhop/myhop.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FeedComponent } from './components/feed/feed.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MyhopComponent,
    FooterComponent,
    DetallesComponent,
    ReservacionesComponent,
    PromocionesComponent,
    GaleriaComponent,
    FeedComponent,
    OpcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		MatToolbarModule,
		MatSidenavModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatRadioModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
    MatInputModule,
		// AngularFireModule.initializeApp(environment.firebase),
		// AngularFirestoreModule
  ],
  providers: [
		ReservacionesService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
