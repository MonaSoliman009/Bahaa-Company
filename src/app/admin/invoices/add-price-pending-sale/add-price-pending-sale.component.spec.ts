import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricePendingSaleComponent } from './add-price-pending-sale.component';

describe('AddPricePendingSaleComponent', () => {
  let component: AddPricePendingSaleComponent;
  let fixture: ComponentFixture<AddPricePendingSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPricePendingSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPricePendingSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
