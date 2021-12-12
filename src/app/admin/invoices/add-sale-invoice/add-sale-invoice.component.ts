import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart } from '@angular/router';
import { SaleInvoice } from '../../model/saleInvoice/sale-invoice';
import { FormBuilder } from '@angular/forms';
import { InvoicesService } from '../../services/invoices.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-add-sale-invoice',
  templateUrl: './add-sale-invoice.component.html',
  styleUrls: ['./add-sale-invoice.component.css'],
})
export class AddSaleInvoiceComponent implements OnInit {
  newSection: any = [0];
  showPriceInput: boolean = true;
  saleInvoiceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private serInvoices: InvoicesService
  ) {
    this.saleInvoiceForm = new FormGroup({
      customerName: new FormControl(''),
      price: new FormControl(''),

      Products: new FormArray([
        new FormGroup({
          productSerialNumber: new FormControl(''),
          quantity: new FormControl(''),
          configuration: new FormGroup({
            cpu: new FormControl(''),
            withCharger: new FormControl(''),

            ram: new FormControl(''),

            hard: new FormControl(''),
          }),
        }),
      ]),
      seller: new FormControl(''),
    });
  }
  ngOnInit(): void {
    let typeOfperson = localStorage.getItem('name');
    console.log(typeOfperson);
    if (typeOfperson === 'employee') {
      this.showPriceInput = false;
    }
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
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then((res) => {
      location.reload();
    });
  }
  onSubmit() {
    this.saleInvoiceForm.patchValue({
      seller: localStorage.getItem('response'),
    });
    console.log('value of form', this.saleInvoiceForm.value);
    this.serInvoices
      .addSaleInvoice(this.saleInvoiceForm.value)
      .subscribe((res) => {
        console.log('success');
        this.alertWithSuccess(res);
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
