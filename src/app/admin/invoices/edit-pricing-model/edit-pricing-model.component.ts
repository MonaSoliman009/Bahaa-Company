import { Component, OnInit } from '@angular/core';

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModelPriceService } from '../../services/model-price.service';

@Component({
  selector: 'app-edit-pricing-model',
  templateUrl: './edit-pricing-model.component.html',
  styleUrls: ['./edit-pricing-model.component.css'],
})
export class EditPricingModelComponent implements OnInit {
  closeResult = '';
  EditFormPrice: FormGroup;
  SelectedId: any;
  constructor(
    private modalService: NgbModal,
    public activemodal: NgbActiveModal,
    private fromBuilder: FormBuilder,
    private serModel: ModelPriceService
  ) {
    this.EditFormPrice = this.fromBuilder.group({
      price: [''],
      model: [''],
    });
  }

  ngOnInit(): void {
    this.serModel.currentId.subscribe((res) => {
      console.log('id is', res);
      this.SelectedId = res[0];

      this.EditFormPrice.patchValue({
        model: this.SelectedId.model,
        price: this.SelectedId.price,
      });
    });
  }
  EditPrice() {
    console.log(this.EditFormPrice.value);
    this.serModel
      .EditPrice(this.SelectedId._id, this.EditFormPrice.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
