export interface Project {
  projectName: string;
  projectDescription: string;
  githubRepo?: string;
  hostedIn?: string;
  technologiesUsed: Tech[];
}

export interface Tech {
  techName: string;
}

export interface ProjectsFile {
  projects: Project[];
  lastUpdate: Date;
}
