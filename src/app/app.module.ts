
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
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { LockComponent } from './common/lock/lock.component';

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
    })    //https://github.com/scttcper/ngx-toastr/
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
