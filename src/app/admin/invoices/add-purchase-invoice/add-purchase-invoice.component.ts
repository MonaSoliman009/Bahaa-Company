import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { InvoicesService } from '../../services/invoices.service';
import { ModelPriceService } from '../../services/model-price.service';

@Component({
  selector: 'app-add-purchase-invoice',
  templateUrl: './add-purchase-invoice.component.html',
  styleUrls: ['./add-purchase-invoice.component.css'],
})
export class AddPurchaseInvoiceComponent implements OnInit {
  purchuseInvoiceForm: FormGroup;
  newSection: any = [0];
  accesoriesOptions: any;
  showSupplierInput: boolean = true;
  displayAccesoryField: boolean = false;
  id: any;
  today: any;
  allModels = new Array();
  Model: any;
  Modals: any;
  public filter: any = '';
  @ViewChild('Model') model: ElementRef;
  displayRecomendedSerial = true;
  search: string;
  constructor(
    private serInvoices: InvoicesService,
    private _ModelPriceService: ModelPriceService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let typeOfperson = localStorage.getItem('name');
    console.log(typeOfperson);
    if (typeOfperson === 'employee') {
      this.showSupplierInput = false;
    }
  
    this.createForm();
  }
  createForm() {
    this.purchuseInvoiceForm = this._fb.group({
      supplier: [''],
      purchaseCartProducts: this._fb.array([]),
      purchaseCartAccessories: this._fb.array([]),
    });
  }
  get purchaseCartProducts(): FormArray {
    return this.purchuseInvoiceForm.get('purchaseCartProducts') as FormArray;
  }
  get purchaseCartAccessories(): FormArray {
    return this.purchuseInvoiceForm.get('purchaseCartAccessories') as FormArray;
  }
  newproductsData(): FormGroup {
    return this._fb.group({
      serialNumber: [''],
      model: [''],
    });
  }
  newaccessoriesData(): FormGroup {
    return this._fb.group({
      type: [''],
      price: [''],
      quantity: [''],
    });
  }
  setRadio(val) {
    console.log(val);
    this.accesoriesOptions = val;
    if (val == 1) {
      this.displayAccesoryField = true;
    } else {
      this.displayAccesoryField = false;
      this.purchuseInvoiceForm.value.purchaseCartAccessories = [];
    }
  }
  adddNewSection() {
    // console.log(array);
    this.purchaseCartProducts.push(this.newproductsData());
  }

  addAccessories(){
    this.purchaseCartAccessories.push(this.newaccessoriesData());

  }
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
       
      }
    );
  }
  onSubmit() {
    this.id = localStorage.getItem('id');
    console.log('idt', this.id);
 
   

    console.log('form', this.purchuseInvoiceForm.value);
    this.serInvoices
      .addPurchuseInvoice(this.id, this.purchuseInvoiceForm.value)
      .subscribe((res) => {
        console.log('form', this.purchuseInvoiceForm.value);
        console.log('response', res);
        this.alertWithSuccess("Saved Successfully")
      },(error)=>{
        console.log('error', error);
        this.alertWithFail("Try Again")
      });
  }

}
