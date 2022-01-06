import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApproveEmployeesComponent } from './approve-employees/approve-employees.component';
import { ApproveAccountantsComponent } from './approve-accountants/approve-accountants.component';
import { UnapproveAccountantComponent } from './unapprove-accountant/unapprove-accountant.component';
import { UnapproveEmployeeComponent } from './unapprove-employee/unapprove-employee.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zoro.module';


@NgModule({
  declarations: [
    ApproveEmployeesComponent,
    ApproveAccountantsComponent,
    UnapproveAccountantComponent,
    UnapproveEmployeeComponent
  ],
  imports: [
    CommonModule,
    ApprovalRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class ApprovalModule { }
