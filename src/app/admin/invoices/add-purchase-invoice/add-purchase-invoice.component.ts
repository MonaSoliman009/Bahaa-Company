import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-add-purchase-invoice',
  templateUrl: './add-purchase-invoice.component.html',
  styleUrls: ['./add-purchase-invoice.component.css'],
})
export class AddPurchaseInvoiceComponent implements OnInit {
  purchuseInvoiceForm: FormGroup;
  newSection: any = [0];
  newSection2: any = [0];
  id: any;
  constructor(
    private serInvoices: InvoicesService,

    private service: DataService
  ) {
    this.purchuseInvoiceForm = new FormGroup({
      serialNumber: new FormControl(''),
      model: new FormControl(''),
      addedAt: new FormControl(''),

      quantity: new FormControl(''),
      price: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.service.currentMessage.subscribe((id) => {
      this.id = id;
      console.log('id for ', id);
    });
  }
  onSubmit() {
    console.log(this.id);

    console.log('form', this.purchuseInvoiceForm.value);

    this.serInvoices
      .addPurchuseInvoice(this.id, this.purchuseInvoiceForm.value)
      .subscribe((res) => {
        console.log('form', this.purchuseInvoiceForm.value);
        console.log('added', res);
      });
  }
  addNewSection() {
    this.newSection.push(2);
  }
  addNewSection2() {
    this.newSection2.push(2);
  }
}
