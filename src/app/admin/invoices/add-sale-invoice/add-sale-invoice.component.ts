import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, Router, NavigationStart } from '@angular/router';
import { SaleInvoice } from '../../model/saleInvoice/sale-invoice';
import { FormBuilder } from '@angular/forms';
import { InvoicesService } from '../../services/invoices.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-add-sale-invoice',
  templateUrl: './add-sale-invoice.component.html',
  styleUrls: ['./add-sale-invoice.component.css'],
})
export class AddSaleInvoiceComponent implements OnInit {
  newSection: any = [0];
  showdata = false;
  products: any;
  product: any;
  showPriceInput: boolean = true;
  saleInvoiceForm: FormGroup;
  dataOnBlur: {};
  displayRecomendedSerial = false;
  allSerialNumbers = new Array();
  Serial: any;

  // @ViewChild('Serial') serial: ElementRef;
  constructor(
 
    private serInvoices: InvoicesService,
    private _ProductService: ProductService, 
     private _fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
    let typeOfperson = localStorage.getItem('name');
    console.log(typeOfperson);
    if (typeOfperson === 'employee') {
      this.showPriceInput = false;
    }
    // setTimeout(() => {
    //   // this will make the execution after the above boolean has changed
    //   this.serial.nativeElement.focus();
    // }, 0);
    this.getAllproducts();
    this.createSaleForm()
  }
 createSaleForm(){
  this.saleInvoiceForm =this._fb.group({
    customerName:["",Validators.required],
    price:[""],
    seller:[""],
    Products: this._fb.array([])
  })
 }

 get Products() : FormArray {
  return this.saleInvoiceForm.get("Products") as FormArray
}

  getAllproducts() {
    this._ProductService.getAllProduct().subscribe((res) => {
      this.products = res;
      for (let val of this.products) {
        console.log(val.serialNumber);
        let stringSerial = val.serialNumber.toString();
        console.log(stringSerial);

        this.allSerialNumbers.push(val.serialNumber.toString());
      }
    });
  }
  // selectedSerial(val,e) {
  //   this.serial.nativeElement.value = val;
  //   this.displayRecomendedSerial = true;
  //   this.getAllData();
  // }
  data(val) {
    return val;
  }
  searchSerial(val,e) {
    this.displayRecomendedSerial = false;

    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      //Enter keycode
      this.displayRecomendedSerial=true
    }

    let filterd = this.allSerialNumbers.filter(this.data);
    this.Serial=e.target.value
  }
  // Getserial() {
  //   const valueInput = this.serial.nativeElement.value;
  //   this.Serial = valueInput;
  //   return this.Serial;
  // }

  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then((res) => {
      location.reload();
    });
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
       
      }
    );
  }
  onSubmit() {
    this.saleInvoiceForm.patchValue({
      seller: localStorage.getItem('id'),
    });
    let typeOfperson = localStorage.getItem('name');
    console.log(typeOfperson);
    if (typeOfperson === 'employee') {
      this.saleInvoiceForm.patchValue({
        price: null,
      });
    }
    console.log('value of form', this.saleInvoiceForm.value);
    this.serInvoices
      .addSaleInvoice(this.saleInvoiceForm.value)
      .subscribe((res) => {
        console.log('success');
        this.alertWithSuccess(res);
        console.log(res);
      },(error)=>{
        this.alertWithFail(error.error)
      });
  }
  getAllData() {
    console.log(this.Serial);
    this.serInvoices
      .listAllProductBySerial({ serialNumber: this.Serial })
      .subscribe((res) => {
        this.dataOnBlur = res;
        this.showdata = true;

        console.log(res, 'data fron blur');
      });
  }
  enterPressed(e) {
    console.log(e)
   
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      //Enter keycode
      this.Serial=e.target.value
      e.target.blur()
      this.getAllData()
      this.displayRecomendedSerial=true;
     
    }
  }
  newProductData(): FormGroup {
    return this._fb.group({
      productSerialNumber:[""],
      configuration:this._fb.group({
        cpu: [""],
        withCharger: [""],

        ram: [""],

        hard:[""]

      })


    })
  }
  addNewSection() {
    // console.log(array);
    this.Products.push(this.newProductData())

    // this.newSection.push(1);
  }
}
