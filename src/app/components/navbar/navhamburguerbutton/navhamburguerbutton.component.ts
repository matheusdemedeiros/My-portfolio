import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navhamburguerbutton',
  templateUrl: './navhamburguerbutton.component.html',
  styleUrls: ['./navhamburguerbutton.component.scss']
})
export class NavhamburguerbuttonComponent {

  public isChecked: boolean = false;
  @Output() public toggleHamburgerCheckEvent = new EventEmitter<boolean>();

  public toggleHamburgerCheck() {
    this.isChecked = !this.isChecked;
    this.toggleHamburgerCheckEvent.emit(this.isChecked);
  }
}
