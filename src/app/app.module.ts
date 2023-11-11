import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoaderService } from './components/shared/services/loader.service';
import { SharedModule } from './components/shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { LayoutModule } from './components/layout/layout.module';
import { ProjectsModule } from './components/projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    HomeModule,
    LayoutModule,
    ProjectsModule,
    SharedModule,
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
