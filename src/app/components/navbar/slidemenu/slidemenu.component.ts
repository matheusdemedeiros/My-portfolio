import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.scss']
})
export class SlidemenuComponent implements OnChanges, OnInit {
  @Input() isVisible: boolean = false;

  @ViewChild('slideMenu', { static: false })
  slideMenuRef!: ElementRef;

  constructor() { }

  public ngOnInit(): void {
    // TODO: add window reference to get screen size;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.showMenu();
  }

  public showMenu() {
    if (this.slideMenuRef?.nativeElement) {
      if (this.isVisible) {
        this.slideMenuRef.nativeElement.classList.remove("slide__menu__items__active");
      } else {
        this.slideMenuRef.nativeElement.classList.add("slide__menu__items__active");
      }
    }
  }
}
