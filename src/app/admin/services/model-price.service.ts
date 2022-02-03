import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelPriceService {
  public id: any = {};
  public subject = new Subject<any>();
  constructor(private http: HttpClient) {}

  listMissingPiecesReport(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/models/all');
  }
  EditPrice(id, body): Observable<any> {
    return this.http.put(`http://162.240.5.234:3000/models/update/:${id}`, body);
  }
  private idOfEditPrice = new BehaviorSubject(this.id);
  currentId = this.idOfEditPrice.asObservable();
  // changeidofEditPrice(id: any) {
  //   this.idOfEditPrice.next(id);
  // }
  DeleteModel(id): Observable<any> {
    return this.http.delete(`http://162.240.5.234:3000/models/delete/:${id}`);
  }
  listPendingSale(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/sale/list/pending');
  }
  addPriceForPending(): Observable<any> {
    return;
  }
}
