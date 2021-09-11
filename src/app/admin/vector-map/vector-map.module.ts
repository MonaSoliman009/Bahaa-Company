import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorMapComponent } from './vector-map.component';
import { VectorMapRoutingModule } from './vector-map-routing.module';

@NgModule({
  declarations: [VectorMapComponent],
  imports: [
    CommonModule,
    VectorMapRoutingModule
  ]
})
export class VectorMapModule { }
