
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { routing } from './app.routes';
import { SharedModule } from './common/shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
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
    ToastrModule.forRoot({timeOut: 3000, autoDismiss: true, maxOpened: 2})    //https://github.com/scttcper/ngx-toastr/
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
