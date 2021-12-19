import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsDetailsComponent } from './models-details/models-details.component';
import { EditPricingModelComponent } from './edit-pricing-model/edit-pricing-model.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModelsDetailsComponent, EditPricingModelComponent],
  imports: [CommonModule, ModelsRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [NgbActiveModal],
})
export class ModelsModule {}
