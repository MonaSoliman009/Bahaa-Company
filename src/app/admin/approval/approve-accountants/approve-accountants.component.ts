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

  approve(id) {
    console.log('id', id);

    this.ser.ApproveAccountant(id).subscribe((res) => {
      console.log('response', res);
    });
  }
}
