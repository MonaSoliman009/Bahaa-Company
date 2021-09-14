import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getUnApprovedEmployee() {
    return this.http.get(
      'http://localhost:3000/owner/list/employees/unapproved'
    );
  }
  ApproveEmployee(id) {
    return this.http.post(
      `http://localhost:3000/owner/approve/employee/${id}`,
      id
    );
  }
}