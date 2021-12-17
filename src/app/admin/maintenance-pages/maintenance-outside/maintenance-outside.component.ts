import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MaintenanceService } from '../../services/maintenance.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-maintenance-outside',
  templateUrl: './maintenance-outside.component.html',
  styleUrls: ['./maintenance-outside.component.css']
})
export class MaintenanceOutsideComponent implements OnInit {
  started: boolean = false;
  public filter: any = '';

  form: FormGroup;
  submitted: boolean;
  submitted2: boolean;
  displayRecomendedSerial = true;
  allSerialNumbers = new Array();
  Serial: any;
  products: any;
  search: string;
  maintenanceForm: FormGroup;

  @ViewChild('Serial') serial: ElementRef;

  constructor(private _fb: FormBuilder,public _MaintenanceService: MaintenanceService,private _ProductService: ProductService) { }

  ngOnInit(): void {
    this.creteForm();
    this.createmaintenanceForm()
    this.getAllproducts();

  }
  createmaintenanceForm(){
    this.maintenanceForm = this._fb.group({
      shopName: ["", [Validators.required]],
      recipient: ["", [Validators.required]],
      deliveryMan: ["", [Validators.required]],
      // cost: ["", [Validators.required]],
      // repaired:["", [Validators.required]],
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
  Getserial() {
    const valueInput = this.serial.nativeElement.value;
    this.Serial = valueInput;
    return valueInput;
  }
  onSubmit(){
    console.log(this.Getserial());
    console.log(this.form.controls.serialNumber.errors);
    
    this.submitted=true;
     if (this.form.valid) {

      this._MaintenanceService.startMaitenanceOutsideStore(this.Getserial(), localStorage.getItem("id")).subscribe((res: any) => {
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
    
      this._MaintenanceService.submitMaintenanceOutsideStore(this.Getserial(), localStorage.getItem("id"),this.maintenanceForm.value).subscribe((res: any) => {
        console.log(res)
        console.log("ccc")
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
   getAllproducts() {
    this._ProductService.getAllProduct().subscribe((res) => {
      this.products = res;
      for (let val of this.products) {
        let stringSerial = val.serialNumber.toString();
        console.log(stringSerial);

        this.allSerialNumbers.push(val.serialNumber.toString());
      }
    });
  }
  selectedSerial(val) {
    this.serial.nativeElement.value = val;
    this.displayRecomendedSerial = true;
    // this.form.controls.serialNumber.valid;

  }
  data(val) {
    return val;
  }
  searchSerial(val) {
    this.displayRecomendedSerial = false;
    

    let filterd = this.allSerialNumbers.filter(this.data);

  }
  
}
