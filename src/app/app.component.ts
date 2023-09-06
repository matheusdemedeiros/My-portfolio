import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { }

  public ngOnInit(): void {
    this.setTitle("Matheus de Medeiros");
  }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }
}
