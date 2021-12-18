import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsDetailsComponent } from './models-details/models-details.component';


@NgModule({
  declarations: [
    ModelsDetailsComponent
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule
  ]
})
export class ModelsModule { }
