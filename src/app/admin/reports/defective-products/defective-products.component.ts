import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from 'src/app/common-service.service';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-defective-products',
  templateUrl: './defective-products.component.html',
  styleUrls: ['./defective-products.component.css']
})
export class DefectiveProductsComponent implements OnInit {
  defectiveProducts:any
  constructor(private _ReportsService:ReportsService,private router: Router ) { }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  ngOnInit(): void {
  this.getDefectiveProductsReport()
  }
  getDefectiveProductsReport(){
    this._ReportsService.listdefectiveProductsReport().subscribe((res)=>{
      console.log(res);
     this.defectiveProducts=res
      
      // $(function () {
      //   $('table').DataTable();
      // });
    },(error)=>{
      console.log(error)
      this.alertWithFail()
    })
  }
  viewProductDetails(_id){
    
    this.router.navigate(["admin/reports/defective-products-details", _id])

  }
 
}
