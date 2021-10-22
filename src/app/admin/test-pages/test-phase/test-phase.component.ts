import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  FalsyValue = false;
  finished: boolean;
  testerId: string;
  search: string;
  // location = new Array();
  displayRecomendedSerial = false;
  allSerialNumbers = new Array();
  AllProduct: any;
  private selectedLink: string;
  msg: any;
  locationInterface: Loaction;
  @ViewChild('Serial') serial: ElementRef;
  constructor(
    private testSer: TestPhaseService,
    private service: DataService,
    private product: ProductService
  ) {
    this.startTest = new FormGroup({
      productserialNumber: new FormControl(''),
      testerId: new FormControl(''),
    });
    this.testForm = new FormGroup({
      power: new FormControl(''),
      condition: new FormGroup({
        aPart: new FormGroup({
          avaliable: new FormControl(''),
          hasScratch: new FormControl(''),
          broken: new FormControl(''),
          dent: new FormControl(''),
        }),
        bPart: new FormGroup({
          avaliable: new FormControl(''),
          hasScratch: new FormControl(''),
          broken: new FormControl(''),
          dent: new FormControl(''),
        }),
        cPart: new FormGroup({
          avaliable: new FormControl(''),
          hasScratch: new FormControl(''),
          broken: new FormControl(''),
          dent: new FormControl(''),
        }),
        dPart: new FormGroup({
          avaliable: new FormControl(''),
          hasScratch: new FormControl(''),
          broken: new FormControl(''),
          dent: new FormControl(''),
        }),
        location: new FormArray([
          new FormGroup({
            partName: new FormControl(''),
            PartProblem: new FormControl(''),
          }),
        ]),
      }),
      configuration: new FormGroup({
        cpu: new FormControl(''),
        generation: new FormControl(''),
        ram: new FormControl(''),
        hdd: new FormControl(''),
      }),
      battery: new FormGroup({
        avaliable: new FormControl(''),
        batteryHealth: new FormControl(''),
      }),
      lcd: new FormGroup({
        avaliable: new FormControl(''),
        status: new FormControl(''),
        hasScratch: new FormControl(''),
        hasSpots: new FormControl(''),
        hasLine: new FormControl(''),
        hasPixel: new FormControl(''),
        broken: new FormControl(''),
      }),
      bazel: new FormGroup({
        avaliable: new FormControl(''),
        broken: new FormControl(''),
        location: new FormControl(''),
      }),
      keyboard: new FormGroup({
        avaliable: new FormControl(''),
        working: new FormControl(''),
      }),
      dvd: new FormGroup({
        avaliable: new FormControl(''),
        working: new FormControl(''),
      }),
      speakers: new FormGroup({
        avaliable: new FormControl(''),
        working: new FormControl(''),
      }),
      camera: new FormGroup({
        avaliable: new FormControl(''),
        working: new FormControl(''),
      }),
      hasVGAorIntel: new FormControl(''),
    });
  }

  ngOnInit(): void {
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
    let info = localStorage.getItem('response');
    console.log('local', info);
    this.testerId = info;
  }
  partName(partName) {
    console.log(partName);
  }
  partProblem(val) {
    console.log(val);
   
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
  setRadio(e: string) {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    // console.log(name);

    if (!this.selectedLink) {
      return false;
    }

    return this.selectedLink === name;
  }

  alertWithFail(msg) {
    msg = this.msg;
    Swal.fire('Failed', msg, 'error').then((res) => {
      location.reload();
    });
  }
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then((res) => {
      location.reload();
    });
  }
  Getserial() {
    const valueInput = this.serial.nativeElement.value;
    console.log('Serial numer', valueInput);
    this.Serial = valueInput;
    return +this.Serial;
  }
  StartTest() {
    this.startTest.patchValue({
      productserialNumber: this.Getserial(),
      testerId: this.testerId,
    });
    console.log(this.startTest.value);

    console.log('type', typeof this.Getserial());

    console.log('serial', this.Getserial());
    console.log('tester', typeof this.testerId);

    this.testSer
      .startTest(
        this.startTest.value.productserialNumber,
        this.startTest.value.testerId
      )
      .subscribe((res: any) => {
        console.log('message', res.message);
        if (res.message == 'Test Started successfully') {
          this.started = true;
        } else {
          this.msg = res.message;
          this.alertWithFail(res.message);
        }
      });
  }
  onItemChange(value) {
    console.log(' Value is : ', value);

    console.log(' Value is : ', value.target.value);
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
    // this.locations.push(1);

    console.log(this.testForm.value);
    if (this.testForm.valid) {
      console.log('serial number befor submit', this.Serial);
      console.log('finished befor submit', this.finished);
      console.log(
        'dpart',
        this.testForm.controls['condition'].value.dPart.avaliable
      );

      console.log('tester befor submit', this.testerId);
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
      console.log('last', this.testForm.value);
      this.testSer
        .submitTest(
          this.finished,
          this.Serial,
          this.testForm.value,
          this.testerId
        )
        .subscribe((data) => {
          console.log(data);
          this.msg = data;
        });
    } else {
      this.alertWithFail(this.msg.message);
    }
  }
}
