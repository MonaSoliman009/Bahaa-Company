import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoodProduct } from '../../model/good-product';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-good-product-details',
  templateUrl: './good-product-details.component.html',
  styleUrls: ['./good-product-details.component.css']
})
export class GoodProductDetailsComponent implements OnInit {
  public code;
  goodProductDetails:GoodProduct
  d:any;
  convertedDate:Date
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
    this.getGoodProductDetails(this.code)
  }
  getGoodProductDetails(_id){
    this._ReportsService.listGoodProductDetails(_id).subscribe((res:any)=>{
      console.log(res);
      this.goodProductDetails=res;
      this.d=new Date(`${res.ProductDetails[0].addedAt}`);
      this.convertedDate=this.d.toLocaleDateString();
    
    },(error)=>{
      // console.log(error)
      this.alertWithFail()
    })
  }

}
