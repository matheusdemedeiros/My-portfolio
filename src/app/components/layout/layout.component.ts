import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/components/shared/services/loader.service';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isLoading: boolean = true;
  public slideMenuIsVisible: boolean = false;

  constructor(private loaderService: LoaderService) { }

  public ngOnInit(): void {
    this.appLoading();
  }

  public toogleCheck(hamburguerIsChecked: boolean) {
    this.slideMenuIsVisible = hamburguerIsChecked;
  }

  private appLoading(): void {
    this.loaderService.appLoadingListener()
      .pipe(
        map(value => this.isLoading = value)
      ).subscribe();
  }
}
