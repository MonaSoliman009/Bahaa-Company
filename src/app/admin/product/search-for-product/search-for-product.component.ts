import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-search-for-product',
  templateUrl: './search-for-product.component.html',
  styleUrls: ['./search-for-product.component.css'],
})
export class SearchForProductComponent implements OnInit {
  public filter: any = '';
  products: any;
  product:any
  search: string;
  toggle:boolean = false;
  displayRecomendedSerial = false;
  allSerialNumbers = new Array();
  Serial: any;
  @ViewChild('Serial') serial: ElementRef;

  constructor(private _ProductService: ProductService) {}

  ngOnInit(): void {
    this.getAllproducts();
  }
  getAllproducts() {
    this._ProductService.getAllProduct().subscribe((res) => {
      this.products = res;
      for (let val of this.products) {
        console.log(val.serialNumber);
        let stringSerial = val.serialNumber.toString();
        console.log(stringSerial);

        this.allSerialNumbers.push(val.serialNumber.toString());
      }
    });
  }
  selectedSerial(val) {
    this.serial.nativeElement.value = val;
    this.displayRecomendedSerial = true;
  }
  data(val) {
    return val;
  }
  searchSerial(val) {
    this.displayRecomendedSerial = false;
    

    let filterd = this.allSerialNumbers.filter(this.data);

  }
  alertWithFail() {
   
    Swal.fire('Failed', 'Please Try Again', 'error').then((res) => {
      location.reload();
    });
  }
  searchForProduct(){
    const valueInput = this.serial.nativeElement.value;
    console.log('Serial numer', valueInput);
    this._ProductService.getProductBrSerialnumber(valueInput).subscribe((res)=>{
      console.log(res);
      this.product=res;
      this.toggle=true
    },(error)=>{
this.alertWithFail()
    })
  }
}
