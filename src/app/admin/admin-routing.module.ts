import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerAuthGuard } from 'src/guards/owner-auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'add-category',
        loadChildren: () =>
          import('./add-category/add-category.module').then(
            (m) => m.AddCategoryModule
          ),
      },
      {
        path: 'edit-category',
        loadChildren: () =>
          import('./edit-category/edit-category.module').then((m) => m.EditCategoryModule),
      },
      {
        path: 'sub-categories',
        loadChildren: () =>
          import('./sub-categories/sub-categories.module').then((m) => m.SubCategoriesModule),
      },
      {
        path: 'add-sub-category',
        loadChildren: () =>
          import('./add-sub-category/add-sub-category.module').then(
            (m) => m.AdminInvoiceModule
          ),
      },
      {
        path: 'edit-sub-category',
        loadChildren: () =>
          import('./edit-sub-category/edit-sub-category.module').then((m) => m.EditSubCategoryModule),
      },
      {
        path: 'approval',
        loadChildren: () =>
          import('./approval/approval.module').then((m) => m.ApprovalModule),
          canActivate:[OwnerAuthGuard]
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then(
            (m) => m.SpecialitiesModule
          ),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponetsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./maintenance-pages/maintenance-pages.module').then(
            (m) => m.MaintenancePagesModule
          ),
      },
      {
        path: 'Invoices',
        loadChildren: () =>
          import('./invoices/invoices.module').then(
            (m) => m.InvoicesModule
          ),
      },
      {
        path: 'Models',
        loadChildren: () =>
          import('./models/models.module').then(
            (m) => m.ModelsModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'all-notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})              
export class AdminRoutingModule {}
