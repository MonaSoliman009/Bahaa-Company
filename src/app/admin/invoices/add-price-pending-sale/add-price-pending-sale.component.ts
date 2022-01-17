import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PendingService } from '../../services/pending.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-price-pending-sale',
  templateUrl: './add-price-pending-sale.component.html',
  styleUrls: ['./add-price-pending-sale.component.css'],
})
export class AddPricePendingSaleComponent implements OnInit {
  addFormPrice: FormGroup;
  SelectedPending: any;
  constructor(
    private modalService: NgbModal,
    public activemodal: NgbActiveModal,
    private fromBuilder: FormBuilder,
    private PendingService: PendingService
  ) {
    this.addFormPrice = this.fromBuilder.group({
      price: [''],
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
  addprice() {
    this.PendingService.currentId.subscribe((res) => {
      this.SelectedPending = res;
      console.log(
        ' this.SelectedPending',
        this.SelectedPending,
        this.addFormPrice.value
      );
    });
    this.PendingService.addPriceForPending(
      this.SelectedPending,
      this.addFormPrice.value
    ).subscribe((res)=>{
      console.log(res);
      this.alertWithSuccess("Saved Successfully")
    },(error)=>{
      console.log(error);
      this.alertWithFail(error.error)
    });
  }
  ngOnInit(): void {}
}
