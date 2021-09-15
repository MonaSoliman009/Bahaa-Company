import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.css']
})
export class SoldProductsComponent implements OnInit {
  users: any = [];
  errorMessage;
  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    this.commonService.getUsers().subscribe(
      (res) => {
        this.users = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

}
