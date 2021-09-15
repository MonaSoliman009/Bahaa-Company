import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleInvoice } from '../model/sale-invoice';
@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  constructor(private http: HttpClient) {}
  addSaleInvoice(SaleInvoice: any) {
    return this.http.post('http://localhost:3000/sale/add', SaleInvoice);
  }
  listSaleInvoice(): Observable<any> {
    return this.http.get('http://localhost:3000/sale/list ');
  }
  addPurchuseInvoice(id) {
    return this.http.post('http://localhost:3000/purchase/add/', +id);
  }
  listPurshuseInvoice(): Observable<any> {
    return this.http.get('http://localhost:3000/purchase/list');
  }
}
