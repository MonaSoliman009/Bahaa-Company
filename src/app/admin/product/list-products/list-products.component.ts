import { Component, OnInit } from '@angular/core';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';import { ModelsService } from '../../services/models.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products:any;
  constructor( public _ProductService: ProductService,  private _fb: FormBuilder) { }
  form: FormGroup;
  submitted: boolean;
  Serial:any;
  model:any;
  purchaseSerialNumber: any;
  ngOnInit(): void {
    this.allProducts();
    this.creteForm()
  }
 allProducts(){
   this._ProductService.getAllProduct().subscribe((res)=>{
      this.products=res
   },(error)=>{


   })
 }
 alertWithFail(msg) {
  Swal.fire('Failed', msg, 'error').then(
    (res) => {
      location.reload();
    }
  );
};
alertWithSuccess() {
  Swal.fire('Saved', "Saved Successfully", 'success').then(
    (res) => {
      location.reload();
    }
  );
}
alertWithSuccessDeleted() {
  Swal.fire('Deleted', "Deleted Successfully", 'success').then(
    (res) => {
      location.reload();
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
EditProduct() {
  this.submitted=true;
  if (this.form.valid) {
    this._ProductService.updateProduct(this.Serial,this.form.value).subscribe((res)=>{
      this.alertWithSuccess();
    },(error)=>{

      this.alertWithFail(error.error);

    });


  }
 

}
deleteProduct(serialNumber) {
    

  this._ProductService.deleteProduct(serialNumber).subscribe((res) => {
    this.alertWithSuccessDeleted();
  },(error)=>{
    this.alertWithFail("Try Again Later");

  });
}
}
