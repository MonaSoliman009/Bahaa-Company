import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {
code:any;
invoiceDetails:any;
  constructor(private route: ActivatedRoute,private _InvoicesService:InvoicesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.getDetails(this.code)
  }

  getDetails(id){

  this._InvoicesService.listPurchaseById(id).subscribe((res)=>{
    console.log(res);
    this.invoiceDetails=res
  },(error)=>{
    console.log(error)
  })
  }
}
