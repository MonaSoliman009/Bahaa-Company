import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { TestPhaseService } from '../../services/test-phase.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProductService } from '../../services/product.service';
import { Loaction } from '../../model/loaction';
@Component({
  selector: 'app-test-phase',
  templateUrl: './test-phase.component.html',
  styleUrls: ['./test-phase.component.css'],
})
export class TestPhaseComponent implements OnInit {
  started: boolean = false;
  testForm: FormGroup;
  startTest: FormGroup;
  Serial: any;
  submitted: boolean;
  FalsyValue = false;
  finished: boolean;
  testerId: string;
  search: string;
 locationA={
 
  };
 locationB={
 
  }
  locationC={
 
    }
    locationD={
  
      }
  displayRecomendedSerial = false;
  allSerialNumbers = new Array();
  AllProduct: any;
  private selectedLink: string;
  msg: any;
 
  locationInterface: Loaction;
  @ViewChild('Serial') serial: ElementRef;
  @ViewChild('partProbleminp') LocationA: ElementRef;
  @ViewChild('locationB') LocationB: ElementRef;
  @ViewChild('locationC') LocationC: ElementRef;
  @ViewChild('locationD') LocationD: ElementRef;
  constructor(
    private _TestPhaseService: TestPhaseService,
    private service: DataService,
    private product: ProductService,  
    private _fb: FormBuilder
  ) {
    this.startTest = new FormGroup({
      productserialNumber: new FormControl(''),
      testerId: new FormControl(''),
    });

  }

  ngOnInit(): void {
  this.getAllProducts()
    this.testerId = localStorage.getItem('id');
    this.createTestForm()
  }

  createTestForm(){

    this.testForm = this._fb.group({
      power:  ['',[Validators.required]],
      condition:this._fb.group( {
        aPart: this._fb.group({
          avaliable: ['',[Validators.required]],
          hasScratch:  [''],
          broken: [''],
          dent: [''],
        }),
        bPart:this._fb.group({
          avaliable: ['',[Validators.required]],
          hasScratch:[''],
          broken: [''],
          dent: [''],
        }),
        cPart: this._fb.group({
          avaliable: ['',[Validators.required]],
          hasScratch: [''],
          broken: [''],
          dent: [''],
        }),
        dPart:this._fb.group({
          avaliable:  ['',[Validators.required]],
          hasScratch:  [''],
          broken:  [''],
          dent:  [''],
        })
     
      }),
      configuration: this._fb.group({
        cpu: ['',[Validators.required]],
        generation:['',[Validators.required]],
        ram: ['',[Validators.required]],
        hdd: ['',[Validators.required]],
      }),
      battery:this._fb.group({
        avaliable:['',[Validators.required]],
        batteryHealth:   [''],
      }),
      lcd: this._fb.group({
        avaliable: ['',[Validators.required]],
        status:  [''],
        hasScratch:  [''],
        hasSpots:  [''],
        hasLine:  [''],
        hasPixel:  [''],
        broken:  [''],
      }),
      bazel:this._fb.group( {
        avaliable:  ['',[Validators.required]],
        broken:   [''],
        location:  [''],
      }),
      keyboard:this._fb.group({
        avaliable: ['',[Validators.required]],
        working:   [''],
      }),
      dvd:this._fb.group( {
        avaliable: ['',[Validators.required]],
        working: [''],
      }),
      speakers:this._fb.group({
        avaliable: ['',[Validators.required]],
        working: [''],
      }),
      camera: this._fb.group({
        avaliable: ['',[Validators.required]],
        working:  [''],
      }),
      hasVGAorIntel: ['',[Validators.required]],
    });



  }
  getAllProducts(){

    this.product.getAllProduct().subscribe((res) => {
      console.log('res from serial api', res);
      this.AllProduct = res;
      for (let val of this.AllProduct) {
        console.log(val.serialNumber);
        let stringSerial = val.serialNumber.toString();
        console.log(stringSerial);

        this.allSerialNumbers.push(val.serialNumber.toString());
        console.log('array of serial', this.allSerialNumbers);
      }
      console.log('array of serial', this.allSerialNumbers);
    });

  }

