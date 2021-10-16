import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addNewProduct(_id,product:any) {
    return this.http.post(`http://localhost:3000/product/add/${_id}`,product);

  }
}
