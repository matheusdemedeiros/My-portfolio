import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public slideMenuIsVisible: boolean = false;

  public toogleCheck(hamburguerIsChecked: boolean) {
    this.slideMenuIsVisible = hamburguerIsChecked;
  }

}
