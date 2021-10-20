import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {io}  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
   
  }
  addNewProduct(_id,product:any) {
    return this.http.post(`http://localhost:3000/product/add/${_id}`,product);

  }

  getLastFiveProducts(){
    return this.http.get("http://localhost:3000/product/listLastFive");

  }
}
