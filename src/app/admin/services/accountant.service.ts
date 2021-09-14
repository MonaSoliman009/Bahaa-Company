import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountantService {
  constructor(private http: HttpClient) {}
  getUnApprovedAccountant() {
    return this.http.get(
      'http://localhost:3000/owner/list/accountants/unapproved'
    );
  }
  ApproveAccountant(id) {
    return this.http.post(
      `http://localhost:3000/owner/approve/accountant/${id}`,
      id
    );
  }
}