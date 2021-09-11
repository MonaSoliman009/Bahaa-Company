import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceInsideComponent } from './maintenance-inside.component';

describe('MaintenanceInsideComponent', () => {
  let component: MaintenanceInsideComponent;
  let fixture: ComponentFixture<MaintenanceInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
