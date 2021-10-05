import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPagesRoutingModule } from './test-pages-routing.module';
import { TestPhaseComponent } from './test-phase/test-phase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestPhaseComponent],
  imports: [
    CommonModule,
    TestPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TestPagesModule {}
