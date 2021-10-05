import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectiveProductDetailsComponent } from './defective-product-details.component';

describe('DefectiveProductDetailsComponent', () => {
  let component: DefectiveProductDetailsComponent;
  let fixture: ComponentFixture<DefectiveProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectiveProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectiveProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
