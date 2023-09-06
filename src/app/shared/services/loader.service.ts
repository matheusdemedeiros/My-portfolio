import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private appRef: ApplicationRef) {
    this.appLoading();
  }

  public appLoadingListener(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  private appLoading() {
    this.appRef.isStable.subscribe((appIsStable) => this.loadingSubject.next(appIsStable));
  }
}
