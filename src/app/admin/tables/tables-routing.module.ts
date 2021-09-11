import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';


const routes: Routes = [
	{
		path : 'basic-table',
		component : BasicTableComponent
	},
  {
		path : 'default-table',
		component : DefaultTableComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
