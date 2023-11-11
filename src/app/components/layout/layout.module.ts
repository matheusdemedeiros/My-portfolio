import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeModule } from '../home/home.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    NavbarModule,
    HomeModule,
    ProjectsModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
