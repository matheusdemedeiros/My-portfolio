import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  constructor(private titleService: Title) { }

  public ngOnInit(): void {
    this.titleService.setTitle("Matheus de Medeiros");
  }
}
