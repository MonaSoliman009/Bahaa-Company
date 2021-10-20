import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import( './admin/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./admin/register/register.module').then((m) => m.RegisterModule),
  },
  // {
  //   path: 'categories',
  //   loadChildren: () =>
  //     import('./categories/categories.module').then((m) => m.CategoriesModule),
  // },
  // {
  //   path: 'providers',
  //   loadChildren: () =>
  //     import('./providers/providers.module').then((m) => m.ProvidersModule),
  // },
  // {
  //   path: 'customers',
  //   loadChildren: () =>
  //     import('./customers/customers.module').then((m) => m.CustomersModule),
  // },
  // {
  //   path: 'pages',
  //   loadChildren: () =>
  //     import('./pages/pages.module').then((m) => m.PagesModule),
  // }, 
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AuthGuard]

  }  ,

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
