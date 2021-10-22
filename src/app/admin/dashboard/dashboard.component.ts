import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { DataService } from '../services/data.service';
import { EmployeeService } from '../services/employee.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  constructor(private service: DataService, private _EmployeeService: EmployeeService,private _ProductService:ProductService,private _UserService:UserService) { }
  nameOfUser: any;
  numOfProducts: any;
  numOfTests: any;
  numOfMaintained: any;
  lastFiveProducts:any;
  userr:any;
  alertWithFail() {
    Swal.fire('Failed', "Try Again Later", 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  ngOnInit(): void {
    this._UserService.getProfile({id:localStorage.getItem('id'),type:localStorage.getItem('name')}).subscribe((res)=>{
      console.log(res);
      this.userr=res
      },(error)=>{
      
      })
    this._EmployeeService.getUsersCount().subscribe((res) => {
      this.nameOfUser = res;
      console.log(res)
    }, (error) => {

    })


    this._EmployeeService.getProductsCount().subscribe((res) => {
      this.numOfProducts = res;
    }, (error) => {

    })
    this._EmployeeService.getTestsCount().subscribe((res) => {
      this.numOfTests = res;
    }, (error) => {

    })
    this._EmployeeService.getMaintainedCount().subscribe((res) => {
      this.numOfMaintained = res;
    }, (error) => {

    })

    this._ProductService.getLastFiveProducts().subscribe((res)=>{
this.lastFiveProducts=res
    })
  }
}
