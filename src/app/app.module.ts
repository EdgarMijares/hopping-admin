import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// SERVICES
import { ReservacionesService } from './services/reservaciones.service';
import { MyhopService } from './services/myhop.service';

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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

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
import { LoginComponent } from './components/login/login.component';

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
    OpcionesComponent,
    LoginComponent
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
		MatIconModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
    // AngularFireAuth
  ],
  providers: [
		ReservacionesService,
    MyhopService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
