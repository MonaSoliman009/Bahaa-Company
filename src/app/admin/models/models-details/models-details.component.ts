import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelPriceService } from '../../services/model-price.service';
// import { ModelsService } from '../../services/models.service';
import { EditPricingModelComponent } from '../edit-pricing-model/edit-pricing-model.component';

@Component({
  selector: 'app-models-details',
  templateUrl: './models-details.component.html',
  styleUrls: ['./models-details.component.css'],
})
export class ModelsDetailsComponent implements OnInit {
  pricing: any;
  constructor(
    private ser: ModelPriceService,
    private modalSer: NgbModal,
    public active: NgbActiveModal
  ) {}
  Models: any;
  idOfEditPrice: any;
  ngOnInit(): void {
    this.listModels();
  }
  listModels() {
    this.ser.listMissingPiecesReport().subscribe(
      (res) => {
        $(function () {
          $('table').DataTable();
        });
        console.log(res);
        this.pricing = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  EditModel(id) {
    this.idOfEditPrice = id;
    this.ser.changeidofEditPrice(this.pricing);
    const modelRef = this.modalSer.open(EditPricingModelComponent);
    modelRef.componentInstance.id = 0;
    modelRef.componentInstance.data = {};
    modelRef.result.then((res) => {
      console.log(res);
    });
  }
  deletemodel(id) {
    console.log(id, 'id');

    this.ser.DeleteModel(id).subscribe((res) => {
      console.log(res);
    });
  }
}
