import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css'],
})
export class ListPurchaseComponent implements OnInit {
  invoices: any;
  constructor(private ser: InvoicesService,private router: Router) {}

  ngOnInit(): void {
    this.ser.listPurshuseInvoice().subscribe((res) => {
      console.log(res);

      this.invoices = res;

      // $(function () {
      //   $('table').DataTable();
      // });
      console.log('list sale invoice', res);
    });
  }

  viewDetails(x){

    this.router.navigate(["admin/Invoices/purchase/details", x])
  }
}
