import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() public notifyLayoutEvent = new EventEmitter<boolean>();

  public notifyLayoutComponent(value: boolean) {
    this.notifyLayoutEvent.emit(value);
  }
}
