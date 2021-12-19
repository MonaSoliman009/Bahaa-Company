// import { Component, OnInit } from '@angular/core';
// import { ModelPriceService } from '../../services/model-price.service';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { EditPricingModelComponent } from '../edit-pricing-model/edit-pricing-model.component';

// @Component({
//   selector: 'app-pricing-model',
//   templateUrl: './pricing-model.component.html',
//   styleUrls: ['./pricing-model.component.css'],
// })
// export class PricingModelComponent implements OnInit {
//   pricing: [];
//   idOfEditPrice: any;
//   constructor(

//   ) {}

//   ngOnInit(): void {
//     this.ser.listMissingPiecesReport().subscribe((res) => {
//       this.pricing = res;

//       console.log('list price', res);
//     });
//   }
//   EditModel(id) {
//     this.idOfEditPrice = id;
//     this.ser.changeidofEditPrice(this.pricing);
//     const modelRef = this.modalSer.open(EditPricingModelComponent);
//     modelRef.componentInstance.id = 0;
//     modelRef.componentInstance.data = {};
//     modelRef.result.then((res) => {
//       console.log(res);
//     });
//   }
//   deletemodel(id) {
//     console.log(id, 'id');

//     this.ser.DeleteModel(id).subscribe((res) => {
//       console.log(res);
//     });
//   }
// }
