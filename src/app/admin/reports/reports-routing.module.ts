import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectiveProductDetailsComponent } from './defective-product-details/defective-product-details.component';
import { DefectiveProductsComponent } from './defective-products/defective-products.component';
import { EmployeeDailyReportComponent } from './employee-daily-report/employee-daily-report.component';
import { EmployeeMonthlyReportComponent } from './employee-monthly-report/employee-monthly-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { GoodProductDetailsComponent } from './good-product-details/good-product-details.component';
import { GoodProductsComponent } from './good-products/good-products.component';
import { SoldProductDetialsComponent } from './sold-product-detials/sold-product-detials.component';
import { SoldProductsComponent } from './sold-products/sold-products.component';

const routes: Routes = [
  {
		path : 'good-products',
		component : GoodProductsComponent
	},
	{
		path : 'good-products-details/:_id',
		component : GoodProductDetailsComponent
	},
  {
		path : 'defective-products',
		component : DefectiveProductsComponent
	},
	{
		path : 'defective-products-details/:_id',
		component : DefectiveProductDetailsComponent
	},
	{
		path : 'missing-pieces',
		component : DefectiveProductsComponent
	},
	{
		path : 'employees',
		component : EmployeeReportComponent
	},
	{
		path : 'employees-daily-report/:_id',
		component : EmployeeDailyReportComponent
	},
	{
		path : 'employees-monthly-report/:_id',
		component : EmployeeMonthlyReportComponent
	},
	{
		path : 'sold-products',
		component : SoldProductsComponent
	},
	{
		path : 'sold-products-details/:_id',
		component : SoldProductDetialsComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
