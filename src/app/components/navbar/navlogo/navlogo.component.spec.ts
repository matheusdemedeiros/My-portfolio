import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogoComponent } from './navlogo.component';

describe('NavlogoComponent', () => {
  let component: NavlogoComponent;
  let fixture: ComponentFixture<NavlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NavlogoComponent', () => {
    expect(component).toBeTruthy();
  });
});
