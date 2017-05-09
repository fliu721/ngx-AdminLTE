import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './common/login/login.component';
import { LockComponent } from './common/lock/lock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'lock',
    component: LockComponent
  }, {
    path: 'index',
    loadChildren: './common/index/index.module#IndexModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
