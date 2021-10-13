import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private service: DataService) {}
nameOfUser:any
  ngOnInit(): void {
    this.service.currentLogindata.subscribe((res) => {
console.log( "data",res)
    })
    let user = JSON.parse(localStorage.getItem('data'));
    // let data = JSON.parse(user);
    // // let per = JSON.parse(data)
     console.log(user);
    this.nameOfUser
      =user.name
      console.log(user.name);
  }
}
