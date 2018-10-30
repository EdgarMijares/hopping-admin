import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MODULES
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// DISEÑO
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MyhopComponent } from './components/myhop/myhop.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MyhopComponent,
    FooterComponent
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
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
