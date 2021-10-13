import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleInvoice } from '../model/sale-invoice';
import { PurchaseInvoise } from '../model/purchaseInvoice';
@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  constructor(private http: HttpClient) {}
  addSaleInvoice(SaleInvoice: SaleInvoice) {
    return this.http.post('http://localhost:3000/sale/add', SaleInvoice);
  }
  listSaleInvoice(): Observable<any> {
    return this.http.get('http://localhost:3000/sale/list ');
  }
  addPurchuseInvoice(id, product: PurchaseInvoise): Observable<any> {
    return this.http.post(`http://localhost:3000/purchase/add/${id} `, product);
  }
  listPurshuseInvoice(): Observable<any> {
    return this.http.get('http://localhost:3000/purchase/list');
  }
}
