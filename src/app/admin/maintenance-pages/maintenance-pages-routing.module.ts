import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceInsideComponent } from './maintenance-inside/maintenance-inside.component';
import { MaintenanceOutsideComponent } from './maintenance-outside/maintenance-outside.component';

const routes: Routes = [
  {
		path : 'inside',
		component : MaintenanceInsideComponent
	},
  {
		path : 'outside',
		component : MaintenanceOutsideComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancePagesRoutingModule { }
