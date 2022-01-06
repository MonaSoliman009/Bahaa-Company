import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SearchForProductComponent } from './search-for-product/search-for-product.component';

const routes: Routes = [

  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'search',
    component: SearchForProductComponent,
  },
  {
    path: 'all-product',
    
    component:ListProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
