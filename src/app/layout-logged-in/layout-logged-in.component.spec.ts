import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoggedInComponent } from './layout-logged-in.component';

describe('LayoutLoggedInComponent', () => {
  let component: LayoutLoggedInComponent;
  let fixture: ComponentFixture<LayoutLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
