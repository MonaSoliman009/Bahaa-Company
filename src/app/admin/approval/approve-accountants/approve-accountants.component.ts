import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Component, OnInit } from '@angular/core';
import { Accountant } from '../../model/accountant';
import { AccountantService } from '../../services/accountant.service';

@Component({
  selector: 'app-approve-accountants',
  templateUrl: './approve-accountants.component.html',
  styleUrls: ['./approve-accountants.component.css'],
})
export class ApproveAccountantsComponent implements OnInit {
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
    Swal.fire('Thank you...', 'succesfully approved!', 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  approve(id) {
    console.log('id', id);

    this.ser.ApproveAccountant(id).subscribe((res) => {
      console.log('response', res);
      this.alertWithSuccess();
    });
  }
}
