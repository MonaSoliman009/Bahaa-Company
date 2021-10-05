import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }
  listGoodProductsReport(): Observable<any> {
    return this.http.get('http://localhost:3000/goodProductsReport/list');
  }
  listGoodProductDetails(_id){
    return this.http.get('http://localhost:3000/goodProductsReport/list/'+_id);

  }
  listdefectiveProductsReport(): Observable<any> {
    return this.http.get('http://localhost:3000/defectiveProductsReport/list');
  }
  listdefectiveProductDetails(_id){
    return this.http.get('http://localhost:3000/defectiveProductsReport/list/'+_id);

  }
  listSoldProductsReport(): Observable<any> {
    return this.http.get('http://localhost:3000/soldProducts/list');
  }
  listSoldProductDetails(_id){
    return this.http.get('http://localhost:3000/soldProducts/list/'+_id);

  }
}
