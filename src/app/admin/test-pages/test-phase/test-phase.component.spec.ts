import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPhaseComponent } from './test-phase.component';

describe('TestPhaseComponent', () => {
  let component: TestPhaseComponent;
  let fixture: ComponentFixture<TestPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
