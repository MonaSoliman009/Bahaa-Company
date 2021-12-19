import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesService } from '../../services/invoices.service';
import { PendingService } from '../../services/pending.service';

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
  AddSupplier() {
    this.ser.currentId.subscribe((res) => {
      console.log(res);
      this.id = res;
    });
    this.ser
      .AddSupplier(this.id, this.EditFormsupplier.value)
      .subscribe((res) => {
        console.log(res, 'data of form');
      });
  }
  ngOnInit(): void {}
}
