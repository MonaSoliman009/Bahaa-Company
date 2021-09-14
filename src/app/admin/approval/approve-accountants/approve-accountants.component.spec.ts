import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAccountantsComponent } from './approve-accountants.component';

describe('ApproveAccountantsComponent', () => {
  let component: ApproveAccountantsComponent;
  let fixture: ComponentFixture<ApproveAccountantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveAccountantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAccountantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
