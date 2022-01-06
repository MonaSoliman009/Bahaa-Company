import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { SetialNumber } from '../model/setial-number';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  addNewProduct(_id, product: any) {
    return this.http.post(`http://localhost:3000/product/add/${_id}`, product);
  }
  getLastFiveProducts() {
    return this.http.get('http://localhost:3000/product/listLastFive');
  }




  getProductBrSerialnumber(serial) {
    return this.http.post('http://localhost:3000/product/getBySerialNum',{ "serialNumber":serial});
  }
  getAllProduct() {
    return this.http.get('http://localhost:3000/product/list');

  }
  updateProduct(serialNumber,product) {

    return this.http.put(`http://localhost:3000/product/update/${serialNumber}`,product);


  }
  deleteProduct(serialNumber){
    return this.http.delete(`http://localhost:3000/product/delete/${serialNumber}`);


  }
}
