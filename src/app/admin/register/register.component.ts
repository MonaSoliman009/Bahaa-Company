import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get formControls() {
    console.log(this.registerForm.controls);

    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('register');

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('invalid');
    } else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      console.log('invalid');
    }
  }
}
