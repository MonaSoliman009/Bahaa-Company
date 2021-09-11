import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-defective-products',
  templateUrl: './defective-products.component.html',
  styleUrls: ['./defective-products.component.css']
})
export class DefectiveProductsComponent implements OnInit {
  modalRef: BsModalRef;
  allReports: any = [];
  pendingReports: any = [];
  inprogressReports: any = [];
  completedReports: any = [];
  rejectedReports: any = [];
  canceledReports: any = [];
  errorMessage: string;
  dtOptions: DataTables.Settings = {};
  constructor(public commonService: CommonServiceService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllReports();
    this.getPendingReports();
    this.getInprogressReports();
    this.getCompletedReports();
    this.getRejectedReports();
    this.getCanceledReports();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  getAllReports() {
    this.commonService.getAllReports().subscribe(
      (res) => {
        this.allReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getPendingReports() {
    this.commonService.getPendingReports().subscribe(
      (res) => {
        this.pendingReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getInprogressReports() {
    this.commonService.getInprogressReports().subscribe(
      (res) => {
        this.inprogressReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getCompletedReports() {
    this.commonService.getCompletedReports().subscribe(
      (res) => {
        this.completedReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getRejectedReports() {
    this.commonService.getRejectedReports().subscribe(
      (res) => {
        this.rejectedReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  getCanceledReports() {
    this.commonService.getCanceledReports().subscribe(
      (res) => {
        this.canceledReports = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
}
