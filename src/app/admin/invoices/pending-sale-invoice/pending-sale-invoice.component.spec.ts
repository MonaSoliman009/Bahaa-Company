import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSaleInvoiceComponent } from './pending-sale-invoice.component';

describe('PendingSaleInvoiceComponent', () => {
  let component: PendingSaleInvoiceComponent;
  let fixture: ComponentFixture<PendingSaleInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSaleInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSaleInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
