import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleInvoice } from '../model/sale-invoice';
@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  constructor(private http: HttpClient) {}
  addSaleInvoice(SaleInvoice: SaleInvoice) {
    return this.http.post('http://localhost:3000/sale/add ', SaleInvoice);
  }
}
