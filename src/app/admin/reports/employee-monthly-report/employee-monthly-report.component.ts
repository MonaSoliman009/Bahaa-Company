import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-employee-monthly-report',
  templateUrl: './employee-monthly-report.component.html',
  styleUrls: ['./employee-monthly-report.component.css']
})
export class EmployeeMonthlyReportComponent implements OnInit {
  public code;
  employee:any
  d: any;
  currentMonth: any;
  testedProducts: any;
  maintainedInsideProducts: any;
  maintainedOutsideProducts: any;
  constructor(private route: ActivatedRoute, private _ReportsService: ReportsService,private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.d = new Date();
    this.currentMonth = this.d.getMonth()+1;
  console.log(this.currentMonth);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get("_id");
    });
    this.getEmployee(this.code);
    this.getDailyTested(this.code, this.currentMonth);
    this.getDailymaintainedInside(this.code, this.currentMonth);
    this.getDailymaintainedOutside(this.code,this.currentMonth);
  }
  getEmployee(_id){
    this._EmployeeService.getEmployeeById(_id).subscribe((res)=>{
      this.employee=res
      console.log(res);
    
    },(error)=>{
      console.log(error);
    
    })
   }

   getDailyTested(_id, month) {
    this._ReportsService.monthlyEmployeeReportTesting(_id, month).subscribe((res) => {
      this.testedProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
  getDailymaintainedInside(_id, month) {
    this._ReportsService.monthlyEmployeeReportmaintainedInside(_id, month).subscribe((res) => {
      this.maintainedInsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }

  getDailymaintainedOutside(_id, month) {
    this._ReportsService.monthlyEmployeeReportmaintainedOutside(_id, month).subscribe((res) => {
      this.maintainedOutsideProducts = res;
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
}
