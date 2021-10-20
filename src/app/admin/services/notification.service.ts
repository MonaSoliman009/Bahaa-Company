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

   getAllNotifications() {
    this.socket.emit("getAllNotifications");
    
    let notifications =new Observable(observer=>{
      this.socket.on("notifications",notification=>{
        observer.next(notification);

      }) 
      })
      
      return notifications;

   }
   newNotifications(){

    let notifications =new Observable(observer=>{
      this.socket.on("notification",notification=>{
        observer.next(notification);

      }) 
      })
      
      return notifications;
   }

  

}
