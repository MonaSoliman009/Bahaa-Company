import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsService } from '../../services/models.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.css']
})
export class AddNewModelComponent implements OnInit {

  constructor(private _fb: FormBuilder,private _ModelsService:ModelsService) { }
  form: FormGroup;
  submitted: boolean;
  ngOnInit(): void {
    this.creteForm()
  }
  creteForm() {
    this.form = this._fb.group({
      model: ["", [Validators.required]],
      price: ["", [Validators.required]],
  

    });
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
  saveModel(){
    this.submitted=true;
    if (this.form.valid) {
      console.log(this.form.value)
   this._ModelsService.addNewModel(this.form.value).subscribe((res)=>{
this.alertWithSuccess()

   },(error)=>{

  this.alertWithFail(error.error)

   })


    }


  }
}
