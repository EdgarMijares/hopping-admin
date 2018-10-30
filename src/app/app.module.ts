import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// DISEÑO
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
		BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
