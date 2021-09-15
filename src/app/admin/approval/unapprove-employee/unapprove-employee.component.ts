import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  alertWithSuccess() {
    Swal.fire('Thank you...', ' Succesfully deleted!', 'success');
  }
  delete(id) {
    console.log('id', id);
    this.alertWithSuccess();
    // this.ser.ApproveAccountant(id).subscribe((res) => {
    //   console.log('response', res);
    // });
  }
}
