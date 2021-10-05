import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-employee-daily-report',
  templateUrl: './employee-daily-report.component.html',
  styleUrls: ['./employee-daily-report.component.css']
})
export class EmployeeDailyReportComponent implements OnInit {
  public code;
  d: any;
  convertedDate: any;
  testedProducts: any;
  maintainedInsideProducts: any;
  maintainedOutsideProducts: any;
  employee:any

  constructor(private route: ActivatedRoute, private _ReportsService: ReportsService,private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.d = new Date();
    console.log(this.code);
    this.convertedDate = this.d.toISOString().slice(0, 10);
    this.getDailyTested(this.code, this.convertedDate);
    this.getDailymaintainedInside(this.code, this.convertedDate);
    this.getDailymaintainedOutside(this.code,this.convertedDate);
    this.getEmployee(this.code)
  }
  getEmployee(_id){
this._EmployeeService.getEmployeeById(_id).subscribe((res)=>{
  this.employee=res
  console.log(res);

},(error)=>{
  console.log(error);

})
  }
  getDailyTested(_id, date) {
    this._ReportsService.dailyEmployeeReportTesting(_id, date).subscribe((res) => {
      this.testedProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
  getDailymaintainedInside(_id, date) {
    this._ReportsService.dailyEmployeeReportmaintainedInside(_id, date).subscribe((res) => {
      this.maintainedInsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
  getDailymaintainedOutside(_id, date) {
    this._ReportsService.dailyEmployeeReportmaintainedOutside(_id, date).subscribe((res) => {
      this.maintainedOutsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
}
