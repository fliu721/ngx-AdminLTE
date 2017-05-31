
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routing } from './app.routes';
import { SharedModule } from './common/shared/shared.module';
import { HttpInterceptorServiceFactoryProvider  } from './common/shared/http-interceptor.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { LockComponent } from './common/lock/lock.component';
import { LoginService } from './common/login/login.service';
import { LoadingService } from './common/spinner/loading.service';
import { SpinnerModule } from './common/spinner/spinner.module';
import { SpinnerService } from './common/spinner/spinner.service';
import { AlertModule, AlertConfig } from './common/alert';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    SpinnerModule,
    AlertModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),   //https://github.com/ngx-translate/core
    ToastrModule.forRoot({
      timeOut: 3000,
      autoDismiss: true,
      maxOpened: 2
    })    // https://github.com/scttcper/ngx-toastr
  ],
  providers: [
    AlertConfig,
    HttpInterceptorServiceFactoryProvider,
    SpinnerService,
    LoginService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
