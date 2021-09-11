import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-add-sale-invoice',
  templateUrl: './add-sale-invoice.component.html',
  styleUrls: ['./add-sale-invoice.component.css']
})
export class AddSaleInvoiceComponent implements OnInit {
  newSection:any=[0];
  constructor() { }

  ngOnInit(): void {
    
  }
  addNewSection(){
    this.newSection.push(2)
  }
}
