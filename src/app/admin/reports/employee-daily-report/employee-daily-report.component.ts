import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-employee-daily-report',
  templateUrl: './employee-daily-report.component.html',
  styleUrls: ['./employee-daily-report.component.css']
})
export class EmployeeDailyReportComponent implements OnInit {
  public code;
d:any;
convertedDate:any;
  constructor(private route: ActivatedRoute,private _ReportsService:ReportsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.d=new Date();
    console.log(this.code);
    this.convertedDate= this.d.toISOString().slice(0, 10);
    this.getDailyTested(this.code,this.convertedDate);
    this.getDailymaintainedInside(this.code,this.convertedDate)
  }
getDailyTested(_id,date){
   this._ReportsService.dailyEmployeeReportTesting(_id,date).subscribe((res)=>{
     console.log(res);
   },(error)=>{
     console.log(error)
   })
}
getDailymaintainedInside(_id,date){
  this._ReportsService.dailyEmployeeReportmaintainedInside(_id,date).subscribe((res)=>{
    console.log(res);
  },(error)=>{
    console.log(error)
  })
}
}
