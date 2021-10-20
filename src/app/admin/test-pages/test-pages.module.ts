import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPagesRoutingModule } from './test-pages-routing.module';
import { TestPhaseComponent } from './test-phase/test-phase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FilterSerialnumberPipe } from "../pipes/FilterSerialnumberPipe";
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [TestPhaseComponent, FilterPipe],
  imports: [
    CommonModule,
    TestPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class TestPagesModule {}
