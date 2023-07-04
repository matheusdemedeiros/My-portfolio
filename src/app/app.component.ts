import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  private loadingSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private titleService: Title,
    private appRef: ApplicationRef) { }

  public ngOnInit(): void {
    this.setTitle("Matheus de Medeiros");
    this.appLoading();
  }



  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  private appLoading() {
    this.appRef.isStable.subscribe((isStable) => {
      this.loadingSubject.next(isStable);
    }
    );

    this.loadingSubject.subscribe({
      next: (isLoading) => this.isLoading = isLoading,
      complete: () => this.isLoading = false,
    });
  }
}


