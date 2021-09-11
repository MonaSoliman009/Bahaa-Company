import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleInvoiceComponent } from './add-sale-invoice.component';

describe('AddSaleInvoiceComponent', () => {
  let component: AddSaleInvoiceComponent;
  let fixture: ComponentFixture<AddSaleInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
