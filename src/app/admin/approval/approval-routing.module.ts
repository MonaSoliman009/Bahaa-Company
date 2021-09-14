import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveAccountantsComponent } from './approve-accountants/approve-accountants.component';
import { ApproveEmployeesComponent } from './approve-employees/approve-employees.component';
import { UnapproveAccountantComponent } from './unapprove-accountant/unapprove-accountant.component';
import { UnapproveEmployeeComponent } from './unapprove-employee/unapprove-employee.component';

const routes: Routes = [
  {
    path: 'accountants',
    component: ApproveAccountantsComponent,
  },
  {
    path: 'employees',
    component: ApproveEmployeesComponent,
  },
  {
    path: 'Unapproveemployees',
    component: UnapproveEmployeeComponent,
  },
  {
    path: 'Unapproveaccountants',
    component: UnapproveAccountantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalRoutingModule {}
