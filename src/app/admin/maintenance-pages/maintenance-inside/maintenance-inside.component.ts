import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-inside',
  templateUrl: './maintenance-inside.component.html',
  styleUrls: ['./maintenance-inside.component.css'],
})
export class MaintenanceInsideComponent implements OnInit {
  started: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  processStarted() {
    this.started = true;
  }
}
