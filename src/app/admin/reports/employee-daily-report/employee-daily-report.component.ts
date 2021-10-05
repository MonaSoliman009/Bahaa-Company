import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ReportsService } from '../../services/reports.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  this.alertWithFail()

})
  }
  getDailyTested(_id, date) {
    this._ReportsService.dailyEmployeeReportTesting(_id, date).subscribe((res) => {
      this.testedProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
      this.alertWithFail()

    })
  }
  getDailymaintainedInside(_id, date) {
    this._ReportsService.dailyEmployeeReportmaintainedInside(_id, date).subscribe((res) => {
      this.maintainedInsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
      this.alertWithFail()

    })
  }
  getDailymaintainedOutside(_id, date) {
    this._ReportsService.dailyEmployeeReportmaintainedOutside(_id, date).subscribe((res) => {
      this.maintainedOutsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
      this.alertWithFail()

    })
  }
}
