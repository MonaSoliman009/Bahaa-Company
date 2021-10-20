import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  constructor(private _NotificationService:NotificationService,private router: Router,) { 

  
    
  }

  ngOnInit(): void {
this._NotificationService.getAllNotifications().subscribe((res)=>{
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
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    this.router.navigate(['./login']);



  }

}
