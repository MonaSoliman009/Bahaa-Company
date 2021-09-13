import { RegisterService } from './services/register.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // InMemoryWebApiModule,
    HttpClientInMemoryWebApiModule,
  ],
})
export class RegisterModule {}
