import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public presentationImageContent!: string;
  public presentationTitle!: string;
  public presentationDescription!: string;

  public ngOnInit(): void {
    this.setPresentationImageContent();
    this.setPresentationTitle();
    this.setPresentationDescription();
  }

  private setPresentationImageContent() {
    this.presentationImageContent = "</>";
  }

  private setPresentationTitle() {
    this.presentationTitle = "Welcome!!";
  }

  private setPresentationDescription() {
    this.presentationDescription = "As a <strong>C#</strong> developer with a focus on backend, I am excited to expand my knowledge into the world of frontend development with <strong>Angular</strong>. Over the past few months, I have been dedicated to learning this new area and acquiring valuable skills!!";
  }
}
