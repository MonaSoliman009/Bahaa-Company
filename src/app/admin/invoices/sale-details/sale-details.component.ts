import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InvoicesService } from '../../services/invoices.service';
@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})
export class SaleDetailsComponent implements OnInit {

  code: any;
  invoiceDetails: any;
  sellerName: any;
  constructor(
    private route: ActivatedRoute,
    private _InvoicesService: InvoicesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get('_id');
    });

    this.getDetails(this.code);
  }
  getDetails(id) {
    this._InvoicesService.listSaleById(id).subscribe(
      (res) => {
        console.log(res, 'sale details');
        this.invoiceDetails = res;

        console.log(this.invoiceDetails.seller);
        this._InvoicesService
          .getSellerById(this.invoiceDetails.seller)
          .subscribe(
            (res) => {
              this.sellerName = res.name;
              console.log(res, 'seller');
              console.log('hello');
            },
            (error) => {
              console.log(error, 'error');
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
