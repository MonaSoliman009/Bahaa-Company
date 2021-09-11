import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectiveProductsComponent } from './defective-products/defective-products.component';
import { GoodProductsComponent } from './good-products/good-products.component';

const routes: Routes = [
  {
		path : 'good-products',
		component : GoodProductsComponent
	},
  {
		path : 'defective-products',
		component : DefectiveProductsComponent
	},
	{
		path : 'missing-pieces',
		component : DefectiveProductsComponent
	},
	{
		path : 'employees',
		component : DefectiveProductsComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
