import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from 'src/app/common-service.service';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.css']
})
export class GoodProductsComponent implements OnInit {
 
   goodProducts: any;
  constructor(private _ReportsService:ReportsService,private router: Router ) { }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  ngOnInit(): void {
  this.getGoodProductsReport()
  }

getGoodProductsReport(){
  this._ReportsService.listGoodProductsReport().subscribe((res)=>{
    console.log(res);
    this.goodProducts=res;
    
    $(function () {
      $('table').DataTable();
    });
  },(error)=>{
    // console.log(error)
    this.alertWithFail()

  })
}



viewProductDetails(x){
  this.router.navigate(["admin/reports/good-products-details", x])
}

 

}
