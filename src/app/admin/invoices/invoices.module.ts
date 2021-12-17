import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { AddSaleInvoiceComponent } from './add-sale-invoice/add-sale-invoice.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { ListPurchaseComponent } from './list-purchase/list-purchase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-select2';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/data.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddPurchaseInvoiceComponent } from './add-purchase-invoice/add-purchase-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PricingModelComponent } from './pricing-model/pricing-model.component';
import { PendingSaleInvoiceComponent } from './pending-sale-invoice/pending-sale-invoice.component';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    AddSaleInvoiceComponent,
    ListSaleComponent,
    ListPurchaseComponent,
    AddPurchaseInvoiceComponent,
    PricingModelComponent,
    PendingSaleInvoiceComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    NgbModule,
    NgSelect2Module,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot(),
    
  ],
})
export class InvoicesModule {}
