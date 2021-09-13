import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RegisterAccountant } from '../../Interfaces/register';
import { RegisterEmployee } from '../../Interfaces/register-employee';
@Injectable({
  providedIn: 'root',
})
export class RegisterService implements InMemoryDbService {
  constructor(private http: HttpClient) {}
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }
  employee_register(Register: RegisterEmployee) {
    return this.http.post('http://localhost:3000/employee/signup', Register);
  }
  accountant_register(Register: RegisterAccountant): Observable<any> {
    return this.http.post('http://localhost:3000/accountant/signup', Register);
  }
}
