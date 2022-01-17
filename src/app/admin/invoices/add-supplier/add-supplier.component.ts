import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesService } from '../../services/invoices.service';
import { PendingService } from '../../services/pending.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnInit {
  EditFormsupplier: FormGroup;
  id: any;
  constructor(
    private fromBuilder: FormBuilder,
    private ser: InvoicesService,
    public activemodal: NgbActiveModal
  ) {
    this.EditFormsupplier = this.fromBuilder.group({
      supplier: [''],
    });
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
  AddSupplier() {
    this.ser.currentId.subscribe((res) => {
      console.log(res);
      this.id = res;
    });
    this.ser
      .AddSupplier(this.id, this.EditFormsupplier.value)
      .subscribe((res) => {
        console.log(res, 'data of form');
        this.alertWithSuccess("Saved Successfully")

      },(error)=>{
        console.log('error', error);
        this.alertWithFail(error.error)
      });
  }
  ngOnInit(): void {}
}
