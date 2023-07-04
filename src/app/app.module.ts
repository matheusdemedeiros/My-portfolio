import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbuttonComponent } from './components/navbar/navbutton/navbutton.component';
import { NavlogoComponent } from './components/navbar/navlogo/navlogo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbuttonComponent,
    NavlogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
