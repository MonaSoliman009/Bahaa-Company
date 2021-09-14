import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-approve-employees',
  templateUrl: './approve-employees.component.html',
  styleUrls: ['./approve-employees.component.css'],
})
export class ApproveEmployeesComponent implements OnInit {
  emplyee: Employee;
  errorMessage: string;
  id: any;
  constructor(public ser: EmployeeService) {}

  ngOnInit(): void {
    this.ser.getUnApprovedEmployee().subscribe((res: Employee) => {
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
