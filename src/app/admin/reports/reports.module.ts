import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { GoodProductsComponent } from './good-products/good-products.component';
import { DefectiveProductsComponent } from './defective-products/defective-products.component';
import { MissingPiecesComponent } from './missing-pieces/missing-pieces.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';


@NgModule({
  declarations: [
    GoodProductsComponent,
    DefectiveProductsComponent,
    MissingPiecesComponent,
    EmployeeReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
