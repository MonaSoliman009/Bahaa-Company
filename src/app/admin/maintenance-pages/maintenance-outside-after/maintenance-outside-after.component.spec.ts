import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOutsideAfterComponent } from './maintenance-outside-after.component';

describe('MaintenanceOutsideAfterComponent', () => {
  let component: MaintenanceOutsideAfterComponent;
  let fixture: ComponentFixture<MaintenanceOutsideAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOutsideAfterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOutsideAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
