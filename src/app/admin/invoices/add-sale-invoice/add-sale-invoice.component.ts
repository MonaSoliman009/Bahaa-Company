import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart } from '@angular/router';
import { SaleInvoice } from '../../model/sale-invoice';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-sale-invoice',
  templateUrl: './add-sale-invoice.component.html',
  styleUrls: ['./add-sale-invoice.component.css'],
})
export class AddSaleInvoiceComponent implements OnInit {
  newSection: any = [0];
  saleInvoiceForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.saleInvoiceForm = this.formBuilder.group({
      customerName: new FormControl(''),
      price: new FormControl(''),
      date: new FormControl(''),
      Products: this.formBuilder.array([
        {
          productId: new FormControl(''),
          quantity: new FormControl(''),
          configuration: new FormGroup({
            cpu: new FormControl(''),
            withCharger: new FormControl(''),
            ram: new FormControl(''),
            hard: new FormControl(''),
          }),
        },
      ]),

      seller_id: new FormControl(''),
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log('value of form', this.saleInvoiceForm.value);
  }
  addNewSection() {
    this.newSection.push(2);
  }
}
