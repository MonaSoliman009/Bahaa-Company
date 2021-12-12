import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPurchaseInvoiceComponent } from './add-purchase-invoice/add-purchase-invoice.component';
import { AddSaleInvoiceComponent } from './add-sale-invoice/add-sale-invoice.component';
import { ListPurchaseComponent } from './list-purchase/list-purchase.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { PendingSaleInvoiceComponent } from './pending-sale-invoice/pending-sale-invoice.component';
import { PricingModelComponent } from './pricing-model/pricing-model.component';

const routes: Routes = [
  {
    path: 'add/sale',
    component: AddSaleInvoiceComponent,
  },
  {
    path: 'list/sale',
    component: ListSaleComponent,
  },
  {
    path: 'list/purchase',
    component: ListPurchaseComponent,
  },
  {
    path: 'add/purchase',
    component: AddPurchaseInvoiceComponent,
  },
  {
    path: 'pricing_model',
    component: PricingModelComponent,
  },
  {
    path: 'pending-sale-invoice',
    component: PendingSaleInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
