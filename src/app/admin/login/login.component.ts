import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getWeekYearWithOptions } from 'date-fns/fp';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  selectedPosition: any;
  selectedVlaue: any;
  response: any;
  //isLoading = false;
  selected(id) {
    console.log('selected', id);
    this.selectedPosition = id;
  }
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ser: AuthService,
    private service: DataService
  ) {}
  get formControls() {
    console.log(this.loginForm.controls);

    return this.loginForm.controls;
  }
  ngOnInit(): void {

      console.log('response', this.response);
this.createForm()
  }
  createForm(){

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
        location.reload();
      }
    );
  };
  onSubmit() {
    this.submitted = true;

    console.log(this.loginForm.value);
    if(this.loginForm.valid) {



      this.ser.login(this.loginForm.value).subscribe((response) => {
        this.response=response
              console.log('response', response);
        this.service.changelogin(this.response)
              console.log('response', this.response);
              console.log(response);
        // localStorage.setItem('data', JSON.stringify(response.data) as string);
              localStorage.setItem('token', response.token as string);
              localStorage.setItem('name', response.name as string);
              localStorage.setItem('id', response.id as string);
              // localStorage.setItem('emp', response?.employee as string);
              // let info = localStorage.getItem('response');
              // console.log('data', info);
              // this.service.changeMessage(info);
              // if (response.name === 'accountant') {
              //   // this.router.navigate(['/home/volunteer', response.volunteer]);
              //   localStorage.setItem('id', response.accountant as string);
              //   console.log(response.accountant);
        
              // }
              this.router.navigate(['./admin/dashboard']);
        
            },(error)=>{
        console.log(error);
              this.alertWithFail(error.error)
        
            });

    }


  }
  // onSubmit() {
  //   console.log('register');
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   console.log('form value', this.loginForm.value);

  //   console.log(this.loginForm.value);
  //   this.ser.login_Accountant(this.loginForm.value).subscribe((res) => {
  //     console.log('success', res);
  //   });
  // }
}
