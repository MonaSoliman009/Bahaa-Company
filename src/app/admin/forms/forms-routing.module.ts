import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { FormMaskComponent } from './form-mask/form-mask.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { VerticalFormComponent } from './vertical-form/vertical-form.component';


const routes: Routes = [
	{
		path : 'basic-input',
		component : BasicInputComponent
	},
  {
		path : 'input-groups',
		component : InputGroupsComponent
	},
  {
		path : 'form-mask',
		component : FormMaskComponent
	},
  {
		path : 'form-validation',
		component : FormValidationComponent
	},
  {
		path : 'horizontal-form',
		component : HorizontalFormComponent
	},
  {
		path : 'vertical-form',
		component : VerticalFormComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
