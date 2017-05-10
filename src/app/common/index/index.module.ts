import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ModalModule } from 'ngx-bootstrap';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';

import { EqualValidator } from '../directives/equal-validator.directive';

import { indexRoutes } from './index.router';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RightAsideComponent } from '../right-aside/right-aside.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot({
      showCancelButton: true
    }), //https://github.com/toverux/ngsweetalert2
    RouterModule.forChild(indexRoutes)
  ],
  exports: [],
  declarations: [
    EqualValidator,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RightAsideComponent,
    HomeComponent
  ],
  providers: [],
})
export class IndexModule {
}
