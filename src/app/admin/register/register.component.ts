import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
// import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  selectedVlaue: any;
  selectedPosition: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // approved: [false],
    });
  }
  get formControls() {
    console.log(this.registerForm.controls);

    return this.registerForm.controls;
  }

  selected(id) {
    console.log('selected', id);
    this.selectedPosition = id;
  }
  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  onSubmit() {
    console.log('register');

    this.submitted = true;

    // stop here if form is invalid
    console.log('form value', this.registerForm.value);

    if (this.selectedPosition == 1) {
      console.log(this.registerForm.value);
      this.service
        .accountant_register(this.registerForm.value)
        .subscribe((res) => {
          this.alertWithSuccess();
          console.log('success', res);
          this.router.navigate(['./admin/dashboard']);
        });
    } else if (this.selectedPosition == 2) {
      this.service
        .employee_register(this.registerForm.value)
        .subscribe((res) => {
          console.log('employee');
          this.alertWithSuccess();
          this.router.navigate(['./admin/dashboard']);
          res;
        });
    }
  }
}