  selectedSerial(val) {
    this.serial.nativeElement.value = val;
    this.displayRecomendedSerial = true;
  }
  selectedItem(item) {
    console.log(item);
  }
  data(val) {
    return val;
  }
  searchSerial(val) {
    // console.log(data);

    this.displayRecomendedSerial = false;
    // let index = this.allSerialNumbers.indexOf(123);
    // console.log(index);
  }
  processStarted() {
    this.started = true;
  }
 

  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
       
      }
    );
  }
  alertWithSuccess(msg) {
    Swal.fire('Saved', "Saved Successfully", 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  Getserial() {
    const valueInput = this.serial.nativeElement.value;
    console.log('Serial numer', valueInput);
    this.Serial = valueInput;
    return this.Serial;
  }
  StartTest() {
    this.startTest.patchValue({
      productserialNumber: this.Getserial(),
      testerId: this.testerId,
    });
  

    this._TestPhaseService
      .startTest(
        this.startTest.value.productserialNumber,
    localStorage.getItem("id")
      )
      .subscribe((res: any) => {
        console.log('message', res);
        if (res.message == 'Test Started successfully') {
          this.started = true;
        } else {
          this.msg = res.message;
          this.alertWithFail(res.message);
        }
      });
  }
  onItemChange(value) {
    

    this.finished= value.target.value
  }
  sourceBind(name: boolean) {
    console.log('delected for source', name);

    if (name == false) {
      this.finished = false;
    } else if (name == true) {
      this.finished = true;
    }
  }
  
 
  onSubmit() {
    this.submitted=true;
    if (this.testForm.controls['condition'].value.dPart.avaliable == false) {
      this.testForm.controls['condition'].patchValue({
        dPart: {
          hasScratch: false,
          broken: false,
          dent: false,
        },
      });
    }
    if (this.testForm.controls['condition'].value.aPart.avaliable == false) {
      this.testForm.controls['condition'].patchValue({
        aPart: {
          hasScratch: false,
          broken: false,
          dent: false,
        },
      });
    }
    
    if (this.testForm.controls['condition'].value.bPart.avaliable == false) {
      this.testForm.controls['condition'].patchValue({
        bPart: {
          hasScratch: false,
          broken: false,
          dent: false,
        },
      });
    }
    if (this.testForm.controls['condition'].value.cPart.avaliable == false) {
      this.testForm.controls['condition'].patchValue({
        cPart: {
          hasScratch: false,
          broken: false,
          dent: false,
        },
      });
    }
    if (this.testForm.controls['lcd'].value.avaliable == false) {
      console.log('lcd', this.testForm.controls['lcd'].value.avaliable);
    
      this.testForm.controls['lcd'].patchValue({
        hasScratch: false,
        hasSpots: false,
        hasLine: false,
        hasPixel: false,
        broken: false,
      });
    }
    if (this.testForm.controls['bazel'].value.avaliable == false) {
      console.log('bazel', this.testForm.controls['bazel'].value.avaliable);
    
      this.testForm.controls['bazel'].patchValue({
        broken: false,
      });
    }
    if (this.testForm.controls['keyboard'].value.avaliable == false) {
      console.log(
        'keyboard',
        this.testForm.controls['keyboard'].value.avaliable
      );
    
      this.testForm.controls['keyboard'].patchValue({
        working: false,
      });
    }
    if (this.testForm.controls['dvd'].value.avaliable == false) {
      console.log('dvd', this.testForm.controls['dvd'].value.avaliable);
    
      this.testForm.controls['dvd'].patchValue({
        working: false,
      });
    }
    if (this.testForm.controls['speakers'].value.avaliable == false) {
      console.log(
        'speakers',
        this.testForm.controls['speakers'].value.avaliable
      );
    
      this.testForm.controls['speakers'].patchValue({
        working: false,
      });
    }
    if (this.testForm.controls['camera'].value.avaliable == false) {
      console.log('camera', this.testForm.controls['camera'].value.avaliable);
    
      this.testForm.controls['camera'].patchValue({
        working: false,
      });
    }
    var location=[]
   if(this.LocationA){
     if(this.LocationA.nativeElement.value){

      this.locationA={
        partName:"aPart",
        PartProblem: this.LocationA.nativeElement.value
       }
       location.push(this.locationA)

     }
  
   }
   if(this.LocationB){
     if(this.LocationB.nativeElement.value){
      this.locationB={
        partName:"bPart",
        PartProblem: this.LocationB.nativeElement.value
       }
       location.push(this.locationB)

     }
    
    }
    if(this.LocationC){

      if(this.LocationC.nativeElement.value){
        this.locationC={
          partName:"cPart",
          PartProblem: this.LocationC.nativeElement.value
         }
         location.push(this.locationC)

      }
    
      }
      if(this.LocationD){
        if(this.LocationD.nativeElement.value){
          this.locationD={
            partName:"dPart",
            PartProblem: this.LocationD.nativeElement.value
           }
           location.push(this.locationD)
        }
       
        }
        this.testForm.value.condition.location=location
    console.log(this.testForm);

    if (this.testForm.valid &&(this.finished==true || this.finished==false)) {
     console.log(  this.finished,
      this.Serial,
      this.testForm.value,
      localStorage.getItem('id'))
      this._TestPhaseService
        .submitTest(
          this.finished,
          this.Serial,
          this.testForm.value,
          localStorage.getItem('id')
        )
        .subscribe((res:any) => {
          console.log(res);
         
          if(res.message=="Saved Successfully" ||res.modifiedCount==1){
            this.alertWithSuccess("Saved Successfully")

          }else{
            this.alertWithFail(res.message)

          }
        },(error)=>{
          this.alertWithFail(error.message)
        });
    } 
  }
}



