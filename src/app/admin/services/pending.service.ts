import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PendingService {
  public id: any = {};
  public subject = new Subject<any>();
  constructor(private http: HttpClient) {}
  private IdOfpendingPrice = new BehaviorSubject(this.id);
  currentId = this.IdOfpendingPrice.asObservable();
  changeidofpendingPrice(id: any) {
    this.IdOfpendingPrice.next(id);
  }
  listPendingSale(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/sale/list/pending');
  }
  addPriceForPending(id, body): Observable<any> {
    return this.http.post(
      `http://162.240.5.234:3000/sale/complete/pending/${id}`,
      body
    );
  }
  listPendingPurchase(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/purchase/list/pending');
  }
}
