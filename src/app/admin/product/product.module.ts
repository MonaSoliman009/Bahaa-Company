import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchForProductComponent } from './search-for-product/search-for-product.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ListProductsComponent } from './list-products/list-products.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zoro.module';


@NgModule({
  declarations: [
    AddProductComponent,
    SearchForProductComponent,
    FilterPipe,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoNgZorroAntdModule
  ]
})
export class ProductModule { }
