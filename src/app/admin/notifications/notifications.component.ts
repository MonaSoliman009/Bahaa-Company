import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationss:any;

  constructor(private _NotificationService:NotificationService) { }

  ngOnInit(): void {
    
    this._NotificationService.getAllNotifications().subscribe((res)=>{
      // console.log(res)
      this.notificationss=res;
   
      console.log(this.notificationss)
    })
  
  }

}
