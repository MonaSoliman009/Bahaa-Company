import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.css']
})
export class SoldProductsComponent implements OnInit {
  soldProducts: any;

  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  constructor(private _ReportsService:ReportsService,private router: Router) { }

  ngOnInit(): void {
  this.getSoldProductsReport()

  }
  getSoldProductsReport(){
    this._ReportsService.listSoldProductsReport().subscribe((res)=>{
      console.log(res);
      this.soldProducts=res;
      
      // $(function () {
      //   $('table').DataTable();
      // });
    },(error)=>{
      // console.log(error)
      this.alertWithFail()
  
    })
  }
  viewProductDetails(_id){
    this.router.navigate(["admin/reports/sold-products-details", _id])

  }

}
