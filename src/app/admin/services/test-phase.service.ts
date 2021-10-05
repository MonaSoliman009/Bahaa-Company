import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TestPhaseService {
  private url = 'http://localhost:3000';
  socket: any;
  constructor() {
    this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('connect');
    });
  }
  startTest(productserialNumber, testerId) {
    this.socket.emit('startTest', productserialNumber, testerId);
    let message = new Observable((observer) => {
      this.socket.on('startTest', (comment) => {
        observer.next(comment);
      });
    });
    return message;
  }
  submitTest(finished, productserialNumber, testerId, testData) {
    this.socket.emit(
      'submitTest',
      finished,
      testerId,
      productserialNumber,
      testData
    );
    let message = new Observable((observer) => {
      this.socket.on('submitTest', (comment) => {
        observer.next(comment);
      });
    });
    return message;
  }
}
