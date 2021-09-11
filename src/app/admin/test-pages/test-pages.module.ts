import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPagesRoutingModule } from './test-pages-routing.module';
import { TestPhaseComponent } from './test-phase/test-phase.component';


@NgModule({
  declarations: [
    TestPhaseComponent
  ],
  imports: [
    CommonModule,
    TestPagesRoutingModule
  ]
})
export class TestPagesModule { }
