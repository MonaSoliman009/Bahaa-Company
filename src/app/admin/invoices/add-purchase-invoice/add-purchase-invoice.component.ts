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
  newAccessories: any = [0];
  accesoriesOptions:any
displayAccesoryField:boolean=false
  id: any;
  today: any;
  constructor(private serInvoices: InvoicesService) {
    this.purchuseInvoiceForm = new FormGroup({
      purchaseNumber: new FormControl(''),

      supplier: new FormControl(''),
      products: new FormArray([
        new FormGroup({
          serialNumber: new FormControl(''),
          model: new FormControl(''),

          quantity: new FormControl(''),
          price: new FormControl(''),
        }),
      ]),
      accessories: new FormArray([
        new FormGroup({
          type: new FormControl(''),
          price: new FormControl(''),
          quantity: new FormControl(''),
        }),
      ]),
    });
  }
  setRadio(val) {
    console.log(val);
    this.accesoriesOptions=val
    if (val == 1) {
      this.displayAccesoryField = true;

      //  this.Accessories.push(
      //    new FormGroup({
      //      type: new FormControl(''),
      //      price: new FormControl(''),
      //      quantity: new FormControl(''),
      //    })
      //  );
      // this.newAccessories.push()
    } else {
      this.displayAccesoryField = false;
  this.purchuseInvoiceForm.value.accessories = [];

    }
  }
  ngOnInit(): void {}
  get Products() {
    return this.purchuseInvoiceForm.get('products') as FormArray;
  }
  get Accessories() {
    return this.purchuseInvoiceForm.get('accessories') as FormArray;
  }
  onSubmit() {
    this.id = localStorage.getItem('id');
    console.log('idt', this.id);
    if (this.accesoriesOptions = 0) {
this.purchuseInvoiceForm.value.accessories = [];

}
    console.log('form', this.purchuseInvoiceForm.value.accessories=[]);
   
    console.log('form', this.purchuseInvoiceForm.value);
    this.serInvoices
      .addPurchuseInvoice(this.id, this.purchuseInvoiceForm.value)
      .subscribe((res) => {
        console.log('form', this.purchuseInvoiceForm.value);
        console.log('response', res);
      });
  }
  adddNewSection() {
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
  addAccessories() {
    this.Accessories.push(
      new FormGroup({
        type: new FormControl(''),
        price: new FormControl(''),
        quantity: new FormControl(''),
      })
    );
    this.newAccessories.push()
  }
  addNewSection() {
    this.newSection.push(2);
  }
}
