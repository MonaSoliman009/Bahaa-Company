import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPricingModelComponent } from './edit-pricing-model.component';

describe('EditPricingModelComponent', () => {
  let component: EditPricingModelComponent;
  let fixture: ComponentFixture<EditPricingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPricingModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPricingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
