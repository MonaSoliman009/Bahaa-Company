import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-purchase-invoice',
  templateUrl: './add-purchase-invoice.component.html',
  styleUrls: ['./add-purchase-invoice.component.css']
})
export class AddPurchaseInvoiceComponent implements OnInit {
  newSection:any=[0];
  newSection2:any=[0]
  constructor() { }

  ngOnInit(): void {
  }
  addNewSection(){
    this.newSection.push(2)
  }
  addNewSection2(){
    this.newSection2.push(2)
  }
}
