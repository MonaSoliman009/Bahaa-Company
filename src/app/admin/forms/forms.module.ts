import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { FormsRoutingModule } from './forms-routing.module';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormMaskComponent } from './form-mask/form-mask.component';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';
import { VerticalFormComponent } from './vertical-form/vertical-form.component';

@NgModule({
  declarations: [BasicInputComponent,InputGroupsComponent,FormValidationComponent,FormMaskComponent,HorizontalFormComponent,VerticalFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
})
export class FormsModule {}
