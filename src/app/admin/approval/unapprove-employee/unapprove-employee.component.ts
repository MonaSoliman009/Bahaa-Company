import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-unapprove-employee',
  templateUrl: './unapprove-employee.component.html',
  styleUrls: ['./unapprove-employee.component.css'],
})
export class UnapproveEmployeeComponent implements OnInit {
  emplyee: Employee;
  errorMessage: string;
  id: any;
  constructor(public ser: EmployeeService) {}

  ngOnInit(): void {
    this.ser.getApproveEmployee().subscribe((res: Employee) => {
      console.log(res);

      this.emplyee = res;

      console.log(this.emplyee);

      $(function () {
        $('table').DataTable();
      });
    });
  }
  appprove(id) {
    this.ser.ApproveEmployee(id).subscribe((res) => {
      console.log('response', res);
    });
  }
}
