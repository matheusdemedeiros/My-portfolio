import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbuttonComponent } from './navbutton/navbutton.component';
import { NavhamburguerbuttonComponent } from './navhamburguerbutton/navhamburguerbutton.component';
import { NavlogoComponent } from './navlogo/navlogo.component';
import { SlidemenuComponent } from './slidemenu/slidemenu.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbuttonComponent,
    NavhamburguerbuttonComponent,
    NavlogoComponent,
    SlidemenuComponent,
  ],
  imports: [CommonModule],
  exports: [SlidemenuComponent, NavbarComponent],
})
export class NavbarModule {}
