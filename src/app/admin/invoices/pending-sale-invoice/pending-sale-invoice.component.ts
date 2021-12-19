import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelPriceService } from '../../services/model-price.service';
import { PendingService } from '../../services/pending.service';
import { AddPricePendingSaleComponent } from '../add-price-pending-sale/add-price-pending-sale.component';

@Component({
  selector: 'app-pending-sale-invoice',
  templateUrl: './pending-sale-invoice.component.html',
  styleUrls: ['./pending-sale-invoice.component.css'],
})
export class PendingSaleInvoiceComponent implements OnInit {
  pricing = Array();
  constructor(
    private modalSer: NgbModal,
    public activeModal: NgbActiveModal,
    private serSale: PendingService
  ) {}

  ngOnInit(): void {
    this.serSale.listPendingSale().subscribe((res) => {
      console.log(res, 'res for pending sale');
      this.pricing = res;
    });
  }

  AddPrice(id) {
    console.log(id);
    this.serSale.changeidofpendingPrice(id);
    const modelRef = this.modalSer.open(AddPricePendingSaleComponent);
    modelRef.componentInstance.id = 0;
    modelRef.componentInstance.data = {};
    modelRef.result.then((res) => {
      console.log(res);
    });
  }
}
