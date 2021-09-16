import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css'],
})
export class ListSaleComponent implements OnInit {
  invoices: any;
  constructor(private ser: InvoicesService) {}

  ngOnInit(): void {
    this.ser.listSaleInvoice().subscribe((res) => {
      console.log(res);

      this.invoices = res;

      $(function () {
        $('table').DataTable();
      });
      console.log('list sale invoice', res);
    });
  }
}
