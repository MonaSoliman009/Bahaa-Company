import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsDetailsComponent } from './models-details/models-details.component';

const routes: Routes = [

  {
    path: '',
    component:ModelsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
