import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io}  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url="http://localhost:3000";
  socket:any;
  public data: any;
  constructor() {
    this.socket=io(this.url);
    this.socket.on("connect",()=>{
        console.log("connect")


      })
   }

  //  getnotification(){
  //   this.socket.on('notification', data => {
  //     this.data = data;
  //   });
    
  //   }
}
