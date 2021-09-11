import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { Error404Component } from './error404/error404.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [Error404Component,Error500Component],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ],
})
export class ErrorPagesModule {}