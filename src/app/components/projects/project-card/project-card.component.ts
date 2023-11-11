import { Component, Input } from '@angular/core';
import { Tech } from '../models/project';

@Component({
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  selector: 'app-project-card',
})
export class ProjectCardComponent {
  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() githubRepo: string = '';
  @Input() hostedIn: string = '';
  @Input() technologiesUsed: Tech[] = [];
}
