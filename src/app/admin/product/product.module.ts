import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchForProductComponent } from './search-for-product/search-for-product.component';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    AddProductComponent,
    SearchForProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProductModule { }
