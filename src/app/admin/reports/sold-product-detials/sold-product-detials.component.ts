import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { GoodProduct } from '../../model/good-product';

@Component({
  selector: 'app-sold-product-detials',
  templateUrl: './sold-product-detials.component.html',
  styleUrls: ['./sold-product-detials.component.css']
})
export class SoldProductDetialsComponent implements OnInit {
  public code;
  d:any;
  convertedDate:Date;
  soldProductDetails:GoodProduct
  constructor(private route: ActivatedRoute,private _ReportsService:ReportsService) { }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.getSoldProductDetails(this.code)
  }
  getSoldProductDetails(_id){
    this._ReportsService.listSoldProductDetails(_id).subscribe((res:any)=>{
      console.log(res);
      this.soldProductDetails=res;
      this.d=new Date(`${res.ProductDetails[0].addedAt}`);
      this.convertedDate=this.d.toLocaleDateString();
    
    },(error)=>{
      // console.log(error)
      this.alertWithFail()
    })
  }

}
