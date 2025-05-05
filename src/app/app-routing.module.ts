import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/list-page/list-page.module').then((m) => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./components/create-account/create-account.module').then((m) => m.CreateAccountModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./components/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule)
  },
  {
    path: 'proposals-received',
    loadChildren: () => import('./components/profile-intrests/profile-intrests.module').then((m) => m.ProfileIntrestsModule)
  },
  {
    path: 'proposals-sent',
    loadChildren: () => import('./components/profile-intrests/profile-intrests.module').then((m) => m.ProfileIntrestsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
