import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css']
})
export class DefaultTableComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
  //   this.dtOptions = {
  //     // ... skipped ...
  //     dom: 'lrtip'
  //  }
  }

}
