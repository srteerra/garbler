import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictViewComponent } from './district-view.component';

describe('DistrictViewComponent', () => {
  let component: DistrictViewComponent;
  let fixture: ComponentFixture<DistrictViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
