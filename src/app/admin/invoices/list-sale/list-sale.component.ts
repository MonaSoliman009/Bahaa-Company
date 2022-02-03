import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css'],
})
export class ListSaleComponent implements OnInit {
  invoices: any;
  constructor(private ser: InvoicesService,private router: Router) {}

  ngOnInit(): void {
    this.ser.listSaleInvoice().subscribe((res) => {
      console.log(res);

      this.invoices = res;

      // $(function () {
      //   $('table').DataTable();
      // });
      console.log('list sale invoice', res);
    });
  }
  viewDetails(id) {
    this.router.navigate(['admin/Invoices/sale/details', id]);
  }
}
