import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupViewComponent } from './signup-view.component';

describe('SignupViewComponent', () => {
  let component: SignupViewComponent;
  let fixture: ComponentFixture<SignupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
