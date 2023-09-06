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
import { SlidemenuComponent } from './components/navbar/slidemenu/slidemenu.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LoaderService } from './shared/services/loader.service';
import { ProjectsComponent } from './components/projects/projetcts.comoponent';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbuttonComponent,
    NavlogoComponent,
    HomeComponent,
    SpinnerComponent,
    NavhamburguerbuttonComponent,
    SlidemenuComponent,
    LayoutComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent],
})
export class AppModule { }
