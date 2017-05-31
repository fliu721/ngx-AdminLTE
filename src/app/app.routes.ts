import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './common/login/login.component';
import { LockComponent } from './common/lock/lock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {
      title : '系统登录'
    }
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      title : '系统登录'
    }
  }, {
    path: 'lock',
    component: LockComponent,
    data: {
      title : '锁定会话'
    }
  }, {
    path: 'index',
    loadChildren: './common/index/index.module#IndexModule',
    data: {
      title : '首页'
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
