import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from 'src/app/ng-zoro.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { GoodProductsComponent } from './good-products/good-products.component';
import { DefectiveProductsComponent } from './defective-products/defective-products.component';
import { MissingPiecesComponent } from './missing-pieces/missing-pieces.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { SoldProductsComponent } from './sold-products/sold-products.component';
import { GoodProductDetailsComponent } from './good-product-details/good-product-details.component';
import { DefectiveProductDetailsComponent } from './defective-product-details/defective-product-details.component';
import { SoldProductDetialsComponent } from './sold-product-detials/sold-product-detials.component';
import { EmployeeDailyReportComponent } from './employee-daily-report/employee-daily-report.component';
import { EmployeeMonthlyReportComponent } from './employee-monthly-report/employee-monthly-report.component';
import { MissingPiecesDetailsComponent } from './missing-pieces-details/missing-pieces-details.component';


@NgModule({
  declarations: [
    GoodProductsComponent,
    DefectiveProductsComponent,
    MissingPiecesComponent,
    EmployeeReportComponent,
    SoldProductsComponent,
    GoodProductDetailsComponent,
    DefectiveProductDetailsComponent,
    SoldProductDetialsComponent,
    EmployeeDailyReportComponent,
    EmployeeMonthlyReportComponent,
    MissingPiecesDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class ReportsModule { }
