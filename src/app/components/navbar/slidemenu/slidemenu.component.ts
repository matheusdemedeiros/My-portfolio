import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.scss']
})
export class SlidemenuComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() isVisible: boolean = false;

  @ViewChild('slideMenu', { static: false }) slideMenuRef!: ElementRef;

  private slideMenuNativeElement!: HTMLDivElement;
  private activeClassName = 'slide__menu__items__active';

  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.slideMenuNativeElement = this.slideMenuRef?.nativeElement;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.checkPropertyChanges(changes, 'isVisible')) {
      this.showMenu();
    }
  }

  public showMenu() {
    this.slideMenuNativeElement?.classList.contains(this.activeClassName)
      ? this.slideMenuNativeElement?.classList.remove(this.activeClassName)
      : this.slideMenuNativeElement?.classList.add(this.activeClassName);
  }

  private checkPropertyChanges(changes: SimpleChanges, propertyName: string): boolean {
    if (changes[propertyName]) {
      const propertyChanged = changes[propertyName];
      if (propertyChanged.currentValue !== propertyChanged.previousValue) {
        return true;
      }
    }

    return false;
  }
}

