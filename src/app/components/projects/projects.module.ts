import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projetcts.comoponent';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [CommonModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
