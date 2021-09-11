import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { EmailComponent } from './email.component';
import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule
  ],
})
export class EmailModule {}
