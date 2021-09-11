import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from  'ngx-bootstrap/modal';
import { DataService } from './../data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgSelect2Module } from 'ng-select2';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { Error404Component } from './error-pages/error404/error404.component';
import { Error500Component } from './error-pages/error500/error500.component';
import { BlankComponent } from './blank/blank.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { ComponentsComponent } from './components/components.component';
import { BasicInputComponent } from './forms/basic-input/basic-input.component';
import { InputGroupsComponent } from './forms/input-groups/input-groups.component';
import { HorizontalFormComponent } from './forms/horizontal-form/horizontal-form.component';
import { VerticalFormComponent } from './forms/vertical-form/vertical-form.component';
import { FormMaskComponent } from './forms/form-mask/form-mask.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { DefaultTableComponent } from './tables/default-table/default-table.component';
import { NgForm } from '@angular/forms';
 

@NgModule({
  declarations: [AdminComponent, SidemenuComponent, HeaderComponent, PageHeaderComponent , ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    NgSelect2Module,
    InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot(),
  ],
  exports: [
    NgForm
]
})
export class AdminModule {}
