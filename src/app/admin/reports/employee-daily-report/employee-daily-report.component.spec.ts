import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDailyReportComponent } from './employee-daily-report.component';

describe('EmployeeDailyReportComponent', () => {
  let component: EmployeeDailyReportComponent;
  let fixture: ComponentFixture<EmployeeDailyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDailyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
