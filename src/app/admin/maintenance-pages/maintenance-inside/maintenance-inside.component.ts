import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProductService } from '../../services/product.service';

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
 
i:number=1;
  submitted: boolean;
  submitted2: boolean;
  displayRecomendedSerial = true;
  allSerialNumbers = new Array();
  Serial: any;
  MaintenanceInsideForm: FormGroup;
  products: any;
  @ViewChild('Serial') serial: ElementRef;

  constructor(private _fb: FormBuilder, public _MaintenanceService: MaintenanceService,private _ProductService: ProductService) { }

  ngOnInit(): void {
    this.creteForm();
    this.creteMaintenanceInsideForm();
    this.getAllproducts();
  }

  addNewSection() {
    this.MaintenanceData.push(this.newMaintenanceData())

    this.newSection.push(2);

  }
  addNewPart() {
    this.sparePartsData.push(this.newsparePartsData());
  
   
    this.newPart.push(1)
    console.log(this.newPart)

  }
  onItemChange(value){
    for(var i=this.MaintenanceData.value.length;i>0;i--){
      this.MaintenanceData.removeAt(i-1)

    }
    for(var i=this.sparePartsData.value.length;i>0;i--){
      this.sparePartsData.removeAt(i-1)
  
    }
    this.MaintenanceData.push(this.newMaintenanceData())

    console.log(" Value is : ", this.MaintenanceData.value );
 }
 onItemChange2(value){
  for(var i=this.sparePartsData.value.length;i>0;i--){
    this.sparePartsData.removeAt(i-1)

  }
  for(var i=this.MaintenanceData.value.length;i>0;i--){
    this.MaintenanceData.removeAt(i-1)

  }
  this.sparePartsData.push(this.newsparePartsData())

  console.log(" Value is : ", this.sparePartsData.value );
}
  creteForm() {
    this.form = this._fb.group({
      serialNumber: ["", [Validators.required]],
    });
  }
  creteMaintenanceInsideForm() {
    this.MaintenanceInsideForm =  this._fb.group({
      isAdded: ['',[Validators.required]],
       Existence: [''],
      sparePartsData: this._fb.array([]) ,
      MaintenanceData:this._fb.array([]) ,
      // Existence: new FormControl(''),
      // inside:new FormControl(''),
      repaired:['',[Validators.required]]
    });
    // this.sparePartsData.push(this.newsparePartsData())
    // this.MaintenanceData.push(this.newMaintenanceData())

  }
  
get sparePartsData() : FormArray {
  return this.MaintenanceInsideForm.get("sparePartsData") as FormArray
}
get MaintenanceData() : FormArray {
  return this.MaintenanceInsideForm.get("MaintenanceData") as FormArray
}
newsparePartsData(): FormGroup {
  return this._fb.group({
    serialNumber: [''],
  
      isInside:[''],
      product:['']
  
  })
}
newMaintenanceData(): FormGroup {
  return this._fb.group({
    
    sparePartNumber:['']
  })
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
    // this.started = true;

    if (this.form.valid) {
      this._MaintenanceService.startMaitenanceInsideStore(this.Getserial(), localStorage.getItem("id")).subscribe((res: any) => {
        console.log(res)
        if (res.message == 'Maintainence Started successfully') {
          this.started = true;

        }else{
          this.alertWithFail(res.message);

        }
      }, (err) => {
        this.alertWithFail(err);

      })
      console.log(this.form.value.serialNumber, localStorage.getItem("emp"))
    }
  }
  onSubmit(){
   this.submitted2=true;
        // console.log(this.MaintenanceInsideForm.value)

   if(this.MaintenanceInsideForm.valid){
     console.log(this.MaintenanceInsideForm.value);
     var spareData=[];
     for(var i=0;i<this.MaintenanceInsideForm.value.sparePartsData.length;i++){
      spareData.push({
        serialNumber:this.MaintenanceInsideForm.value.sparePartsData[i].serialNumber,
        insideProduct:{
          isInside: this.MaintenanceInsideForm.value.sparePartsData[i].isInside,
           product: this.MaintenanceInsideForm.value.sparePartsData[i].product
        }
      })
     }
     console.log(spareData);
     var Maintenancedata={
      isAdded:this.MaintenanceInsideForm.value.isAdded,
      sparePartNumber:[]
     }
     for(var i=0;i<this.MaintenanceInsideForm.value.MaintenanceData.length;i++){
      Maintenancedata.sparePartNumber.push(this.MaintenanceInsideForm.value.MaintenanceData[i].sparePartNumber)
     }
     for(var i=0;i<this.MaintenanceInsideForm.value.sparePartsData.length;i++){
      Maintenancedata.sparePartNumber.push(this.MaintenanceInsideForm.value.sparePartsData[i].serialNumber)
     }
     console.log(Maintenancedata);
     this._MaintenanceService.submitMaintenanceInsideStore(this.Getserial(),localStorage.getItem("id"),spareData,Maintenancedata,this.MaintenanceInsideForm.value.repaired).subscribe((res:any)=>{
      console.log(res);
      if (res.message == 'Maintainence Finished successfully') {
this.alertWithSuccess(res.message )
      }else{
        this.alertWithFail(res.message);

      }
     },(err)=>{
       console.log(err);
       this.alertWithFail(err);

     })
   }
  }
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then(
      (res) => {
        location.reload();
      }
    );
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
  Getserial() {
    const valueInput = this.serial.nativeElement.value;
    this.Serial = valueInput;
    return valueInput;
  }
}
