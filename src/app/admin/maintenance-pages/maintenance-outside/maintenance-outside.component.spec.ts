import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOutsideComponent } from './maintenance-outside.component';

describe('MaintenanceOutsideComponent', () => {
  let component: MaintenanceOutsideComponent;
  let fixture: ComponentFixture<MaintenanceOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
