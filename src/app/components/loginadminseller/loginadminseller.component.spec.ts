import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminsellerComponent } from './loginadminseller.component';

describe('LoginadminsellerComponent', () => {
  let component: LoginadminsellerComponent;
  let fixture: ComponentFixture<LoginadminsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginadminsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
