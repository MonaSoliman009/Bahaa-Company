import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoodProduct } from '../../model/good-product';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-defective-product-details',
  templateUrl: './defective-product-details.component.html',
  styleUrls: ['./defective-product-details.component.css']
})
export class DefectiveProductDetailsComponent implements OnInit {
  public code;
  defectiveProductDetails:GoodProduct
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
    this.getDefectiveProductDetails(this.code)
  }
  getDefectiveProductDetails(_id){
    this._ReportsService.listdefectiveProductDetails(_id).subscribe((res:any)=>{
      console.log(res);
      this.defectiveProductDetails=res;
      this.d=new Date(`${res.ProductDetails[0].addedAt}`);
      this.convertedDate=this.d.toLocaleDateString();
    
    },(error)=>{
      console.log(error)
      this.alertWithFail()
    })
  }
}
