import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapproveAccountantComponent } from './unapprove-accountant.component';

describe('UnapproveAccountantComponent', () => {
  let component: UnapproveAccountantComponent;
  let fixture: ComponentFixture<UnapproveAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapproveAccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapproveAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
