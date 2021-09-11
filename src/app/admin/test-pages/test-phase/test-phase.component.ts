import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-phase',
  templateUrl: './test-phase.component.html',
  styleUrls: ['./test-phase.component.css']
})
export class TestPhaseComponent implements OnInit {
  started: boolean = false;

  constructor() { }

  ngOnInit(): void {
   
  }
  processStarted() {
    this.started = true;
  }
}
