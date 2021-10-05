import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { TestPhaseService } from '../../services/test-phase.service';

@Component({
  selector: 'app-test-phase',
  templateUrl: './test-phase.component.html',
  styleUrls: ['./test-phase.component.css'],
})
export class TestPhaseComponent implements OnInit {
  started: boolean = false;
  testForm: FormGroup;
  Serial: any;
  finished: any;
  testerId:any
  locations = new Array;
  constructor(private testSer: TestPhaseService, private service: DataService) {
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

  ngOnInit(): void {}
  processStarted() {
    this.started = true;
  }
  StartTest() {
    this.started = true;
    this.service.currentMessage.subscribe((data) => {
      console.log(data);
      this.testerId=data
      this.testSer.startTest(this.Serial, this.testerId);
    });
  }
  onSubmit() {
    this.locations.push(1)
    console.log(this.testForm.value);
    this.testSer
      .submitTest(this.finished, this.Serial, this.testerId,this.testForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
