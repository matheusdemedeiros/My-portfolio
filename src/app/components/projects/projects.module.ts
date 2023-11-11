import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsService } from './projects-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projetcts.component';
@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProjectsComponent],
  providers: [ProjectsService],
})
export class ProjectsModule {}
