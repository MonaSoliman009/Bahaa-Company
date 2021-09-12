import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {}
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
    console.log('register');

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid');
    } else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
      console.log('invalid');
    }
  }
}
