import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VectorMapComponent } from './vector-map.component';

const routes: Routes = [
	{
		path : '',
		component : VectorMapComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VectorMapRoutingModule { }
