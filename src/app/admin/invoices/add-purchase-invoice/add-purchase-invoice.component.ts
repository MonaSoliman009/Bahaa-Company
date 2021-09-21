import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  id: any;
  today: any;
  constructor(
    private serInvoices: InvoicesService,

    private service: DataService
  ) {
    this.purchuseInvoiceForm = new FormGroup({
      purchaseNumber: new FormControl(''),
      purchaseDate: new FormControl(''),
      supplier: new FormControl(''),
      products: new FormArray([
        new FormGroup({
          serialNumber: new FormControl(''),
          model: new FormControl(''),
          addedAt: new FormControl(''),
          quantity: new FormControl(''),
          price: new FormControl(''),
        }),
      ]),
      quantity: new FormControl(''),
    });
  }

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
    console.log(this.today);
    this.service.currentMessage.subscribe((id) => {
      this.id = id;
      console.log('id for ', id);
    });
  }
  get Products() {
    return this.purchuseInvoiceForm.get('products') as FormArray;
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

}
