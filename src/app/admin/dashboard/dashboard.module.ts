import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zoro.module';
// import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoNgZorroAntdModule
  ],
})

export class DashboardModule {}
