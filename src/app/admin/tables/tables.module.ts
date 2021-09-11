import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  declarations: [BasicTableComponent,DefaultTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
})
export class TablesModule {}
