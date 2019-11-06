import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincarsComponent } from './admincars.component';

describe('AdmincarsComponent', () => {
  let component: AdmincarsComponent;
  let fixture: ComponentFixture<AdmincarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
