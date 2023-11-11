import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss'],
})
export class NavbuttonComponent {
  @Input() public text: string = '';
  @Input() public scrollToElementId: string = '';
  constructor(private viewportScroller: ViewportScroller) {}
  public onClickScroll(): void {
    if(this.scrollToElementId){
      this.viewportScroller.scrollToAnchor(this.scrollToElementId);
    }
  }
}
