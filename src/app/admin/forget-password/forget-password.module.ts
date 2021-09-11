import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { ForgetPasswordComponent } from './forget-password.component';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';

@NgModule({
  declarations: [ForgetPasswordComponent],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule
  ],
})
export class ForgetPasswordModule {}
