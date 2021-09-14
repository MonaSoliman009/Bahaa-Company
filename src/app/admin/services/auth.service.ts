import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login;
  login_Accountant(user: Login): Observable<any> {
    return this.http.post('http://localhost:3000/login', user);
  }
}
