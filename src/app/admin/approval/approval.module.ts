import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApproveEmployeesComponent } from './approve-employees/approve-employees.component';
import { ApproveAccountantsComponent } from './approve-accountants/approve-accountants.component';


@NgModule({
  declarations: [
    ApproveEmployeesComponent,
    ApproveAccountantsComponent
  ],
  imports: [
    CommonModule,
    ApprovalRoutingModule
  ]
})
export class ApprovalModule { }
