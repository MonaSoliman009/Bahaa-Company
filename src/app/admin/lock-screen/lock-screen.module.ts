import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { LockScreenComponent } from './lock-screen.component';
import { LockScreenRoutingModule } from './lock-screen-routing.module';

@NgModule({
  declarations: [LockScreenComponent],
  imports: [
    CommonModule,
    LockScreenRoutingModule
  ],
})
export class LockScreenModule {}
