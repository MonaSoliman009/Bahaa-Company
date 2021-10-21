import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchForProductComponent } from './search-for-product/search-for-product.component';

const routes: Routes = [

  {
    path: 'addProduct',
    component: AddProductComponent,
  },
  {
    path: 'searchProduct',
    component: SearchForProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
