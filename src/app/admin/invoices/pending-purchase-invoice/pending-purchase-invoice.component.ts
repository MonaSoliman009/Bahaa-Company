import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PendingService } from '../../services/pending.service';

@Component({
  selector: 'app-pending-purchase-invoice',
  templateUrl: './pending-purchase-invoice.component.html',
  styleUrls: ['./pending-purchase-invoice.component.css'],
})
export class PendingPurchaseInvoiceComponent implements OnInit {
  pending = Array();
  constructor(
    private modalSer: NgbModal,
    public activeModal: NgbActiveModal,
    private purchase: PendingService
  ) {}

  ngOnInit(): void {
    this.purchase.listPendingPurchase().subscribe((res) => {
      console.log(res, 'pending purchase invoices');
      this.pending = res;
    });
  }
  AddSupplier(id) {}
}
