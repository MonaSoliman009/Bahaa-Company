import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _fb: FormBuilder,public _ProductService:ProductService) { }
  form: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.creteForm();

  }
  creteForm() {
    this.form = this._fb.group({
      serialNumber: ["", [Validators.required]],
      model: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      price: ["", [Validators.required]],
      purchaseSerialNumber: [""],

    });
  }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  };
  alertWithSuccess() {
    Swal.fire('Saves', "Saved Successfully", 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  saveProduct(){
    this.submitted=true;
    if (this.form.valid) {
      console.log(this.form.value);
      this._ProductService.addNewProduct(localStorage.getItem("emp"),this.form.value).subscribe((res)=>{
        console.log(res);
        this.alertWithSuccess()
      },(err)=>{
        console.log(err);
this.alertWithFail()
      })
    }
  }
}
