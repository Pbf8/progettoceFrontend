import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermybbdetailComponent } from './usermybbdetail.component';

describe('UsermybbdetailComponent', () => {
  let component: UsermybbdetailComponent;
  let fixture: ComponentFixture<UsermybbdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermybbdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermybbdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
