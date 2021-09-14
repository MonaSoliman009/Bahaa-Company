import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
  //isLoading = false;
  selected(id) {
    console.log('selected', id);
    this.selectedPosition = id;
  }
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ser: AuthService
  ) {}
  get formControls() {
    console.log(this.loginForm.controls);

    return this.loginForm.controls;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.submitted = true;

    console.log(this.loginForm.value);

    this.ser.login(this.loginForm.value).subscribe((response) => {
      console.log('response', response);
      console.log(response);

      localStorage.setItem('token', response.token as string);
      localStorage.setItem('name', response.name as string);

      // if (response.name === 'accountant') {
      //   // this.router.navigate(['/home/volunteer', response.volunteer]);
      //   localStorage.setItem('id', response.accountant as string);
      //   console.log(response.accountant);

      // }
    });
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
