import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Component, OnInit } from '@angular/core';
import { Accountant } from '../../model/accountant';
import { AccountantService } from '../../services/accountant.service';

@Component({
  selector: 'app-unapprove-accountant',
  templateUrl: './unapprove-accountant.component.html',
  styleUrls: ['./unapprove-accountant.component.css'],
})
export class UnapproveAccountantComponent implements OnInit {
  constructor(private ser: AccountantService) {}
  ratings: Accountant;
  errorMessage: string;
  id: any;
  ngOnInit(): void {
    this.ser.getUnApprovedAccountant().subscribe(
      (res: Accountant) => {
        console.log(res);
        this.id = res?._id;
        this.ratings = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
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
