import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from '@angular/fire/auth';

// SERVICES
import { ResponsiveService } from './services/responsive.service';
import { AuthService } from './services/auth.service';
import { DialogsService } from './services/dialogs.service';
import { MunicipiosService } from './services/municipios.service';
import { MyhopService } from './services/myhop.service';
import { PaymentService } from './services/payment.service';
import { ReservacionesService } from './services/reservaciones.service';
import { UserService } from './services/user.service';
import { PlanService } from './services/plan.service';

//MODULES
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

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
import { NewhopComponent } from './dialog/newhop/newhop.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { MyHopComponent } from './fragments/my-hop/my-hop.component';
import { DetalleComponent } from './fragments/detalle/detalle.component';
import { ReservacionComponent } from './fragments/reservacion/reservacion.component';
import { PromocionComponent } from './fragments/promocion/promocion.component';
import { GaleriaFragmentComponent } from './fragments/galeria-fragment/galeria-fragment.component';
import { FeedFragmentComponent } from './fragments/feed-fragment/feed-fragment.component';

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
        NormalComponent,
        NewhopComponent,
        PricingComponent,
        MyHopComponent,
        DetalleComponent,
        ReservacionComponent,
        PromocionComponent,
        GaleriaFragmentComponent,
        FeedFragmentComponent
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
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAk2F-qNHQArEDnH5q0YlvQ5Wt8dqVuQko'
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule
    ],
	entryComponents: [
		AcuerdoComponent,
		NormalComponent,
		NewhopComponent
	],
    providers: [
        //SERVICES
        ResponsiveService,
        AuthService,
		ReservacionesService,
        MunicipiosService,
        MyhopService,
		DialogsService,
        PaymentService,
        UserService,
        PlanService
		//DIALOGS
		// AcuerdoComponent
	],
    bootstrap: [AppComponent]
})
export class AppModule { }
