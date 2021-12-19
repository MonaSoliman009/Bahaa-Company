import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesService } from '../../services/invoices.service';
import { PendingService } from '../../services/pending.service';
import { AddSupplierComponent } from '../add-supplier/add-supplier.component';

@Component({
  selector: 'app-pending-purchase-invoice',
  templateUrl: './pending-purchase-invoice.component.html',
  styleUrls: ['./pending-purchase-invoice.component.css'],
})
export class PendingPurchaseInvoiceComponent implements OnInit {
  pending = Array();
  idOfEditPrice: any;

  constructor(
    private modalSer: NgbModal,
    public activeModal: NgbActiveModal,
    private purchase: PendingService,

    private ser: InvoicesService
  ) {}

  ngOnInit(): void {
    this.purchase.listPendingPurchase().subscribe((res) => {
      console.log(res, 'pending purchase invoices');
      this.pending = res;
    });
  }

  AddSupplier(id) {
    this.idOfEditPrice = id;
    this.ser.changeidofEditPrice(this.idOfEditPrice);
    const modelRef = this.modalSer.open(AddSupplierComponent);
    modelRef.componentInstance.id = 0;
    modelRef.componentInstance.data = {};
    modelRef.result.then((res) => {
      console.log(res);
    });
  }
}
