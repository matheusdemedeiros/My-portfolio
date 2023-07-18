import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navhamburguerbutton',
  templateUrl: './navhamburguerbutton.component.html',
  styleUrls: ['./navhamburguerbutton.component.scss']
})
export class NavhamburguerbuttonComponent {

  @Output() public toggleHamburgerCheckEvent = new EventEmitter<boolean>();

  @ViewChild('checkbox', { static: false }) checkBoxRef!: ElementRef;

  public toggleHamburgerCheck() {
    this.toggleHamburgerCheckEvent.emit(this.checkBoxRef.nativeElement.checked);
  }
}
