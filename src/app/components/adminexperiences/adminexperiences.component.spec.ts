import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminexperiencesComponent } from './adminexperiences.component';

describe('AdminexperiencesComponent', () => {
  let component: AdminexperiencesComponent;
  let fixture: ComponentFixture<AdminexperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminexperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
