import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PendingService } from '../../services/pending.service';

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
    );
  }
  ngOnInit(): void {}
}
