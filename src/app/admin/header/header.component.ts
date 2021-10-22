import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdown = true;
  public bellCollapsed = true;
  public userCollapsed = true;
  public data: any;
  notifications: any;
  lastNotification:any;
  flag: boolean = false;
  toggle: boolean = false;
  numOfNotifications: number;
  userr:any;

  constructor(private _NotificationService: NotificationService, private router: Router,private _UserService:UserService) {
  }

  ngOnInit(): void {
    this._UserService.getProfile({id:localStorage.getItem('id'),type:localStorage.getItem('name')}).subscribe((res)=>{
      console.log(res);
      this.userr=res
      },(error)=>{
      
      })
   
    this._NotificationService.getAllNotifications().subscribe((res) => {
      this.notifications = res;
      this.notifications.reverse();
      this.numOfNotifications = this.notifications.length;
     
      console.log(this.notifications)
    })

    this._NotificationService.newNotifications().subscribe((res) => {
      
      this.notifications = res;
      if(this.notifications[this.notifications.length-1].notificationOwner !=[]){

      }else{
        this.lastNotification=this.notifications[this.notifications.length-1];
        console.log(this.lastNotification)
        this.notifications.reverse();
        this.toggle=true;
        $('.toast').toast({ delay: 4000 });
        $('.toast').toast('show');
      }
      
      // this.numOfNotifications = this.notifications.length;
     
      console.log(res)
    })

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
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    this.router.navigate(['./login']);



  }

}
