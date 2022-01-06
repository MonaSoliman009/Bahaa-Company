import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    public _ProductService: ProductService,
    private _ModelsService: ModelsService
  ) {}
  form: FormGroup;
  submitted: boolean;
  search: string;
  Serial: any;
  AllProduct: any;
  // location = new Array();
  displayRecomendedSerial = false;
  allSerialNumbers = new Array();
  @ViewChild('Model') Model: ElementRef;

  ngOnInit(): void {
    this.creteForm();
    this.listModels();
  }
  listModels() {
    this._ModelsService.listModels().subscribe(
      (res) => {
        this.AllProduct = res;
        for (let val of this.AllProduct) {
          // console.log(val.serialNumber);
          let stringSerial = val.model.toString();
          console.log(stringSerial);

          this.allSerialNumbers.push(val.model.toString());
          console.log('array of serial', this.allSerialNumbers);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  creteForm() {
    this.form = this._fb.group({
      serialNumber: ['', [Validators.required]],
      model: ['', [Validators.required]],
      purchaseSerialNumber: [''],
    });
  }
  selectedSerial(val) {
    this.Model.nativeElement.value = val;
    this.displayRecomendedSerial = true;
  }
  selectedItem(item) {
    console.log(item);
  }
  data(val) {
    return val;
  }
  Getserial() {
    const valueInput = this.Model.nativeElement.value;
    this.Serial = valueInput;
    return this.Serial;
  }
  searchSerial(val) {
    // console.log(data);

    this.displayRecomendedSerial = false;
    // let index = this.allSerialNumbers.indexOf(123);
    // console.log(index);
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then((res) => {
      location.reload();
    });
  }
  alertWithSuccess() {
    Swal.fire('Saves', 'Saved Successfully', 'success').then((res) => {
      location.reload();
    });
  }
  saveProduct() {
    this.submitted = true;
    console.log(  this.form.value);
    if (this.form.valid) {
      this.form.value.model = this.Getserial();
      // this.Getserial()
      if(this.form.value.purchaseSerialNumber!=""){
        console.log("hey")
        var product:any={
 
          serialNumber: this.form.value.serialNumber,
          model: this.form.value.model,
          purchaseSerialNumber: this.form.value.purchaseSerialNumber
       
      }

      }else{
       
      product={
 
          serialNumber: this.form.value.serialNumber,
          model: this.form.value.model       
      }
      }
      console.log(product)

        this._ProductService
          .addNewProduct(localStorage.getItem('id'), product)
          .subscribe(
            (res) => {
              console.log(res);
              this.alertWithSuccess();
            },
            (err: any) => {
              console.log(err);
              this.alertWithFail(err.error);
            }
          );
      
    }
  }
}
