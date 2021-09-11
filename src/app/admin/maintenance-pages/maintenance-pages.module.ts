import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MaintenancePagesRoutingModule } from './maintenance-pages-routing.module';
import { MaintenanceInsideComponent } from './maintenance-inside/maintenance-inside.component';
import { MaintenanceOutsideComponent } from './maintenance-outside/maintenance-outside.component';


@NgModule({
  declarations: [
    MaintenanceInsideComponent,
    MaintenanceOutsideComponent
  ],
  imports: [
    CommonModule,
    MaintenancePagesRoutingModule,
    MatChipsModule,
    MatAutocompleteModule
  ]
})
export class MaintenancePagesModule { }
