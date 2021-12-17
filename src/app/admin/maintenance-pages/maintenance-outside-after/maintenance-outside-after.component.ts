import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-maintenance-outside-after',
  templateUrl: './maintenance-outside-after.component.html',
  styleUrls: ['./maintenance-outside-after.component.css'],
})
export class MaintenanceOutsideAfterComponent implements OnInit {
  maintenanceForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public _MaintenanceService: MaintenanceService,
    private _ProductService: ProductService
  ) {}
  submitted2: boolean;
  displayRecomendedSerial = true;
  search: string;

  allSerialNumbers = new Array();
  Serial: any;
  products: any;
  started: boolean = false;
  @ViewChild('Serial') serial: ElementRef;

  public filter: any = '';
  ngOnInit(): void {
    this.createmaintenanceForm();
    this.getAllproducts();
  }
  createmaintenanceForm() {
    this.maintenanceForm = this._fb.group({
      serialNumber: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      repaired: ['', [Validators.required]],
    });
  }
  Getserial() {
    const valueInput = this.serial.nativeElement.value;
    this.Serial = valueInput;
    return valueInput;
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
  submitMaitenanceOutside() {
    this.submitted2 = true;
    if (this.maintenanceForm.valid) {
      this._MaintenanceService.submitMaintenanceOutsideStoreAfter(this.Getserial(), localStorage.getItem("id"),this.maintenanceForm.value).subscribe((res: any) => {
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

      console.log(this.maintenanceForm.value);
    }
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
