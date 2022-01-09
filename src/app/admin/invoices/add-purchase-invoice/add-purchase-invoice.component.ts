import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';

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
  newAccessories: any = [0];
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
    this.getModels();
    this.createForm();
  }
  createForm() {
    this.purchuseInvoiceForm = this._fb.group({
      supplier: ['', [Validators.required]],
      products: this._fb.array([]),
      accessories: this._fb.array([]),
    });
  }
  get products(): FormArray {
    return this.purchuseInvoiceForm.get('products') as FormArray;
  }
  get accessories(): FormArray {
    return this.purchuseInvoiceForm.get('accessories') as FormArray;
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
  getModels() {
    this._ModelPriceService.listMissingPiecesReport().subscribe(
      (res) => {
        console.log(res);
        this.Modals = res;
        for (let val of this.Modals) {
          console.log(val);
          let stringSerial = val.model;
          console.log(val.model);

          this.allModels.push(val.model);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  selectedSerial(val) {
    this.model.nativeElement.value = val;
    this.displayRecomendedSerial = true;
    // this.form.controls.serialNumber.valid;
  }
  data(val) {
    return val;
  }
  searchModel(val) {
    this.displayRecomendedSerial = false;

    let filterd = this.allModels.filter(this.data);
  }

  onSubmit() {
    this.id = localStorage.getItem('id');
    console.log('idt', this.id);
    if ((this.accesoriesOptions = 0)) {
      this.purchuseInvoiceForm.value.accessories = [];
    }
    console.log('form', (this.purchuseInvoiceForm.value.accessories = []));

    console.log('form', this.purchuseInvoiceForm.value);
    // this.serInvoices
    //   .addPurchuseInvoice(this.id, this.purchuseInvoiceForm.value)
    //   .subscribe((res) => {
    //     console.log('form', this.purchuseInvoiceForm.value);
    //     console.log('response', res);
    //   });
  }
  adddNewSection() {
    // console.log(array);
    this.products.push(this.newproductsData());
  }

  addAccessories(){
    this.accessories.push(this.newaccessoriesData());

  }
}
