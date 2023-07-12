import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbuttonComponent } from './components/navbar/navbutton/navbutton.component';
import { NavlogoComponent } from './components/navbar/navlogo/navlogo.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavhamburguerbuttonComponent } from './components/navbar/navhamburguerbutton/navhamburguerbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbuttonComponent,
    NavlogoComponent,
    HomeComponent,
    SpinnerComponent,
    NavhamburguerbuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
