import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-outside',
  templateUrl: './maintenance-outside.component.html',
  styleUrls: ['./maintenance-outside.component.css']
})
export class MaintenanceOutsideComponent implements OnInit {
  started: boolean = false;
  form: FormGroup;
  submitted: boolean;
  submitted2: boolean;

  maintenanceForm: FormGroup;
  constructor(private _fb: FormBuilder,public _MaintenanceService: MaintenanceService) { }

  ngOnInit(): void {
    this.creteForm();
    this.createmaintenanceForm()

  }
  createmaintenanceForm(){
    this.maintenanceForm = this._fb.group({
      shopName: ["", [Validators.required]],
      recipient: ["", [Validators.required]],
      deliveryMan: ["", [Validators.required]],
      cost: ["", [Validators.required]],
      repaired:["", [Validators.required]],
    });
  }
  creteForm() {
    this.form = this._fb.group({
      serialNumber: ["", [Validators.required]],
    });
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  onSubmit(){
    this.submitted=true;
     if (this.form.valid) {

      this._MaintenanceService.startMaitenanceOutsideStore(this.form.value.serialNumber, localStorage.getItem("id")).subscribe((res: any) => {
        console.log(res)
        if (res.message == 'Maintainence Started successfully') {
          this.started = true;


        }else{
          this.alertWithFail(res.message);

        }
      }, (err) => {
        console.log(err)

      })
      console.log(this.form.value.serialNumber, localStorage.getItem("id"))
    }
   }
   submitMaitenanceOutside(){
    this.submitted2=true;
    if (this.maintenanceForm.valid) {

      this._MaintenanceService.submitMaintenanceOutsideStore(this.form.value.serialNumber, localStorage.getItem("id"),this.maintenanceForm.value).subscribe((res: any) => {
        console.log(res)
        if (res.message == 'Maintainence Finished successfully') {
          this.alertWithSuccess(res.message);


        }else{
          this.alertWithFail(res.message);

        }
      }, (err) => {
        console.log(err)

      })


      console.log(this.maintenanceForm.value)
    }
   }

}
