import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io}  from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private url="http://localhost:3000";
  socket:any;
  constructor() { 

    this.socket=io(this.url);
    this.socket.on("connect",()=>{
        console.log("connect")

        
      })
  }


  startMaitenanceInsideStore(productserialNumber, maintainererId){
    this.socket.emit("startMaintenanceInsideStore",productserialNumber, maintainererId)
    let message =new Observable(observer=>{
      this.socket.on("startMaintenanceInsideStore",comment=>{
        observer.next(comment)
      })
  })
    return message
  }
  submitMaintenanceInsideStore(productserialNumber, maintainererId,sparePartsData,MaintenanceData,repaired){
    this.socket.emit("startMaintenanceInsideStore",productserialNumber, maintainererId,sparePartsData,MaintenanceData,repaired)
    let message =new Observable(observer=>{
      this.socket.on("startMaintenanceInsideStore",comment=>{
        observer.next(comment)
      })
  })
    return message
  }

}
