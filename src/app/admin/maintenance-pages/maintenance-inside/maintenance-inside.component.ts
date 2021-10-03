import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-maintenance-inside',
  templateUrl: './maintenance-inside.component.html',
  styleUrls: ['./maintenance-inside.component.css'],
})
export class MaintenanceInsideComponent implements OnInit {
  started: boolean = false;
  newSection: any = [0];
  newPart: any = [0];
  form: FormGroup;
i:number=0;
  submitted: boolean;
  submitted2: boolean;

  MaintenanceInsideForm: FormGroup;

  constructor(private _fb: FormBuilder, public _MaintenanceService: MaintenanceService) { }

  ngOnInit(): void {
    this.creteForm();
    this.creteMaintenanceInsideForm()
  }

  addNewSection() {
    this.newSection.push(2)
  }
  addNewPart() {
    this.i++;
   
    this.newPart.push(this.i)
    console.log(this.newPart)

  }
  creteForm() {
    this.form = this._fb.group({
      serialNumber: ["", [Validators.required]],
    });
  }
  creteMaintenanceInsideForm() {
    this.MaintenanceInsideForm = new FormGroup({
      isAdded: new FormControl('',Validators.required),
      Existence: new FormControl(''),
      inside:new FormControl(''),
      repaired:new FormControl('',Validators.required)
    });
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  onStart() {
    this.submitted = true;
    this.started = true;

    // if (this.form.valid) {
    //   this._MaintenanceService.startMaitenanceInsideStore(this.form.value.serialNumber, localStorage.getItem("emp")).subscribe((res: any) => {
    //     console.log(res)
    //     if (res.message == 'Maintainence Started successfully') {
    //       this.started = true;

    //     }else{
    //       this.alertWithFail(res.message);

    //     }
    //   }, (err) => {
    //     console.log(err)

    //   })
    //   console.log(this.form.value.serialNumber, localStorage.getItem("emp"))
    // }
  }
  onSubmit(){
   this.submitted2=true;
   if(this.MaintenanceInsideForm.valid){
     console.log(this.MaintenanceInsideForm.value)
   }
  }
}
