import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart } from '@angular/router';
import { SaleInvoice } from '../../model/sale-invoice';
import { FormBuilder } from '@angular/forms';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-add-sale-invoice',
  templateUrl: './add-sale-invoice.component.html',
  styleUrls: ['./add-sale-invoice.component.css'],
})
export class AddSaleInvoiceComponent implements OnInit {
  newSection: any = [0];
  today: any;
  saleInvoiceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private serInvoices: InvoicesService
  ) {
    this.saleInvoiceForm = new FormGroup({
      customerName: new FormControl(''),
      price: new FormControl(''),
      date: new FormControl(''),
      Products: new FormArray([
        new FormGroup({
          productId: new FormControl(''),
          quantity: new FormControl(''),
          configuration: new FormGroup({
            cpu: new FormControl(''),
            withCharger: new FormControl(''),

            ram: new FormControl(''),

            hard: new FormControl(''),
          }),
        }),
      ]),
      seller_id: new FormControl(''),
    });
  }
  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
    console.log(this.today);
    this.saleInvoiceForm.patchValue({
      date:this.today
    });
  }
  get Products() {
    return this.saleInvoiceForm.get('Products') as FormArray;
  }
  get configuration() {
    return this.saleInvoiceForm.get('configuration') as FormGroup;
  }
  // {
  //       prod
  // uctId: [''],
  //       quantity: [''],
  //       configuration: this.formBuilder.group({
  //         cpu: [''],
  //         withCharger: [''],
  //         ram: [''],
  //         hard: [''],
  //       }),
  //     },

  onSubmit() {
    console.log('value of form', this.saleInvoiceForm.value);
    this.serInvoices
      .addSaleInvoice(this.saleInvoiceForm.value)
      .subscribe((res) => {
        console.log('success');

        console.log(res);
      });
  }
  addNewSection() {
    // console.log(array);
    this.Products.push(
      new FormGroup({
        productId: new FormControl(''),
        quantity: new FormControl(''),
        configuration: new FormGroup({
          cpu: new FormControl(''),
          withCharger: new FormControl(''),

          ram: new FormControl(''),

          hard: new FormControl(''),
        }),
      })
    );
    this.newSection.push();
  }
}
