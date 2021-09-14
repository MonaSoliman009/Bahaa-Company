import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-approve-employees',
  templateUrl: './approve-employees.component.html',
  styleUrls: ['./approve-employees.component.css']
})
export class ApproveEmployeesComponent implements OnInit {
  ratings: any = [];
  errorMessage: string;
  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getRatings();

  }
  getRatings() {
    this.commonService.getRatings().subscribe(
      (res) => {
        this.ratings = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  } 

}
