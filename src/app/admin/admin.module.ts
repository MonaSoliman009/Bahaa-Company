import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './../data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgSelect2Module } from 'ng-select2';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { ComponentsComponent } from './components/components.component';

import { NgForm } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
// import { FilterSerialnumberPipe } from "./pipes/FilterSerialnumberPipe";
// import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    SidemenuComponent,
    HeaderComponent,
    PageHeaderComponent,
    FilterPipe



  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    NgSelect2Module,
    // InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot(),

  ],
  exports: [NgForm],
})
export class AdminModule {}
