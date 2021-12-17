import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-missing-pieces-details',
  templateUrl: './missing-pieces-details.component.html',
  styleUrls: ['./missing-pieces-details.component.css']
})
export class MissingPiecesDetailsComponent implements OnInit {
  public code;
  missingPiece:any
  constructor(private route: ActivatedRoute,private _ReportsService:ReportsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.missingPiecesDetails(this.code)
  }
  missingPiecesDetails(_id){
    this._ReportsService.listMissingPiecesDetails(_id).subscribe((res:any)=>{
      console.log(res);
      this.missingPiece=res;
      // this.d=new Date(`${res.ProductDetails[0].addedAt}`);
      // this.convertedDate=this.d.toLocaleDateString();
    
    },(error)=>{
      // console.log(error)
      this.alertWithFail()
    })
  }
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
}
