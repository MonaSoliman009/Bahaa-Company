import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-outside',
  templateUrl: './maintenance-outside.component.html',
  styleUrls: ['./maintenance-outside.component.css']
})
export class MaintenanceOutsideComponent implements OnInit {
  started: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  processStarted() {
    this.started = true;
  }
}
