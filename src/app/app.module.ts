
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr';


import { routing } from './app.routes';
import { SharedModule } from './common/shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { ToastrCustomOption } from './common/plugins/toastr-coustom-options';
import { LockComponent } from './common/lock/lock.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LockComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    routing,
    ToastModule.forRoot()    //https://github.com/PointInside/ng2-toastr
  ],
  providers: [
    {provide: ToastOptions, useClass: ToastrCustomOption}  // toastr global Options
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
