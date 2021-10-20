import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import {io}  from 'socket.io-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdown = true;
  public bellCollapsed = true;
  public userCollapsed = true;
  socket:any;
  public data: any;
  private url="http://localhost:3000";

  constructor(private _NotificationService:NotificationService,private router: Router,) { 

    this.socket=io(this.url);
    this.socket.on("connect",()=>{
        console.log("connect")


      })
  }

  ngOnInit(): void {
    this.socket.emit("getAllNotifications")

this.getNotifications()
    
  }
  getNotifications() {
   this.socket.on('getAllNotifications', data => {
      this.data = data;
      console.log(this.data)
    });
    
  }
  bell() {
    this.bellCollapsed = !this.bellCollapsed;
    if (!this.userCollapsed) {
      this.userCollapsed = true;
    }
  }
  user() {
    this.userCollapsed = !this.userCollapsed;
    if (!this.bellCollapsed) {
      this.bellCollapsed = true;
    }
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    this.router.navigate(['./login']);



  }

}
