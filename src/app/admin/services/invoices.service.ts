import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleInvoice } from '../model/saleInvoice/sale-invoice';
import { PurchaseInvoise } from '../model/purchuseInvoice/purchaseInvoice';
@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  public id: any = {};
  public subject = new Subject<any>();
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
  listAllProductBySerial(serial: any) {
    return this.http.post(
      `http://localhost:3000/product/getBySerialNum`,
      serial
    );
  }
  AddSupplier(id, body): Observable<any> {
    return this.http.post(
      `http://localhost:3000/purchase/complete/pending/:${id}`,
      body
    );
  }
  private idOfEditPrice = new BehaviorSubject(this.id);
  currentId = this.idOfEditPrice.asObservable();
  changeidofEditPrice(id: any) {
    this.idOfEditPrice.next(id);
  }
}
