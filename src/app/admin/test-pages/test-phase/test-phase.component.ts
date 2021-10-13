import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { TestPhaseService } from '../../services/test-phase.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-test-phase',
  templateUrl: './test-phase.component.html',
  styleUrls: ['./test-phase.component.css'],
})
export class TestPhaseComponent implements OnInit {
  started: boolean = false;
  testForm: FormGroup;
  serialnumberForm: FormGroup;
  Serial: any;
  finished: any;
  testerId: string;
  private selectedLink: string;
  msg: any;
  locations = new Array();
  @ViewChild('Serial') serial: ElementRef;
  constructor(private testSer: TestPhaseService, private service: DataService) {
    this.serialnumberForm = new FormGroup({
      serialNumber: new FormControl(''),
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

    let info = localStorage.getItem('response');
    console.log('local', info);
    this.testerId = info;
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
      // if no radio button is selected, always return false so every nothing is shown
      return false;
    }

    // console.log(name);
    // console.log(this.laneForm.get('source').value);
    return this.selectedLink === name;
  }
  // sourceBind(name: string) {
  //   console.log('delected for source', name);

  //   if (name == 'avaliable_yes') {
  //     // this.laneForm.patchValue({
  //     //   source: 1,
  //     // });
  //   } else if (name == 0) {
  //     this.laneForm.patchValue({
  //       source: 0,
  //     });
  //   }
  // }
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
    return valueInput;
  }
  StartTest() {
    console.log('serial', this.Getserial());
    console.log('tester', JSON.stringify(this.testerId));

    this.testSer
      .startTest(this.Getserial(), this.testerId)
      .subscribe((res: any) => {
        console.log('message', res.message);
        // this.started = true;

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
   this.finished = value.target.value;
  }
  onSubmit() {
    // this.locations.push(1);

    console.log(this.testForm.value);
    if (this.testForm.valid) {
      console.log('serial number befor submit', this.Serial);
      console.log('finished befor submit', this.finished);

      console.log('tester befor submit', this.testerId);

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
