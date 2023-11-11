import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Project, ProjectsFile } from './models/project';

@Injectable()
export class ProjectsService {
  private projectsJsonFile = 'assets/files/projects-data-source.json';
  private projectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<
    Project[]
  >([]);

  constructor(private http: HttpClient) {
    this.readProjectsFile();
  }

  readProjectsFile() {
    this.http.get<ProjectsFile>(this.projectsJsonFile).subscribe((file) => {
      this.projectsSubject.next(file.projects);
    });
  }

  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }
}
