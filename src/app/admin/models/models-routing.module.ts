import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPricingModelComponent } from './edit-pricing-model/edit-pricing-model.component';
import { ModelsDetailsComponent } from './models-details/models-details.component';

const routes: Routes = [
  {
    path: '',
    component: ModelsDetailsComponent,
  },
  {
    path: 'edit-pricing-model',
    component: EditPricingModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelsRoutingModule {}
