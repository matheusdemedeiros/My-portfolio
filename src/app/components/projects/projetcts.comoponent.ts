import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects-service.service';
import { map } from 'rxjs';
import { Project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projectsTitle: string = 'My Projects';
  public projectList: Project[] = [];
  constructor(private prjectsService: ProjectsService) {}

  public ngOnInit(): void {
    this.prjectsService.getProjects().subscribe((data) => {
      this.projectList = data;
    });
  }
}
