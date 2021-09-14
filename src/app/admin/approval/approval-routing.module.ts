import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveAccountantsComponent } from './approve-accountants/approve-accountants.component';
import { ApproveEmployeesComponent } from './approve-employees/approve-employees.component';

const routes: Routes = [
  {
		path : 'accountants',
		component : ApproveAccountantsComponent
	},
  {
		path : 'employees',
		component : ApproveEmployeesComponent
	},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalRoutingModule { }
