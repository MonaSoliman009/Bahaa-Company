import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private _UserService: UserService, private _fb: FormBuilder) { }
  user: any;
  form: FormGroup;
  submitted2: boolean;

  ngOnInit(): void {
    this._UserService.getProfile({ id: localStorage.getItem('id'), type: localStorage.getItem('name') }).subscribe((res) => {
      console.log(res);
      this.user = res
    }, (error) => {

    })
    this.creteForm();

  }

  creteForm() {
    this.form = this._fb.group({
      current: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rpassword: ["", [Validators.required]],

    });
  }
  formData = new FormData();

  onFileChange(event) {


    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      console.log(event.target.files[0].name);

      this.formData.append('image', event.target.files[0], event.target.files[0].name);
      this.formData.append('id', localStorage.getItem('id'));

      this.formData.append('type', localStorage.getItem('name'));


    }
  }
  alertWithFail(msg) {
    Swal.fire('Failed', msg, 'error').then(
      (res) => {
        location.reload();
      }
    );
  }
  alertWithSuccess(msg) {
    Swal.fire('Done', msg, 'success').then(
      (res) => {
        location.reload();
      }
    );
  }
  saveImage() {

    this._UserService.uploadImage(this.formData).subscribe((res) => {

      console.log(res)
      this.alertWithSuccess("Saved Successfully");

    }, (error) => {
      this.alertWithFail("Try Again Later");

    });

  }
  get password() {
    return this.form.get("password").value;
  }
  get confirmpassword() {
    return this.form.get("rpassword").value;
  }
  onSubmit(){
   
    this.submitted2=true;
     if (this.form.valid &&this.password === this.confirmpassword) {
      console.log(this.form.value.password)

      this._UserService.resetPassword(localStorage.getItem('id'),{
        type:localStorage.getItem('name'),
        password:this.form.value.password
      }).subscribe((res)=>{
        if(res=="user not exit"){
          this.alertWithFail("user not exit");

        }
        this.alertWithSuccess("Saved Successfully");

       console.log(res)
      },(error)=>{
        this.alertWithFail("Try Again Later");

      })
    }
   }
}
