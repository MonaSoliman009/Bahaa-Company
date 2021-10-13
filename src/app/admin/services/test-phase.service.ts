import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TestPhaseService {
  private url = 'http://localhost:3000';
  socket: any;
  // HttpClient: any;
  constructor(private http:HttpClient) {
    this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('connect');
    });
  }
  startTest(productserialNumber :number, testerId:string) {
    this.socket.emit('startTest', productserialNumber, testerId);
    let message = new Observable((observer) => {
      this.socket.on('startTest', (comment) => {
        observer.next(comment);
      });
    });
    return message;
  }
  submitTest(finished, productserialNumber,testData, testerId ) {
    this.socket.emit(
      'submitTest',
      finished,
      productserialNumber,
      testData,
      testerId
    );
    let message = new Observable((observer) => {
      this.socket.on('submitTest', (comment) => {
        observer.next(comment);
      });
    });
    return message;
  }
  getProductBySerialnumer(seri):Observable<any>{
    return this.http.post('http://localhost:3000/product/getBySerialNum', seri)

  }
}
