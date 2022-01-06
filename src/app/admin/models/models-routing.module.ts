import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewModelComponent } from './add-new-model/add-new-model.component';
import { ModelsDetailsComponent } from './models-details/models-details.component';

const routes: Routes = [
  {
    path: 'details',
    component: ModelsDetailsComponent,
  },

  {
    path: 'add-new-model',
    component: AddNewModelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelsRoutingModule {}
