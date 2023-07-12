import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavhamburguerbuttonComponent } from './navhamburguerbutton.component';

describe('NavhamburguerbuttonComponent', () => {
  let component: NavhamburguerbuttonComponent;
  let fixture: ComponentFixture<NavhamburguerbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavhamburguerbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavhamburguerbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
