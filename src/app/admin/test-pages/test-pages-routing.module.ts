import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPhaseComponent } from './test-phase/test-phase.component';

const routes: Routes = [
  {path: '', component:TestPhaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPagesRoutingModule { }
