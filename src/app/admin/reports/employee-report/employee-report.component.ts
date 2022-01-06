import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common-service.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {
  users: any = [];
  errorMessage;
  constructor(public commonService: CommonServiceService,public _EmployeeService:EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this._EmployeeService.getApproveEmployee().subscribe(
      (res) => {
        console.log(res)
        this.users = res;
        // $(function () {
        //   $('table').DataTable();
        // });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  viewDailyDetails(_id){
    this.router.navigate(["admin/reports/employees-daily-report", _id])
  }
  viewMonthlyDetails(_id){
    this.router.navigate(["admin/reports/employees-monthly-report", _id])

  }

}
