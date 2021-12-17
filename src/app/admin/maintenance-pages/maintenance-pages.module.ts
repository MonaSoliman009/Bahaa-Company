import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

import { MaintenancePagesRoutingModule } from './maintenance-pages-routing.module';
import { MaintenanceInsideComponent } from './maintenance-inside/maintenance-inside.component';
import { MaintenanceOutsideComponent } from './maintenance-outside/maintenance-outside.component';
import { FormsModule } from '@angular/forms';
import { MaintenanceOutsideAfterComponent } from './maintenance-outside-after/maintenance-outside-after.component';


@NgModule({
  declarations: [
    MaintenanceInsideComponent,
    MaintenanceOutsideComponent,
    MaintenanceOutsideAfterComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaintenancePagesRoutingModule,
    MatChipsModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    
  ]
})
export class MaintenancePagesModule { }
