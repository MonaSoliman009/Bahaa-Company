import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-missing-pieces',
  templateUrl: './missing-pieces.component.html',
  styleUrls: ['./missing-pieces.component.css']
})
export class MissingPiecesComponent implements OnInit {
missingPieces:any
  constructor(private _ReportsService:ReportsService,private router: Router ) { }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  ngOnInit(): void {
    this.missingPiecesReport();
  }
  missingPiecesReport(){
    this._ReportsService.listMissingPiecesReport().subscribe((res)=>{
      console.log(res);
      this.missingPieces=res;
      
      $(function () {
        $('table').DataTable();
      });
    },(error)=>{
      // console.log(error)
      this.alertWithFail()
  
    })
  }

  
viewProductDetails(x){
  this.router.navigate(["admin/reports/missing-pieces-details", x])
}

}
