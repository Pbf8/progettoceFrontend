import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermybbComponent } from './usermybb.component';

describe('UsermybbComponent', () => {
  let component: UsermybbComponent;
  let fixture: ComponentFixture<UsermybbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermybbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermybbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
