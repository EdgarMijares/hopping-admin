import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from "@angular/fire/firestorege";
import { AngularFireAuthModule } from '@angular/fire/auth';

// SERVICES
import { ReservacionesService } from './services/reservaciones.service';
import { MyhopService } from './services/myhop.service';
import { DialogsService } from './services/dialogs.service';
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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

// ROUTES
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
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
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { AcuerdoComponent } from './dialog/acuerdo/acuerdo.component';
import { NormalComponent } from './dialog/normal/normal.component';

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
    LoginComponent,
    ContenedorComponent,
    AcuerdoComponent,
    NormalComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
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
    MatButtonToggleModule,
		MatDialogModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
    // AngularFireStorageModule,
    AngularFireAuthModule
  ],
	entryComponents: [
		AcuerdoComponent,
		NormalComponent
	],
  providers: [
		//SERVICES
		ReservacionesService,
    MyhopService,
		DialogsService
		//DIALOGS
		// AcuerdoComponent
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
