import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveEmployeesComponent } from './approve-employees.component';

describe('ApproveEmployeesComponent', () => {
  let component: ApproveEmployeesComponent;
  let fixture: ComponentFixture<ApproveEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
