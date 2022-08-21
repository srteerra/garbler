import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardViewComponent } from './main-dashboard-view.component';

describe('MainDashboardViewComponent', () => {
  let component: MainDashboardViewComponent;
  let fixture: ComponentFixture<MainDashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
