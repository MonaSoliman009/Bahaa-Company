import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }
  listGoodProductsReport(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/goodProductsReport/list');
  }
  listGoodProductDetails(_id){
    return this.http.get('http://162.240.5.234:3000/goodProductsReport/list/'+_id);

  }
  listdefectiveProductsReport(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/defectiveProductsReport/list');
  }
  listdefectiveProductDetails(_id){
    return this.http.get('http://162.240.5.234:3000/defectiveProductsReport/list/'+_id);

  }
  listSoldProductsReport(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/soldProducts/list');
  }
  listSoldProductDetails(_id){
    return this.http.get('https://162.240.5.234:3000/soldProducts/list/'+_id);

  }
  dailyEmployeeReportTesting(_id,date){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/tested/${_id}/${date}`);

  }
  monthlyEmployeeReportTesting(_id,month){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/tested/${_id}/${month}`);

  }
  dailyEmployeeReportmaintainedInside(_id,date){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/maintainedInside/${_id}/${date}`);

  }
  monthlyEmployeeReportmaintainedInside(_id,month){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/maintainedInside/${_id}/${month}`);

  }
  dailyEmployeeReportmaintainedOutside(_id,date){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/maintainedOutside/${_id}/${date}`);

  }
  monthlyEmployeeReportmaintainedOutside(_id,month){
    return this.http.get(`http://162.240.5.234:3000/employeeReport/monthly/maintainedOutside/${_id}/${month}`);

  }

  listMissingPiecesReport(): Observable<any> {
    return this.http.get('http://162.240.5.234:3000/missingPiecesReport/list');
  }
  listMissingPiecesDetails(_id){
    return this.http.get('http://162.240.5.234:3000/missingPiecesReport/list/'+_id);

  }
}
