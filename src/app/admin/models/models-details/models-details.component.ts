import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelPriceService } from '../../services/model-price.service';
// import { ModelsService } from '../../services/models.service';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';import { ModelsService } from '../../services/models.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-models-details',
  templateUrl: './models-details.component.html',
  styleUrls: ['./models-details.component.css'],
})
export class ModelsDetailsComponent implements OnInit {
  pricing: any;
  constructor(
    private _ModelsService: ModelsService,
    private modalSer: NgbModal,
    public active: NgbActiveModal,
    private _fb: FormBuilder
  ) {}
  Models: any;
  modelId: any;
  modelName: any;
  modelPrice: any;
  form: FormGroup;
  submitted: boolean;
  ngOnInit(): void {
    this.listModels();
    this.creteForm()
  }
  listModels() {
    this._ModelsService.listModels().subscribe(
      (res) => {
        // $(function () {
        //   $('table').DataTable();
        // });
        console.log(res);
        this.pricing = res;
      },
      (err) => {
        console.log(err);
      }
    );
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
  EditModel() {
    this.submitted=true;
    if (this.form.valid) {
      this._ModelsService.updateModel(this.form.value,this.modelId).subscribe((res)=>{
        this.alertWithSuccess();
      },(error)=>{

        this.alertWithFail("Try Again Later");

      });


    }
   

  }

  creteForm() {
    this.form = this._fb.group({
      model: ["", [Validators.required]],
      price: ["", [Validators.required]],
  

    });
  }
  deletemodel(id) {
    

    this._ModelsService.deleteModel(id).subscribe((res) => {
      this.alertWithSuccessDeleted();
    },(error)=>{
      this.alertWithFail("Try Again Later");

    });
  }


  
}
