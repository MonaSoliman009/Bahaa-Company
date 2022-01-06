import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsDetailsComponent } from './models-details/models-details.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewModelComponent } from './add-new-model/add-new-model.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zoro.module';

@NgModule({
  declarations: [ModelsDetailsComponent, AddNewModelComponent,],
  imports: [CommonModule, ModelsRoutingModule, NgbModule, ReactiveFormsModule,DemoNgZorroAntdModule],
  providers: [NgbActiveModal],
})
export class ModelsModule {}
