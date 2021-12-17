import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceInsideComponent } from './maintenance-inside/maintenance-inside.component';
import { MaintenanceOutsideAfterComponent } from './maintenance-outside-after/maintenance-outside-after.component';
import { MaintenanceOutsideComponent } from './maintenance-outside/maintenance-outside.component';

const routes: Routes = [
  {
		path : 'inside',
		component : MaintenanceInsideComponent
	},
  {
		path : 'outside-before',
		component : MaintenanceOutsideComponent
	},
	{
		path : 'outside-after',
		component : MaintenanceOutsideAfterComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancePagesRoutingModule { }
