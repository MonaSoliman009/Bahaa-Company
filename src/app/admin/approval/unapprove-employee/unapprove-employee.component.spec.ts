import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapproveEmployeeComponent } from './unapprove-employee.component';

describe('UnapproveEmployeeComponent', () => {
  let component: UnapproveEmployeeComponent;
  let fixture: ComponentFixture<UnapproveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapproveEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapproveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
