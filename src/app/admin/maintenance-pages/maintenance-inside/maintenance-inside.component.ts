import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-inside',
  templateUrl: './maintenance-inside.component.html',
  styleUrls: ['./maintenance-inside.component.css'],
})
export class MaintenanceInsideComponent implements OnInit {
  started: boolean = false;
  newSection:any=[0];
  newPart:any=[0];
  form: FormGroup;
  submitted: boolean;

  constructor(private _fb: FormBuilder,public _MaintenanceService:MaintenanceService) {}

  ngOnInit(): void {
    this.creteForm();
  }
 
  addNewSection(){
    this.newSection.push(2)
  }
  addNewPart(){
    this.newPart.push(2)

  }
  creteForm() {
    this.form = this._fb.group({
      serialNumber:["", [Validators.required]],
     
    });
  }
  onStart() {
    this.submitted = true;
    if (this.form.valid ) {
      this.started = true;
      this._MaintenanceService.startMaitenanceInsideStore(this.form.value.serialNumber,localStorage.getItem("emp")).subscribe((res)=>{
console.log(res)
      },(err)=>{
        console.log(err)

      })
     console.log(this.form.value.serialNumber,localStorage.getItem("emp"))
    }
  }
}
