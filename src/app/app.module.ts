import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { ToastrModule } from 'ngx-toastr';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { FormsModule, NgForm } from '@angular/forms';
import { Daterangepicker } from 'ng2-daterangepicker';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DemoNgZorroAntdModule } from './ng-zoro.module';
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

registerLocaleData(en);
// import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    // HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    Daterangepicker,
    NgSelect2Module,
    Ng2SearchPipeModule,
    DemoNgZorroAntdModule
  ],
  exports: [NgForm, Ng2SearchPipeModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent],
})
export class AppModule {}
